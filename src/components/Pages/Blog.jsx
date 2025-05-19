import React from 'react';
import { ArrowRight } from 'lucide-react'; // For the Read More arrow

// Sample Blog Post Data
const samplePosts = [
  {
    id: 1,
    title: 'How to differentiate each of them?',
    date: 'May 2, 2021',
    excerpt: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ever.',
    imageUrl: 'https://placehold.co/600x400/00BCD4/FFFFFF/png?text=Blog+Image+1&font=lora',
    slug: 'how-to-differentiate-1'
  },
  {
    id: 2,
    title: 'How to differentiate each of them?',
    date: 'May 2, 2021',
    excerpt: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ever.',
    imageUrl: 'https://placehold.co/600x400/E91E63/FFFFFF/png?text=Blog+Image+2&font=lora',
    slug: 'how-to-differentiate-2'
  },
  {
    id: 3,
    title: 'How to differentiate each of them?',
    date: 'May 2, 2021',
    excerpt: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ever.',
    imageUrl: 'https://placehold.co/600x400/FF9800/FFFFFF/png?text=Blog+Image+3&font=lora',
    slug: 'how-to-differentiate-3'
  },
  // Add more sample posts if needed
];

const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-indigo-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Recent Blogs
          </h1>
          <p className="text-lg sm:text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-indigo-100 bg-opacity-20 border border-transparent focus:border-pink-400"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} // More direct control for bg
            />
            <button 
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 shadow-lg"
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
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium group self-start"
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