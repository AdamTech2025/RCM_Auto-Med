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
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Integrations', id: 'integrations' },
    { name: 'Features', id: 'features' }
  ];

  return (
    <nav className={`fixed w-full backdrop-blur-sm z-50 py-4 transition-all duration-300 ${
      isScrolled ? "bg-white/90 shadow-sm" : "bg-white/50"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <motion.div 
            className="flex items-center cursor-pointer gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg relative overflow-hidden">
              <Activity className="w-6 h-6 text-white absolute opacity-20 -right-1 top-0 rotate-12" />
              <Brain className="w-6 h-6 text-white relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">Adam Rev Max</span>
              <span className="text-xs text-primary font-medium -mt-1">AI Healthcare Solutions</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.name}
              onClick={() => scrollToSection(item.id)} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {item.name}
            </button>
          ))}
          <BookDemo 
            variant="default"
            className="px-6 py-2"
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            className="text-black hover:text-black focus:outline-none focus:text-black p-2"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(item.id);
                    }}
                    className="text-black block w-full text-left px-3 py-2 rounded hover:bg-gray-200"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              
              {/* BookDemo in mobile menu */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="px-3 pt-2"
              >
                <BookDemo 
                  variant="default"
                  className="w-full justify-center"
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