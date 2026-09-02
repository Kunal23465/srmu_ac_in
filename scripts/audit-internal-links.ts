import fs from "fs";
import path from "path";
import { render } from "../dist/server/entry-server.js";

const redirectsPath = path.resolve("src/data/redirects/legacy-document-redirects.json");
const redirectsRaw = fs.existsSync(redirectsPath) ? JSON.parse(fs.readFileSync(redirectsPath, "utf8")) : {};
const legacyDocumentRedirectMap = new Map<string, string>();
for (const [source, target] of Object.entries(redirectsRaw)) {
  if (source && typeof target === "string") {
    legacyDocumentRedirectMap.set(source.toLowerCase().trim(), target.trim());
  }
}

const TARGET_DIRS = ["src"];

async function getAllFiles(dir: string, fileList: string[] = []): Promise<string[]> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await getAllFiles(fullPath, fileList);
    } else if (/\.(tsx|ts|jsx|js|json)$/.test(entry.name)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function extractLinksFromFile(filePath: string): string[] {
  const content = fs.readFileSync(filePath, "utf8");
  const links = new Set<string>();

  // 1. href="/..." or to="/..."
  const hrefMatches = content.matchAll(/(?:href|to|link|url)\s*[:=]\s*["'](\/[^"'\s#?]+|program\/[^"'\s#?]+)/gi);
  for (const match of hrefMatches) {
    let link = match[1];
    if (link.startsWith("program/")) {
      link = "/" + link;
    }
    if (link.startsWith("/") && !link.startsWith("//") && !link.startsWith("/assets") && !link.startsWith("/api")) {
      links.add(link);
    }
  }

  return Array.from(links);
}

async function main() {
  console.log("=== Extracting all internal links across codebase ===");
  const files: string[] = [];
  for (const dir of TARGET_DIRS) {
    await getAllFiles(dir, files);
  }

  const allFoundLinks = new Map<string, string[]>(); // link -> [files]
  for (const file of files) {
    const links = extractLinksFromFile(file);
    for (const link of links) {
      if (!allFoundLinks.has(link)) {
        allFoundLinks.set(link, []);
      }
      allFoundLinks.get(link)!.push(file);
    }
  }

  console.log(`Found ${allFoundLinks.size} unique internal links across ${files.length} files.`);

  console.log("\n=== Testing all internal links against SSR Engine ===");
  const failingLinks: Array<{ link: string; status: number; files: string[] }> = [];

  for (const [link, filesUsingLink] of allFoundLinks.entries()) {
    const normUrl = link.split("?")[0].replace(/\/+$/, "") || "/";
    if (legacyDocumentRedirectMap.has(normUrl.toLowerCase())) {
      // It has a redirect
      continue;
    }

    try {
      const res = await render(normUrl);
      if (res.statusCode !== 200) {
        failingLinks.push({ link, status: res.statusCode, files: filesUsingLink });
        console.log(`❌ 4XX/5XX Found: "${link}" -> Status ${res.statusCode} (used in ${filesUsingLink.length} files)`);
        filesUsingLink.slice(0, 3).forEach((f) => console.log(`   - ${f}`));
      }
    } catch (err) {
      failingLinks.push({ link, status: 500, files: filesUsingLink });
      console.log(`❌ Render Exception: "${link}" -> ${err}`);
    }
  }

  console.log("\n====================================================");
  console.log(`Total Failing Internal Links: ${failingLinks.length}`);
  fs.writeFileSync("failing_internal_links.json", JSON.stringify(failingLinks, null, 2));
}

main().catch(console.error);
