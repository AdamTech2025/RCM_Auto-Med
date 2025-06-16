import cron from 'node-cron';
import { generateTestimonials } from './generateTestimonials.js';

const CONFIG = {
  cronSchedule: '0 2 * * *', // Run at 2 AM every day
  maxTestimonials: 6
};

const generateAndSave = async () => {
  try {
    console.log(`[${new Date().toISOString()}] Starting testimonial generation...`);
    await generateTestimonials(CONFIG.maxTestimonials);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error in generateAndSave:`, error);
  }
};

export default function testimonialGenerator() {
  let cronJob = null;

  return {
    name: 'testimonial-generator',
    configureServer(server) {
      // Initial generation when dev server starts
      generateAndSave();

      // Schedule periodic generation
      console.log(`[${new Date().toISOString()}] Scheduling testimonial generation with cron: ${CONFIG.cronSchedule}`);
      cronJob = cron.schedule(CONFIG.cronSchedule, () => {
        console.log(`[${new Date().toISOString()}] Running scheduled testimonial generation...`);
        generateAndSave();
      });

      // Clean up on server close
      server.httpServer?.once('close', () => {
        if (cronJob) {
          cronJob.stop();
          console.log(`[${new Date().toISOString()}] Testimonial generator stopped.`);
        }
      });
    }
  };
} 