import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const svg = await readFile(path.join(root, 'public', 'og-image.svg'));

await sharp(svg, { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile(path.join(root, 'public', 'og-image.png'));

console.log('Generated public/og-image.png (1200x630)');
