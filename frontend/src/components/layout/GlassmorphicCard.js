import React from 'react';
import { motion } from 'framer-motion';

const GlassmorphicCard = ({ 
  children, 
  className = '',
  neonColor = 'primary',
  hover = true,
  delay = 0
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut" 
      }
    },
    hover: hover ? { 
      y: -5,
      boxShadow: neonColor === 'primary' 
        ? '0 0 5px #6621A8, 0 0 20px #6621A8' 
        : '0 0 5px #00FFFF, 0 0 20px #00FFFF',
      transition: { duration: 0.3 }
    } : {}
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={variants}
      className={`
        backdrop-blur-md 
        bg-opacity-10 
        bg-white/5 
        border border-white/10 
        rounded-xl 
        shadow-glass
        p-6
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassmorphicCard;