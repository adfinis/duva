import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'DUVA',
  },
  resolve: {
    alias: {
      '@': './src',
      '@shared': './src/components/shared',
    }
  }
});
