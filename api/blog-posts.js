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
      // Get all blog posts
      const blogPosts = await db.collection('blogPosts').find({}).toArray();
      
      // Set CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        res.setHeader(key, value);
      });
      
      return res.status(200).json(blogPosts || []);
    }
    
    if (req.method === 'POST') {
      // Save blog posts
      const blogPosts = req.body;
      
      if (!Array.isArray(blogPosts)) {
        return res.status(400).json({ error: 'Invalid blog posts data' });
      }
      
      // Clear existing blog posts and insert new ones
      await db.collection('blogPosts').deleteMany({});
      const result = await db.collection('blogPosts').insertMany(blogPosts);
      
      // Set CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        res.setHeader(key, value);
      });
      
      return res.status(200).json({ 
        success: true, 
        insertedCount: result.insertedCount,
        message: 'Blog posts saved successfully' 
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