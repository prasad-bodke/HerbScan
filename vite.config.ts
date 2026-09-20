import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function pwaAssetPlugin(): Plugin {
  return {
    name: 'pwa-asset-plugin',
    enforce: 'post',
    transformIndexHtml(html: string) {
      // Ensure the manifest tag remains explicitly linked to ./manifest.webmanifest
      return html.replace(
        /href="[^"]*manifest[^"]*\.webmanifest"/g,
        'href="./manifest.webmanifest"'
      );
    },
    closeBundle() {
      const pwaFiles = [
        'pwa-192x192.png',
        'pwa-512x512.png',
        'pwa-maskable-512x512.png',
        'apple-touch-icon.png',
        'favicon.png',
        'icon.svg',
        'manifest.webmanifest',
        'manifest.json',
        'screenshot-mobile.png',
        'screenshot-desktop.png',
        'sw.js',
        '404.html'
      ];

      const distDir = path.resolve(process.cwd(), 'dist');
      const distAssetsDir = path.resolve(distDir, 'assets');

      if (!fs.existsSync(distAssetsDir)) {
        fs.mkdirSync(distAssetsDir, { recursive: true });
      }

      for (const file of pwaFiles) {
        const src = path.resolve(process.cwd(), 'public', file);
        if (fs.existsSync(src)) {
          // Guarantee presence in dist root
          fs.copyFileSync(src, path.resolve(distDir, file));
          // Guarantee presence in dist/assets to prevent any crawler 404
          fs.copyFileSync(src, path.resolve(distAssetsDir, file));
        }
      }
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), pwaAssetPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
