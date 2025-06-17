import { getDb } from '../utils/db/mongodb.js';

// MongoDB collection name
const COLLECTION_NAME = 'testimonials';

// Server-side functions (for Node.js environment only)
export const getAllTestimonials = async () => {
  try {
    const db = await getDb();
    const testimonials = await db.collection(COLLECTION_NAME).find({}).toArray();
    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials from MongoDB:', error);
    throw error;
  }
};

export const saveTestimonials = async (testimonials) => {
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
};

export const addTestimonial = async (testimonial) => {
  try {
    const db = await getDb();
    const result = await db.collection(COLLECTION_NAME).insertOne(testimonial);
    return result;
  } catch (error) {
    console.error('Error adding testimonial:', error);
    throw error;
  }
};

export const updateTestimonial = async (id, testimonial) => {
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
};

export const deleteTestimonial = async (id) => {
  try {
    const db = await getDb();
    const result = await db.collection(COLLECTION_NAME).deleteOne({ id: id });
    return result;
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
}; 