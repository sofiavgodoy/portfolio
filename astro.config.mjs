import { defineConfig } from 'astro/config';
import rehypeBase from './rehype-base.mjs';

// Hosted on GitHub Pages at https://sofiavgodoy.github.io/portfolio/
// With a custom domain (or a repo named sofiavgodoy.github.io), set `site` to
// that URL and `base` to '/'.
const site = 'https://sofiavgodoy.github.io';
const base = '/portfolio';

export default defineConfig({
  site,
  base,
  prefetch: true,
  markdown: {
    rehypePlugins: [[rehypeBase, { base }]],
  },
});
