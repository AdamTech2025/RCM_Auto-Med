import { MongoClient } from 'mongodb';
import { serverEnv } from '../../config/server-env.js';

const uri = serverEnv.mongodbUri;
if (!uri) {
  console.error('VITE_MONGODB_URI is not defined in environment variables');
  console.error('Please check your .env file and make sure VITE_MONGODB_URI is set');
  process.exit(1);
}

console.log('MongoDB URI Status:', uri ? 'Present' : 'Missing');

const client = new MongoClient(uri);
let db = null;

export async function connectToDatabase() {
  try {
    if (db) {
      return db;
    }
    
    await client.connect();
    console.log('✅ Connected to MongoDB successfully');
    db = client.db('rcm_auto_med');
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}

export async function closeDatabaseConnection() {
  try {
    if (client) {
      await client.close();
      db = null;
      console.log('🔌 MongoDB connection closed');
    }
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    throw error;
  }
}

// Export a function to get the database instance
export async function getDb() {
  if (!db) {
    await connectToDatabase();
  }
  return db;
} 