import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import hipaaLogo from "../../../assets/hipaa_blue-3.webp";

export default function DemoCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-8"
            >
              🚀 Partner with Adam Billing Today
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Optimize Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Revenue Cycle?
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join thousands of healthcare practices who trust Adam Billing for comprehensive 
              RCM services including medical billing, claims processing, and revenue optimization.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://automed.adamtechnologies.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Start Adam Billing RCM Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="group bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 inline-flex items-center justify-center border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl">
                Free Adam Billing RCM Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            {/* HIPAA Compliance Section */}
            <motion.div 
              className="pt-12 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl">
                  <img 
                    src={hipaaLogo} 
                    alt="HIPAA Compliance" 
                    className="h-16 mx-auto mb-4"
                  />
                  <p className="text-gray-700 flex items-center justify-center gap-2 font-semibold text-lg mb-2">
                    <Shield className="w-6 h-6 text-green-500" />
                    HIPAA-Compliant Security & Privacy
                  </p>
                  <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
                    Adam Billing's RCM platform adheres to all HIPAA regulations, 
                    ensuring your patients' information remains secure and private at all times 
                    with enterprise-grade encryption and comprehensive security protocols.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Practices Trust Adam Billing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$3.2B+</div>
                <div className="text-gray-600">RCM Revenue Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">99.1%</div>
                <div className="text-gray-600">RCM Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 