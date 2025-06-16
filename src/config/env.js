// Client-side environment variables (for Vite)
export const clientEnv = {
  apiUrl: process.env.VITE_API_URL || 'https://www.adambilling.com/api',
  domain: process.env.VITE_DOMAIN || 'www.adambilling.com'
};

// Server-side environment variables
export const serverEnv = {
  mongodbUri: process.env.VITE_MONGODB_URI,
  apiUrl: process.env.VITE_API_URL || 'https://www.adambilling.com/api',
  domain: process.env.VITE_DOMAIN || 'www.adambilling.com',
  port: process.env.VITE_SERVER_PORT || 3000
};

// Validate required environment variables
const requiredEnvVars = {
  mongodbUri: 'VITE_MONGODB_URI'
};

// Check for missing environment variables
Object.entries(requiredEnvVars).forEach(([key, envVar]) => {
  if (!process.env[envVar]) {
    console.error(`Error: Missing required environment variable ${envVar}`);
    process.exit(1);
  }
}); 