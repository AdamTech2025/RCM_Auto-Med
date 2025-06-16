import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.VITE_MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

const client = new MongoClient(uri);
let db = null;

export async function connectToDatabase() {
  try {
    if (db) {
      return db;
    }
    
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('rcm_auto_med');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function closeDatabaseConnection() {
  try {
    if (client) {
      await client.close();
      db = null;
      console.log('MongoDB connection closed');
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