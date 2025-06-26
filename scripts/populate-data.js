#!/usr/bin/env node

import { connectToDatabase, closeDatabaseConnection } from '../src/utils/db/mongodb.js';

async function populateTestimonials() {
  try {
    console.log('🚀 Populating testimonials...');
    
    // Import the testimonial generator
    const { generateTestimonials } = await import('../src/utils/testimonial-generator/generateTestimonials.js');
    
    // Generate 10 testimonials
    const testimonials = await generateTestimonials(10);
    
    console.log(`✅ Successfully generated ${testimonials.length} testimonials`);
    console.log('⭐ Rating distribution:', testimonials.map(t => t.rating).join(', '));
    
    return testimonials;
  } catch (error) {
    console.error('❌ Error populating testimonials:', error);
    throw error;
  }
}

async function populateBlogPosts() {
  try {
    console.log('📝 Populating blog posts...');
    
    // Import the blog generator
    const { generateBlogPosts } = await import('../src/utils/blog-generator/generateBlogPosts.js');
    
    // Generate 5 blog posts
    const blogPosts = await generateBlogPosts(5);
    
    console.log(`✅ Successfully generated ${blogPosts.length} blog posts`);
    
    return blogPosts;
  } catch (error) {
    console.error('❌ Error populating blog posts:', error);
    // Don't throw error for blog posts, continue with testimonials
    return [];
  }
}

async function main() {
  try {
    console.log('🔧 Starting data population...');
    
    // Connect to database
    await connectToDatabase();
    console.log('✅ Connected to MongoDB');
    
    // Populate testimonials
    const testimonials = await populateTestimonials();
    
    // Populate blog posts
    const blogPosts = await populateBlogPosts();
    
    console.log('🎉 Data population completed successfully!');
    console.log(`📊 Summary: ${testimonials.length} testimonials, ${blogPosts.length} blog posts`);
    
  } catch (error) {
    console.error('❌ Data population failed:', error);
    process.exit(1);
  } finally {
    // Close database connection
    await closeDatabaseConnection();
    console.log('🔌 Database connection closed');
  }
}

// Run the script
main(); 