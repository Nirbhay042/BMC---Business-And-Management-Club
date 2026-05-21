import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({

  base: '/BMC---Buisness-And-Management-Club/',

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },

  server: {
    open: true,
    port: 3000
  }

});
