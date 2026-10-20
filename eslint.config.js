// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
	{
		ignores: ['dist/', '.astro/', 'node_modules/', '.wrangler/'],
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	eslintPluginAstro.configs['flat/recommended'],
	{
		files: ['**/*.astro'],
		rules: {
			'astro/no-set-html-directive': 'error',
		},
	},
	{
		files: ['src/components/Seo.astro'],
		rules: {
			// El JSON-LD de datos estructurados (`jsonLd`, definido y serializado
			// en este mismo componente) es contenido propio y estático, no
			// entrada de usuario: no hay riesgo real de XSS en este `set:html`.
			'astro/no-set-html-directive': 'off',
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			// TypeScript already reports undefined references (and understands
			// ambient/global types like `ImageMetadata`); core no-undef doesn't.
			'no-undef': 'off',
		},
	},
);
