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
      <section className="relative min-h-screen flex items-center justify-center bg-black/25 bg-blend-overlay" style={{ backgroundImage: 'url(/your-bg.jpg)', backgroundSize: 'cover' }}>
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Left: Pitch */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Why we are <span className="italic text-primary">different?</span>
            </h2>
            <p className="text-lg mb-6 font-light">
              We are the only outsourcing dental billing company which offers not only <span className="font-semibold italic">dental practice management</span> but also:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg font-light text-black">
              <li>Dental Billing – <span className="italic font-semibold">Billing team all USA based</span></li>
              <li>Patient Recare Program (new service)</li>
              <li>Dental Consulting</li>
              <li>Dental Practice Management Services</li>
              <li>Search Engine Optimization</li>
              <li>Website Design</li>
              <li>Team Training</li>
            </ul>
            <a href="/services" className="mt-8 inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary/90 transition">VISIT SERVICES PAGE</a>
          </div>
          {/* Right: Form */}
          <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-white/20 max-w-md w-full">
            <h3 className="text-4xl font-serif font-bold text-white mb-8 text-center">Get a quote</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Full Name *" className="w-full px-5 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Email *" className="w-full px-5 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="tel" placeholder="Phone No. *" className="w-full px-5 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" />
              <select className="w-full px-5 py-3 rounded-lg bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Service Needed*</option>
                <option>Dental Billing</option>
                <option>Practice Management</option>
                <option>SEO</option>
                <option>Website Design</option>
              </select>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-primary/90 transition">GET YOUR QUOTE NOW!</button>
            </form>
            <p className="text-center text-white/80 text-sm mt-6">We promise that your details are secure with us.</p>
          </div>
        </div>
      </section>
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