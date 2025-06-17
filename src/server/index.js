import express from 'express';
import cors from 'cors';
import { serverEnv } from '../config/server-env.js';
import { startScheduler } from '../utils/testimonial-generator/scheduler.js';
import { initBlogScheduler } from '../utils/blog-generator/scheduler.js';
import { getAllTestimonials, saveTestimonials } from '../services/testimonials-server.js';
import { getAllBlogPosts, saveBlogPosts, getBlogPostBySlug } from '../services/blog-server.js';

const app = express();
const { port, domain } = serverEnv;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    `https://${domain}`,
    `http://${domain}`
  ],
  credentials: true
}));

app.use(express.json());

// API Routes
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await getAllTestimonials();
    res.json(testimonials || []);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
});

app.post('/api/testimonials', async (req, res) => {
  try {
    const testimonials = req.body;
    const result = await saveTestimonials(testimonials);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error saving testimonials:', error);
    res.status(500).json({ error: 'Failed to save testimonials' });
  }
});

// Blog Posts API Routes
app.get('/api/blog-posts', async (req, res) => {
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

app.get('/api/blog-posts/:slug', async (req, res) => {
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

app.post('/api/blog-posts', async (req, res) => {
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'RCM Auto-Med API Server is running'
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📡 API available at http://localhost:${port}/api`);
  console.log(`🌐 CORS enabled for ${domain}`);
  
  // Start the testimonial scheduler
  console.log('🤖 Starting testimonial scheduler...');
  startScheduler();
  console.log('✅ Testimonial scheduler started successfully');
  
  // Start the blog scheduler
  console.log('📝 Starting blog scheduler...');
  initBlogScheduler();
  console.log('✅ Blog scheduler started successfully');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down server...');
  process.exit(0);
}); 