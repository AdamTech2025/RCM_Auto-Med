import { getDb } from '../utils/db/mongodb.js';

// MongoDB collection name
const COLLECTION_NAME = 'blog_posts';

// Server-side functions (for Node.js environment only)
export const getAllBlogPosts = async () => {
  try {
    const db = await getDb();
    const blogPosts = await db.collection(COLLECTION_NAME).find({}).sort({ createdAt: -1 }).toArray();
    return blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts from MongoDB:', error);
    throw error;
  }
};

export const saveBlogPosts = async (blogPosts) => {
  try {
    const db = await getDb();
    
    // Clear existing blog posts
    await db.collection(COLLECTION_NAME).deleteMany({});
    
    // Insert new blog posts
    if (blogPosts && blogPosts.length > 0) {
      const result = await db.collection(COLLECTION_NAME).insertMany(blogPosts);
      console.log(`Saved ${result.insertedCount} blog posts to MongoDB`);
      return result;
    }
    
    return { insertedCount: 0 };
  } catch (error) {
    console.error('Error saving blog posts to MongoDB:', error);
    throw error;
  }
};

// New function for daily blog generation - appends instead of replacing
export const saveDailyBlogPosts = async (blogPosts) => {
  try {
    const db = await getDb();
    
    // Get today's date string for duplicate checking
    const today = new Date().toDateString();
    
    // Check if we already have blog posts for today
    const existingToday = await db.collection(COLLECTION_NAME).find({
      createdAt: {
        $gte: new Date(today),
        $lt: new Date(new Date(today).getTime() + 24 * 60 * 60 * 1000)
      }
    }).toArray();
    
    if (existingToday.length > 0) {
      console.log(`Blog posts already exist for today (${today}). Skipping generation.`);
      return { insertedCount: 0, message: 'Already generated today' };
    }
    
    // Insert new blog posts without deleting existing ones
    if (blogPosts && blogPosts.length > 0) {
      const result = await db.collection(COLLECTION_NAME).insertMany(blogPosts);
      console.log(`Added ${result.insertedCount} new blog posts to MongoDB (total collection now has more posts)`);
      return result;
    }
    
    return { insertedCount: 0 };
  } catch (error) {
    console.error('Error saving daily blog posts to MongoDB:', error);
    throw error;
  }
};

export const addBlogPost = async (blogPost) => {
  try {
    const db = await getDb();
    const result = await db.collection(COLLECTION_NAME).insertOne(blogPost);
    return result;
  } catch (error) {
    console.error('Error adding blog post:', error);
    throw error;
  }
};

export const updateBlogPost = async (id, blogPost) => {
  try {
    const db = await getDb();
    const result = await db.collection(COLLECTION_NAME).updateOne(
      { id: id },
      { $set: blogPost }
    );
    return result;
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

export const deleteBlogPost = async (id) => {
  try {
    const db = await getDb();
    const result = await db.collection(COLLECTION_NAME).deleteOne({ id: id });
    return result;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

export const getBlogPostBySlug = async (slug) => {
  try {
    const db = await getDb();
    const blogPost = await db.collection(COLLECTION_NAME).findOne({ slug: slug });
    return blogPost;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    throw error;
  }
}; 