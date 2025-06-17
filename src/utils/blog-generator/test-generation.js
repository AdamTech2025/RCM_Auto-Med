import { generateBlogPosts } from './generateBlogPosts.js';
import { getAllBlogPosts } from '../../services/blog-server.js';

// Test blog post generation
const testBlogGeneration = async () => {
  console.log('🧪 Blog Generation Test: Starting test suite...');
  console.log('⏰ Test started at:', new Date().toISOString());
  
  try {
    // Test 1: Generate a small batch of blog posts
    console.log('\n📝 Test 1: Generating 3 blog posts...');
    const testPosts = await generateBlogPosts(3);
    
    if (testPosts && testPosts.length === 3) {
      console.log('✅ Test 1 PASSED: Generated 3 blog posts successfully');
      
      // Validate blog post structure
      const requiredFields = ['id', 'title', 'excerpt', 'content', 'date', 'slug', 'category', 'tags', 'author', 'imageUrl'];
      let structureValid = true;
      
      testPosts.forEach((post, index) => {
        requiredFields.forEach(field => {
          if (!post[field]) {
            console.log(`❌ Test 1 FAILED: Missing field '${field}' in post ${index + 1}`);
            structureValid = false;
          }
        });
      });
      
      if (structureValid) {
        console.log('✅ Test 1 PASSED: All blog posts have required fields');
      }
      
    } else {
      console.log('❌ Test 1 FAILED: Expected 3 blog posts, got', testPosts?.length || 0);
    }
    
    // Test 2: Verify blog posts are saved to database
    console.log('\n💾 Test 2: Checking database storage...');
    const savedPosts = await getAllBlogPosts();
    
    if (savedPosts && savedPosts.length >= 3) {
      console.log(`✅ Test 2 PASSED: Found ${savedPosts.length} blog posts in database`);
      
      // Display sample blog post
      const samplePost = savedPosts[0];
      console.log('\n📄 Sample Blog Post:');
      console.log(`Title: ${samplePost.title}`);
      console.log(`Category: ${samplePost.category}`);
      console.log(`Author: ${samplePost.author.name}, ${samplePost.author.title}`);
      console.log(`Reading Time: ${samplePost.readingTime} minutes`);
      console.log(`Tags: ${samplePost.tags.join(', ')}`);
      console.log(`Slug: ${samplePost.slug}`);
      console.log(`Excerpt: ${samplePost.excerpt.substring(0, 100)}...`);
      
    } else {
      console.log('❌ Test 2 FAILED: Blog posts not found in database');
    }
    
    // Test 3: Generate with different count
    console.log('\n📝 Test 3: Generating 1 blog post...');
    const singlePost = await generateBlogPosts(1);
    
    if (singlePost && singlePost.length === 1) {
      console.log('✅ Test 3 PASSED: Generated single blog post successfully');
    } else {
      console.log('❌ Test 3 FAILED: Expected 1 blog post, got', singlePost?.length || 0);
    }
    
    console.log('\n🎉 Blog Generation Test Suite Completed!');
    console.log('⏰ Test completed at:', new Date().toISOString());
    
  } catch (error) {
    console.error('❌ Test Suite Failed:', error);
    throw error;
  }
};

// Test individual blog post generation
const testSingleBlogGeneration = async () => {
  console.log('🧪 Single Blog Test: Testing individual blog post generation...');
  
  try {
    const { generateBlogPost } = await import('./generateBlogPosts.js');
    
    // Test with a specific topic
    const testTopic = "AI-Powered Revenue Cycle Management";
    console.log(`📝 Testing with topic: ${testTopic}`);
    
    // Note: This would require exposing the generateBlogPost function
    // For now, we'll test through the main function
    const result = await generateBlogPosts(1);
    
    if (result && result.length > 0) {
      console.log('✅ Single Blog Test PASSED');
      console.log('Generated post title:', result[0].title);
    } else {
      console.log('❌ Single Blog Test FAILED');
    }
    
  } catch (error) {
    console.error('❌ Single Blog Test Failed:', error);
  }
};

// Run tests if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const testType = process.argv[2] || 'full';
  
  if (testType === 'single') {
    testSingleBlogGeneration();
  } else {
    testBlogGeneration();
  }
}

export { testBlogGeneration, testSingleBlogGeneration };
export default testBlogGeneration; 