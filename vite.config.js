import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import testimonialGenerator from './src/utils/testimonial-generator/vite-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    testimonialGenerator()
  ],
})
