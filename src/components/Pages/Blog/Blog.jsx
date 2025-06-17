import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2, RefreshCw } from 'lucide-react'; // For the Read More arrow
import blog_main from '../../../assets/grp_2.jpg';
import blog_1 from '../../../assets/blog/blog 1.jpeg';
import blog_2 from '../../../assets/blog/blog 2.jpeg';
import blog_3 from '../../../assets/blog/blog 3.jpeg';
import blog_4 from '../../../assets/blog/blog 4.jpeg';
import blog_5 from '../../../assets/blog/blog 5.jpeg';
import blog_6 from '../../../assets/blog/blog 6.jpeg';
import { getAllBlogPosts } from '../../../services/blog-client.js';


// Sample Blog Post Data
const samplePosts = [
  {
    id: 1,
    title: "The Future of Adam Billing: AI's Role in RCM",
    date: 'October 26, 2023',
    excerpt: 'Explore how Artificial Intelligence is reshaping the landscape of dental revenue cycle management, leading to increased efficiency and accuracy.',
    imageUrl: blog_1,
    slug: 'future-dental-billing-ai-rcm'
  },
  {
    id: 2,
    title: 'Maximizing Revenue: How AI Streamlines Dental RCM',
    date: 'November 5, 2023',
    excerpt: 'Discover practical ways AI tools can optimize your dental practice\'s RCM processes, from claim submission to payment reconciliation, boosting your bottom line.',
    imageUrl: blog_2,
    slug: 'maximizing-revenue-ai-rcm'
  },
  {
    id: 3,
    title: 'Reducing Denials: AI-Powered Predictive Analytics in Adam Billing',
    date: 'November 18, 2023',
    excerpt: 'Learn how AI-driven predictive analytics can identify potential claim denials before they happen, significantly improving your clean claim rate.',
    imageUrl: blog_3,
    slug: 'reducing-denials-ai-predictive-analytics'
  },
  {
    id: 4,
    title: "Transforming Patient Experience with AI in Dental Revenue Cycle",
    date: 'December 2, 2023',
    excerpt: 'Understand the impact of AI on the patient financial experience, from transparent billing to easier payment options, enhancing overall satisfaction.',
    imageUrl: blog_4,
    slug: 'transforming-patient-experience-ai-rcm'
  },
  {
    id: 5,
    title: 'Key AI Tools Revolutionizing Dental Practice Management',
    date: 'December 15, 2023',
    excerpt: 'A look at essential AI-powered tools that are making dental practice management more efficient, profitable, and patient-focused.',
    imageUrl: blog_5,
    slug: 'key-ai-tools-dental-practice'
  },
  {
    id: 6,
    title: "The ROI of AI: Investing in Intelligent RCM for Your Dental Practice",
    date: 'January 5, 2024',
    excerpt: 'Analyzing the return on investment when implementing AI solutions for revenue cycle management in a modern dental practice.',
    imageUrl: blog_6,
    slug: 'roi-of-ai-intelligent-rcm'
  }
];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load blog posts from database
  const loadBlogPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('🔄 Loading blog posts from database...');
      
      const posts = await getAllBlogPosts();
      
      if (posts && posts.length > 0) {
        setBlogPosts(posts);
        console.log(`✅ Loaded ${posts.length} blog posts from database`);
      } else {
        console.log('⚠️ No blog posts found in database, using fallback posts');
        setBlogPosts(samplePosts);
      }
    } catch (err) {
      console.error('❌ Error loading blog posts:', err);
      setError('Failed to load blog posts');
      // Use fallback sample posts if database fails
      setBlogPosts(samplePosts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogPosts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header 
        className="text-primary-foreground py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center" 
        style={{ backgroundImage: `url(${blog_main})` }}
      >
        <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div> {/* Overlay for text readability */}
        <div className="max-w-3xl mx-auto text-center relative z-10 "> {/* Added relative z-10 to ensure text is above overlay*/}
          <h1 className="text-4xl sm:text-5xl font-bold mb-24">
            Our Recent Blogs
          </h1>
          <p className="text-lg sm:text-xl text-black font-bold mb-10 max-w-2xl mx-auto">
            Stay updated with our latest insights on AI-driven RCM, dental practice management, and the future of healthcare technology.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-md text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 bg-black/20 border border-transparent focus:border-primary-foreground/30"
            />
            <button 
              type="submit"
              className="bg-red-800 text-secondary-foreground hover:bg-primary/90 font-semibold px-8 py-3 rounded-md transition-colors duration-300 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </header>

      {/* Blog Grid Section */}
      <main className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary mr-3" />
              <span className="text-gray-600">Loading latest blog posts...</span>
            </div>
          )}

          {/* Error State with Refresh Button */}
          {error && (
            <div className="text-center py-16">
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={loadBlogPosts}
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry Loading
              </button>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      {post.readingTime && (
                        <span>{post.readingTime} min read</span>
                      )}
                    </div>
                    {post.category && (
                      <div className="mb-2">
                        <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    )}
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {post.author && (
                      <div className="text-xs text-gray-500 mb-3">
                        By {post.author.name}
                        {post.author.title && `, ${post.author.title}`}
                      </div>
                    )}
                    <a 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium group self-start"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* No Posts State */}
          {!loading && !error && blogPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No blog posts available at the moment.</p>
              <button 
                onClick={loadBlogPosts}
                className="mt-4 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog; 