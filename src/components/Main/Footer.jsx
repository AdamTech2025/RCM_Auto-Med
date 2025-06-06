import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Shield,
  Activity,
  Brain,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';
import Aurora from '../UI/Aurora';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: {
      title: "RCM Services",
      links: [
        { name: "Medical Billing", path: "/services/medical-billing" },
        { name: "Revenue Cycle Management", path: "/services/rcm" },
        { name: "Medical Coding", path: "/services/coding" },
        { name: "Claims Processing", path: "/services/claims" }
      ]
    },
    specialties: {
      title: "Specialties",
      links: [
        { name: "Dental", path: "/dental" },
        { name: "Medical", path: "/medical" },
        { name: "Physical Therapy", path: "/physical-therapy" },
        { name: "Mental Health", path: "/mental-health" },
        { name: "Optometry", path: "/optometry" },
        { name: "Chiropractic", path: "/chiropractic" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact Us", path: "/contact" },
        { name: "Blog", path: "/blog" }
      ]
    }
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/adamrevmax" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/adamrevmax" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/adamrevmax" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/adamrevmax" }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["1111B S Governors Ave STE 34259", "Dover, DE 19904"]
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["+1 (929) 556-4455"]
    },
    {
      icon: Mail,
      title: "Email",
      content: ["techtitanadamtechnologies.in"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Mon - Fri: 9:00 AM - 6:00 PM EST"]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.7}
          amplitude={0.8}
          speed={0.3}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/60"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Company Info - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-xl shadow-lg relative overflow-hidden">
                    <Activity className="w-6 h-6 text-white absolute opacity-20 -right-1 top-0 rotate-12" />
                    <Brain className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">Adam Rev Max</span>
                    <span className="text-sm text-blue-300 font-medium -mt-1 tracking-wide">AI Healthcare Solutions</span>
                  </div>
                </Link>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Leading RCM company providing comprehensive revenue cycle management services 
                  with AI-powered medical billing and coding automation for healthcare practices.
                </p>

                {/* HIPAA Badge */}
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="font-semibold text-white">HIPAA Compliant</p>
                    <p className="text-xs text-slate-300">Your data is secure and protected</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Navigation Links - 4 columns */}
            <div className="lg:col-span-4">
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(footerSections).map(([key, section], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="font-bold text-white mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.path}
                            className="text-slate-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                          >
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-1" />
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                              {link.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info - 3 columns */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-blue-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm mb-1">{info.title}</p>
                          {info.content.map((line, i) => (
                            <p key={i} className="text-slate-300 text-xs leading-relaxed">{line}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-300 text-sm"
              >
                <p>&copy; {currentYear} Adam Rev Max. All rights reserved.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-6 text-slate-300 text-sm"
              >
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/hipaa" className="hover:text-white transition-colors duration-200">
                  HIPAA Compliance
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 