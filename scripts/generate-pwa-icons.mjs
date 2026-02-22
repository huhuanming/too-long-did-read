import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const svgContent = readFileSync(resolve(root, 'public/favicon.svg'), 'utf-8');

// Create a padded SVG for the icon with a dark background
function createIconSvg(size) {
  const padding = Math.round(size * 0.15);
  const innerSize = size - padding * 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.15)}" fill="#09090b"/>
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a78bfa"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  <text x="${size/2}" y="${size * 0.72}" font-size="${innerSize * 0.85}" font-family="serif" fill="url(#g)" text-anchor="middle">;</text>
</svg>`;
}

const sizes = [192, 512];

for (const size of sizes) {
  const svg = Buffer.from(createIconSvg(size));
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(resolve(root, `public/pwa-${size}x${size}.png`));
  console.log(`Generated pwa-${size}x${size}.png`);
}

// Also generate apple-touch-icon
const appleSvg = Buffer.from(createIconSvg(180));
await sharp(appleSvg)
  .resize(180, 180)
  .png()
  .toFile(resolve(root, 'public/apple-touch-icon.png'));
console.log('Generated apple-touch-icon.png');

console.log('Done!');
