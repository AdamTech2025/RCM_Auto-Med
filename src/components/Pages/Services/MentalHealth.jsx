import React from 'react';
import BookDemo from "../../shared/BookDemo";

const MentalHealth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Mental Health Services
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
          Comprehensive billing solutions for mental health practices
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-lg font-semibold shadow-lg mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          We're creating specialized solutions for mental health providers. Our platform will handle therapy billing, insurance verification, and compliance requirements for behavioral health practices.
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
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Therapy Billing</h3>
            <p className="text-gray-600 leading-relaxed">Specialized billing for mental health sessions</p>
          </div>
          
          <div className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliance</h3>
            <p className="text-gray-600 leading-relaxed">Secure and compliant billing processes</p>
          </div>
          
          <div className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Care Focus</h3>
            <p className="text-gray-600 leading-relaxed">More time for patient care, less admin work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth; 