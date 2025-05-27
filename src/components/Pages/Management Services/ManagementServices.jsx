import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Users, FileText, CheckCircle, RefreshCw, PieChart } from 'lucide-react';

const services = [
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: 'Revenue Cycle Management',
    desc: 'End-to-end RCM solutions to maximize collections, reduce denials, and streamline your dental billing workflow.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Dental Consulting',
    desc: 'Expert consulting to optimize practice operations, compliance, and profitability.'
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: 'Insurance Verification',
    desc: 'Automated and manual insurance verification to ensure accurate claims and faster payments.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: 'Team Training',
    desc: 'Comprehensive training for your front desk and billing staff on best practices and new technologies.'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
    title: 'Patient Recare Program',
    desc: 'Keep your schedule full and patients coming back with automated recare and recall solutions.'
  },
  {
    icon: <PieChart className="w-8 h-8 text-primary" />,
    title: 'Analytics & Reporting',
    desc: 'Real-time dashboards and actionable insights to help you make data-driven decisions.'
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.7 } }
};

export default function ManagementServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-4 font-serif">Management Services</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Elevate your dental practice with our full suite of RCM and management services. We combine advanced technology, expert consulting, and hands-on support to help you grow, stay compliant, and deliver exceptional patient care.
      </p>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow border border-gray-100 group"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12)' }}
          >
            <div className="mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-primary font-serif">{service.title}</h2>
            <p className="text-gray-700 mb-2 flex-1">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 