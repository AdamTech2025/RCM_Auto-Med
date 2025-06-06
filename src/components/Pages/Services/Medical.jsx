import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, TrendingUp, Briefcase, Users, BarChartBig, ShieldCheck, 
         LineChart, ClipboardCheck, Clock, DollarSign, Shield, BarChart, Award,
         Code2, FileText, ArrowRight, Star, TrendingUp as TrendingUpIcon, 
         Brain, Activity, Zap, Heart, CheckCircle2, Play, Eye, Target } from "lucide-react";
import CountUp from '../../UI/CountUp';
import hipaaLogo from "../../../assets/hipaa_blue-3.webp";
import BookDemo from "../../../components/shared/BookDemo";

// Premium Hero Section
const PremiumHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
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
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium">
                🚀 Next-Gen Pain Management
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Pain Management</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              Transform your pain clinic with AI-powered automation, intelligent compliance monitoring, and precision billing that delivers exceptional outcomes for both providers and patients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                { number: "500+", label: "Pain Clinics" },
                { number: "94%", label: "Approval Rate" },
                { number: "$2M+", label: "Revenue Increased" },
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">AI Pain Analytics</h3>
                  </div>

                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Claim Processing</span>
                      <span className="text-green-400 font-semibold">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Prior Auth Speed</span>
                      <span className="text-blue-400 font-semibold">-70%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Revenue Growth</span>
                      <span className="text-purple-400 font-semibold">+18%</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                    <div className="flex items-center gap-2 text-green-400 font-semibold">
                      <CheckCircle2 className="w-5 h-5" />
                      DEA Compliant
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-xl rounded-2xl shadow-xl"
              >
                <Target className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 p-4 bg-gradient-to-r from-blue-500/90 to-cyan-500/90 backdrop-blur-xl rounded-2xl shadow-xl"
              >
                <Zap className="w-6 h-6 text-white" />
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
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Coding",
      description: "Intelligent automation assigns perfect ICD-10 and CPT codes with 99.3% accuracy.",
      color: "from-purple-500 to-pink-500",
      stats: "99.3% Accuracy"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DEA Compliance Suite",
      description: "Comprehensive compliance monitoring with automated PDMP integration and reporting.",
      color: "from-blue-500 to-cyan-500",
      stats: "100% Compliant"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Processing",
      description: "Process complex pain management claims 70% faster with intelligent validation.",
      color: "from-green-500 to-emerald-500",
      stats: "70% Faster"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Analytics",
      description: "Advanced pain outcome tracking with predictive insights and patient monitoring.",
      color: "from-orange-500 to-red-500",
      stats: "Real-time Insights"
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
          <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold">
            Premium Features
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Next-Generation Pain Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of pain clinic operations with our revolutionary AI-powered platform
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
    { value: 94, label: "First-Pass Approval", suffix: "%" },
    { value: 70, label: "Faster Processing", suffix: "%" },
    { value: 18, label: "Revenue Increase", suffix: "%" },
    { value: 500, label: "Pain Clinics Served", suffix: "+" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse"></div>
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
            Delivering Exceptional Results
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our AI-powered platform consistently delivers industry-leading performance metrics
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
                  <span className="text-purple-300">{stat.suffix}</span>
                </div>
                <div className="text-purple-100 font-semibold text-lg">
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
      name: "Dr. Sarah Chen",
      role: "Pain Management Specialist",
      company: "Elite Pain Institute",
      content: "This platform has revolutionized our practice. The AI accuracy is incredible and our revenue has increased by 25% in just 6 months.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Practice Administrator",
      company: "Advanced Pain Solutions",
      content: "The compliance features alone are worth the investment. We've passed every audit with flying colors since implementation.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Jennifer Walsh",
      role: "Interventional Pain Physician",
      company: "Comprehensive Pain Center",
      content: "Outstanding support and incredible results. Our prior authorization times have decreased by 80%. Highly recommended!",
      rating: 5,
      avatar: "JW"
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
          <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-semibold">
            Client Success Stories
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Trusted by Leading Pain Specialists
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
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)"
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
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold">
              🚀 Ready to Transform Your Practice?
            </span>
            
            <h2 className="text-6xl font-bold text-white mt-8 mb-8 leading-tight">
              Start Your Premium
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pain Management Journey
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of leading pain management clinics who have already transformed their practice with our revolutionary AI platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-white text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
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
                    <Shield className="w-5 h-5 text-green-400" />
                    HIPAA & DEA Compliant
                  </div>
                  <p className="text-gray-300 text-sm">
                    Enterprise-grade security with complete regulatory compliance
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
const PainManagement = () => {
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

export default PainManagement; 