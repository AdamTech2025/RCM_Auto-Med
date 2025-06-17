import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Brain, Menu, X, ChevronDown } from "lucide-react";
import BookDemo from "../shared/BookDemo";

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    path: '/services',
    hasDropdown: true,
    subItems: [
      { name: 'Dental', path: '/dental' },
      { name: 'Pain Management', path: '/pain-management' },
      { name: 'Physical Therapy', path: '/physical-therapy' },
      { name: 'Mental Health', path: '/mental-health' },
      { name: 'Optometry', path: '/optometry' },
      { name: 'Chiropractic', path: '/chiropractic' }
    ]
  },
  // { name: 'Management Services', path: '/management-services' },
  // { name: 'Dental CPA', path: '/dental-cpa' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Animate hamburger icon
  const HamburgerIcon = ({ open }) => (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 rounded-lg bg-white/80 hover:bg-primary/10 transition flex items-center justify-center"
      aria-label="Toggle menu"
      whileTap={{ scale: 0.95 }}
    >
      {open ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7 text-primary" />}
    </motion.button>
  );

  const handleDropdownClick = (e, itemName) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-white/60 backdrop-blur-md"}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-3">
          {/* <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary via-blue-500 to-blue-600 rounded-xl shadow-lg relative overflow-hidden">
            <Activity className="w-6 h-6 text-white absolute opacity-20 -right-1 top-0 rotate-12" />
            <Brain className="w-6 h-6 text-white relative z-10" />
          </div> */}
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Adam Billing</span>
            <span className="text-xs text-primary font-medium -mt-1 tracking-wide">AI Healthcare Solutions</span>
          </div>
        </NavLink>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-2">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={(e) => handleDropdownClick(e, item.name)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-1 ${
                      activeDropdown === item.name ? 'bg-primary/10 text-primary shadow' : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg shadow-lg rounded-lg border border-gray-200/50 py-2"
                      >
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary shadow' : 'text-gray-700 hover:text-primary hover:bg-primary/5'}`
                  }
                  end={item.path === '/'}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="hidden lg:flex items-center ml-6">
          <BookDemo 
            variant="default"
            className="px-6 py-2 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
          />
        </div>
        
        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <HamburgerIcon open={isOpen} />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg shadow-lg rounded-b-2xl px-4 pt-2 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={(e) => handleDropdownClick(e, `mobile-${item.name}`)}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 flex items-center justify-between ${
                          activeDropdown === `mobile-${item.name}` ? 'bg-primary/10 text-primary shadow' : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === `mobile-${item.name}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {item.subItems.map((subItem) => (
                              <NavLink
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {subItem.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary shadow' : 'text-gray-700 hover:text-primary hover:bg-primary/5'}`
                      }
                      end={item.path === '/'}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <div className="mt-4">
                <BookDemo 
                  variant="default"
                  className="w-full justify-center py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-base font-semibold"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;