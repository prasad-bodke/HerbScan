import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');

async function generate() {
  const iconSvgPath = path.join(publicDir, 'icon.svg');
  const svgBuffer = fs.readFileSync(iconSvgPath);

  // 1. Regular 192x192 PNG
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Generated pwa-192x192.png');

  // 2. Regular 512x512 PNG
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Generated pwa-512x512.png');

  // 3. Apple Touch Icon 180x180 PNG
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // 4. Favicon 64x64 PNG
  await sharp(svgBuffer)
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Generated favicon.png');

  // 5. Maskable Icon 512x512 PNG (Icon inside 80% safe zone on solid background)
  // Maskable SVG with full-bleed background and 80% scale centered artwork
  const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <defs>
      <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f3422"/>
        <stop offset="100%" stop-color="#061c12"/>
      </linearGradient>
      <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="50%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
      <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
    </defs>
    <!-- Full bleed background for Android squircle cropping -->
    <rect width="512" height="512" fill="url(#bgGrad2)"/>
    <g transform="translate(51.2, 51.2) scale(0.8)">
      <circle cx="256" cy="256" r="180" fill="none" stroke="rgba(52, 211, 153, 0.2)" stroke-width="6" stroke-dasharray="12 12"/>
      <path d="M256 100 C350 120, 390 220, 380 320 C370 360, 330 400, 270 410 C220 418, 170 380, 150 330 C120 250, 160 130, 256 100 Z" fill="url(#leafGrad2)"/>
      <path d="M256 100 Q260 260 220 380" stroke="#064e3b" stroke-width="12" stroke-linecap="round" fill="none"/>
      <path d="M256 190 Q300 210 330 200" stroke="#064e3b" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M250 250 Q200 270 170 260" stroke="#064e3b" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M245 300 Q290 320 320 310" stroke="#064e3b" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M120 160 L120 120 L160 120" stroke="url(#goldGrad2)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M352 120 L392 120 L392 160" stroke="url(#goldGrad2)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M120 352 L120 392 L160 392" stroke="url(#goldGrad2)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M352 392 L392 392 L392 352" stroke="url(#goldGrad2)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <line x1="130" y1="256" x2="382" y2="256" stroke="#fbbf24" stroke-width="4" stroke-dasharray="8 8" opacity="0.8"/>
    </g>
  </svg>`;

  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Generated pwa-maskable-512x512.png');
}

generate().catch(console.error);
