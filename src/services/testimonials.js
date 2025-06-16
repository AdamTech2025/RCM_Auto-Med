import { clientEnv } from '../config/client-env.js';
import { getDb } from '../utils/db/mongodb.js';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Client-side configuration
const API_URL = isBrowser ? clientEnv.apiUrl : null;
const isDevelopment = isBrowser ? import.meta.env.DEV : false;

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

// MongoDB collection name
const COLLECTION_NAME = 'testimonials';

// Client-side functions (for browser)
export const getAllTestimonials = async () => {
  if (isBrowser) {
    // Browser environment - use API
    try {
      const response = await fetch(`${API_URL}/testimonials`, {
        method: 'GET',
        headers: defaultHeaders,
        credentials: isDevelopment ? 'include' : 'same-origin',
        mode: 'cors'
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return null;
    }
  } else {
    // Server environment - use MongoDB directly
    try {
      const db = await getDb();
      const testimonials = await db.collection(COLLECTION_NAME).find({}).toArray();
      return testimonials;
    } catch (error) {
      console.error('Error fetching testimonials from MongoDB:', error);
      throw error;
    }
  }
};

export const saveTestimonials = async (testimonials) => {
  if (isBrowser) {
    // Browser environment - use API
    try {
      const response = await fetch(`${API_URL}/testimonials`, {
        method: 'POST',
        headers: defaultHeaders,
        credentials: isDevelopment ? 'include' : 'same-origin',
        mode: 'cors',
        body: JSON.stringify(testimonials)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving testimonials:', error);
      throw error;
    }
  } else {
    // Server environment - use MongoDB directly
    try {
      const db = await getDb();
      
      // Clear existing testimonials
      await db.collection(COLLECTION_NAME).deleteMany({});
      
      // Insert new testimonials
      if (testimonials && testimonials.length > 0) {
        const result = await db.collection(COLLECTION_NAME).insertMany(testimonials);
        console.log(`Saved ${result.insertedCount} testimonials to MongoDB`);
        return result;
      }
      
      return { insertedCount: 0 };
    } catch (error) {
      console.error('Error saving testimonials to MongoDB:', error);
      throw error;
    }
  }
};

// Additional server-side functions
export const addTestimonial = async (testimonial) => {
  if (!isBrowser) {
    try {
      const db = await getDb();
      const result = await db.collection(COLLECTION_NAME).insertOne(testimonial);
      return result;
    } catch (error) {
      console.error('Error adding testimonial:', error);
      throw error;
    }
  }
};

export const updateTestimonial = async (id, testimonial) => {
  if (!isBrowser) {
    try {
      const db = await getDb();
      const result = await db.collection(COLLECTION_NAME).updateOne(
        { id: id },
        { $set: testimonial }
      );
      return result;
    } catch (error) {
      console.error('Error updating testimonial:', error);
      throw error;
    }
  }
};

export const deleteTestimonial = async (id) => {
  if (!isBrowser) {
    try {
      const db = await getDb();
      const result = await db.collection(COLLECTION_NAME).deleteOne({ id: id });
      return result;
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      throw error;
    }
  }
};

 