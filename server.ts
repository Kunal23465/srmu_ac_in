import express from "express";
import { createServer as createHttpServer } from "http";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath, pathToFileURL } from "url";
import { brotliCompressSync, constants as zlibConstants, gzipSync } from "zlib";
import {
  buildRobotsTxt,
  buildSitemapIndexXml,
  buildAllSitemapXml,
  buildBlogSitemapXml,
} from "./src/utils/sitemap";
import { getPreferredProgramRouteSlug } from "./src/utils/legacyProgramRoutes";
import { hasValidTopLevelProgramRoute } from "./src/utils/programCategoryRoute";
import { slugify } from "./src/utils/slugify";

// Load environment files from the project root so runtime picks up VITE_* values
// without requiring the process manager to explicitly source a .env file.
// Priority: `.env.<NODE_ENV>` then `.env`.
try {
  const projectRoot = process.cwd();
  const nodeEnv = process.env.NODE_ENV || "development";
  const envCandidates = [path.resolve(projectRoot, `.env.${nodeEnv}`), path.resolve(projectRoot, ".env")];

  for (const envPath of envCandidates) {
    if (fs.existsSync(envPath)) {
      dotenv.config({ path: envPath });
      process.stdout.write(`Loaded environment from ${envPath}\n`);
      break;
    }
  }
} catch (err) {
  // Non-fatal: continue with existing process.env
}

const host = "0.0.0.0";
const port = Number(process.env.PORT || 3031);
const siteUrl = process.env.VITE_SITE_URL || "https://srmu.ac.in";
const canonicalSiteUrl = new URL(siteUrl);
const canonicalOrigin = canonicalSiteUrl.origin.replace(/\/+$/, "");
const canonicalProtocol = canonicalSiteUrl.protocol.replace(":", "");
const canonicalHost = canonicalSiteUrl.host.toLowerCase();
const STATIC_ASSET_CACHE_SECONDS = 365 * 24 * 60 * 60;
const STATIC_ASSET_PATTERN = /\.(?:avif|bmp|css|gif|ico|jpe?g|js|mjs|mp4|pdf|png|svg|webm|webp|woff2?|ttf|otf)$/i;
const PROGRAM_SLUG_CACHE_TTL_MS = 15 * 60 * 1000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const legacyDocumentRedirectsPath = path.resolve(__dirname, "src/data/redirects/legacy-document-redirects.json");

const isProduction = process.env.NODE_ENV === "production";
// Control canonical host redirect via env. Set to "true" in production where
// you want the server to enforce canonical origin redirects.
const ENABLE_CANONICAL_REDIRECT = process.env.ENABLE_CANONICAL_REDIRECT === "true";
const API_BASE_URL = process.env.VITE_API_BASE_URL || "https://webservices.srmu.ac.in:7005";

type ProgramSlugCacheEntry = {
  expiresAt: number;
  redirects: Map<string, string>;
};

let programSlugCache: ProgramSlugCacheEntry | null = null;
let programSlugCachePromise: Promise<ProgramSlugCacheEntry> | null = null;

function loadLegacyDocumentRedirectMap() {
  const redirects = new Map<string, string>();

  if (!fs.existsSync(legacyDocumentRedirectsPath)) {
    return redirects;
  }

  const redirectEntries = JSON.parse(fs.readFileSync(legacyDocumentRedirectsPath, "utf-8")) as Record<string, unknown>;

  for (const [sourcePath, targetUrl] of Object.entries(redirectEntries)) {
    const normalizedSourcePath = sourcePath.trim().toLowerCase();

    if (!normalizedSourcePath || typeof targetUrl !== "string" || !targetUrl.trim()) {
      continue;
    }

    redirects.set(normalizedSourcePath, targetUrl.trim());
  }

  return redirects;
}

const legacyDocumentRedirectMap = loadLegacyDocumentRedirectMap();

function getRequestSiteUrl(req: express.Request) {
  const forwardedProto = (req.headers["x-forwarded-proto"] as string | undefined)?.split(",")[0]?.trim();
  const forwardedHost = (req.headers["x-forwarded-host"] as string | undefined)?.split(",")[0]?.trim();
  const protocol = (forwardedProto || req.protocol || canonicalProtocol).toLowerCase();
  const requestHost = (forwardedHost || req.headers.host || canonicalHost).toLowerCase();

  if (isProduction) {
    return canonicalOrigin;
  }

  return `${protocol}://${requestHost}`;
}

function isDocumentRequest(req: express.Request) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return false;
  }

  const pathname = req.path || "/";
  const hasFileExtension = path.extname(pathname) !== "";

  if (hasFileExtension) {
    return false;
  }

  const acceptHeader = req.headers.accept ?? "";

  return acceptHeader.includes("text/html");
}

