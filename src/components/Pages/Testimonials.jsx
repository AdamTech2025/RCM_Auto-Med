import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Medical Director, Valley Health Clinic",
    content: "The AI-powered RCM solution has transformed our billing process. We've seen a 40% reduction in claim denials and our revenue has increased significantly.",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "CEO, MedCare Solutions",
    content: "Outstanding platform! The automation capabilities have streamlined our operations and the analytics provide invaluable insights for decision-making.",
    rating: 5
  },
  {
    name: "Dr. Emily Chen",
    role: "Owner, Family Care Practice",
    content: "The implementation was smooth and the support team is exceptional. Our claims are processed faster and more accurately than ever before.",
    rating: 5
  }
];

export default function Testimonials() {
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
            Success Stories
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
