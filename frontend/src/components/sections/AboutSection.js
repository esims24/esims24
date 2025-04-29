import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';
import GlassmorphicCard from '../layout/GlassmorphicCard';
import { fadeInUp } from '../../animations/variants';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative">
      <Container>
        <SectionHeading 
          title={t('about.title')} 
        />
        
        <GlassmorphicCard className="max-w-4xl mx-auto">
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-text leading-relaxed"
          >
            {t('about.body')}
          </motion.p>
        </GlassmorphicCard>
      </Container>
    </section>
  );
};

export default AboutSection;