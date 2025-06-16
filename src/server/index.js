import express from 'express';
import cors from 'cors';
import testimonialsRouter from './api/testimonials.js';
import { serverEnv } from '../config/env.js';

const app = express();
const { port, domain, apiUrl } = serverEnv;

// CORS configuration
const corsOptions = {
  origin: [
    `https://${domain}`,
    'http://localhost:5173', // Development
    'http://localhost:3000'  // Development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', testimonialsRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API available at ${apiUrl}`);
}); 