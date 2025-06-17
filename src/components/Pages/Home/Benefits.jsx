import { motion } from 'framer-motion';
import CountUp from '../../UI/CountUp';
import ScrollReveal from '../../UI/ScrollReveal';

const benefits = [
  {
    stat: 98,
    title: "Clean Claim Rate",
    description: "Adam Billing achieves industry-leading clean claim rates with expert medical coding and comprehensive claim scrubbing across all specialties."
  },
  {
    stat: 65,
    title: "Reduced A/R Days",
    description: "Our RCM services significantly decrease Days in A/R through proactive denial management and aggressive follow-up on outstanding claims."
  },
  {
    stat: 25,
    title: "Revenue Increase",
    description: "Adam Billing clients experience an average 25% increase in collections within 6 months through optimized RCM processes and expert billing."
  },
  {
    stat: 85,
    title: "Administrative Cost Reduction",
    description: "Reduce billing-related administrative costs by up to 85% by outsourcing your RCM to Adam Billing's expert team of billing professionals."
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
            Adam Billing RCM Results & ROI
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Proven Revenue Cycle Management Results
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Adam Billing's comprehensive RCM services deliver measurable results that directly increase your practice's revenue and reduce operational costs
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
          <p className="text-sm text-gray-500">*Based on average Adam Billing client results after implementing our RCM services</p>
        </motion.div>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={-3}
          blurStrength={6}
          containerClassName="text-center py-12 mt-12"
        >
          Adam Billing: Trusted by leading healthcare practices nationwide for expert RCM services
        </ScrollReveal>
      </div>
    </section>
  );
}
