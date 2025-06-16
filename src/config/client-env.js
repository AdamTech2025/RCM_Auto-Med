// Client-side environment variables (using import.meta.env)
export const clientEnv = {
  apiUrl: import.meta.env.VITE_API_URL || 'https://www.adambilling.com/api',
  domain: import.meta.env.VITE_DOMAIN || 'www.adambilling.com'
}; 