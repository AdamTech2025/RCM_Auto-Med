import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: "Multi-Location Healthcare Group",
    challenge: "Managing complex medical billing across 8 locations with high insurance denial rates",
    solution: "Implemented AI-powered healthcare billing system with centralized dashboard",
    results: [
      { icon: <TrendingUp />, text: "42% reduction in medical claim denials" },
      { icon: <Clock />, text: "65% faster insurance processing" },
      { icon: <DollarSign />, text: "12% increase in practice revenue" }
    ]
  },
  {
    title: "Small Healthcare Practices",
    challenge: "Manual coding process leading to errors and delayed insurance payments",
    solution: "Automated CPT/ICD-10 coding with AI and real-time verification",
    results: [
      { icon: <TrendingUp />, text: "96% clean claim rate" },
      { icon: <Clock />, text: "78% reduction in administrative workload" },
      { icon: <DollarSign />, text: "9% increase in collections from insurance" }
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
            Healthcare Practice Success Stories
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real Results from Real Healthcare Practices
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
