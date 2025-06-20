import cron from 'node-cron';
import { generateTestimonials, generateDailyTestimonial } from './generateTestimonials.js';
import { saveTestimonials } from '../../services/testimonials-server.js';
import { connectToDatabase, closeDatabaseConnection } from '../db/mongodb.js';

// Configuration
const config = {
  cronSchedule: '0 2 * * *', // Run daily at 2 AM
  maxTestimonials: 1, // Changed from 6 to 1 for daily generation
  logEnabled: true
};

// Logging function
const log = (message) => {
  if (config.logEnabled) {
    console.log(`[${new Date().toISOString()}] Testimonial Generator: ${message}`);
  }
};

// Generate and save daily testimonial (NEW - replaces generateAndSave)
const generateDailyAndSave = async () => {
  try {
    log('Starting daily testimonial generation process...');
    
    // Connect to database
    await connectToDatabase();
    log('Connected to MongoDB');
    
    // Generate single daily testimonial
    const testimonial = await generateDailyTestimonial();
    
    if (!testimonial) {
      log('Daily testimonial already exists for today or generation failed');
      return null;
    }
    
    const isAI = testimonial.name !== "Dr. John Smith, MD" && !testimonial.name.startsWith("Dr. Provider");
    const generationType = isAI ? "🤖 AI" : "🔄 Fallback";
    log(`Generated daily testimonial: ${generationType}: ${testimonial.name} (${testimonial.specialty})`);
    
    log('Daily testimonial saved to database successfully (historical data preserved)');
    
    return testimonial;
  } catch (error) {
    console.error('Error in generateDailyAndSave:', error);
    throw error;
  }
};

// Legacy generate and save function (for bulk generation when needed)
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

// Start the scheduler (UPDATED for daily generation)
const startScheduler = () => {
  log(`Starting daily testimonial scheduler with cron: ${config.cronSchedule}`);
  log('Scheduler configured for daily generation (1 testimonial per day, preserving historical data)');
  
  // Don't generate testimonials immediately on startup - only on cron schedule
  log('Scheduler started - daily testimonial will be generated at 2 AM');
  
  // Schedule periodic generation
  const task = cron.schedule(config.cronSchedule, async () => {
    log('Cron job triggered - generating daily testimonial...');
    try {
      await generateDailyAndSave();
      log('Scheduled daily testimonial generation completed');
    } catch (error) {
      console.error('Scheduled daily testimonial generation failed:', error);
    }
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
  
  log('Daily testimonial scheduler started successfully - waiting for cron trigger');
  
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

// Manual trigger function for testing (UPDATED for daily generation)
const manualTrigger = async () => {
  log('Manual trigger activated - generating daily testimonial...');
  try {
    await generateDailyAndSave();
    log('Manual daily testimonial generation completed');
    return true;
  } catch (error) {
    console.error('Manual daily testimonial generation failed:', error);
    return false;
  }
};

// Export functions
export { generateDailyAndSave, generateAndSave, startScheduler, manualTrigger, config };

// Start scheduler if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startScheduler();
} 