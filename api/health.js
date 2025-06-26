// Configure CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  // Set CORS headers
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      message: 'RCM Auto-Med API is running',
      environment: process.env.NODE_ENV || 'development'
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 