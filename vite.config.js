import {fileURLToPath, URL} from 'node:url';
import federation from '@originjs/vite-plugin-federation';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
  },
  plugins: [
    vue(),
    federation({
      name: 'tradingClientArea',
      filename: 'remoteEntry.js',
      exposes: {'./ClientArea': './src/components/ClientArea.vue'},
    }),
  ],
  build: {
    minify: false,
    target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
