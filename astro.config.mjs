import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
//import deno from '@astrojs/deno';
// import cloudflare from "@astrojs/cloudflare";
import vercel from "@astrojs/vercel/serverless";
const LIVE_URL = "https://ainus64.github.io/";

/*
const SERVER_PORT = 4321;
const LOCALHOST_URL = "";
const LIVE_URL = "https://ainus64.github.io/";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");

let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}
*/

let BASE_URL = LIVE_URL;
cd 


// https://astro.build/config
export default defineConfig({
  //site: 'https://ainus64.github.io',
  //base: BASE_URL,
  output: 'server',
  adapter: vercel(),
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
  })]
});