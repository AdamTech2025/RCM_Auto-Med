import React from 'react';
import { ArrowRight } from 'lucide-react'; // For the Read More arrow
import blog_1 from '../../../assets/grp_2.jpg';

// Sample Blog Post Data
const samplePosts = [
  {
    id: 1,
    title: "The Future of Dental Billing: AI's Role in RCM",
    date: 'October 26, 2023',
    excerpt: 'Explore how Artificial Intelligence is reshaping the landscape of dental revenue cycle management, leading to increased efficiency and accuracy.',
    imageUrl: 'https://placehold.co/600x400/1E88E5/FFFFFF/png?text=AI+in+Dental+Billing&font=lora',
    slug: 'future-dental-billing-ai-rcm'
  },
  {
    id: 2,
    title: 'Maximizing Revenue: How AI Streamlines Dental RCM',
    date: 'November 5, 2023',
    excerpt: 'Discover practical ways AI tools can optimize your dental practice\'s RCM processes, from claim submission to payment reconciliation, boosting your bottom line.',
    imageUrl: 'https://placehold.co/600x400/43A047/FFFFFF/png?text=AI+Streamlines+RCM&font=lora',
    slug: 'maximizing-revenue-ai-rcm'
  },
  {
    id: 3,
    title: 'Reducing Denials: AI-Powered Predictive Analytics in Dental Billing',
    date: 'November 18, 2023',
    excerpt: 'Learn how AI-driven predictive analytics can identify potential claim denials before they happen, significantly improving your clean claim rate.',
    imageUrl: 'https://placehold.co/600x400/FDD835/333333/png?text=AI+Reduces+Denials&font=lora',
    slug: 'reducing-denials-ai-predictive-analytics'
  },
  {
    id: 4,
    title: "Transforming Patient Experience with AI in Dental Revenue Cycle",
    date: 'December 2, 2023',
    excerpt: 'Understand the impact of AI on the patient financial experience, from transparent billing to easier payment options, enhancing overall satisfaction.',
    imageUrl: 'https://placehold.co/600x400/8E24AA/FFFFFF/png?text=AI+Patient+Experience&font=lora',
    slug: 'transforming-patient-experience-ai-rcm'
  },
  {
    id: 5,
    title: 'Key AI Tools Revolutionizing Dental Practice Management',
    date: 'December 15, 2023',
    excerpt: 'A look at essential AI-powered tools that are making dental practice management more efficient, profitable, and patient-focused.',
    imageUrl: 'https://placehold.co/600x400/00ACC1/FFFFFF/png?text=Key+AI+Tools+for+Dental&font=lora',
    slug: 'key-ai-tools-dental-practice'
  },
  {
    id: 6,
    title: "The ROI of AI: Investing in Intelligent RCM for Your Dental Practice",
    date: 'January 5, 2024',
    excerpt: 'Analyzing the return on investment when implementing AI solutions for revenue cycle management in a modern dental practice.',
    imageUrl: 'https://placehold.co/600x400/D81B60/FFFFFF/png?text=ROI+of+AI+in+RCM&font=lora',
    slug: 'roi-of-ai-intelligent-rcm'
  }
];

const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header 
        className="text-primary-foreground py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center" 
        style={{ backgroundImage: `url(${blog_1})` }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {samplePosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.slug}`} // Assuming you'll have individual blog post pages
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group self-start"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog; 