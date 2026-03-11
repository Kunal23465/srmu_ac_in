import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const host = "10.8.20.38";
const port = 3031;

// ESM me __dirname create karna padta hai
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      host,
      port,
    },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use(async (req, res) => {
    const url = req.originalUrl;

    try {
      // index.html read
      const templatePath = path.resolve(__dirname, "index.html");
      let template = fs.readFileSync(templatePath, "utf-8");

      // vite transform
      template = await vite.transformIndexHtml(url, template);

      // load SSR entry
      const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

      // render React app
      const appHtml = render(url);

      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      console.error(e);
      res.status(500).end((e as Error).message);
    }
  });

  app.listen(port, host, () => {
    console.log(`SSR server running at http://${host}:${port}`);
  });
}

createServer();
