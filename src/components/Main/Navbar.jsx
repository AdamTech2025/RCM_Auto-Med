import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Brain } from "lucide-react";
import BookDemo from "../shared/BookDemo";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with id "${sectionId}" not found`);
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Navigation items shared between desktop and mobile
  const navItems = [
    { name: 'Home', id: 'home' },
    
    
    { name: 'Management Services', id: 'management-services' },
    { name: 'Dental CPA', id: 'dental-cpa' },
    { name: 'Rates', id: 'rates' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'Careers', id: 'careers' },
    { name: 'Blog', id: 'blog' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-lg shadow-lg py-2" 
        : "bg-white/40 backdrop-blur-md py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <motion.div 
            className="flex items-center cursor-pointer gap-3"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-primary via-blue-500 to-blue-600 rounded-xl relative overflow-hidden shadow-lg">
              <Activity className="w-6 h-6 text-white absolute opacity-20 -right-1 top-0 rotate-12" />
              <Brain className="w-6 h-6 text-white relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Adam Rev Max</span>
              <span className="text-xs text-primary font-medium -mt-1 tracking-wide">AI Healthcare Solutions</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button 
              key={item.name}
              onClick={() => scrollToSection(item.id)} 
              className="text-gray-700 hover:text-primary font-medium px-3 py-2 text-sm relative group whitespace-nowrap"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
          <div className="ml-4">
            <BookDemo 
              variant="default"
              className="px-5 py-2 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <motion.button 
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            className="text-gray-700 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-lg shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="px-3 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(item.id);
                    }}
                    className="text-gray-700 hover:text-primary font-medium block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="px-3 pt-2"
              >
                <BookDemo 
                  variant="default"
                  className="w-full justify-center py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;