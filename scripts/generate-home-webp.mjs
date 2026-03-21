import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const HOME_ASSETS = [
  "src/assets/images/home/banner-bg.jpg",
  "src/assets/images/home/girls-image.png",
  "src/assets/images/home/apply-srmu1.jpg",
  "src/assets/images/home/placement/leftslider1.png",
  "src/assets/images/home/placement/leftslider2.png",
  "src/assets/images/home/placement/leftslider3.png",
  "src/assets/images/home/placement/leftslider4.png",
  "src/assets/images/home/placement/leftslider5.png",
  "src/assets/images/home/placement/rightslider1.png",
  "src/assets/images/home/placement/rightslider2.png",
  "src/assets/images/home/placement/rightslider3.png",
  "src/assets/images/home/events/photo-2-19112503363848.jpeg",
  "src/assets/images/home/events/photo-3-1--19112503413782.jpeg",
  "src/assets/images/home/events/sr7d9018-1-1--06112511295974.jpg",
];

const formatBytes = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

const outputPathFor = (inputPath) => {
  const parsed = path.parse(inputPath);
  return path.join(parsed.dir, `${parsed.name}.webp`);
};

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

const main = async () => {
  for (const inputPath of HOME_ASSETS) {
    const absoluteInput = path.resolve(inputPath);
    const absoluteOutput = outputPathFor(absoluteInput);
    const before = await fs.stat(absoluteInput);
    const buffer = await transform(absoluteInput).toBuffer();

    await fs.writeFile(absoluteOutput, buffer);

    console.log(
      `${path.relative(process.cwd(), absoluteInput)} -> ${path.relative(process.cwd(), absoluteOutput)}: ${formatBytes(before.size)} -> ${formatBytes(buffer.length)}`
    );
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
