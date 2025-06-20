import { generateBlogPosts, generateDailyBlogPost } from './generateBlogPosts.js';
import { connectToDatabase, closeDatabaseConnection } from '../db/mongodb.js';

const runDailyGeneration = async () => {
  try {
    console.log('🚀 Manual Daily Blog Generation Started...');
    
    // Connect to database
    await connectToDatabase();
    console.log('✅ Connected to MongoDB');
    
    // Generate daily blog post
    const result = await generateDailyBlogPost();
    
    if (result) {
      console.log('✅ Daily blog post generated successfully!');
      console.log(`📝 Title: ${result.title}`);
      console.log(`📂 Category: ${result.category}`);
      console.log(`👤 Author: ${result.author.name}`);
      console.log(`📅 Date: ${result.date}`);
    } else {
      console.log('ℹ️ Daily blog post already exists for today or generation failed');
    }
    
  } catch (error) {
    console.error('❌ Error during daily blog generation:', error);
  } finally {
    await closeDatabaseConnection();
    console.log('🔌 Database connection closed');
  }
};

const runBulkGeneration = async (count = 6) => {
  try {
    console.log(`🚀 Manual Bulk Blog Generation Started (${count} posts)...`);
    console.log('⚠️ WARNING: This will replace all existing blog posts!');
    
    // Connect to database
    await connectToDatabase();
    console.log('✅ Connected to MongoDB');
    
    // Generate blog posts
    const result = await generateBlogPosts(count);
    
    console.log(`✅ ${result.length} blog posts generated successfully!`);
    result.forEach((post, index) => {
      console.log(`  ${index + 1}. ${post.title} (${post.category})`);
    });
    
  } catch (error) {
    console.error('❌ Error during bulk blog generation:', error);
  } finally {
    await closeDatabaseConnection();
    console.log('🔌 Database connection closed');
  }
};

// Check command line arguments
const args = process.argv.slice(2);
const command = args[0];
const count = parseInt(args[1]) || 6;

if (command === 'daily') {
  console.log('📅 Running DAILY blog generation (preserves historical data)...');
  runDailyGeneration();
} else if (command === 'bulk') {
  console.log(`📚 Running BULK blog generation (${count} posts, replaces existing data)...`);
  runBulkGeneration(count);
} else {
  console.log('📖 Blog Generation Manual Trigger');
  console.log('');
  console.log('Usage:');
  console.log('  node manual-trigger.js daily     # Generate 1 blog post for today (preserves historical data)');
  console.log('  node manual-trigger.js bulk [n]  # Generate n blog posts (default: 6, replaces all existing)');
  console.log('');
  console.log('Examples:');
  console.log('  node manual-trigger.js daily     # Recommended for daily use');
  console.log('  node manual-trigger.js bulk 3    # Generate 3 posts (replaces existing)');
  console.log('  node manual-trigger.js bulk      # Generate 6 posts (replaces existing)');
  console.log('');
  console.log('💡 Tip: Use "daily" for regular operation to preserve all historical blog posts');
} 