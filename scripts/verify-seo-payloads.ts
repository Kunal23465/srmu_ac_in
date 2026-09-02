import { render } from "../dist/server/entry-server.js";
import fs from "fs";

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
  if (headEndIndex === -1) return html;
  let headHtml = html.substring(0, headEndIndex);
  let bodyHtml = html.substring(headEndIndex);
  bodyHtml = bodyHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "");
  const titleMatches = headHtml.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || [];
  if (titleMatches.length === 0) {
    headHtml = headHtml.replace(/<meta\s+charset="UTF-8"\s*\/?>/i, `<meta charset="UTF-8" />\n    <title>Shri Ramswaroop Memorial University (SRMU) | Top University in Lucknow</title>`);
  } else if (titleMatches.length > 1) {
    const chosenTitle = titleMatches[titleMatches.length - 1];
    headHtml = headHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "");
    headHtml = headHtml.replace(/<meta\s+charset="UTF-8"\s*\/?>/i, `<meta charset="UTF-8" />\n    ${chosenTitle}`);
  }
  return headHtml + bodyHtml;
}

const template = fs.readFileSync("dist/client/index.html", "utf8");

const testRoutes = [
  "/",
  "/about-us",
  "/contact-us",
  "/fee-structure",
  "/placements",
  "/blogs",
  "/program/b-tech-computer-science-engineering",
];

async function verifyAll() {
  console.log("=== Comprehensive SEO & Performance Audit Check ===");
  let allPass = true;

  for (const route of testRoutes) {
    const result = await render(route);
    const helmetHead = [
      result.helmet?.priority?.toString(),
      result.helmet?.title?.toString(),
      result.helmet?.meta?.toString(),
      result.helmet?.link?.toString(),
      result.helmet?.style?.toString(),
      result.helmet?.script?.toString(),
      result.helmet?.noscript?.toString(),
    ].filter(Boolean).join("");

    let html = template
      .replace("<!--home-preload-links-->", result.headPreloadLinks || "")
      .replace("<!--helmet-head-->", helmetHead)
      .replace("<!--app-html-->", result.appHtml);

    html = sanitizeAndEnsureHeadTitle(optimizeRenderBlockingAssets(html));

    const headEnd = html.indexOf("</head>");
    const headHtml = html.substring(0, headEnd);
    const bodyHtml = html.substring(headEnd);

    const headTitles = headHtml.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || [];
    const bodyTitles = bodyHtml.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || [];
    const headHtmlWithoutNoscript = headHtml.replace(/<noscript>[\s\S]*?<\/noscript>/gi, "");
    const blockingCss = headHtmlWithoutNoscript.match(/<link\s+rel=["']stylesheet["'](?![^>]*media=)[^>]*>/gi) || [];
    const blockingJs = headHtmlWithoutNoscript.match(/<script(?![^>]*(?:async|defer|type=["']application\/ld\+json["']|type=["']module["']))[^>]*src=[^>]*>/gi) || [];

    const isPass = result.statusCode === 200 && headTitles.length === 1 && bodyTitles.length === 0 && blockingCss.length === 0 && blockingJs.length === 0;

    console.log(`Route [${route}]:`);
    console.log(`  - Status: ${result.statusCode}`);
    console.log(`  - Head Titles: ${headTitles.length} -> "${headTitles[0]?.replace(/<[^>]+>/g, "").trim()}"`);
    console.log(`  - Body Titles: ${bodyTitles.length}`);
    console.log(`  - Blocking CSS in head: ${blockingCss.length}`);
    console.log(`  - Blocking JS in head: ${blockingJs.length}`);
    console.log(`  - Result: ${isPass ? "PASS ✅" : "FAIL ❌"}`);

    if (!isPass) allPass = false;
  }

  console.log("====================================================");
  console.log(`Final Verification Status: ${allPass ? "ALL PASSED ✅" : "SOME FAILED ❌"}`);
  if (!allPass) process.exit(1);
}

verifyAll();
