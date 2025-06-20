import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Shield,
  Activity,
  Brain,
  ChevronRight,
  ChevronUp,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';
import Aurora from '../UI/Aurora';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle footer link clicks with scroll to top
  const handleFooterLinkClick = () => {
    scrollToTop();
  };

  const footerSections = {
    services: {
      title: "Our Services",
      links: [
        { name: "Dental", path: "/dental" },
        { name: "Pain Management", path: "/pain-management" },
        { name: "Physical Therapy", path: "/physical-therapy" },
        { name: "Mental Health", path: "/mental-health" },
        { name: "Optometry", path: "/optometry" },
        { name: "Chiropractic", path: "/chiropractic" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Contact Support", path: "/contact" },
        { name: "Join Our Team", path: "/careers" },
        { name: "Latest Updates", path: "/blog" }
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
                    <span className="text-2xl font-bold text-white">Adam Billing</span>
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
                            onClick={handleFooterLinkClick}
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
                <p>&copy; {currentYear} Adam Billing. All rights reserved.</p>
              </motion.div>
              
              <div className="flex items-center gap-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-6 text-slate-300 text-sm"
                >
                  <Link 
                    to="/contact" 
                    onClick={handleFooterLinkClick}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact Support
                  </Link>
                  <Link 
                    to="/careers" 
                    onClick={handleFooterLinkClick}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Join Our Team
                  </Link>
                  <Link 
                    to="/blog" 
                    onClick={handleFooterLinkClick}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Latest Updates
                  </Link>
                </motion.div>

                <div>
                  {/* Footer Scroll to Top Button */}
                  <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                    aria-label="Scroll to top"
                  >
                    <ChevronUp className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-200" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-white group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer; 