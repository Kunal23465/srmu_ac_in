import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const host = "0.0.0.0";
const port = 3031;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

async function createServer() {
  const app = express();

  let vite: any;

  if (!isProduction) {
    // DEV MODE
    vite = await createViteServer({
      server: {
        middlewareMode: true,
        host,
        port,
      },
      appType: "custom",
    });

    app.use(vite.middlewares);
  } else {
    // PRODUCTION MODE
    app.use(
      express.static(path.resolve(__dirname, "dist/client"), {
        index: false,
      }),
    );
  }

  app.use("*", async (req, res) => {
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
      const appHtml = await render(url);
      console.log("SSR HTML LENGTH:", appHtml?.length);
      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      console.error(e);
      res.status(500).end((e as Error).message);
    }
  });

  app.listen(port, host, () => {
    console.log(`SSR server running at http://${host}:${port}`);
  });
}

createServer();
