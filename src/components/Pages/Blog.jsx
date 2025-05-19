import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        This is the placeholder page for the Blog. Articles, news, and insights related to
        dental billing, practice management, and industry trends will be posted here.
      </p>
      {/* You would typically list blog posts here */}
    </div>
  );
};

export default Blog; 