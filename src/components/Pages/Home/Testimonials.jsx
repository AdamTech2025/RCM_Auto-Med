import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { getAllTestimonials } from '../../../services/testimonials';

// Fallback testimonials in case the database is not available
const fallbackTestimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson, MD",
    role: "Medical Director & Family Practice Owner, Johnson Medical Center",
    specialty: "Family Medicine - 15 Years Experience",
    content: "This RCM company transformed our revenue cycle management completely. Our medical billing denials dropped from 22% to 6% within 90 days. Their AI-powered coding automation and dedicated billing specialists helped us increase collections by $180,000 annually while reducing our Days in A/R from 65 to 28 days.",
    results: "38% increase in revenue, 65% reduction in claim denials",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mark Thompson, CPA",
    role: "Practice Administrator & Revenue Cycle Director, Thompson Healthcare Group",
    specialty: "Multi-Specialty Practice Management - 12 Years",
    content: "Best RCM services we've partnered with! Their comprehensive revenue cycle management solution automated our entire billing workflow. The real-time analytics dashboard provides insights into our claim status, aging reports, and payer performance. Our clean claim rate improved to 96% and staff productivity increased by 40%.",
    results: "96% clean claim rate, 40% staff productivity increase",
    rating: 5,
    avatar: "MT"
  },
  {
    id: 3,
    name: "Dr. Emily Chen, MD",
    role: "Internal Medicine Physician & Practice Owner, Perfect Care Medical",
    specialty: "Internal Medicine & Chronic Care Management",
    content: "Outstanding RCM company with exceptional medical billing expertise. Their HIPAA-compliant platform seamlessly integrated with our EHR system. The dedicated account manager and billing team provide transparent reporting and proactive denial management. We've seen 25% faster payment processing and improved cash flow consistency.",
    results: "25% faster payments, improved cash flow",
    rating: 5,
    avatar: "EC"
  },
  {
    id: 4,
    name: "Jennifer Martinez, RN, BSN",
    role: "Clinical Operations Manager, Sunshine Family Practice",
    specialty: "Primary Care Practice Operations - 8 Years",
    content: "This revenue cycle management company exceeded our expectations. Their medical coding accuracy is outstanding - 99.2% first-pass claim acceptance rate. The patient billing portal improved our patient satisfaction scores, and the automated insurance verification reduced front desk workload by 70%. Highly recommend their RCM services.",
    results: "99.2% claim acceptance, 70% reduced workload",
    rating: 5,
    avatar: "JM"
  },
  {
    id: 5,
    name: "Dr. Michael Rodriguez, DO",
    role: "Pediatric Practice Owner & Medical Director, Kids Health Partners",
    specialty: "Pediatric Medicine - 20 Years Experience",
    content: "Exceptional RCM partner for our pediatric practice. Their specialized knowledge of pediatric billing codes and vaccine administration billing has optimized our revenue streams. The monthly RCM reports and performance metrics help us make data-driven decisions. Revenue increased by 22% in the first year.",
    results: "22% revenue increase, optimized vaccine billing",
    rating: 5,
    avatar: "MR"
  },
  {
    id: 6,
    name: "Lisa Chen, MBA",
    role: "Healthcare Finance Director, Metro Medical Associates",
    specialty: "Healthcare Financial Management - 15 Years",
    content: "Top-tier revenue cycle management services. Their team of certified medical coders and billing specialists deliver consistent results. The comprehensive RCM solution includes eligibility verification, prior authorization management, and detailed financial reporting. Our net collection rate improved from 89% to 97%.",
    results: "97% net collection rate, comprehensive RCM solution",
    rating: 5,
    avatar: "LC"
  }
];

// Main Testimonials Component
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
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
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setError('Failed to load testimonials. Using fallback data.');
        // Keep using fallback testimonials if fetch fails
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Smooth scroll to current testimonial
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400; // Width of each card + gap
      const scrollLeft = currentIndex * cardWidth;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

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
                key={testimonial.id}
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
                          {testimonial.avatar}
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-blue-300 bg-blue-300/20 px-2 py-1 rounded-full">
                        {testimonial.rating}.0 Rating
                      </span>
                    </div>
                    
                    {/* Testimonial content */}
                    <blockquote className="text-white/90 mb-6 leading-relaxed text-sm">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Results highlight */}
                    <div className="bg-gradient-to-r from-green-400/20 to-blue-400/20 border border-green-400/30 rounded-xl p-4 mb-6 backdrop-blur-sm">
                      <p className="text-green-300 font-semibold text-xs mb-1">Key Results:</p>
                      <p className="text-green-200 text-xs">{testimonial.results}</p>
                    </div>
                    
                    {/* Author info */}
                    <div className="border-t border-white/20 pt-4">
                      <p className="font-bold text-white mb-1 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-slate-300 mb-2">{testimonial.role}</p>
                      <p className="text-xs text-blue-300 bg-blue-300/20 px-2 py-1 rounded-full inline-block">
                        {testimonial.specialty}
                      </p>
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
                Trusted by 10,000+ Healthcare Providers Nationwide
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    98.5%
                  </div>
                  <div className="text-sm text-slate-300">Client Satisfaction Rate</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    $2.8B+
                  </div>
                  <div className="text-sm text-slate-300">Revenue Processed Annually</div>
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
