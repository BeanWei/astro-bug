import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import integration from './integration.mjs';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
	integrations: [integration()]
});
