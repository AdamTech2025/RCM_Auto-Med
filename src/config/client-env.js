// Client-side environment variables (using import.meta.env)
const isDevelopment = import.meta.env.DEV;

export const clientEnv = {
  apiUrl: isDevelopment 
    ? 'http://localhost:3000/api'  // Development API URL
    : 'https://www.adambilling.com/api',  // Production API URL
  domain: isDevelopment
    ? 'localhost:3000'
    : 'www.adambilling.com'
}; 