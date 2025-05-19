import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, ChartBar } from "lucide-react";
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
    </FluidBackground>
  );
} 