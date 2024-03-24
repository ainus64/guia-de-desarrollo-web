import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const LIVE_URL ="https://ainus64.github.io/";

const BASE_URL = LIVE_URL;

// https://astro.build/config
export default defineConfig({
	site: 'https://ainus64.github.io',
	base: BASE_URL,
	integrations: [
		starlight({
			title: 'Guia de Desarrollo Web',
			social: {
				github: 'https://github.com/ainus64/guia-de-desarrollo-web',
			},
			sidebar: [
				{
					label: 'git',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Comandos de Git', link: '/git/commands' },
						{ label: 'Conventional Commits', link: '/git/commits' },
					],
				},
				{
					label: 'Astro',
					autogenerate: { directory: 'astro' },
				},
			],
		}),
	],
});
