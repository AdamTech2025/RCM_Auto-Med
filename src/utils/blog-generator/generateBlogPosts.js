import OpenAI from 'openai';
import { serverEnv } from '../../config/server-env.js';
import { saveBlogPosts, saveDailyBlogPosts } from '../../services/blog-server.js';

// Check for API key with better logging
const apiKey = serverEnv.openaiApiKey;
console.log('API Key Status:', apiKey ? 'Present' : 'Missing');

if (!apiKey) {
  console.warn('Warning: API key not found. Blog post generation will be disabled.');
}

// Configure OpenAI client with OpenRouter base URL
const openai = apiKey ? new OpenAI({
  apiKey: apiKey,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://www.adambilling.com', // Required for OpenRouter
    'X-Title': 'RCM Auto-Med', // Optional, shows in rankings
  },
}) : null;

const generateBlogPost = async (topic) => {
  try {
    if (!openai) {
      console.log('⚠️  AI Generation: API key not configured, using fallback blog post');
      throw new Error('API key not configured');
    }

    console.log(`🤖 AI Generation: Generating blog post for ${topic}...`);

    const prompt = `Generate an SEO-optimized healthcare blog post about "${topic}" for a Revenue Cycle Management company. 

    Requirements:
    1. Title: Compelling, SEO-friendly title (60-70 characters)
    2. Excerpt: Engaging meta description (150-160 characters)
    3. Content: Professional, informative content (200-250 words) that provides real value to healthcare providers
    4. Date: Use current date format (Month DD, YYYY)
    5. Slug: URL-friendly slug
    6. Category: Choose from "RCM", "Healthcare Technology", "Practice Management", "Billing", "AI in Healthcare"
    7. Tags: 3-5 relevant tags as array
    8. Reading time: Estimated reading time in minutes
    9. Author info: Professional healthcare/RCM expert name and title

    SEO Guidelines:
    - Include relevant keywords naturally: RCM, revenue cycle management, medical billing, healthcare
    - Use actionable language and focus on benefits
    - Include specific statistics or insights where appropriate
    - Make it valuable for healthcare providers and practice administrators
    - Optimize for search intent around healthcare RCM solutions

    Format as JSON:
    {
      "title": "",
      "excerpt": "",
      "content": "",
      "date": "",
      "slug": "",
      "category": "",
      "tags": [],
      "readingTime": 2,
      "author": {
        "name": "",
        "title": ""
      }
    }`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "openai/gpt-3.5-turbo",
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0].message.content);
    console.log(`✅ AI Generation: Successfully generated blog post for ${topic} - ${result.title}`);
    return result;
  } catch (error) {
    console.error(`❌ AI Generation Failed for ${topic}:`, error.message);
    console.log(`🔄 Fallback: Using fallback blog post for ${topic}`);
    // Return a fallback blog post
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    return {
      title: `${topic}: Essential Guide for Healthcare Providers`,
      excerpt: `Discover how ${topic.toLowerCase()} is transforming healthcare operations and improving revenue cycle management for modern medical practices.`,
      content: `${topic} has become a critical component in modern healthcare revenue cycle management. Healthcare providers are increasingly adopting advanced solutions to streamline their operations and improve financial outcomes. This comprehensive approach helps medical practices reduce administrative burden while enhancing patient care quality. By implementing strategic ${topic.toLowerCase()} solutions, healthcare organizations can achieve better operational efficiency, improved cash flow, and reduced claim denials. The integration of technology-driven processes ensures compliance with healthcare regulations while optimizing revenue collection. Medical practices that embrace these innovations typically see significant improvements in their overall performance metrics and patient satisfaction scores.`,
      date: currentDate,
      slug: topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      category: "RCM",
      tags: ["RCM", "Healthcare", "Revenue Cycle", "Medical Billing", "Practice Management"],
      readingTime: 2,
      author: {
        name: "Dr. Sarah Mitchell",
        title: "Healthcare RCM Specialist"
      }
    };
  }
};

const blogTopics = [
  "AI-Powered Revenue Cycle Management",
  "Reducing Medical Billing Denials with Automation",
  "Healthcare Practice Management in 2024",
  "HIPAA Compliance in Digital RCM",
  "Telehealth Billing and Revenue Optimization",
  "Prior Authorization Automation Solutions",
  "Patient Payment Experience Enhancement",
  "Medical Coding Accuracy with AI",
  "Claims Processing Workflow Optimization",
  "Revenue Analytics for Healthcare Practices"
];

