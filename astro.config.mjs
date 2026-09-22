import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://shravan27090.github.io',
  base: '/La-beauty',
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
});
