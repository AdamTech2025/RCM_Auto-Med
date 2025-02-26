import { motion } from "framer-motion";
import { 
  FaAmazon,
  FaWindows,
  FaDatabase,
  FaGoogle,
  FaCloud,
  FaVideo,
  FaGamepad,
  FaCode,
  FaRobot,
  FaSlack,
  FaPhone,
  FaCreditCard
} from "react-icons/fa";

export default function Integrations() {
  const integrations = [
    { icon: FaAmazon, name: "Amazon AWS", color: "#FF9900" },
    { icon: FaWindows, name: "Microsoft Azure", color: "#0078D4" },
    { icon: FaDatabase, name: "Oracle Cloud", color: "#F80000" },
    { icon: FaGoogle, name: "Google Cloud", color: "#4285F4" },
    { icon: FaCloud, name: "Salesforce", color: "#00A1E0" },
    { icon: FaVideo, name: "Zoom", color: "#2D8CFF" },
    { icon: FaGamepad, name: "Epic", color: "#313131" },
    { icon: FaCode, name: "Webflow", color: "#4353FF" },
    { icon: FaRobot, name: "OpenAI", color: "#412991" },
    { icon: FaSlack, name: "Slack", color: "#4A154B" },
    { icon: FaPhone, name: "Twilio", color: "#F22F46" },
    { icon: FaCreditCard, name: "Stripe", color: "#635BFF" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="integrations" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm text-primary font-medium px-4 py-2 bg-primary/10 rounded-full inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Seamless Integrations
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Adam Technologies integrates with your practice management software
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Connect with all your favorite tools and platforms to streamline your dental practice workflow
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {integrations.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
            >
              <div className="relative mb-3 p-3 rounded-full bg-gray-50">
                <item.icon className="w-8 h-8" style={{ color: item.color }} />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="text-primary font-medium hover:underline inline-flex items-center group"
          >
            <span className="group-hover:translate-x-[-4px] transition-transform">Request custom integration</span>
            <svg 
              className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 