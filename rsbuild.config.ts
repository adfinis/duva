import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'DUVA',
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;800&display=swap',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': './src',
      '@shared': './src/components/shared',
    },
  },
});
