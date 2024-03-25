import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [starlight({
    title: 'Guia de Desarrollo Web',
    social: {
      github: 'https://github.com/ainus64/guia-de-desarrollo-web'
    },
    sidebar: [{
      label: 'git',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Comandos de Git',
        link: '/git/commands'
      }, {
        label: 'Conventional Commits',
        link: '/git/commits'
      }]
    }, {
      label: 'Astro',
      autogenerate: {
        directory: 'astro'
      }
    }]
  }), tailwind()]
});