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
    title: "Real-time Analytics",
    description: "Track key performance indicators, revenue trends, and claim status in real-time with our intuitive analytics dashboard."
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
    title: "Automated Verification",
    description: "Streamline eligibility verification and benefits checking with our automated system, reducing manual workload by 85%."
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Faster Claims Processing",
    description: "Reduce claim processing time by up to 75% with AI-powered validation and automated submission systems."
  },
  {
    icon: <DollarSign className="w-12 h-12 text-primary" />,
    title: "Revenue Optimization",
    description: "Maximize reimbursements with intelligent charge capture and dynamic pricing optimization."
  },
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Compliance Assurance",
    description: "Stay compliant with automatic updates to coding rules and regulatory requirements."
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Performance Metrics",
    description: "Track and improve key RCM metrics including Days in AR, Clean Claim Rate, and Collection Rate."
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Patient Engagement",
    description: "Enhance patient satisfaction with transparent billing processes and multiple payment options."
  },
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: "Best-in-Class Support",
    description: "24/7 expert support and continuous training to ensure maximum value from our RCM solution."
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
            Comprehensive RCM Features
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything You Need for Revenue Cycle Excellence
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
