import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const targetDirs = ['./dist/client', './public'];

function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.css', '.js', '.svg', '.json', '.xml', '.html'].includes(ext)) {
    return;
  }

  // Skip already compressed files
  if (filePath.endsWith('.gz') || filePath.endsWith('.br')) return;

  const content = fs.readFileSync(filePath);
  if (content.length < 256) return; // Skip tiny files < 256 bytes

  // 1. Gzip compression (Level 9 - Max compression)
  const gzipped = zlib.gzipSync(content, { level: 9 });
  fs.writeFileSync(`${filePath}.gz`, gzipped);

  // 2. Brotli compression (Quality 11 - Max compression)
  try {
    const brotli = zlib.brotliCompressSync(content, {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
      },
    });
    fs.writeFileSync(`${filePath}.br`, brotli);
  } catch (err) {
    // Fallback if brotli fails
  }

  const origSizeKB = (content.length / 1024).toFixed(1);
  const gzSizeKB = (gzipped.length / 1024).toFixed(1);
  console.log(`COMPRESSED: ${path.basename(filePath)} (${origSizeKB} KB -> ${gzSizeKB} KB gzip)`);
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile()) {
      compressFile(fullPath);
    }
  }
}

console.log("=== PRE-COMPRESSING CSS & JS ASSETS (GZIP & BROTLI) ===");
targetDirs.forEach(dir => walkDir(dir));
console.log("=== COMPRESSION FINISHED ===");