function setStaticAssetCacheHeaders(res: express.Response, filePath: string) {
  if (!STATIC_ASSET_PATTERN.test(filePath)) {
    return;
  }

  const expiresAt = new Date(Date.now() + STATIC_ASSET_CACHE_SECONDS * 1000);
  const cachePolicy = `public, max-age=${STATIC_ASSET_CACHE_SECONDS}, immutable`;
  res.setHeader("Cache-Control", cachePolicy);
  res.setHeader("CDN-Cache-Control", cachePolicy);
  res.setHeader("Expires", expiresAt.toUTCString());
  res.setHeader("Vary", "Accept-Encoding");
}

function replaceTemplateMarker(template: string, marker: string, value: string) {
  const markerPattern = new RegExp(`<!--\\s*${marker}\\s*-->`, "g");
  return template.replace(markerPattern, value);
}

function optimizeRenderBlockingAssets(html: string): string {
  return html.replace(
    /<link\s+rel="stylesheet"\s+([^>]*?)href="([^"]+\.css)"([^>]*?)>/gi,
    (match: string, before: string, href: string, after: string) => {
      const allAttrs = `${before} ${after}`;
      if (allAttrs.includes("media=") || allAttrs.includes("data-blocking")) {
        return match;
      }
      return `<link rel="preload" as="style" href="${href}" ${before} ${after} />\n    <link rel="stylesheet" href="${href}" ${before} ${after} media="print" onload="this.media='all'" />\n    <noscript><link rel="stylesheet" href="${href}" ${before} ${after} /></noscript>`;
    },
  );
}

function sanitizeAndEnsureHeadTitle(html: string): string {
  const headEndIndex = html.indexOf("</head>");
  if (headEndIndex === -1) {
    return html;
  }

  let headHtml = html.substring(0, headEndIndex);
  let bodyHtml = html.substring(headEndIndex);

  // Remove any misplaced <title> tags from body
  bodyHtml = bodyHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "");

  // Ensure head has exactly one title tag
  const titleMatches = headHtml.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || [];
  if (titleMatches.length === 0) {
    headHtml = headHtml.replace(
      /<meta\s+charset="UTF-8"\s*\/?>/i,
      '<meta charset="UTF-8" />\n    <title>Shri Ramswaroop Memorial University (SRMU) | Top University in Lucknow</title>',
    );
  } else if (titleMatches.length > 1) {
    const chosenTitle = titleMatches[titleMatches.length - 1];
    headHtml = headHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "");
    headHtml = headHtml.replace(
      /<meta\s+charset="UTF-8"\s*\/?>/i,
      `<meta charset="UTF-8" />\n    ${chosenTitle}`,
    );
  }

  return headHtml + bodyHtml;
}

function sendHtml(req: express.Request, res: express.Response, statusCode: number, html: string) {
  const acceptEncoding = String(req.headers["accept-encoding"] || "");
  const htmlBuffer = Buffer.from(html);
  const headers: Record<string, string | number> = {
    "Content-Type": "text/html; charset=utf-8",
    Vary: "Accept-Encoding",
  };

  if (acceptEncoding.includes("br")) {
    const compressed = brotliCompressSync(htmlBuffer, {
      params: {
        [zlibConstants.BROTLI_PARAM_QUALITY]: 5,
      },
    });

    res
      .status(statusCode)
      .set({
        ...headers,
        "Content-Encoding": "br",
        "Content-Length": compressed.length,
      })
      .end(compressed);
    return;
  }

  if (acceptEncoding.includes("gzip")) {
    const compressed = gzipSync(htmlBuffer, { level: 6 });
    res
      .status(statusCode)
      .set({
        ...headers,
        "Content-Encoding": "gzip",
        "Content-Length": compressed.length,
      })
      .end(compressed);
    return;
  }

  res
    .status(statusCode)
    .set({
      ...headers,
      "Content-Length": htmlBuffer.length,
    })
    .end(htmlBuffer);
}

async function fetchProgramRedirectMap() {
  const response = await fetch(`${API_BASE_URL}/academicProgram/programs`);

  if (!response.ok) {
    throw new Error(`Failed to fetch programs for redirect map: ${response.status}`);
  }

  const payload = await response.json();
  const redirects = new Map<string, string>();
  const programs = Array.isArray(payload) ? payload : [];

  for (const program of programs) {
    const rawSlug = String(program?.slug || "").trim() || slugify(String(program?.name || ""));
    const preferredSlug = getPreferredProgramRouteSlug({
      slug: rawSlug,
      name: String(program?.name || ""),
    });

    if (!preferredSlug) {
      continue;
    }

    redirects.set(rawSlug.toLowerCase(), preferredSlug);
    redirects.set(preferredSlug.toLowerCase(), preferredSlug);
  }

  return {
    expiresAt: Date.now() + PROGRAM_SLUG_CACHE_TTL_MS,
    redirects,
  };
}

