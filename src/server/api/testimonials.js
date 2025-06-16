import express from 'express';
import { getDb } from '../../utils/db/mongodb.js';

const router = express.Router();

// Get all testimonials
router.get('/testimonials', async (req, res) => {
  try {
    const db = await getDb();
    const testimonials = await db.collection('testimonials').find({}).toArray();
    res.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
});

// Save testimonials
router.post('/testimonials', async (req, res) => {
  try {
    const db = await getDb();
    const { testimonials } = req.body;
    
    // Clear existing testimonials
    await db.collection('testimonials').deleteMany({});
    
    // Insert new testimonials
    if (testimonials && testimonials.length > 0) {
      await db.collection('testimonials').insertMany(testimonials);
    }
    
    res.json({ message: 'Testimonials saved successfully' });
  } catch (error) {
    console.error('Error saving testimonials:', error);
    res.status(500).json({ error: 'Failed to save testimonials' });
  }
});

export default router; 