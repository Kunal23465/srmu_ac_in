import express from "express";
import { createServer as createHttpServer } from "http";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const host = "0.0.0.0";
const port = 3031;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

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
      // let appHtml = "";
      // try {
      //   appHtml = await render(url);
      //   console.log("SSR OK");
      // } catch (err) {
      //   console.error("SSR ERROR:", err);
      // }
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
        console.log("SSR OK, HTML length:", appHtml?.length || 0);
      } catch (err) {
        console.error("SSR ERROR:", err);
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
      console.error(e);
      res.status(500).end((e as Error).message);
    }
  });

  httpServer.listen(port, host, () => {
    console.log(`SSR server running at http://${host}:${port}`);
  });
}

createServer();
