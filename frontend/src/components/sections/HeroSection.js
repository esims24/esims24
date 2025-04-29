import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import NeonButton from '../layout/NeonButton';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const HeroSection = ({ onOpenChat }) => {
  const { t } = useTranslation();

  // Custom variants for hero section
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: "easeOut" 
      }
    }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Scroll to products section
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background gradient and dots */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background -z-10"></div>
      
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-light via-primary to-accent bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </motion.h1>

          <motion.p 
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-text mb-12 max-w-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <motion.div variants={buttonVariants}>
              <NeonButton color="primary" onClick={scrollToProducts}>
                {t('hero.button.explore')}
              </NeonButton>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <NeonButton color="accent" outline onClick={onOpenChat}>
                {t('hero.button.chat')}
              </NeonButton>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;