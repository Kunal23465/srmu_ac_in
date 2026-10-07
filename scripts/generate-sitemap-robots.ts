import fs from "fs/promises";
import path from "path";
import {
  buildRobotsTxt,
  buildSitemapIndexXml,
  buildAllSitemapXml,
  buildBlogSitemapXml,
} from "../src/utils/sitemap";

const publicDir = path.resolve(process.cwd(), "public");
const siteUrl = process.env.VITE_SITE_URL || "https://srmu.ac.in";

/** Returns today's date as YYYY-MM-DD */
const todayDate = () => new Date().toISOString().slice(0, 10);

/**
 * Replaces every <lastmod>…</lastmod> in the given XML file with today's date.
 */
async function updateLastmod(filename: string) {
  const filePath = path.join(publicDir, filename);
  try {
    let xml = await fs.readFile(filePath, "utf8");
    xml = xml.replace(/<lastmod>[^<]+<\/lastmod>/g, `<lastmod>${todayDate()}</lastmod>`);
    await fs.writeFile(filePath, xml, "utf8");
    console.log(`Updated ${filename} lastmod → ${todayDate()}`);
  } catch {
    console.warn(`${filename} not found – skipping date update.`);
  }
}

async function main() {
  const robotsTxt = buildRobotsTxt(siteUrl);
  const [sitemapIndexXml, allSitemapXml, blogSitemapXml] = await Promise.all([
    buildSitemapIndexXml(siteUrl),
    buildAllSitemapXml(siteUrl),
    buildBlogSitemapXml(siteUrl),
  ]);

  await fs.mkdir(publicDir, { recursive: true });

  // robots.txt points to new-sitemap.xml
  await fs.writeFile(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");

  // new-sitemap.xml → the generated sitemap index (with today's date)
  await fs.writeFile(path.join(publicDir, "new-sitemap.xml"), sitemapIndexXml, "utf8");
  await updateLastmod("new-sitemap.xml");

  // Remove public/sitemap.xml and its compressed variations if present so static file serving does not bypass redirect
  for (const file of ["sitemap.xml", "sitemap.xml.gz", "sitemap.xml.br"]) {
    try {
      await fs.unlink(path.join(publicDir, file));
    } catch {
      // ignore if not present
    }
  }

  // all-sitemap.xml & blog-sitemap.xml (every <url> has <lastmod>)
  await fs.writeFile(path.join(publicDir, "all-sitemap.xml"), allSitemapXml, "utf8");
  await fs.writeFile(path.join(publicDir, "blog-sitemap.xml"), blogSitemapXml, "utf8");

  console.log(
    "Generated: robots.txt (→ new-sitemap.xml), new-sitemap.xml, all-sitemap.xml, blog-sitemap.xml (all URLs with lastmod)"
  );
}

main().catch((error) => {
  console.error("Failed to generate static sitemap/robots files:", error);
  process.exit(1);
});
