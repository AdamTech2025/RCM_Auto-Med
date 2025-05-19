import { motion } from "framer-motion";
import { Stethoscope, TrendingUp, Briefcase, Users, BarChartBig, ShieldCheck } from "lucide-react";

export default function Hero() {
  const benefits = [
    {
      icon: <Stethoscope className="h-8 w-8 text-primary" />,
      line1: "Improve your",
      line2: "patient experience",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      line1: "Increase",
      line2: "your revenue",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      line1: "Elevate your",
      line2: "business office",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      line1: "Empower your",
      line2: "staff productivity",
    },
    {
      icon: <BarChartBig className="h-8 w-8 text-primary" />,
      line1: "Unlock data-driven",
      line2: "decision making",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      line1: "Strengthen your",
      line2: "compliance & security",
    },
  ];

  return (
    <section className=" py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Text Content & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-8 leading-tight">
              Reimagine your <br /> Revenue Cycle.
            </h1>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              Powered by intelligent automation, proven methods, and experienced
              professionals, our RCM solutions are purpose-built to help you
              improve performance.
            </p>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              Through partnership with Cognizant, you can improve your
              financial results quickly and advance every aspect of your
              business office with digital. With a strong business office and
              trusted partner, you can focus on delivering amazing care.
            </p>
            <p className="text-slate-600 text-md mb-10">
              The future of healthcare is evolving. Are you ready for the
              change?
            </p>
            <motion.a
              href="contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4 px-10 rounded-md text-lg uppercase tracking-wider shadow-lg transition-colors duration-300 inline-block text-center"
            >
              SHOW ME THE FUTURE
            </motion.a>
          </motion.div>

          {/* Right Column: Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 md:mt-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
              {/* Left Column of Benefits */}
              <div className="space-y-10">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={`benefit-left-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className="flex items-center"
                  >
                    <div className="bg-white p-4 rounded-full shadow-xl border-2 border-primary flex-shrink-0 mr-5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {benefit.line1}
                      </h4>
                      <p className="text-slate-600 text-base">{benefit.line2}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column of Benefits */}
              <div className="space-y-10">
                {benefits.slice(3, 6).map((benefit, index) => (
                  <motion.div
                    key={`benefit-right-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index + 3) * 0.2 }}
                    className="flex items-center"
                  >
                    <div className="bg-white p-4 rounded-full shadow-xl border-2 border-primary flex-shrink-0 mr-5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {benefit.line1}
                      </h4>
                      <p className="text-slate-600 text-base">{benefit.line2}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 