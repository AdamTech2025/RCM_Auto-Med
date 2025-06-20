import PropTypes from 'prop-types';
import { Button } from "./Button";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Mail, Calendar, AlertCircle, ExternalLink } from 'lucide-react';

// Simple Calendly Configuration
const CALENDLY_URL = 'https://calendly.com/techtitanadamtechnologies';

export default function BookDemo({ variant = "default", className = "", children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) {
      setError('Please fill in all fields');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Open Calendly in new tab with prefilled data
    const calendlyUrl = `${CALENDLY_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
    window.open(calendlyUrl, '_blank');
    
    // Close modal and reset form
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    setEmail('');
    setName('');
    setError('');
  };

  // If custom className is provided, use a custom button element
  // Otherwise use the default Button component
  const ButtonElement = className ? (
    <motion.button
      onClick={() => setIsOpen(true)}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children || "Book a Demo"}
    </motion.button>
  ) : (
    <Button 
      onClick={() => setIsOpen(true)}
      variant={variant}
      className={className}
    >
      {children || "Book a Demo"}
    </Button>
  );

  return (
    <>
      {ButtonElement}

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              />
              
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-xl shadow-xl z-[101] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <div className="absolute right-4 top-4 z-10">
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Email Collection Form */}
                <div className="flex items-center justify-center h-full p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Demo</h2>
                      <p className="text-gray-600">Enter your details and we'll open Calendly for you to schedule.</p>
                    </div>

                    <form onSubmit={handleEmailSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700"
                        >
                          <AlertCircle className="w-5 h-5" />
                          <span className="text-sm">{error}</span>
                        </motion.div>
                      )}

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Open Calendly to Schedule
                      </motion.button>
                    </form>

                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-500">
                        By continuing, you agree to receive demo-related communications. 
                        We respect your privacy and won't spam you.
                      </p>
                    </div>

                    {/* Direct Link Option */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => {
                          window.open(CALENDLY_URL, '_blank');
                          handleClose();
                        }}
                        className="w-full text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        Or go directly to Calendly
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

BookDemo.propTypes = {
  variant: PropTypes.oneOf(['default', 'secondary']),
  className: PropTypes.string,
  children: PropTypes.node
};
