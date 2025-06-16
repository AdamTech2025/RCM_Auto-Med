import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import testimonialGenerator from './src/utils/testimonial-generator/vite-plugin.js'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
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
          target: env.VITE_API_URL || 'https://www.adambilling.com',
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
        VITE_API_URL: JSON.stringify(env.VITE_API_URL || 'https://www.adambilling.com/api'),
        VITE_DOMAIN: JSON.stringify(env.VITE_DOMAIN || 'www.adambilling.com'),
      },
    },
  }
})
