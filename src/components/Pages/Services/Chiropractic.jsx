import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Activity, TrendingUp, Briefcase, Users, BarChartBig, ShieldCheck, 
         LineChart, ClipboardCheck, Clock, DollarSign, Shield, BarChart, Award,
         Code2, FileText, ArrowRight, Star, TrendingUp as TrendingUpIcon, 
         Bone, Zap, Heart, CheckCircle2, Play, Eye, Target, Sparkles, 
         Layers, PieChart, Stethoscope } from "lucide-react";
import CountUp from '../../UI/CountUp';
import hipaaLogo from "../../../assets/hipaa_blue-3.webp";
import BookDemo from "../../shared/BookDemo";

// Premium Hero Section
const PremiumHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl animate-spin-slow"></div>
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
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium">
                🌟 Advanced Spinal Care
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              <span className="text-white">Chiropractic</span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              Revolutionize your chiropractic practice with AI-powered spinal analysis, automated treatment planning, and precision billing that maximizes patient outcomes while optimizing your revenue stream.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Transform Your Practice <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                { number: "800+", label: "Chiro Practices" },
                { number: "96%", label: "Patient Satisfaction" },
                { number: "$1.8M+", label: "Revenue Boosted" },
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
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                      <Bone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Spinal Analytics</h3>
                  </div>

                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Adjustment Tracking</span>
                      <span className="text-emerald-400 font-semibold">96.8%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Treatment Efficiency</span>
                      <span className="text-teal-400 font-semibold">+42%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Patient Outcomes</span>
                      <span className="text-cyan-400 font-semibold">Excellent</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-5 h-5" />
                      HIPAA Secured
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 bg-gradient-to-r from-cyan-500/90 to-teal-500/90 backdrop-blur-xl rounded-2xl shadow-xl"
              >
                <Activity className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 p-4 bg-gradient-to-r from-emerald-500/90 to-cyan-500/90 backdrop-blur-xl rounded-2xl shadow-xl"
              >
                <Sparkles className="w-6 h-6 text-white" />
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
      icon: <Bone className="w-8 h-8" />,
      title: "Smart Spinal Analysis",
      description: "AI-powered spinal assessment with automated X-ray analysis and treatment recommendations.",
      color: "from-emerald-500 to-teal-500",
      stats: "98.7% Accuracy"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Treatment Optimization",
      description: "Intelligent adjustment protocols with real-time patient progress tracking and outcomes.",
      color: "from-teal-500 to-cyan-500",
      stats: "40% Better Results"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Comprehensive Billing",
      description: "Automated CPT coding for chiropractic services with integrated insurance verification.",
      color: "from-cyan-500 to-blue-500",
      stats: "95% First-Pass Rate"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Practice Analytics",
      description: "Advanced reporting dashboard with patient retention metrics and revenue optimization.",
      color: "from-blue-500 to-indigo-500",
      stats: "360° Insights"
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
          <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold">
            Advanced Features
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Next-Level Chiropractic Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your chiropractic practice with cutting-edge technology designed for spinal health professionals
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
    { value: 96, label: "Patient Satisfaction", suffix: "%" },
    { value: 42, label: "Efficiency Increase", suffix: "%" },
    { value: 22, label: "Revenue Growth", suffix: "%" },
    { value: 800, label: "Practices Served", suffix: "+" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/20 to-teal-600/20 animate-pulse"></div>
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
            Proven Chiropractic Success
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Our intelligent platform consistently delivers outstanding results for chiropractic practices worldwide
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
                  <span className="text-emerald-300">{stat.suffix}</span>
                </div>
                <div className="text-emerald-100 font-semibold text-lg">
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
      name: "Dr. Marcus Thompson",
      role: "Chiropractor & Practice Owner",
      company: "Elite Spine Center",
      content: "This platform has transformed how we approach spinal care. The AI analysis helps us provide more precise treatments and our patients love the results.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Mitchell",
      role: "Practice Manager",
      company: "Wellness Chiropractic Group",
      content: "The billing automation alone has saved us 15 hours per week. Our collections have improved dramatically since implementing this system.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Dr. James Rodriguez",
      role: "Sports Chiropractor",
      company: "Peak Performance Chiro",
      content: "Outstanding technology! The treatment tracking and patient outcome analytics have elevated our practice to a whole new level of excellence.",
      rating: 5,
      avatar: "JR"
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
          <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 rounded-full text-sm font-semibold">
            Success Stories
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Trusted by Leading Chiropractors
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
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
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
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-emerald-600 font-medium">{testimonial.company}</div>
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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)"
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
            <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold">
              🌟 Ready to Elevate Your Practice?
            </span>
            
            <h2 className="text-6xl font-bold text-white mt-8 mb-8 leading-tight">
              Start Your Premium
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Chiropractic Journey
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of successful chiropractic practices who have revolutionized their patient care and business operations with our intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl font-bold text-white text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
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
                    <Shield className="w-5 h-5 text-emerald-400" />
                    HIPAA Compliant & Secure
                  </div>
                  <p className="text-gray-300 text-sm">
                    Enterprise-grade security with complete healthcare compliance
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
const Chiropractic = () => {
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

export default Chiropractic; 