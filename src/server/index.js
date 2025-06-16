import express from 'express';
import cors from 'cors';
import { serverEnv } from '../config/server-env.js';
import { startScheduler } from '../utils/testimonial-generator/scheduler.js';
import { getAllTestimonials, saveTestimonials } from '../services/testimonials.js';

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