import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Play, Pause, StarHalf } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { getAllTestimonials } from '../../../services/testimonials-client';

// Main Testimonials Component
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  // Fetch testimonials from MongoDB
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getAllTestimonials();
        if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          // No fallback testimonials - show empty state
          setTestimonials([]);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setError('Failed to load testimonials from database.');
        setTestimonials([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Smooth scroll to current testimonial
  useEffect(() => {
    if (scrollContainerRef.current && testimonials.length > 0) {
      const container = scrollContainerRef.current;
      const cardWidth = 400; // Width of each card + gap
      const scrollLeft = currentIndex * cardWidth;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, testimonials.length]);

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Render star rating with support for half stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && (
          <StarHalf className="w-4 h-4 text-yellow-400 fill-current" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />
        ))}
      </div>
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded-lg w-64 mx-auto mb-4"></div>
            <div className="h-12 bg-white/20 rounded-lg w-96 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-8 h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Empty state when no testimonials
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Client Testimonials Coming Soon
            </h2>
            <p className="text-slate-300 mb-6">
              We're gathering authentic reviews from our healthcare partners. 
              Check back soon to see real success stories from practices using our RCM services.
            </p>
            <div className="text-sm text-blue-300">
              {error && `Error: ${error}`}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-white/10 h-full"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm text-blue-400 font-medium bg-blue-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            🚀 Real RCM Success Stories & Reviews
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What Healthcare Providers Say About Our RCM Services
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Discover how our comprehensive revenue cycle management solutions have helped healthcare practices across the nation increase revenue, reduce denials, and optimize their billing operations.
          </motion.p>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={toggleAutoPlay}
            className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            {isAutoPlaying ? (
              <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            )}
          </button>
          
          <button
            onClick={nextTestimonial}
            className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id || testimonial._id}
                className="flex-shrink-0 w-96 h-auto"
                style={{ scrollSnapAlign: 'start' }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  {/* Glowing background effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-indigo-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Main card */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full">
                    {/* Header with avatar and rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                          {testimonial.avatar || testimonial.name?.substring(0, 2).toUpperCase()}
                        </div>
                        {renderStars(testimonial.rating || 4.5)}
                      </div>
                      <span className="text-xs text-blue-300 bg-blue-300/20 px-2 py-1 rounded-full">
                        {testimonial.rating || 4.5} Rating
                      </span>
                    </div>
                    
                    {/* Testimonial content */}
                    <blockquote className="text-white/90 mb-6 leading-relaxed text-sm">
                      "{testimonial.content || testimonial.review}"
                    </blockquote>
                    
                    {/* Results highlight */}
                    {testimonial.results && (
                      <div className="bg-gradient-to-r from-green-400/20 to-blue-400/20 border border-green-400/30 rounded-xl p-4 mb-6 backdrop-blur-sm">
                        <p className="text-green-300 font-semibold text-xs mb-1">Key Results:</p>
                        <p className="text-green-200 text-xs">{testimonial.results}</p>
                      </div>
                    )}
                    
                    {/* Author info */}
                    <div className="border-t border-white/20 pt-4">
                      <p className="font-bold text-white mb-1 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-slate-300 mb-2">{testimonial.role || testimonial.position}</p>
                      {testimonial.specialty && (
                        <p className="text-xs text-blue-300 bg-blue-300/20 px-2 py-1 rounded-full inline-block">
                          {testimonial.specialty}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators - Futuristic Style */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Trusted by Healthcare Providers Nationwide
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    4.8/5
                  </div>
                  <div className="text-sm text-slate-300">Average Client Rating</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    500+
                  </div>
                  <div className="text-sm text-slate-300">Healthcare Practices Served</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    15+
                  </div>
                  <div className="text-sm text-slate-300">Years RCM Experience</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    24/7
                  </div>
                  <div className="text-sm text-slate-300">Expert Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
