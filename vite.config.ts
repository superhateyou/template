import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import envCompatible from 'vite-plugin-env-compatible';
import visualizer from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [react(), reactRefresh(), envCompatible(), visualizer(), compression(),
  stylelint({
    include: ['src/**/*.scss'],
  }),],
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: false,
  },
  server: {
    port: 3002
  },
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        autoprefixer(),
      ],
    },
  },

});