async function getProgramRedirectMap() {
  if (programSlugCache && programSlugCache.expiresAt > Date.now()) {
    return programSlugCache.redirects;
  }

  if (!programSlugCachePromise) {
    programSlugCachePromise = fetchProgramRedirectMap().finally(() => {
      programSlugCachePromise = null;
    });
  }

  const cacheEntry = await programSlugCachePromise;
  programSlugCache = cacheEntry;
  return cacheEntry.redirects;
}

// In local dev, some corporate/self-signed TLS chains can block SSR API calls.
// Allow relaxed TLS only when it is explicitly opted in via env.
if (!isProduction && process.env.SSR_ALLOW_INSECURE_TLS === "true") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

async function createServer() {
  const app = express();
  const httpServer = createHttpServer(app);
  const wellKnownDir = path.resolve(__dirname, "public/.well-known");

  let vite: any;

  app.set("trust proxy", true);

  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      next();
      return;
    }

    const redirectTo = legacyDocumentRedirectMap.get(req.path.toLowerCase());

    if (!redirectTo) {
      next();
      return;
    }

    const targetUrl = isProduction
      ? redirectTo
      : redirectTo.replace(/^https?:\/\/(?:www\.)?srmu\.ac\.in/i, getRequestSiteUrl(req));

    res.redirect(301, targetUrl);
  });

  app.use((req, res, next) => {
    if (!isProduction || !ENABLE_CANONICAL_REDIRECT) {
      next();
      return;
    }

    if (req.method !== "GET" && req.method !== "HEAD") {
      next();
      return;
    }

    const forwardedProto = (req.headers["x-forwarded-proto"] as string | undefined)?.split(",")[0]?.trim();
    const forwardedHost = (req.headers["x-forwarded-host"] as string | undefined)?.split(",")[0]?.trim();
    const requestProtocol = (forwardedProto || req.protocol || canonicalProtocol).toLowerCase();
    const requestHost = (forwardedHost || req.headers.host || "").toLowerCase();

    if (requestProtocol === canonicalProtocol && requestHost === canonicalHost) {
      next();
      return;
    }

    res.redirect(301, `${canonicalOrigin}${req.originalUrl}`);
  });

  app.use(
    "/.well-known",
    express.static(wellKnownDir, {
      fallthrough: true,
      index: false,
    }),
  );
  app.use("/.well-known", (_req, res) => {
    res.status(404).type("text/plain").end("Not found");
  });

  app.get("/robots.txt", (req, res) => {
    const robotsTxt = buildRobotsTxt(getRequestSiteUrl(req));
    res.type("text/plain").set({
      "Cache-Control": "public, max-age=3600",
      "Vary": "Accept-Encoding",
    }).send(robotsTxt);
  });

  app.get("/sitemap.xml", async (req, res) => {
    try {
      const sitemapXml = await buildSitemapIndexXml(getRequestSiteUrl(req));
      res.type("application/xml").set({
        "Cache-Control": "public, max-age=3600",
        "Vary": "Accept-Encoding",
      }).send(sitemapXml);
    } catch (error) {
      process.stderr.write(`SITEMAP ERROR: ${String(error)}\n`);
      res.status(500).type("text/plain").send("Error generating sitemap");
    }
  });

  app.get("/all-sitemap.xml", async (req, res) => {
    try {
      const allSitemapXml = await buildAllSitemapXml(getRequestSiteUrl(req));
      res.type("application/xml").set({
        "Cache-Control": "public, max-age=3600",
        "Vary": "Accept-Encoding",
      }).send(allSitemapXml);
    } catch (error) {
      process.stderr.write(`ALL SITEMAP ERROR: ${String(error)}\n`);
      res.status(500).type("text/plain").send("Error generating all-sitemap");
    }
  });

  app.get("/blog-sitemap.xml", async (req, res) => {
    try {
      const blogSitemapXml = await buildBlogSitemapXml(getRequestSiteUrl(req));
      res.type("application/xml").set({
        "Cache-Control": "public, max-age=3600",
        "Vary": "Accept-Encoding",
      }).send(blogSitemapXml);
    } catch (error) {
      process.stderr.write(`BLOG SITEMAP ERROR: ${String(error)}\n`);
      res.status(500).type("text/plain").send("Error generating blog-sitemap");
    }
  });

  app.get("/placement-overview", (_req, res) => {
    res.redirect(301, `${canonicalOrigin}/placements`);
  });

  app.get("/grievance-redressal-system", (_req, res) => {
    res.redirect(301, `${canonicalOrigin}/campus-life/grievance-redressal-system`);
  });

  app.get("/program/mba-agribusiness-management", (req, res) => {
    res.redirect(301, `${getRequestSiteUrl(req)}/program/mba-abm`);
  });

  app.get("/mba-agribusiness-management", (req, res) => {
    res.redirect(301, `${getRequestSiteUrl(req)}/program/mba-abm`);
  });

  app.get("/program/b-tech-m-tech-computer-science-engineering", (req, res) => {
    res.redirect(301, `${getRequestSiteUrl(req)}/program/b-tech-m-tech-cse`);
  });

  app.get("/b-tech-m-tech-computer-science-engineering", (req, res) => {
    res.redirect(301, `${getRequestSiteUrl(req)}/program/b-tech-m-tech-cse`);
  });

  app.get("/newsletter", (_req, res) => {
    res.redirect(301, `${canonicalOrigin}/news-letter`);
  });

  app.get("/newsletters", (_req, res) => {
    res.redirect(301, `${canonicalOrigin}/news-letter`);
  });

  app.get("/:rootSlug", async (req, res, next) => {
    if (!isDocumentRequest(req)) {
      next();
      return;
    }

    const rootSlug = String(req.params.rootSlug || "")
      .trim()
      .toLowerCase();

    if (!rootSlug || rootSlug === "program" || hasValidTopLevelProgramRoute(rootSlug)) {
      next();
      return;
    }

    try {
      const redirectMap = await getProgramRedirectMap();
      const canonicalProgramSlug = redirectMap.get(rootSlug);

      if (!canonicalProgramSlug) {
        next();
        return;
      }

      const queryStr = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
      res.redirect(301, `${getRequestSiteUrl(req)}/program/${canonicalProgramSlug}${queryStr}`);
    } catch (error) {
      process.stderr.write(`PROGRAM REDIRECT MAP ERROR: ${String(error)}\n`);
      next();
    }
  });

  if (!isProduction) {
    // DEV MODE
    vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: {
          server: httpServer,
          clientPort: port,
        },
      },
      appType: "custom",
    });

    app.use(vite.middlewares);
  } else {
    // PRODUCTION MODE
    app.use(
      express.static(path.resolve(__dirname, "dist/client"), {
        index: false,
        immutable: true,
        maxAge: `${STATIC_ASSET_CACHE_SECONDS}s`,
        setHeaders: setStaticAssetCacheHeaders,
      }),
    );
  }

  app.use("*", async (req, res) => {
    if (!isDocumentRequest(req)) {
      res.status(404).type("text/plain").end("Not found");
      return;
    }

    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProduction) {
        // DEV
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");

        template = await vite.transformIndexHtml(url, template);

        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        // PRODUCTION
        template = fs.readFileSync(path.resolve(__dirname, "dist/client/index.html"), "utf-8");

        const serverEntryUrl = pathToFileURL(path.resolve(__dirname, "dist/server/entry-server.js")).href;
        render = (await import(serverEntryUrl)).render;
      }
      let appHtml = "";
      let preloadedState = {};
      let helmet: Record<string, any> = {};
      let headPreloadLinks = "";
      let statusCode = 200;
      try {
        const result = await render(url);
        appHtml = result.appHtml;
        preloadedState = result.preloadedState;
        helmet = (result as any).helmet || {};
        headPreloadLinks = (result as any).headPreloadLinks || "";
        statusCode = (result as any).statusCode || 200;
      } catch (err) {
        process.stderr.write(`SSR ERROR: ${String(err)}\n`);
        // Fallback to basic HTML if SSR fails (note: wrapped in root div by template)
        appHtml = '<div>SSR Error - Check server logs</div>';
        statusCode = 500;
      }
      const helmetHead = [
        helmet.priority?.toString(),
        helmet.title?.toString(),
        helmet.meta?.toString(),
        helmet.link?.toString(),
        helmet.style?.toString(),
        helmet.script?.toString(),
        helmet.noscript?.toString(),
      ]
        .filter(Boolean)
        .join("");

      const html = replaceTemplateMarker(
        replaceTemplateMarker(replaceTemplateMarker(replaceTemplateMarker(template, "home-preload-links", headPreloadLinks), "helmet-head", helmetHead), "app-html", appHtml),
        "preloaded-state",
        `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}</script>`,
      );

      const processedHtml = sanitizeAndEnsureHeadTitle(optimizeRenderBlockingAssets(html));
      sendHtml(req, res, statusCode, processedHtml);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      process.stderr.write(`${String(e)}\n`);
      res.status(500).end((e as Error).message);
    }
  });

  httpServer.listen(port, host, () => {
    process.stdout.write(`SSR server running at http://${host}:${port}\n`);
  });
}

createServer();