export const generateBlogPosts = async (count = 6) => {
  try {
    console.log(`🚀 Starting blog post generation process for ${count} posts...`);
    const blogPosts = [];
    const selectedTopics = blogTopics
      .sort(() => Math.random() - 0.5)
      .slice(0, count);

    let aiGeneratedCount = 0;
    let fallbackCount = 0;

    for (const topic of selectedTopics) {
      const blogPost = await generateBlogPost(topic);
      
      // Check if this was AI generated or fallback
      if (blogPost.author.name === "Dr. Sarah Mitchell") {
        fallbackCount++;
      } else {
        aiGeneratedCount++;
      }
      
      blogPosts.push({
        id: blogPosts.length + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        imageUrl: `/src/assets/blog/blog ${blogPosts.length + 1}.jpeg`, // Use existing blog images
        ...blogPost
      });
    }

    console.log(`📊 Generation Summary: ${aiGeneratedCount} AI-generated, ${fallbackCount} fallback blog posts`);

    // Save to MongoDB
    await saveBlogPosts(blogPosts);
    console.log('✅ Blog posts generated and saved to MongoDB successfully');

    return blogPosts;
  } catch (error) {
    console.error('❌ Error generating blog posts:', error);
    console.log('🔄 Using complete fallback system - all blog posts will be fallback');
    
    // Return fallback blog posts if generation fails
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const fallbackBlogPosts = Array(count).fill(null).map((_, index) => ({
      id: index + 1,
      title: `${blogTopics[index % blogTopics.length]}: Essential Guide for Healthcare Providers`,
      excerpt: `Discover how ${blogTopics[index % blogTopics.length].toLowerCase()} is transforming healthcare operations and improving revenue cycle management.`,
      content: `${blogTopics[index % blogTopics.length]} has become a critical component in modern healthcare revenue cycle management. Healthcare providers are increasingly adopting advanced solutions to streamline their operations and improve financial outcomes. This comprehensive approach helps medical practices reduce administrative burden while enhancing patient care quality. By implementing strategic solutions, healthcare organizations can achieve better operational efficiency, improved cash flow, and reduced claim denials.`,
      date: currentDate,
      slug: blogTopics[index % blogTopics.length].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      category: "RCM",
      tags: ["RCM", "Healthcare", "Revenue Cycle", "Medical Billing"],
      readingTime: 2,
      author: {
        name: "Dr. Sarah Mitchell",
        title: "Healthcare RCM Specialist"
      },
      imageUrl: `/src/assets/blog/blog ${(index % 6) + 1}.jpeg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    console.log(`📊 Fallback Summary: ${fallbackBlogPosts.length} fallback blog posts created`);

    // Save fallback blog posts to MongoDB
    await saveBlogPosts(fallbackBlogPosts);
    return fallbackBlogPosts;
  }
};

// New function for daily blog generation - generates only 1 blog post per day
export const generateDailyBlogPost = async () => {
  try {
    console.log(`🚀 Starting daily blog post generation (1 post)...`);
    
    // Select a random topic for today
    const selectedTopic = blogTopics[Math.floor(Math.random() * blogTopics.length)];
    console.log(`📝 Selected topic for today: ${selectedTopic}`);
    
    const blogPost = await generateBlogPost(selectedTopic);
    
    // Check if this was AI generated or fallback
    const isAI = blogPost.author.name !== "Dr. Sarah Mitchell";
    const generationType = isAI ? "🤖 AI" : "🔄 Fallback";
    console.log(`${generationType} blog post generated: ${blogPost.title}`);
    
    // Get the current total count for proper ID assignment
    const { getAllBlogPosts } = await import('../../services/blog-server.js');
    const existingPosts = await getAllBlogPosts();
    
    const dailyBlogPost = {
      id: existingPosts.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: `/src/assets/blog/blog ${((existingPosts.length) % 6) + 1}.jpeg`,
      ...blogPost
    };

    // Save to MongoDB using the new daily save function
    const result = await saveDailyBlogPosts([dailyBlogPost]);
    
    if (result.message === 'Already generated today') {
      console.log('✅ Daily blog post already exists for today - skipping generation');
      return null;
    }
    
    console.log('✅ Daily blog post generated and saved to MongoDB successfully');
    return dailyBlogPost;
    
  } catch (error) {
    console.error('❌ Error generating daily blog post:', error);
    console.log('🔄 Using fallback daily blog post');
    
    // Return fallback blog post if generation fails
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const selectedTopic = blogTopics[Math.floor(Math.random() * blogTopics.length)];
    
    // Get the current total count for proper ID assignment
    try {
      const { getAllBlogPosts } = await import('../../services/blog-server.js');
      const existingPosts = await getAllBlogPosts();
      
      const fallbackBlogPost = {
        id: existingPosts.length + 1,
        title: `${selectedTopic}: Essential Guide for Healthcare Providers`,
        excerpt: `Discover how ${selectedTopic.toLowerCase()} is transforming healthcare operations and improving revenue cycle management.`,
        content: `${selectedTopic} has become a critical component in modern healthcare revenue cycle management. Healthcare providers are increasingly adopting advanced solutions to streamline their operations and improve financial outcomes. This comprehensive approach helps medical practices reduce administrative burden while enhancing patient care quality. By implementing strategic solutions, healthcare organizations can achieve better operational efficiency, improved cash flow, and reduced claim denials.`,
        date: currentDate,
        slug: selectedTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        category: "RCM",
        tags: ["RCM", "Healthcare", "Revenue Cycle", "Medical Billing"],
        readingTime: 2,
        author: {
          name: "Dr. Sarah Mitchell",
          title: "Healthcare RCM Specialist"
        },
        imageUrl: `/src/assets/blog/blog ${((existingPosts.length) % 6) + 1}.jpeg`,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      console.log(`📊 Fallback daily blog post created: ${fallbackBlogPost.title}`);

      // Save fallback blog post to MongoDB
      const result = await saveDailyBlogPosts([fallbackBlogPost]);
      
      if (result.message === 'Already generated today') {
        console.log('✅ Daily blog post already exists for today - skipping fallback generation');
        return null;
      }
      
      return fallbackBlogPost;
    } catch (dbError) {
      console.error('❌ Error with fallback blog post generation:', dbError);
      return null;
    }
  }
};

export default generateBlogPosts; 