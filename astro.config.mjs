// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://truecolors.pro',
	security: {
		csp: {
			directives: ["default-src 'self'", "img-src 'self' data:", "font-src 'self'", "object-src 'none'"],
			// Hash of the <noscript><style> in Layout.astro; recompute if that block changes.
			styleDirective: { hashes: ['sha256-8xfz1T5uqAvL2Ln8HGRCw+j4LnughI0l4H1G9ZItYls='] },
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
