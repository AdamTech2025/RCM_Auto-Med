import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Log environment variable status
console.log('🔧 Environment Variables Status:');
console.log('  VITE_OPENAI_API_KEY:', process.env.VITE_OPENAI_API_KEY ? 'Present' : 'Missing');
console.log('  VITE_MONGODB_URI:', process.env.VITE_MONGODB_URI ? 'Present' : 'Missing');
console.log('  VITE_API_URL:', process.env.VITE_API_URL || 'Using default');
console.log('  VITE_DOMAIN:', process.env.VITE_DOMAIN || 'Using default');
console.log('  VITE_SERVER_PORT:', process.env.VITE_SERVER_PORT || 'Using default');

export const serverEnv = {
  openaiApiKey: process.env.VITE_OPENAI_API_KEY,
  mongodbUri: process.env.VITE_MONGODB_URI,
  apiUrl: process.env.VITE_API_URL || 'https://www.adambilling.com/api',
  domain: process.env.VITE_DOMAIN || 'www.adambilling.com',
  port: process.env.VITE_SERVER_PORT || 3000,
  isDevelopment: process.env.NODE_ENV !== 'production'
}; 