// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://adithya-nat.github.io',
  base: '/portfolio',
  build: {
    assets: 'assets'
  }
});
