import { manualTrigger } from './scheduler.js';
import { connectToDatabase, closeDatabaseConnection } from '../db/mongodb.js';

async function runManualTrigger() {
  try {
    console.log('🚀 Manual Testimonial Generation Trigger');
    console.log('=====================================');
    
    // Connect to database
    await connectToDatabase();
    console.log('✅ Connected to MongoDB');
    
    // Trigger testimonial generation
    const success = await manualTrigger();
    
    if (success) {
      console.log('🎉 Manual trigger completed successfully!');
    } else {
      console.log('❌ Manual trigger failed!');
    }
    
  } catch (error) {
    console.error('❌ Manual trigger error:', error);
  } finally {
    // Close database connection
    await closeDatabaseConnection();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

// Run the manual trigger
runManualTrigger(); 