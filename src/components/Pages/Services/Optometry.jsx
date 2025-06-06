import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, TrendingUp, Briefcase, Users, BarChartBig, ShieldCheck, 
         LineChart, ClipboardCheck, Clock, DollarSign, Shield, BarChart, Award,
         Code2, FileText, ArrowRight, Star, TrendingUp as TrendingUpIcon, 
         Glasses, Zap, Heart, CheckCircle2, Play, Target, Sparkles, 
         Layers, PieChart, Scan, Focus, Lightbulb } from "lucide-react";
import CountUp from '../../UI/CountUp';
import hipaaLogo from "../../../assets/hipaa_blue-3.webp";
import BookDemo from "../../shared/BookDemo";

// Premium Hero Section
const PremiumHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -80, -20],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium">
                👁️ Advanced Vision Care
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Precision
              </span>
              <br />
              <span className="text-white">Optometry</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              Transform your optometry practice with AI-powered vision analysis, comprehensive eye care billing, and intelligent optical management that enhances patient outcomes while maximizing practice profitability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Enhance Your Vision Care <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <BookDemo 
                variant="secondary"
                className="group px-8 py-4 border border-white/20 rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: "650+", label: "Eye Care Practices" },
                { number: "97%", label: "Vision Accuracy" },
                { number: "$2.2M+", label: "Revenue Enhanced" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Vision Analytics</h3>
                  </div>

                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Eye Exam Processing</span>
                      <span className="text-blue-400 font-semibold">97.3%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Optical Billing</span>
                      <span className="text-cyan-400 font-semibold">+38%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Insurance Claims</span>
                      <span className="text-indigo-400 font-semibold">Fast-Track</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl">
                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                      <CheckCircle2 className="w-5 h-5" />
                      Vision Care Certified
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 bg-gradient-to-r from-indigo-500/90 to-blue-500/90 backdrop-blur-xl rounded-2xl shadow-xl"
              >
                <Focus className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 p-4 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-xl rounded-2xl shadow-xl"
              >
                <Glasses className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Premium Features Section
const PremiumFeatures = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Smart Vision Analysis",
      description: "AI-powered eye examination with automated visual field analysis and prescription optimization.",
      color: "from-blue-500 to-cyan-500",
      stats: "97.8% Accuracy"
    },
    {
      icon: <Glasses className="w-8 h-8" />,
      title: "Optical Management",
      description: "Comprehensive frame and lens billing with automated insurance verification and claims processing.",
      color: "from-cyan-500 to-indigo-500",
      stats: "seamless Integration"
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Advanced Diagnostics",
      description: "Retinal imaging analysis with OCT billing and specialized diagnostic procedure coding.",
      color: "from-indigo-500 to-purple-500",
      stats: "Premium Imaging"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practice Optimization",
      description: "Vision care analytics with patient tracking, appointment optimization, and revenue insights.",
      color: "from-purple-500 to-pink-500",
      stats: "360° Vision Care"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold">
            Vision Care Features
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Next-Generation Eye Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advance your optometry practice with intelligent technology designed specifically for comprehensive eye care professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-sm font-semibold rounded-full`}>
                    {feature.stats}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Stats Section
const PremiumStats = () => {
  const stats = [
    { value: 97, label: "Vision Accuracy Rate", suffix: "%" },
    { value: 38, label: "Revenue Increase", suffix: "%" },
    { value: 45, label: "Faster Processing", suffix: "%" },
    { value: 650, label: "Eye Care Practices", suffix: "+" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 border border-white/5 rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Outstanding Vision Care Results
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our advanced platform consistently delivers exceptional performance metrics for optometry practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              className="text-center"
            >
              <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-6xl font-bold text-white mb-4">
                  <CountUp from={0} to={stat.value} duration={2} />
                  <span className="text-cyan-300">{stat.suffix}</span>
                </div>
                <div className="text-blue-100 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Testimonials
const PremiumTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Amanda Foster",
      role: "Optometrist & Practice Owner",
      company: "Clear Vision Eye Center",
      content: "This platform has revolutionized our eye care practice. The automated billing for both exams and optical sales has increased our efficiency by 40%.",
      rating: 5,
      avatar: "AF"
    },
    {
      name: "Robert Chen",
      role: "Practice Administrator",
      company: "Premier Vision Care",
      content: "The optical inventory management and insurance processing features are incredible. We've seen a 35% improvement in our revenue cycle.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Dr. Lisa Martinez",
      role: "Ophthalmologist",
      company: "Advanced Eye Specialists",
      content: "Exceptional system for complex eye procedures. The diagnostic billing automation and retinal imaging integration work flawlessly.",
      rating: 5,
      avatar: "LM"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold">
            Vision Care Success
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Trusted by Leading Eye Care Professionals
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">"</span>
                </div>

                {/* Rating */}
                <div className="flex mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium CTA Section
const PremiumCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold">
              👁️ Ready to Transform Your Vision Care?
            </span>
            
            <h2 className="text-6xl font-bold text-white mt-8 mb-8 leading-tight">
              Start Your Premium
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Optometry Journey
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of successful eye care practices who have enhanced their patient care and revenue optimization with our comprehensive vision platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-bold text-white text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <BookDemo 
                variant="secondary"
                className="px-10 py-5 border-2 border-white/20 rounded-2xl font-bold text-white text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
              />
            </div>

            {/* HIPAA Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                <img src={hipaaLogo} alt="HIPAA Compliance" className="h-16" />
                <div className="text-left">
                  <div className="flex items-center gap-2 text-white font-semibold mb-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    HIPAA Compliant & Vision Secure
                  </div>
                  <p className="text-gray-300 text-sm">
                    Enterprise-grade security with complete eye care compliance
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main Component
const Optometry = () => {
  return (
    <>
      <PremiumHero />
      <PremiumFeatures />
      <PremiumStats />
      <PremiumTestimonials />
      <PremiumCTA />
    </>
  );
};

export default Optometry; 