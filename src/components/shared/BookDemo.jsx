import PropTypes from 'prop-types';
import { Button } from "./Button";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function BookDemo({ variant = "default", className = "", children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Add Calendly script when modal opens
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

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
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              />
              
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-4 md:inset-10  rounded-xl shadow-xl z-[101] overflow-hidden"
              >
                <div className="absolute right-4 top-4 z-10">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div 
                  className="calendly-inline-widget w-full h-full"
                  data-url="https://calendly.com/techtitanadamtechnologies/30min"
                  style={{ minWidth: '320px', height: '700px' }}
                />
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
