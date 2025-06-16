import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import testimonialGenerator from './src/utils/testimonial-generator/vite-plugin.js'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    testimonialGenerator()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://www.adambilling.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    'process.env': {
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL || 'https://www.adambilling.com/api'),
      VITE_DOMAIN: JSON.stringify(process.env.VITE_DOMAIN || 'www.adambilling.com'),
    },
  },
})
