import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Aurora from '../UI/Aurora';
import hipaaLogo from "../../assets/hipaa_blue-3.webp";

export default function DemoCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Aurora Background - positioned at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[80%] rotate-180">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center mb-80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to Transform Your Dental Practice?
            </h2>
            <p className="text-lg md:text-xl text-black/80 mb-8">
              Join thousands of dental practices who have already optimized their billing and coding with our AI-powered solution.
            </p>
            <a 
              href="https://automed.adamtechnologies.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-white hover:bg-gray-100 text-primary py-3 px-8 rounded-lg font-medium inline-flex items-center gap-2 transition-all shadow-xl text-lg"
            >
              Try Now <ArrowRight className="w-4 h-4" />
            </a>
            
            {/* HIPAA Compliance Section */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center justify-center">
                <img 
                  src={hipaaLogo} 
                  alt="HIPAA Compliance" 
                  className="h-24 mb-4"
                />
                <p className="text-gray-700 flex items-center gap-2 font-medium">
                  <Shield className="w-5 h-5 text-primary" />
                  Your patient data is protected with HIPAA-compliant security
                </p>
                <p className="text-sm text-gray-500 mt-2 max-w-md">
                  Our dental practice software adheres to all HIPAA regulations, ensuring your patients' information remains secure and private at all times.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 