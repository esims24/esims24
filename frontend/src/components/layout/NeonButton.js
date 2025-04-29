import React from 'react';
import { motion } from 'framer-motion';

const NeonButton = ({
  children,
  onClick,
  color = 'primary',
  outline = false,
  className = '',
  delay = 0
}) => {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 text-base";
  
  // Choose style based on color and outline props
  const styles = outline
    ? `border-2 border-${color} text-${color} hover:bg-${color}/10`
    : `bg-${color} text-white hover:shadow-neon-${color}`;
    
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: delay,
        ease: "easeOut" 
      }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.button
      onClick={onClick}
      initial="hidden"
      animate="visible"
      whileTap="tap"
      whileHover="hover"
      variants={variants}
      className={`${baseClasses} ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;