import { generateTestimonials, generateDailyTestimonial } from './generateTestimonials.js';
import { connectToDatabase, closeDatabaseConnection } from '../db/mongodb.js';

const runDailyGeneration = async () => {
  try {
    console.log('🚀 Manual Daily Testimonial Generation Started...');
    
    // Connect to database
    await connectToDatabase();
    console.log('✅ Connected to MongoDB');
    
    // Generate daily testimonial
    const result = await generateDailyTestimonial();
    
    if (result) {
      console.log('✅ Daily testimonial generated successfully!');
      console.log(`👤 Name: ${result.name}`);
      console.log(`🏥 Role: ${result.role}`);
      console.log(`🩺 Specialty: ${result.specialty}`);
      console.log(`⭐ Rating: ${result.rating}/5`);
      console.log(`📈 Results: ${result.results}`);
    } else {
      console.log('ℹ️ Daily testimonial already exists for today or generation failed');
    }
    
  } catch (error) {
    console.error('❌ Error during daily testimonial generation:', error);
  } finally {
    await closeDatabaseConnection();
    console.log('🔌 Database connection closed');
  }
};

const runBulkGeneration = async (count = 6) => {
  try {
    console.log(`🚀 Manual Bulk Testimonial Generation Started (${count} testimonials)...`);
    console.log('⚠️ WARNING: This will replace all existing testimonials!');
    
    // Connect to database
    await connectToDatabase();
    console.log('✅ Connected to MongoDB');
    
    // Generate testimonials
    const result = await generateTestimonials(count);
    
    console.log(`✅ ${result.length} testimonials generated successfully!`);
    result.forEach((testimonial, index) => {
      console.log(`  ${index + 1}. ${testimonial.name} (${testimonial.specialty})`);
    });
    
  } catch (error) {
    console.error('❌ Error during bulk testimonial generation:', error);
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
  console.log('📅 Running DAILY testimonial generation (preserves historical data)...');
  runDailyGeneration();
} else if (command === 'bulk') {
  console.log(`📚 Running BULK testimonial generation (${count} testimonials, replaces existing data)...`);
  runBulkGeneration(count);
} else {
  console.log('💬 Testimonial Generation Manual Trigger');
  console.log('');
  console.log('Usage:');
  console.log('  node manual-trigger.js daily     # Generate 1 testimonial for today (preserves historical data)');
  console.log('  node manual-trigger.js bulk [n]  # Generate n testimonials (default: 6, replaces all existing)');
  console.log('');
  console.log('Examples:');
  console.log('  node manual-trigger.js daily     # Recommended for daily use');
  console.log('  node manual-trigger.js bulk 3    # Generate 3 testimonials (replaces existing)');
  console.log('  node manual-trigger.js bulk      # Generate 6 testimonials (replaces existing)');
  console.log('');
  console.log('💡 Tip: Use "daily" for regular operation to preserve all historical testimonials');
} 