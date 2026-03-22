import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT_DIR = path.resolve("src/assets/images");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const MIN_BYTES = 1_500_000;
const MAX_DIMENSION = 2400;
const JPEG_QUALITY = 76;
const PNG_QUALITY = 80;

const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
};

const buildPipeline = (inputPath, ext) => {
  const base = sharp(inputPath, { failOn: "none" })
    .rotate()
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });

  if (ext === ".png") {
    return base.png({
      compressionLevel: 9,
      effort: 10,
      palette: true,
      quality: PNG_QUALITY,
    });
  }

  return base.jpeg({
    quality: JPEG_QUALITY,
    mozjpeg: true,
    progressive: true,
  });
};

const compressFile = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const before = await fs.stat(filePath);

  if (before.size < MIN_BYTES) {
    return null;
  }

  const outputBuffer = await buildPipeline(filePath, ext).toBuffer();

  if (outputBuffer.length >= before.size * 0.95) {
    return null;
  }

  await fs.writeFile(filePath, outputBuffer);

  return {
    filePath,
    before: before.size,
    after: outputBuffer.length,
    saved: before.size - outputBuffer.length,
  };
};

const main = async () => {
  const files = await walk(ROOT_DIR);
  const results = [];

  for (const filePath of files) {
    const result = await compressFile(filePath);
    if (result) {
      results.push(result);
      process.stdout.write(`compressed ${path.relative(process.cwd(), filePath)}: ${formatBytes(result.before)} -> ${formatBytes(result.after)}\n`);
    }
  }

  const totalBefore = results.reduce((sum, result) => sum + result.before, 0);
  const totalAfter = results.reduce((sum, result) => sum + result.after, 0);
  const totalSaved = totalBefore - totalAfter;

  process.stdout.write("\n");
  process.stdout.write(`files changed: ${results.length}\n`);
  process.stdout.write(`total saved: ${formatBytes(totalSaved)}\n`);
};

main().catch((error) => {
  process.stderr.write(`${String(error)}\n`);
  process.exitCode = 1;
});
