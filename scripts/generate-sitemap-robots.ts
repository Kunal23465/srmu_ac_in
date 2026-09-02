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

async function main() {
  const robotsTxt = buildRobotsTxt(siteUrl);
  const [sitemapIndexXml, allSitemapXml, blogSitemapXml] = await Promise.all([
    buildSitemapIndexXml(siteUrl),
    buildAllSitemapXml(siteUrl),
    buildBlogSitemapXml(siteUrl),
  ]);

  await fs.mkdir(publicDir, { recursive: true });
  await fs.writeFile(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");
  await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemapIndexXml, "utf8");
  await fs.writeFile(path.join(publicDir, "all-sitemap.xml"), allSitemapXml, "utf8");
  await fs.writeFile(path.join(publicDir, "blog-sitemap.xml"), blogSitemapXml, "utf8");

  console.log("Generated static robots.txt, sitemap.xml, all-sitemap.xml, and blog-sitemap.xml in public/");
}

main().catch((error) => {
  console.error("Failed to generate static sitemap/robots files:", error);
  process.exit(1);
});
