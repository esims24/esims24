import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mm' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-50 top-4 right-4 py-2 px-4 bg-white/10 backdrop-blur-md 
                 rounded-full flex items-center space-x-2 border border-white/10
                 hover:bg-white/20 transition-all duration-300"
    >
      <span className="text-sm font-medium text-white">
        {i18n.language === 'en' ? t('language.mm') : t('language.en')}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;