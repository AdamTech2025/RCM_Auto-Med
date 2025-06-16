// Environment configuration that works in both browser and Node.js
const isBrowser = typeof window !== 'undefined';
const isDevelopment = isBrowser 
  ? (typeof import.meta !== 'undefined' && import.meta.env?.DEV) 
  : (process.env.NODE_ENV !== 'production');

export const clientEnv = {
  apiUrl: isDevelopment 
    ? 'http://localhost:3000/api'  // Development API URL
    : 'https://www.adambilling.com/api',  // Production API URL
  domain: isDevelopment
    ? 'localhost:3000'
    : 'www.adambilling.com',
  openaiApiKey: isBrowser 
    ? (typeof import.meta !== 'undefined' ? import.meta.env?.VITE_OPENAI_API_KEY : null)
    : process.env.VITE_OPENAI_API_KEY,
  mongodbUri: isBrowser 
    ? (typeof import.meta !== 'undefined' ? import.meta.env?.VITE_MONGODB_URI : null)
    : process.env.VITE_MONGODB_URI
}; 