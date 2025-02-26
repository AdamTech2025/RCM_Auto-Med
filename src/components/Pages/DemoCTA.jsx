import { motion } from "framer-motion";
import BookDemo from "../shared/BookDemo";
import Aurora from '../UI/Aurora';

export default function DemoCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Aurora Background - positioned at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[80%] rotate-180">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-lg md:text-xl text-black/80 mb-8">
              Join thousands of healthcare providers who have already optimized their revenue cycle with our AI-powered solution.
            </p>
            <BookDemo 
              variant="secondary"
              className="text-primary bg-white hover:bg-gray-100 px-8 py-3 text-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 