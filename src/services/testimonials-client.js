import { clientEnv } from '../config/client-env.js';

// Client-side configuration
const API_URL = clientEnv.apiUrl;
const isDevelopment = import.meta.env.DEV;

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

// Client-side functions (for browser only)
export const getAllTestimonials = async () => {
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
};

export const saveTestimonials = async (testimonials) => {
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
}; 