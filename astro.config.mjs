import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://la-beaute.in',
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
});
