import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      treeshake: false
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  base: process.env.NODE_ENV === 'production'
    ? '/vue-optimization/'
    : '/',
  plugins: [ vue(),
    pages({
      dirs: 'src/pages',
      exclude: [ '**/components/**' ],
    }) ],
})
