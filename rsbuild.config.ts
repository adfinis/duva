import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  html: {
    title: 'DUVA',
    favicon: './public/favicon.svg',
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': './src',
      '@shared': './src/components/shared',
      '@icons': './src/assets/icons',
      '@public': './public',
    },
  },
});
