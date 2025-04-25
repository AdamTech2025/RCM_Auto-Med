import { motion } from "framer-motion";
import { Code2, FileText, Shield, Stethoscope } from "lucide-react";
import FluidBackground from "../UI/FluidBackground";

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
    title: "DENTALCODING.AI",
    description: "Intelligent dental coding automation that assigns CDT and ICD-10 codes with AI precision, understanding clinical context for improved accuracy."
  },
  {
    id: "02",
    icon: <FileText className="w-8 h-8" />,
    title: "DENTALBILLING.AI",
    description: "Smart dental billing solutions that automate charge capture, insurance verification, and claim generation while predicting and preventing denials."
  },
  {
    id: "03",
    icon: <Shield className="w-8 h-8" />,
    title: "DENTALCOMPLIANCE.AI",
    description: "AI-driven compliance system that analyzes dental codes against insurance rules and regulatory guidelines, ensuring audit readiness."
  },
  {
    id: "04",
    icon: <Stethoscope className="w-8 h-8" />,
    title: "ORALCARE.AI",
    description: "Smart dental data extraction using specialized language processing to support treatment planning and clinical decision-making."
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
              Our Solutions
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2"
              variants={blurTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              AI-Powered Dental Practice APIs
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
