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
    title: "Adam Billing RCM Analytics",
    description: "Advanced revenue cycle management reporting and analytics that track A/R aging, payer performance, and denial trends to optimize your practice's financial performance."
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-primary" />,
    title: "Medical Billing Services",
    description: "Full-service medical billing and coding by certified professionals, ensuring accurate claim submission and maximum reimbursement for your healthcare practice."
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Claims Management",
    description: "Comprehensive claims processing and denial management services that reduce Days in A/R by 50% and increase first-pass claim acceptance rates."
  },
  {
    icon: <DollarSign className="w-12 h-12 text-primary" />,
    title: "Revenue Cycle Optimization",
    description: "Adam Billing's RCM experts analyze and optimize your entire revenue cycle, from patient registration to final payment collection and reporting."
  },
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "HIPAA Compliant RCM",
    description: "Secure, HIPAA-compliant revenue cycle management platform with advanced encryption and audit trails to protect patient data and ensure compliance."
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "RCM Performance Reporting",
    description: "Detailed RCM performance metrics and KPI tracking including collection rates, denial rates, and revenue per patient across all healthcare specialties."
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Patient Financial Services",
    description: "Comprehensive patient billing and payment solutions including payment plans, online portals, and transparent billing to improve patient satisfaction."
  },
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: "RCM Consulting & Support",
    description: "Dedicated RCM specialists provide ongoing support, training, and strategic guidance to maximize your practice's revenue potential and operational efficiency."
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
            Adam Billing RCM Services & Solutions
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Complete Revenue Cycle Management Solutions
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
