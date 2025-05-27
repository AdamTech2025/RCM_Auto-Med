import React from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center items-center py-24 px-4">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-6 font-serif">Careers at Adam Rev Max</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-10">
        There are no open positions right now.<br />
        Please check back later or <Link to="/contact" className="text-primary underline hover:text-primary/80">contact us</Link> to express your interest.
      </p>
      <div className="text-7xl mb-6">🚀</div>
      <div className="text-gray-400 text-center text-sm">We appreciate your enthusiasm for joining our team!</div>
    </div>
  );
} 