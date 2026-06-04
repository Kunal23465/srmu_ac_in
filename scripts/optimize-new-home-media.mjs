import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();

const formatBytes = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;
const exists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const ensureDir = async (filePath) => {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
};

const imageFiles = async (dir, extensions) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => path.join(dir, entry.name));
};

const writeImage = async ({ src, dest, resize, format = "webp", options = {} }) => {
  const absoluteSrc = path.resolve(ROOT, src);
  const absoluteDest = path.resolve(ROOT, dest);

  if (!(await exists(absoluteSrc))) {
    process.stdout.write(`skipped missing ${src}\n`);
    return;
  }

  await ensureDir(absoluteDest);

  let pipeline = sharp(absoluteSrc, { failOn: "none" }).rotate();

  if (resize) {
    pipeline = pipeline.resize({
      withoutEnlargement: true,
      ...resize,
    });
  }

  const buffer =
    format === "avif"
      ? await pipeline.avif({ quality: 48, effort: 7, ...options }).toBuffer()
      : await pipeline.webp({ quality: 78, effort: 6, ...options }).toBuffer();

  await fs.writeFile(absoluteDest, buffer);

  const before = await fs.stat(absoluteSrc);
  process.stdout.write(`${src} -> ${dest}: ${formatBytes(before.size)} -> ${formatBytes(buffer.length)}\n`);
};

const withSuffix = (filePath, suffix) => {
  const parsed = path.parse(filePath);
  return path.join(parsed.dir, `${parsed.name}${suffix}.webp`);
};

const main = async () => {
  await writeImage({
    src: "src/assets/new-home/video-banner.webp",
    dest: "src/assets/new-home/video-banner.avif",
    format: "avif",
    options: { quality: 45 },
  });

  await writeImage({
    src: "src/assets/new-home/l-t.png",
    dest: "src/assets/new-home/l-t.webp",
    resize: { width: 360 },
    options: { quality: 82, nearLossless: true },
  });

  await writeImage({
    src: "src/assets/new-home/mou/mou.png",
    dest: "src/assets/new-home/mou/mou.webp",
    resize: { width: 1600 },
    options: { quality: 82, nearLossless: true },
  });

  await writeImage({
    src: "src/assets/new-home/WEBSITE PICTURES WEBP/Industry Hoonous/ENGINEERING.webp",
    dest: "src/assets/new-home/lT-V-poster.webp",
    resize: { width: 960, height: 540, fit: "cover", position: "center" },
  });

  await writeImage({
    src: "src/assets/new-home/Deoria.webp",
    dest: "src/assets/new-home/Deoria-960.webp",
    resize: { width: 960 },
  });

  const approved = await imageFiles(path.resolve(ROOT, "src/assets/new-home/approved"), new Set([".png"]));
  for (const src of approved) {
    await writeImage({
      src: path.relative(ROOT, src),
      dest: path.relative(ROOT, withSuffix(src, "")),
      resize: { width: 160, height: 160, fit: "contain" },
      options: { quality: 82, nearLossless: true },
    });
  }

  const recruiters = await imageFiles(path.resolve(ROOT, "src/assets/new-home/recruiters"), new Set([".png", ".jpg", ".jpeg"]));
  for (const src of recruiters) {
    await writeImage({
      src: path.relative(ROOT, src),
      dest: path.relative(ROOT, withSuffix(src, "")),
      resize: { width: 320 },
      options: { quality: 80 },
    });
  }

  const events = await imageFiles(path.resolve(ROOT, "src/assets/new-home/events"), new Set([".webp", ".jpg", ".jpeg", ".png"]));
  for (const src of events) {
    const parsed = path.parse(src);
    await writeImage({
      src: path.relative(ROOT, src),
      dest: path.relative(ROOT, path.join(parsed.dir, "optimized", `${parsed.name}-480.webp`)),
      resize: { width: 480, height: 270, fit: "cover", position: "top" },
    });
    await writeImage({
      src: path.relative(ROOT, src),
      dest: path.relative(ROOT, path.join(parsed.dir, "optimized", `${parsed.name}-960.webp`)),
      resize: { width: 960, height: 540, fit: "cover", position: "top" },
    });
  }

  const alumni = await imageFiles(path.resolve(ROOT, "src/assets/new-home/alumni"), new Set([".webp", ".jpg", ".jpeg", ".png"]));
  for (const src of alumni) {
    const parsed = path.parse(src);
    await writeImage({
      src: path.relative(ROOT, src),
      dest: path.relative(ROOT, path.join(parsed.dir, "optimized", `${parsed.name}.webp`)),
      resize: { width: 640, height: 640, fit: "cover", position: "top" },
    });
  }

  const programs = await imageFiles(path.resolve(ROOT, "src/assets/new-home/programs"), new Set([".webp", ".jpg", ".jpeg", ".png"]));
  for (const src of programs) {
    const parsed = path.parse(src);
    await writeImage({
      src: path.relative(ROOT, src),
      dest: path.relative(ROOT, path.join(parsed.dir, "optimized", `${parsed.name}-480.webp`)),
      resize: { width: 480, height: 360, fit: "cover", position: "center" },
    });
    await writeImage({
      src: path.relative(ROOT, src),
      dest: path.relative(ROOT, path.join(parsed.dir, "optimized", `${parsed.name}-720.webp`)),
      resize: { width: 720, height: 540, fit: "cover", position: "center" },
    });
  }
};

main().catch((error) => {
  process.stderr.write(`${String(error)}\n`);
  process.exitCode = 1;
});
