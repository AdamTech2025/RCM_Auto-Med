import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, TrendingUp, Briefcase, Users, BarChartBig, ShieldCheck, ArrowRight, PlayCircle, CheckCircle } from "lucide-react";
import BookDemo from "../../shared/BookDemo";

export default function Hero() {
  const benefits = [
    {
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      line1: "Optimize patient",
      line2: "billing experience",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      line1: "Maximize",
      line2: "RCM revenue",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-white" />,
      line1: "Streamline",
      line2: "billing operations",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      line1: "Reduce",
      line2: "administrative burden",
    },
    {
      icon: <BarChartBig className="h-6 w-6 text-white" />,
      line1: "Advanced",
      line2: "revenue analytics",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      line1: "HIPAA-compliant",
      line2: "RCM security",
    },
  ];

  const stats = [
    { number: "95%", label: "First-Pass Claim Rate" },
    { number: "60%", label: "Faster Processing" },
    { number: "18%", label: "Revenue Increase" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-sm"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-6 h-6 bg-purple-400/20 rounded-full"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -10, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-3 h-8 bg-indigo-400/20 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-900"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-8"
            >
              <span className="text-blue-600 text-sm font-medium mr-2">🏆 #1 RCM Company</span>
              <span className="text-gray-600 text-sm">Trusted by 10,000+ Practices</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform Your Healthcare{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Revenue Cycle
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Leading RCM company providing AI-powered medical billing, coding automation, 
              and claims processing that reduces denials by 40% and accelerates payments.
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {["AI-Powered Billing", "99.9% Uptime", "HIPAA Compliant"].map((feature, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Get Free RCM Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <BookDemo
                variant="secondary"
                className="group bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 inline-flex items-center justify-center border border-gray-200 hover:border-gray-300"
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </BookDemo>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Benefits Container */}
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              
              {/* Benefits Grid */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                          {benefit.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {benefit.line1}
                        </h4>
                        <p className="text-gray-600 text-sm">{benefit.line2}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom highlight */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center text-center">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full p-2 mr-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-black font-medium">Trusted by Healthcare Leaders Nationwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-20 blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0] 
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 