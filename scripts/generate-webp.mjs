import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DEFAULT_TARGETS = [
  "public/abhivyakt.png",
  "public/list-arrow.png",
  "public/litile-banner.png",
  "public/Shedule.png",
  "public/srmu-banner-img.jpg",
  "public/tab-arrow.png",
  "src/assets/images/mobile.png",
  "src/assets/images/offline-admission-mobile.png",
  "src/assets/images/offline-admission.png",
  "src/assets/images/online-application-banner.jpeg",
  "src/assets/images/user.png",
];

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

const formatBytes = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

const outputPathFor = (inputPath) => {
  const parsed = path.parse(inputPath);
  return path.join(parsed.dir, `${parsed.name}.webp`);
};

const walk = async (entryPath) => {
  const stats = await fs.stat(entryPath);

  if (stats.isFile()) {
    return IMAGE_EXTENSIONS.has(path.extname(entryPath).toLowerCase()) ? [entryPath] : [];
  }

  const entries = await fs.readdir(entryPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    files.push(...(await walk(path.join(entryPath, entry.name))));
  }

  return files;
};

const unique = (values) => [...new Set(values)];

const transform = (inputPath) => {
  const extension = path.extname(inputPath).toLowerCase();
  const pipeline = sharp(inputPath, { failOn: "none" }).rotate();

  if (extension === ".png") {
    return pipeline.webp({
      quality: 82,
      effort: 6,
      nearLossless: true,
    });
  }

  return pipeline.webp({
    quality: 76,
    effort: 6,
  });
};

const convert = async (inputPath) => {
  const absoluteInput = path.resolve(inputPath);
  const absoluteOutput = outputPathFor(absoluteInput);
  const [before, outputBuffer] = await Promise.all([fs.stat(absoluteInput), transform(absoluteInput).toBuffer()]);

  await fs.writeFile(absoluteOutput, outputBuffer);

  process.stdout.write(
    `${path.relative(process.cwd(), absoluteInput)} -> ${path.relative(process.cwd(), absoluteOutput)}: ${formatBytes(before.size)} -> ${formatBytes(outputBuffer.length)}\n`
  );
};

const main = async () => {
  const requestedTargets = process.argv.slice(2);
  const targets = requestedTargets.length > 0 ? requestedTargets : DEFAULT_TARGETS;
  const discoveredFiles = unique((await Promise.all(targets.map((target) => walk(path.resolve(target))))).flat());

  for (const filePath of discoveredFiles) {
    await convert(filePath);
  }
};

main().catch((error) => {
  process.stderr.write(`${String(error)}\n`);
  process.exitCode = 1;
});
