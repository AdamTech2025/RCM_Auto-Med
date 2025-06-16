import { generateAndSave } from './scheduler.js';
import { connectToDatabase, closeDatabaseConnection } from '../db/mongodb.js';

async function testGeneration() {
  try {
    console.log('🚀 Testing testimonial generation...');
    
    // Connect to database
    await connectToDatabase();
    console.log('✅ Connected to MongoDB');
    
    // Generate and save testimonials
    const testimonials = await generateAndSave();
    console.log(`✅ Generated and saved ${testimonials.length} testimonials`);
    
    // Analyze generation types
    let aiCount = 0;
    let fallbackCount = 0;
    
    // Display generated testimonials with generation type
    testimonials.forEach((testimonial, index) => {
      const isAI = testimonial.name !== "Dr. John Smith, MD" && !testimonial.name.startsWith("Dr. Provider");
      const generationType = isAI ? "🤖 AI Generated" : "🔄 Fallback";
      
      if (isAI) {
        aiCount++;
      } else {
        fallbackCount++;
      }
      
      console.log(`\n📝 Testimonial ${index + 1} (${generationType}):`);
      console.log(`   Name: ${testimonial.name}`);
      console.log(`   Role: ${testimonial.role}`);
      console.log(`   Specialty: ${testimonial.specialty}`);
      console.log(`   Rating: ${testimonial.rating}/5`);
      console.log(`   Content: ${testimonial.content.substring(0, 100)}...`);
      console.log(`   Results: ${testimonial.results}`);
    });
    
    console.log(`\n📊 Final Summary:`);
    console.log(`   🤖 AI Generated: ${aiCount} testimonials`);
    console.log(`   🔄 Fallback: ${fallbackCount} testimonials`);
    console.log(`   📈 Success Rate: ${((aiCount / testimonials.length) * 100).toFixed(1)}% AI generation`);
    
    console.log('\n🎉 Test completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    // Close database connection
    await closeDatabaseConnection();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

// Run the test
testGeneration(); 