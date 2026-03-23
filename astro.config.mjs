import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  site: 'https://geticlaw.com',
});
