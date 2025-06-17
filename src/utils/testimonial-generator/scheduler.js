import cron from 'node-cron';
import { generateTestimonials } from './generateTestimonials.js';
import { saveTestimonials } from '../../services/testimonials-server.js';
import { connectToDatabase, closeDatabaseConnection } from '../db/mongodb.js';

// Configuration
const config = {
  cronSchedule: '0 2 * * *', // Run daily at 2 AM
  maxTestimonials: 6,
  logEnabled: true
};

// Logging function
const log = (message) => {
  if (config.logEnabled) {
    console.log(`[${new Date().toISOString()}] Testimonial Generator: ${message}`);
  }
};

// Generate and save testimonials
const generateAndSave = async () => {
  try {
    log('Starting testimonial generation process...');
    
    // Connect to database
    await connectToDatabase();
    log('Connected to MongoDB');
    
    // Generate testimonials
    const testimonials = await generateTestimonials(config.maxTestimonials);
    log(`Generated ${testimonials.length} testimonials`);
    
    // Log testimonial details for verification
    testimonials.forEach((testimonial, index) => {
      const isAI = testimonial.name !== "Dr. John Smith, MD" && !testimonial.name.startsWith("Dr. Provider");
      const generationType = isAI ? "🤖 AI" : "🔄 Fallback";
      log(`  ${index + 1}. ${generationType}: ${testimonial.name} (${testimonial.specialty})`);
    });
    
    // Save to database
    await saveTestimonials(testimonials);
    log('Testimonials saved to database successfully');
    
    return testimonials;
  } catch (error) {
    console.error('Error in generateAndSave:', error);
    throw error;
  }
};

// Start the scheduler
const startScheduler = () => {
  log(`Starting testimonial scheduler with cron: ${config.cronSchedule}`);
  
  // Don't generate testimonials immediately on startup - only on cron schedule
  log('Scheduler started - testimonials will be generated daily at 2 AM');
  
  // Schedule periodic generation
  const task = cron.schedule(config.cronSchedule, async () => {
    log('Cron job triggered - generating testimonials...');
    try {
      await generateAndSave();
      log('Scheduled testimonial generation completed');
    } catch (error) {
      console.error('Scheduled generation failed:', error);
    }
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
  
  log('Testimonial scheduler started successfully - waiting for cron trigger');
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    log('Stopping testimonial scheduler...');
    task.stop();
    closeDatabaseConnection()
      .then(() => {
        log('Database connection closed');
        process.exit(0);
      })
      .catch(error => {
        console.error('Error closing database:', error);
        process.exit(1);
      });
  });
  
  process.on('SIGTERM', () => {
    log('Stopping testimonial scheduler...');
    task.stop();
    closeDatabaseConnection()
      .then(() => {
        log('Database connection closed');
        process.exit(0);
      })
      .catch(error => {
        console.error('Error closing database:', error);
        process.exit(1);
      });
  });
  
  return task;
};

// Manual trigger function for testing
const manualTrigger = async () => {
  log('Manual trigger activated - generating testimonials...');
  try {
    await generateAndSave();
    log('Manual testimonial generation completed');
    return true;
  } catch (error) {
    console.error('Manual generation failed:', error);
    return false;
  }
};

// Export functions
export { generateAndSave, startScheduler, manualTrigger, config };

// Start scheduler if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startScheduler();
} 