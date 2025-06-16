import { clientEnv } from '../config/client-env';

const API_URL = clientEnv.apiUrl;

export const getAllTestimonials = async () => {
  try {
    const response = await fetch(`${API_URL}/testimonials`);
    if (!response.ok) {
      throw new Error('Failed to fetch testimonials');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

export const saveTestimonials = async (testimonials) => {
  try {
    const response = await fetch(`${API_URL}/testimonials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ testimonials }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to save testimonials');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error saving testimonials:', error);
    throw error;
  }
};

export async function addTestimonial(testimonial) {
  try {
    const result = await db.collection(COLLECTION_NAME).insertOne(testimonial);
    return result;
  } catch (error) {
    console.error('Error adding testimonial:', error);
    throw error;
  }
}

export async function updateTestimonial(id, testimonial) {
  try {
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

export async function deleteTestimonial(id) {
  try {
    const result = await db.collection(COLLECTION_NAME).deleteOne({ id: id });
    return result;
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
} 