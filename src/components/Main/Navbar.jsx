import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Management Services', path: '/management-services' },
    { name: 'Dental CPA', path: '/dental-cpa' },
    { name: 'Rates', path: '/rates' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' }
  ];

  const commonLinkClasses = "font-medium px-3 py-2 text-sm relative group whitespace-nowrap";
  const activeLinkClass = "text-primary";
  const inactiveLinkClass = "text-gray-700 hover:text-primary";

  const getNavLinkClass = ({ isActive }) => 
    `${commonLinkClasses} ${isActive ? activeLinkClass : inactiveLinkClass}`;

  const getMobileNavLinkClass = ({ isActive }) => 
    `font-medium block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${isActive ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg py-2" : "bg-white/40 backdrop-blur-md py-4"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to="/">
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
        </NavLink>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `${commonLinkClasses} ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
              end={item.path === '/'}
            >
              {({ isActive: isNavLinkActive }) => (
                <motion.div
                  className="relative"
                  initial="rest"
                  whileHover="hover"
                  animate={isNavLinkActive ? "active" : "rest"}
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -1 },
                    active: { y: 0 },
                  }}
                  transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    style={{ originX: 0 }}
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                      active: { scaleX: 1 }
                    }}
                    transition={{ type: "tween", duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  />
                </motion.div>
              )}
            </NavLink>
          ))}
          <div className="ml-4">
            <BookDemo 
              variant="default"
              className="px-5 py-2 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>
        </div>

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
                  <NavLink 
                    to={item.path} 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    className={getMobileNavLinkClass}
                    end={item.path === '/'}
                  >
                    {item.name}
                  </NavLink>
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