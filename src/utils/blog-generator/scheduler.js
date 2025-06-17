import cron from 'node-cron';
import { generateBlogPosts } from './generateBlogPosts.js';
import { connectToDatabase, closeDatabaseConnection } from '../db/mongodb.js';

// Configuration
const config = {
  cronSchedule: '0 2 * * *', // Run daily at 2 AM
  maxBlogPosts: 6,
  logEnabled: true
};

// Logging function
const log = (message) => {
  if (config.logEnabled) {
    console.log(`[${new Date().toISOString()}] Blog Generator: ${message}`);
  }
};

// Generate and save blog posts
const generateAndSave = async () => {
  try {
    log('Starting blog post generation process...');
    
    // Connect to database
    await connectToDatabase();
    log('Connected to MongoDB');
    
    // Generate blog posts
    const blogPosts = await generateBlogPosts(config.maxBlogPosts);
    log(`Generated ${blogPosts.length} blog posts`);
    
    // Log blog post details for verification
    blogPosts.forEach((post, index) => {
      const isAI = post.author.name !== "Dr. Sarah Mitchell";
      const generationType = isAI ? "🤖 AI" : "🔄 Fallback";
      log(`  ${index + 1}. ${generationType}: ${post.title} (${post.category})`);
    });
    
    log('Blog posts saved to database successfully');
    
    return blogPosts;
  } catch (error) {
    console.error('Error in generateAndSave:', error);
    throw error;
  }
};

// Schedule blog post generation
// Runs daily at 2:00 AM (same as testimonials)
const scheduleBlogGeneration = () => {
  log(`Starting blog post scheduler with cron: ${config.cronSchedule}`);
  
  // Don't generate blog posts immediately on startup - only on cron schedule
  log('Scheduler started - blog posts will be generated daily at 2 AM');
  
  // Schedule periodic generation
  const task = cron.schedule(config.cronSchedule, async () => {
    log('Cron job triggered - generating blog posts...');
    try {
      await generateAndSave();
      log('Scheduled blog post generation completed');
    } catch (error) {
      console.error('Scheduled blog generation failed:', error);
    }
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
  
  log('Blog post scheduler started successfully - waiting for cron trigger');
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    log('Stopping blog post scheduler...');
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
    log('Stopping blog post scheduler...');
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

// Alternative: Schedule for different intervals
export const scheduleCustomBlogGeneration = (cronExpression, count = 6) => {
  console.log(`🕐 Custom Blog Scheduler: Setting up custom schedule: ${cronExpression}`);
  
  cron.schedule(cronExpression, async () => {
    console.log(`🚀 Custom Blog Generation: Starting scheduled generation (${count} posts)...`);
    try {
      await generateBlogPosts(count);
      console.log(`✅ Custom Blog Generation: ${count} blog posts generated successfully`);
    } catch (error) {
      console.error('❌ Custom Blog Generation Failed:', error);
    }
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
};

// Manual trigger function for testing
const manualTrigger = async () => {
  log('Manual trigger activated - generating blog posts...');
  try {
    await generateAndSave();
    log('Manual blog post generation completed');
    return true;
  } catch (error) {
    console.error('Manual blog generation failed:', error);
    return false;
  }
};

// Manual trigger for immediate generation (legacy function for compatibility)
export const triggerBlogGeneration = async (count = 6) => {
  log(`Manual Blog Trigger: Generating ${count} blog posts immediately...`);
  try {
    const result = await generateBlogPosts(count);
    log(`Manual Blog Generation: Successfully generated ${result.length} blog posts`);
    return result;
  } catch (error) {
    console.error('Manual Blog Generation Failed:', error);
    throw error;
  }
};

// Initialize scheduler
export const initBlogScheduler = () => {
  scheduleBlogGeneration();
};

// Export functions
export { generateAndSave, scheduleBlogGeneration as startScheduler, manualTrigger, config };

// Start scheduler if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  scheduleBlogGeneration();
}

export default scheduleBlogGeneration; 