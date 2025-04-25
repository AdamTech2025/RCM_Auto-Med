import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: "Multi-Location Dental Group",
    challenge: "Managing complex dental billing across 6 locations with high insurance denial rates",
    solution: "Implemented AI-powered dental billing system with centralized dashboard",
    results: [
      { icon: <TrendingUp />, text: "45% reduction in dental claim denials" },
      { icon: <Clock />, text: "60% faster dental insurance processing" },
      { icon: <DollarSign />, text: "10% increase in practice revenue" }
    ]
  },
  {
    title: "Small Dental Practices",
    challenge: "Manual coding process leading to errors and delayed insurance payments",
    solution: "Automated CDT coding with AI and real-time verification",
    results: [
      { icon: <TrendingUp />, text: "95% clean dental claim rate" },
      { icon: <Clock />, text: "75% reduction in front desk workload" },
      { icon: <DollarSign />, text: "8% increase in collections from insurance" }
    ]
  }
];

export default function CaseStudies() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="text-sm text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dental Practice Success Stories
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real Results from Real Dental Practices
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700">Challenge:</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Results:</h4>
                {study.results.map((result, i) => (
                  <div key={i} className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">{result.icon}</span>
                    {result.text}
                  </div>
                ))}
              </div>
              <motion.button
                className="mt-6 flex items-center text-primary font-medium hover:underline"
                whileHover={{ x: 5 }}
              >
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
