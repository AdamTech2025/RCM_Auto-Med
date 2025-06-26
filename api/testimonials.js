import { connectToDatabase, closeDatabaseConnection } from '../src/utils/db/mongodb.js';

// Configure CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  try {
    // Connect to MongoDB
    await connectToDatabase();
    const { getDb } = await import('../src/utils/db/mongodb.js');
    const db = await getDb();
    
    if (req.method === 'GET') {
      // Get all testimonials
      const testimonials = await db.collection('testimonials').find({}).toArray();
      
      // Set CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        res.setHeader(key, value);
      });
      
      return res.status(200).json(testimonials || []);
    }
    
    if (req.method === 'POST') {
      // Save testimonials
      const testimonials = req.body;
      
      if (!Array.isArray(testimonials)) {
        return res.status(400).json({ error: 'Invalid testimonials data' });
      }
      
      // Clear existing testimonials and insert new ones
      await db.collection('testimonials').deleteMany({});
      const result = await db.collection('testimonials').insertMany(testimonials);
      
      // Set CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        res.setHeader(key, value);
      });
      
      return res.status(200).json({ 
        success: true, 
        insertedCount: result.insertedCount,
        message: 'Testimonials saved successfully' 
      });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
    
  } catch (error) {
    console.error('API Error:', error);
    
    // Set CORS headers even for errors
    Object.entries(corsHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  } finally {
    // Close connection
    try {
      await closeDatabaseConnection();
    } catch (closeError) {
      console.error('Error closing connection:', closeError);
    }
  }
} 