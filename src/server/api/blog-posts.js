import express from 'express';
import { getAllBlogPosts, saveBlogPosts, getBlogPostBySlug } from '../../services/blog-server.js';

const router = express.Router();

// Get all blog posts
router.get('/blog-posts', async (req, res) => {
  try {
    console.log('📄 API: Fetching all blog posts...');
    const blogPosts = await getAllBlogPosts();
    console.log(`📄 API: Found ${blogPosts?.length || 0} blog posts`);
    res.json(blogPosts || []);
  } catch (error) {
    console.error('❌ API Error fetching blog posts:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// Get blog post by slug
router.get('/blog-posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    console.log(`📄 API: Fetching blog post with slug: ${slug}`);
    const blogPost = await getBlogPostBySlug(slug);
    
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    
    console.log(`📄 API: Found blog post: ${blogPost.title}`);
    res.json(blogPost);
  } catch (error) {
    console.error('❌ API Error fetching blog post by slug:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

// Save blog posts (bulk save)
router.post('/blog-posts', async (req, res) => {
  try {
    console.log('📄 API: Saving blog posts...');
    const blogPosts = req.body;
    
    if (!Array.isArray(blogPosts)) {
      return res.status(400).json({ error: 'Invalid blog posts data' });
    }
    
    const result = await saveBlogPosts(blogPosts);
    console.log(`📄 API: Saved ${result.insertedCount} blog posts successfully`);
    res.json({ success: true, result, message: 'Blog posts saved successfully' });
  } catch (error) {
    console.error('❌ API Error saving blog posts:', error);
    res.status(500).json({ error: 'Failed to save blog posts' });
  }
});

export default router; 