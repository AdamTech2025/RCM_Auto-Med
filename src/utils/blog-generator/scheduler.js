import cron from 'node-cron';
import { generateBlogPosts, generateDailyBlogPost } from './generateBlogPosts.js';
import { connectToDatabase, closeDatabaseConnection } from '../db/mongodb.js';

// Configuration
const config = {
  cronSchedule: '0 2 * * *', // Run daily at 2 AM
  maxBlogPosts: 1, // Changed from 6 to 1 for daily generation
  logEnabled: true
};

// Logging function
const log = (message) => {
  if (config.logEnabled) {
    console.log(`[${new Date().toISOString()}] Blog Generator: ${message}`);
  }
};

// Generate and save daily blog post (NEW - replaces generateAndSave)
const generateDailyAndSave = async () => {
  try {
    log('Starting daily blog post generation process...');
    
    // Connect to database
    await connectToDatabase();
    log('Connected to MongoDB');
    
    // Generate single daily blog post
    const blogPost = await generateDailyBlogPost();
    
    if (!blogPost) {
      log('Daily blog post already exists for today or generation failed');
      return null;
    }
    
    const isAI = blogPost.author.name !== "Dr. Sarah Mitchell";
    const generationType = isAI ? "🤖 AI" : "🔄 Fallback";
    log(`Generated daily blog post: ${generationType}: ${blogPost.title} (${blogPost.category})`);
    
    log('Daily blog post saved to database successfully (historical data preserved)');
    
    return blogPost;
  } catch (error) {
    console.error('Error in generateDailyAndSave:', error);
    throw error;
  }
};

// Legacy generate and save function (for bulk generation when needed)
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

// Schedule daily blog post generation (UPDATED)
// Runs daily at 2:00 AM and generates only 1 blog post per day
const scheduleBlogGeneration = () => {
  log(`Starting daily blog post scheduler with cron: ${config.cronSchedule}`);
  log('Scheduler configured for daily generation (1 blog post per day, preserving historical data)');
  
  // Don't generate blog posts immediately on startup - only on cron schedule
  log('Scheduler started - daily blog post will be generated at 2 AM');
  
  // Schedule periodic generation
  const task = cron.schedule(config.cronSchedule, async () => {
    log('Cron job triggered - generating daily blog post...');
    try {
      await generateDailyAndSave();
      log('Scheduled daily blog post generation completed');
    } catch (error) {
      console.error('Scheduled daily blog generation failed:', error);
    }
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
  
  log('Daily blog post scheduler started successfully - waiting for cron trigger');
  
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
export const scheduleCustomBlogGeneration = (cronExpression, count = 1) => {
  console.log(`🕐 Custom Blog Scheduler: Setting up custom schedule: ${cronExpression}`);
  console.log(`📝 Note: For daily generation, recommend count=1 to preserve historical data`);
  
  cron.schedule(cronExpression, async () => {
    console.log(`🚀 Custom Blog Generation: Starting scheduled generation (${count} posts)...`);
    try {
      if (count === 1) {
        // Use daily generation for single posts
        await generateDailyBlogPost();
        console.log(`✅ Custom Daily Blog Generation: 1 blog post generated successfully (historical data preserved)`);
      } else {
        // Use bulk generation for multiple posts (will replace existing data)
        await generateBlogPosts(count);
        console.log(`✅ Custom Bulk Blog Generation: ${count} blog posts generated successfully (replaces existing data)`);
      }
    } catch (error) {
      console.error('❌ Custom Blog Generation Failed:', error);
    }
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
};

// Manual trigger function for testing (UPDATED for daily generation)
const manualTrigger = async () => {
  log('Manual trigger activated - generating daily blog post...');
  try {
    await generateDailyAndSave();
    log('Manual daily blog post generation completed');
    return true;
  } catch (error) {
    console.error('Manual daily blog generation failed:', error);
    return false;
  }
};

// Manual trigger for immediate generation (legacy function for compatibility)
export const triggerBlogGeneration = async (count = 1) => {
  if (count === 1) {
    log(`Manual Daily Blog Trigger: Generating 1 blog post immediately (preserving historical data)...`);
    try {
      const result = await generateDailyBlogPost();
      if (result) {
        log(`Manual Daily Blog Generation: Successfully generated 1 blog post`);
        return [result];
      } else {
        log(`Manual Daily Blog Generation: Blog post already exists for today or generation failed`);
        return [];
      }
    } catch (error) {
      console.error('Manual Daily Blog Generation Failed:', error);
      throw error;
    }
  } else {
    log(`Manual Bulk Blog Trigger: Generating ${count} blog posts immediately (will replace existing data)...`);
    try {
      const result = await generateBlogPosts(count);
      log(`Manual Bulk Blog Generation: Successfully generated ${result.length} blog posts`);
      return result;
    } catch (error) {
      console.error('Manual Bulk Blog Generation Failed:', error);
      throw error;
    }
  }
};

// Initialize scheduler
export const initBlogScheduler = () => {
  scheduleBlogGeneration();
};

// Export functions
export { generateDailyAndSave, generateAndSave, scheduleBlogGeneration as startScheduler, manualTrigger, config };

// Start scheduler if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  scheduleBlogGeneration();
}

export default scheduleBlogGeneration; 