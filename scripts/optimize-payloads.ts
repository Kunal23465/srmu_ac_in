import fs from "fs";
import path from "path";
import sharp from "sharp";
import { execSync } from "child_process";

const TARGET_DIRS = ["public", "src/assets"];

async function getAllFiles(dir: string, fileList: string[] = []): Promise<string[]> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await getAllFiles(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function optimizeSvg(filePath: string) {
  try {
    const beforeSize = fs.statSync(filePath).size;
    execSync(`npx -y svgo "${filePath}" -o "${filePath}" --multipass`, { stdio: "ignore" });
    const afterSize = fs.statSync(filePath).size;
    if (afterSize < beforeSize) {
      console.log(`SVG optimized: ${filePath} (${(beforeSize / 1024).toFixed(1)}KB -> ${(afterSize / 1024).toFixed(1)}KB)`);
    }
  } catch (err) {
    console.error(`Failed to optimize SVG ${filePath}:`, err);
  }
}

async function optimizeRaster(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  const stat = fs.statSync(filePath);
  if (stat.size < 80 * 1024) {
    return; // Already small enough (<80KB)
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    if (!metadata.width || !metadata.height) return;

    let transformer = sharp(filePath);

    // Limit maximum dimensions based on usage
    const isBanner = filePath.toLowerCase().includes("banner") || filePath.toLowerCase().includes("shedule") || filePath.toLowerCase().includes("hero");
    const maxWidth = isBanner ? 1920 : 1000;
    const maxHeight = isBanner ? 1080 : 1000;

    if (metadata.width > maxWidth || metadata.height > maxHeight) {
      transformer = transformer.resize({
        width: metadata.width > maxWidth ? maxWidth : undefined,
        height: metadata.height > maxHeight ? maxHeight : undefined,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    let buffer: Buffer;
    if (ext === ".webp") {
      buffer = await transformer.webp({ quality: 80, effort: 4 }).toBuffer();
    } else if (ext === ".jpg" || ext === ".jpeg") {
      buffer = await transformer.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    } else if (ext === ".png") {
      // For PNG, optimize compression
      buffer = await transformer.png({ quality: 80, compressionLevel: 9, effort: 7 }).toBuffer();
    } else {
      return;
    }

    if (buffer.length < stat.size) {
      fs.writeFileSync(filePath, buffer);
      console.log(`Optimized ${ext}: ${filePath} (${(stat.size / 1024).toFixed(1)}KB -> ${(buffer.length / 1024).toFixed(1)}KB)`);
    }
  } catch (err) {
    console.error(`Failed to optimize image ${filePath}:`, err);
  }
}

async function main() {
  console.log("=== Starting Enormous Network Payloads Asset Optimization ===");
  const allFiles: string[] = [];
  for (const dir of TARGET_DIRS) {
    if (fs.existsSync(dir)) {
      await getAllFiles(dir, allFiles);
    }
  }

  console.log(`Total files found: ${allFiles.length}`);

  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    if (ext === ".svg") {
      optimizeSvg(file);
    } else if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
      await optimizeRaster(file);
    }
  }

  console.log("=== Asset Optimization Finished ===");
}

main().catch(console.error);
