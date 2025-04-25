import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, ChartBar } from "lucide-react";
import BlurText from "../UI/Blur";
import FluidBackground from "../UI/FluidBackground";
import logo1 from "../../assets/Athenahealth-Logo.wine.png";
import logo2 from "../../assets/headspace-logo.png";
import logo3 from "../../assets/IMedX_Logo.png";

export default function Hero() {
  return (
    <FluidBackground>
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <motion.div 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-4">
                Transform Your Dental Practice with
              </h1>
              <span className="text-primary block">
                Automated Dental Coding & Billing AI
              </span>
            </motion.div>
            <motion.div 
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>Comprehensive dental practice management solutions powered by advanced AI technology</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center items-center gap-6"
            >
              <a 
                href="https://automed.adamtechnologies.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/30"
              >
                Try Now <ArrowRight className="w-4 h-4" />
              </a>
              {/* <button className="py-2 px-6 inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </button> */}
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col items-center gap-8 max-w-5xl mx-auto md:grid md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 w-full max-w-sm md:max-w-none text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Time</h3>
              <p className="text-gray-600">Automate dental claims and reduce front desk workload by up to 70%</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 w-full max-w-sm md:max-w-none text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reduce Costs</h3>
              <p className="text-gray-600">Cut dental billing expenses by 40% with automated insurance verification</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 w-full max-w-sm md:max-w-none text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ChartBar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Boost Efficiency</h3>
              <p className="text-gray-600">Improve patient care while increasing dental practice productivity</p>
            </div>
          </motion.div>

          {/* Social Proof */}
          {/* <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm text-gray-500 mb-4">Trusted by leading dental practices</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
              <img src={logo1} alt="Client Logo" className="h-16 md:h-28 object-contain" />
              <img src={logo2} alt="Client Logo" className="h-10 md:h-12 object-contain" />
              <img src={logo3} alt="Client Logo" className="h-10 md:h-12 object-contain" />
            </div>
          </motion.div> */}
        </div>
      </section>
    </FluidBackground>
  );
} 