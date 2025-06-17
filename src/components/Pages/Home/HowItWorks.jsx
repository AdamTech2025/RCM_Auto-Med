import { motion } from "framer-motion";
import { Code2, FileText, Shield, Stethoscope } from "lucide-react";
import FluidBackground from "../../UI/FluidBackground";

const blurTextVariants = {
  hidden: { 
    filter: "blur(10px)",
    opacity: 0,
    y: 20 
  },
  visible: { 
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const steps = [
  {
    id: "01",
    icon: <Code2 className="w-8 h-8" />,
    title: "Expert Medical Coding",
    description: "Adam Billing's certified medical coders ensure accurate CPT, ICD-10, and HCPCS code assignment with comprehensive clinical documentation review across all specialties."
  },
  {
    id: "02",
    icon: <FileText className="w-8 h-8" />,
    title: "Professional Medical Billing",
    description: "Comprehensive RCM services including charge capture, insurance verification, claim submission, and denial management by Adam Billing's experienced billing specialists."
  },
  {
    id: "03",
    icon: <Shield className="w-8 h-8" />,
    title: "RCM Compliance Management",
    description: "Adam Billing ensures full regulatory compliance with HIPAA, Medicare, and insurance requirements while maintaining audit-ready documentation and reporting."
  },
  {
    id: "04",
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Revenue Cycle Analytics",
    description: "Advanced RCM reporting and analytics that provide insights into practice performance, payer trends, and revenue optimization opportunities."
  }
];

export default function HowItWorks() {
  return (
    <FluidBackground>
      <section id="how-it-works" className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span 
              className="text-sm text-primary font-medium"
              variants={blurTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Adam Billing RCM Process
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2"
              variants={blurTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              How Adam Billing Optimizes Your Revenue Cycle
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-primary mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FluidBackground>
  );
}
