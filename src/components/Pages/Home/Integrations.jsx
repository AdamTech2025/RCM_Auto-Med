import { motion } from "framer-motion";

// Import software logo images
import advancedmdLogo from "../../../assets/software_logo/advancedmd-13.png";
import kareoLogo from "../../../assets/software_logo/kareo-vector-logo-12.png";
import healthCatalystLogo from "../../../assets/software_logo/Health Catalyst_id-5vxVlAM_0.png";
import practicesuiteLogo from "../../../assets/software_logo/practicesuite-11.jpg";
import ecatalystLogo from "../../../assets/software_logo/ecatalysthealthcaresolutions_logo_9.jpg";
import idsLogo from "../../../assets/software_logo/idsHW_ROR6_logos.png";
import trubridgeLogo from "../../../assets/software_logo/trubridge-7.png";
import idsSecondLogo from "../../../assets/software_logo/idDZeKb98G_logos.png";
import epicLogo from "../../../assets/software_logo/epic-systems-4.png";
import cernerLogo from "../../../assets/software_logo/cerner-corporation-3.png";
import optumLogo from "../../../assets/software_logo/optum-logo-2.png";
import threeMlogo from "../../../assets/software_logo/3m_logo-1.png";

export default function Integrations() {
  const integrations = [
    { logo: advancedmdLogo, name: "AdvancedMD" },
    { logo: kareoLogo, name: "Kareo" },
    { logo: healthCatalystLogo, name: "Health Catalyst" },
    { logo: practicesuiteLogo, name: "PracticeSuite" },
    { logo: ecatalystLogo, name: "eCatalyst Healthcare" },
    { logo: idsLogo, name: "IDS" },
    { logo: trubridgeLogo, name: "TruBridge" },
    { logo: idsSecondLogo, name: "IDS Solutions" },
    { logo: epicLogo, name: "Epic Systems" },
    { logo: cernerLogo, name: "Cerner" },
    { logo: optumLogo, name: "Optum" },
    { logo: threeMlogo, name: "3M" }
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
            Our Software integrates with your practice management software
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Connect with all your favorite tools and platforms to streamline your healthcare practice workflow across all specialties
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
              <div className="flex items-center justify-center h-16 mb-3">
                <img 
                  src={item.logo} 
                  alt={`${item.name} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
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