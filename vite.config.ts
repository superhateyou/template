import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [react(), compression({algorithm: 'brotliCompress'}),
  stylelint({
    include: ['src/**/*.scss'],
  }),],
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
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
