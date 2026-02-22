// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://too-long-did-read.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind()],
});
