import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = true, delay = 0 }) => {
  const alignmentClasses = centered ? 'text-center mx-auto' : '';
  
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut" 
      }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: delay + 0.2,
        ease: "easeOut" 
      }
    }
  };
  
  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses}`}>
      <motion.h2 
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white relative"
      >
        {/* Span with gradient text */}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {title}
        </span>
        {/* Decorative underline with neon glow effect */}
        <span className="block h-1 w-20 bg-accent mt-3 rounded-full shadow-neon-accent"></span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
          className="text-lg text-text mt-4"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;