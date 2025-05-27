import React from 'react';
import BookDemo from "../../shared/BookDemo";

const Chiropractic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Chiropractic Services
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
          Specialized billing solutions for chiropractic practices
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full text-lg font-semibold shadow-lg mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          We're building specialized solutions for chiropractic practices. Our platform will streamline spinal care billing, manage treatment plans, and optimize your practice's financial health.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <BookDemo 
            variant="default"
            className="px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          />
          <button className="px-8 py-4 text-lg border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-semibold">
            Learn More
          </button>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Spinal Care Billing</h3>
            <p className="text-gray-600 leading-relaxed">Specialized billing for chiropractic treatments</p>
          </div>
          
          <div className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Treatment Plans</h3>
            <p className="text-gray-600 leading-relaxed">Comprehensive treatment plan management</p>
          </div>
          
          <div className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Care</h3>
            <p className="text-gray-600 leading-relaxed">Focus on healing while we handle billing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chiropractic; 