import { clientEnv } from '../config/client-env.js';

// Client-side configuration
const API_URL = clientEnv.apiUrl;
const isDevelopment = import.meta.env.DEV;

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

// Client-side functions (for browser only)
export const getAllBlogPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/blog-posts`, {
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
    console.error('Error fetching blog posts:', error);
    return null;
  }
};

export const saveBlogPosts = async (blogPosts) => {
  try {
    const response = await fetch(`${API_URL}/blog-posts`, {
      method: 'POST',
      headers: defaultHeaders,
      credentials: isDevelopment ? 'include' : 'same-origin',
      mode: 'cors',
      body: JSON.stringify(blogPosts)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error saving blog posts:', error);
    throw error;
  }
};

export const getBlogPostBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_URL}/blog-posts/${slug}`, {
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
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}; 