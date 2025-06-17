import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import BookDemo from '../../shared/BookDemo';
import FluidBackground from '../../UI/FluidBackground';

const plans = [
  {
    name: "Starter",
    price: "Contact Us",
    description: "Perfect for small practices",
    features: [
      "AI-powered medical coding",
      "Basic claim processing",
      "Eligibility verification",
      "24/7 support",
      "Basic analytics dashboard"
    ]
  },
  {
    name: "Professional",
    price: "Contact Us",
    description: "Ideal for growing healthcare providers",
    features: [
      "Everything in Starter, plus:",
      "Advanced denial management",
      "Custom workflows",
      "Revenue forecasting",
      "Priority support",
      "Advanced analytics & reporting"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "For large healthcare organizations",
    features: [
      "Everything in Professional, plus:",
      "Custom API integration",
      "Dedicated account manager",
      "Custom training program",
      "Multi-location support",
      "Enterprise-level security"
    ]
  }
];

export default function Pricing() {
  return (
    <FluidBackground>
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              className="text-sm text-primary font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Adam Billing RCM Pricing
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Transparent RCM Service Pricing
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Choose the perfect Adam Billing RCM solution for your practice size and needs
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Starter RCM</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">4-6%</span>
                <span className="text-gray-600"> of collections</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Professional medical billing
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Claims processing & follow-up
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Basic RCM reporting
                </li>
              </ul>
              <BookDemo variant="default" className="w-full" />
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary shadow-lg relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete RCM</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">3-5%</span>
                <span className="text-gray-600"> of collections</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Full RCM services
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Denial management & appeals
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Patient billing support
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Advanced RCM analytics
                </li>
              </ul>
              <BookDemo variant="default" className="w-full" />
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Enterprise RCM</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-gray-600"> pricing</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Multi-location RCM
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Dedicated RCM team
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  24/7 dedicated support
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Check className="text-primary" size={20} />
                  Custom EHR integrations
                </li>
              </ul>
              <BookDemo variant="default" className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>
    </FluidBackground>
  );
}
