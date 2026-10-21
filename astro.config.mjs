// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.truecolors.pro',
	security: {
		csp: {
			directives: ["default-src 'self'", "img-src 'self' data:", "font-src 'self'", "object-src 'none'"],
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
