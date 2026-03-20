import express from "express";
import { createServer as createHttpServer } from "http";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

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


if (!isProduction && process.env.SSR_ALLOW_INSECURE_TLS !== "false") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

async function createServer() {
  const app = express();
  const httpServer = createHttpServer(app);
  const wellKnownDir = path.resolve(__dirname, "public/.well-known");

  let vite: any;


  app.use(compression());


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
   

    const clientDist = path.resolve(__dirname, "dist/client");

    app.use(
      express.static(clientDist, {
        index: false,
        maxAge: "1y", 

        setHeaders: (res, filePath) => {
         
          if (filePath.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
            res.setHeader("Expires", new Date(Date.now() + 31536000000).toUTCString());
          }

         
          if (filePath.match(/\.(js|css)$/)) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          }

       
          if (filePath.endsWith(".html")) {
            res.setHeader("Cache-Control", "no-cache");
          }
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
   
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");

        template = await vite.transformIndexHtml(url, template);

        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
      
        template = fs.readFileSync(path.resolve(__dirname, "dist/client/index.html"), "utf-8");

        render = (await import("./dist/server/entry-server.js")).render;
      }

      let appHtml = "";
      let preloadedState = {};
      let helmet: Record<string, any> = {};

      try {
        const result = await render(url);
        appHtml = result.appHtml;
        preloadedState = result.preloadedState;
        helmet = (result as any).helmet || {};
        console.log("SSR OK:", url);
      } catch (err) {
        console.error("SSR ERROR:", err);
        appHtml = '<div id="root"><div>Loading...</div></div>';
      }

      const helmetHead = [
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

      res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).end(html);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      console.error(e);
      res.status(500).end((e as Error).message);
    }
  });

  httpServer.listen(port, host, () => {
    console.log(` SSR server running at http://${host}:${port}`);
  });
}

createServer();
