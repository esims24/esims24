import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';
import GlassmorphicCard from '../layout/GlassmorphicCard';

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  // Feature highlights
  const features = [
    { key: 'highlight1', icon: '🌎' },
    { key: 'highlight2', icon: '🌱' },
    { key: 'highlight3', icon: '🧠' },
    { key: 'highlight4', icon: '🔒' },
    { key: 'highlight5', icon: '🌐' },
    { key: 'highlight6', icon: '📱' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section className="py-20 relative">
      <Container>
        <SectionHeading title={t('features.title')} />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureItem
              key={feature.key}
              icon={feature.icon}
              text={t(`features.${feature.key}`)}
              delay={index * 0.1}
              neonColor={index % 2 === 0 ? 'primary' : 'accent'}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

const FeatureItem = ({ icon, text, delay, neonColor }) => {
  return (
    <GlassmorphicCard
      delay={delay}
      neonColor={neonColor}
      className="flex items-center space-x-4 p-4"
    >
      <div className="text-3xl">{icon}</div>
      <p className="text-text">{text}</p>
    </GlassmorphicCard>
  );
};

export default FeaturesSection;