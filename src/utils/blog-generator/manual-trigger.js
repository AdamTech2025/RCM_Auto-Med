import { generateBlogPosts } from './generateBlogPosts.js';

// Manual trigger for blog post generation
const manualBlogGeneration = async () => {
  console.log('🎯 Manual Blog Generation: Starting manual blog post generation...');
  console.log('⏰ Timestamp:', new Date().toISOString());
  
  try {
    const count = process.argv[2] ? parseInt(process.argv[2]) : 6;
    console.log(`📝 Generating ${count} blog posts...`);
    
    const blogPosts = await generateBlogPosts(count);
    
    console.log('✅ Manual Blog Generation: Success!');
    console.log(`📊 Generated ${blogPosts.length} blog posts:`);
    
    blogPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   📅 ${post.date} | 🏷️ ${post.category} | ⏱️ ${post.readingTime} min read`);
      console.log(`   ✍️ By ${post.author.name}, ${post.author.title}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Manual Blog Generation Failed:', error);
    process.exit(1);
  }
};

// Run if called directly
if (process.argv[1] && process.argv[1].includes('manual-trigger.js')) {
  manualBlogGeneration();
}

export default manualBlogGeneration; 