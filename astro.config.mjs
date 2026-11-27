import { defineConfig } from 'astro/config';

// Replace with your real domain before deploying (used for canonical URLs).
export default defineConfig({
  site: 'https://opervia.host',
  output: 'static',
  compressHTML: true,
});
