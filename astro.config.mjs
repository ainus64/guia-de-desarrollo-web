import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [starlight({
    title: 'Desarrollo Web Astro',
    social: {
      github: 'https://github.com/ainus64/guia-de-desarrollo-web'
    },
    sidebar: [{
      label: 'Git',
      items: [
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
    }, {
      label: 'JavaScript',
      autogenerate: {
        directory: 'javascript'
      }
    }, {
      label: 'CSS',
      autogenerate: {
        directory: 'CSS'
      }
    }],
    customCss: [
      './src/tailwind.css',
    ],
  }), tailwind({
    applyBaseStyles: false,
  })]
});