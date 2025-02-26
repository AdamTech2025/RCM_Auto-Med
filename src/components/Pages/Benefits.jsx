import { motion } from 'framer-motion';
import CountUp from '../UI/CountUp';

const benefits = [
  {
    stat: 95,
    title: "Clean Claim Rate",
    description: "Achieve industry-leading first-pass claim acceptance rates with our AI-powered validation."
  },
  {
    stat: 60,
    title: "Reduced A/R Days",
    description: "Significantly decrease your Days in A/R with automated follow-up and denial management."
  },
  {
    stat: 30,
    title: "Revenue Increase",
    description: "Our clients see an average of 30% increase in revenue within the first 6 months."
  },
  {
    stat: 85,
    title: "Time Saved",
    description: "Reduce manual work by up to 85% with our automated RCM workflows."
  }
];

export default function Benefits() {
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
            ROI & Benefits
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Maximize Your Revenue Potential
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our AI-powered RCM solution delivers measurable results that directly impact your bottom line
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-primary inline-flex items-baseline">
                  <CountUp
                    from={0}
                    to={benefit.stat}
                    duration={1}
                    className="tabular-nums"
                  />
                  <span>%</span>
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500">*Based on average customer results after implementing our RCM solution</p>
        </motion.div>
      </div>
    </section>
  );
}
