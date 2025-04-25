import { motion } from 'framer-motion';
import { 
  LineChart, 
  ClipboardCheck, 
  Clock, 
  DollarSign,
  Shield,
  BarChart,
  Users,
  Award
} from 'lucide-react';

const features = [
  {
    icon: <LineChart className="w-12 h-12 text-primary" />,
    title: "Dental Practice Analytics",
    description: "Track dental procedure revenues, patient appointments, and insurance claim status in real-time with our intuitive analytics dashboard."
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
    title: "Automated Insurance Verification",
    description: "Streamline dental insurance eligibility verification and benefits checking with our automated system, reducing front desk workload by 85%."
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Faster Dental Claims Processing",
    description: "Reduce dental claim processing time by up to 75% with AI-powered validation and automated submission systems customized for dental procedures."
  },
  {
    icon: <DollarSign className="w-12 h-12 text-primary" />,
    title: "Dental Revenue Optimization",
    description: "Maximize reimbursements with intelligent procedure coding and dynamic pricing optimization for your dental practice."
  },
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Dental Compliance Assurance",
    description: "Stay compliant with automatic updates to dental CDT coding rules and regulatory requirements specific to dental practices."
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Practice Performance Metrics",
    description: "Track and improve key dental metrics including Days in AR, Clean Claim Rate, and Production-to-Collection Ratio."
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Dental Patient Engagement",
    description: "Enhance patient satisfaction with transparent dental billing processes and multiple payment options for procedures."
  },
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: "Best-in-Class Support",
    description: "24/7 expert support and continuous training to ensure maximum value from our dental practice management solution."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="text-sm text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Comprehensive Dental Practice Features
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything You Need for Dental Practice Excellence
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
