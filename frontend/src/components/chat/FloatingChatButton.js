import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FloatingChatButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF'
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 py-3 px-6
                bg-accent/20 backdrop-blur-md rounded-full
                border border-accent/30 text-white
                shadow-neon-accent transition-all duration-300"
    >
      <span className="text-lg">💬</span>
      <span className="font-medium">{t('hero.button.chat')}</span>
    </motion.button>
  );
};

export default FloatingChatButton;