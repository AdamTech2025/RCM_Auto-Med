import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, ChartBar } from "lucide-react";
import CountUp from 'react-countup';
import BlurText from "../UI/Blur";
import FluidBackground from "../UI/FluidBackground";
import logo1 from "../../assets/Athenahealth-Logo.wine.png";
import logo2 from "../../assets/headspace-logo.png";
import logo3 from "../../assets/IMedX_Logo.png";

export default function Hero() {
  return (
    <FluidBackground>

      {/* Premium, smooth info section */}
      <section className="bg-white/70 backdrop-blur-md py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-8">
            Adam Rev Max: <span className="italic font-black text-primary">AI-Powered Dental Revenue Automation</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-800 text-lg leading-relaxed mb-12">
            <div>
              <span className="font-bold italic text-primary">Adam Rev Max</span> is your all-in-one solution for dental billing, insurance verification, and practice management—powered by advanced AI. Automate claims, reduce costs, and boost productivity with seamless, secure technology trusted by modern dental practices.
            </div>
            <div>
              Focus on patient care while Adam Rev Max handles the revenue cycle. Our US-based team and AI-driven platform ensure accuracy, compliance, and faster payments. Experience the future of dental billing—today.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="/your-premium-image.jpg" alt="Adam Rev Max Platform" className="rounded-xl shadow-lg w-full max-w-xs mx-auto md:mx-0" />
            <div className="text-gray-800 text-lg leading-relaxed">
              No contracts, no hidden fees—just results. Adam Rev Max adapts to your workflow, scales with your practice, and delivers real-time analytics so you always know your numbers. Join the practices already maximizing revenue and minimizing stress.
            </div>
          </div>
          {/* Stats Section */}
          <div className="mt-16 bg-white/90 rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-gray-200 overflow-hidden">
            <div className="py-10 px-4">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUp end={320} duration={2} />+
              </div>
              <div className="uppercase text-xs tracking-widest text-gray-500">Practices Automated</div>
            </div>
            <div className="py-10 px-4">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUp end={1800} duration={2.5} />+
              </div>
              <div className="uppercase text-xs tracking-widest text-gray-500">Claims Processed</div>
            </div>
            <div className="py-10 px-4">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUp end={98} duration={2} />%
              </div>
              <div className="uppercase text-xs tracking-widest text-gray-500">Accuracy Rate</div>
            </div>
            <div className="py-10 px-4">
              <div className="text-5xl font-bold text-primary mb-2">
                <CountUp end={5} duration={1.5} />
              </div>
              <div className="uppercase text-xs tracking-widest text-gray-500">Years of Innovation</div>
            </div>
          </div>
        </div>
      </section>
    </FluidBackground>
  );
} 