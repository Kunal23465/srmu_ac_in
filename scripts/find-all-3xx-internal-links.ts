import fs from "fs";
import path from "path";

const redirectsPath = path.resolve("src/data/redirects/legacy-document-redirects.json");
const redirectsRaw = fs.existsSync(redirectsPath) ? JSON.parse(fs.readFileSync(redirectsPath, "utf8")) : {};

// Build full redirect map
const serverRedirectMap = new Map<string, string>();

// 1. JSON document redirects
for (const [src, dest] of Object.entries(redirectsRaw)) {
  if (src && typeof dest === "string") {
    let cleanDest = dest.replace(/^https?:\/\/(?:www\.)?srmu\.ac\.in/i, "");
    serverRedirectMap.set(src.toLowerCase().trim(), cleanDest);
  }
}

// 2. Explicit server.ts redirects
serverRedirectMap.set("/placement-overview", "/placements");
serverRedirectMap.set("/grievance-redressal-system", "/campus-life/grievance-redressal-system");
serverRedirectMap.set("/newsletter", "/news-letter");
serverRedirectMap.set("/newsletters", "/news-letter");
serverRedirectMap.set("/program/mba-agribusiness-management", "/program/mba-abm");
serverRedirectMap.set("/mba-agribusiness-management", "/program/mba-abm");
serverRedirectMap.set("/program/b-tech-m-tech-computer-science-engineering", "/program/b-tech-m-tech-cse");
serverRedirectMap.set("/b-tech-m-tech-computer-science-engineering", "/program/b-tech-m-tech-cse");

// Add known program aliases
const programAliases: Record<string, string> = {
  "b-sc-hons-biotechnology": "b-sc-hons-biotechnology1",
  "b-sc-hons-food-technology": "b-sc-hons-food-technology1",
  "b-sc-in-medical-laboratory-sciences": "bachelor-in-medical-laboratory-science",
  "b-sc-in-medical-radiology-and-imaging-technology": "bachelor-in-medical-radiologic-and-imaging-technology",
  "b-sc-in-operation-theatre-anaesthesia-technology": "bachelor-in-operation-theatre-technology",
  "bachelor-in-physiotherapy": "bachelor-of-physiotherapy",
};

for (const [alias, canonical] of Object.entries(programAliases)) {
  serverRedirectMap.set(`/program/${alias}`, `/program/${canonical}`);
  serverRedirectMap.set(`/${alias}`, `/program/${canonical}`);
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

function resolveDestination(rawUrl: string): string | null {
  let url = rawUrl.trim();
  if (url.startsWith("http://srmu.ac.in") || url.startsWith("https://srmu.ac.in") || url.startsWith("https://www.srmu.ac.in")) {
    url = url.replace(/^https?:\/\/(?:www\.)?srmu\.ac\.in/i, "");
  }

  // Normalize prefix
  if (url.startsWith("program/")) {
    url = "/" + url;
  }

  if (!url.startsWith("/")) {
    return null;
  }

  const cleanUrl = url.split("?")[0].replace(/\/+$/, "") || "/";
  const lowerUrl = cleanUrl.toLowerCase();

  // Check direct 3XX redirect
  if (serverRedirectMap.has(lowerUrl)) {
    let dest = serverRedirectMap.get(lowerUrl)!;
    // resolve destination recursively if needed
    while (serverRedirectMap.has(dest.toLowerCase())) {
      dest = serverRedirectMap.get(dest.toLowerCase())!;
    }
    return dest;
  }

  return null;
}

async function main() {
  console.log("=== Scanning Codebase for Internal Links pointing to 3XX Redirects ===");
  const files: string[] = [];
  for (const dir of TARGET_DIRS) {
    await getAllFiles(dir, files);
  }

  const occurrences: Array<{
    file: string;
    original: string;
    replacement: string;
  }> = [];

  for (const file of files) {
    if (file.includes("legacy-document-redirects.json") || file.includes("find-all-3xx") || file.includes("verify-")) {
      continue;
    }

    const content = fs.readFileSync(file, "utf8");
    let updatedContent = content;
    let fileModified = false;

    // Regex to match string literals containing URLs
    const stringMatches = content.match(/["'`](https?:\/\/(?:www\.)?srmu\.ac\.in\/[^"'`\s]+|\/[a-zA-Z0-9_\-\/]+|program\/[a-zA-Z0-9_\-]+)["'`]/g) || [];

    for (const matchStr of stringMatches) {
      const quote = matchStr[0];
      const rawVal = matchStr.slice(1, -1);
      const dest = resolveDestination(rawVal);

      if (dest && dest !== rawVal && dest !== `/${rawVal}`) {
        occurrences.push({
          file,
          original: rawVal,
          replacement: dest,
        });

        // Replace exact literal in content
        const searchPattern = new RegExp(`(["'\`])${rawVal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(["'\`])`, "g");
        updatedContent = updatedContent.replace(searchPattern, `$1${dest}$2`);
        fileModified = true;
      }
    }

    if (fileModified) {
      fs.writeFileSync(file, updatedContent, "utf8");
      console.log(`Updated 3XX links in: ${file}`);
    }
  }

  console.log(`\nTotal 3XX internal link occurrences resolved: ${occurrences.length}`);
  fs.writeFileSync("resolved_3xx_links.json", JSON.stringify(occurrences, null, 2));
}

main().catch(console.error);
