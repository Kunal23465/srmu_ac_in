import express from "express";
import { createServer as createHttpServer } from "http";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { buildRobotsTxt, buildSitemapXml } from "./src/utils/sitemap";

const host = "0.0.0.0";
const port = 3031;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

function getRequestSiteUrl(req: express.Request) {
  const forwardedProto = (req.headers["x-forwarded-proto"] as string | undefined)?.split(",")[0]?.trim();
  const protocol = forwardedProto || req.protocol || "http";
  const host = req.headers.host || `localhost:${port}`;
  return `${protocol}://${host}`;
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

// In local dev, some corporate/self-signed TLS chains can block SSR API calls.
// Allow opt-in relaxed TLS via env (default true in non-production).
if (!isProduction && process.env.SSR_ALLOW_INSECURE_TLS !== "false") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

async function createServer() {
  const app = express();
  const httpServer = createHttpServer(app);
  const wellKnownDir = path.resolve(__dirname, "public/.well-known");

  let vite: any;

  app.set("trust proxy", true);

  app.use((req, res, next) => {
    if (!isProduction) {
      next();
      return;
    }

    const host = req.headers.host ?? "";

    if (!host.toLowerCase().startsWith("www.")) {
      next();
      return;
    }

    const forwardedProto = (req.headers["x-forwarded-proto"] as string | undefined)?.split(",")[0]?.trim();
    const protocol = forwardedProto || req.protocol || "https";
    const canonicalHost = host.replace(/^www\./i, "");

    res.redirect(301, `${protocol}://${canonicalHost}${req.originalUrl}`);
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
    res
      .status(200)
      .type("text/plain; charset=utf-8")
      .send(buildRobotsTxt(getRequestSiteUrl(req)));
  });

  app.get("/sitemap.xml", async (req, res) => {
    try {
      const sitemapXml = await buildSitemapXml(getRequestSiteUrl(req));
      res.status(200).type("application/xml; charset=utf-8").send(sitemapXml);
    } catch (error) {
      process.stderr.write(`SITEMAP ERROR: ${String(error)}\n`);
      res.status(500).type("text/plain; charset=utf-8").send("Failed to generate sitemap");
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
        maxAge: "1y",
        setHeaders: (res, filePath) => {
          if (!/\.(?:png|jpe?g|gif|svg|webp|avif|ico|pdf|css|js|woff2?)$/i.test(filePath)) {
            return;
          }

          const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
          res.setHeader("Expires", expiresAt.toUTCString());
        },
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

        render = (await import("./dist/server/entry-server.js")).render;
      }
      let appHtml = "";
      let preloadedState = {};
      let helmet: Record<string, any> = {};
      let statusCode = 200;
      try {
        const result = await render(url);
        appHtml = result.appHtml;
        preloadedState = result.preloadedState;
        helmet = (result as any).helmet || {};
        statusCode = (result as any).statusCode || 200;
      } catch (err) {
        process.stderr.write(`SSR ERROR: ${String(err)}\n`);
        // Fallback to basic HTML if SSR fails
        appHtml = '<div id="root"><div>Loading...</div></div>';
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

      const html = template
        .replace(`<!--helmet-head-->`, helmetHead)
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<!--preloaded-state-->`, `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}</script>`);

      res.status(statusCode).set({ "Content-Type": "text/html; charset=utf-8" }).end(html);
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
