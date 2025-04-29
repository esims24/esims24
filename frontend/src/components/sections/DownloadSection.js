import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';
import NeonButton from '../layout/NeonButton';
import GlassmorphicCard from '../layout/GlassmorphicCard';

const DownloadSection = () => {
  const { t } = useTranslation();
  
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="py-20 relative">
      <Container>
        <GlassmorphicCard className="max-w-3xl mx-auto text-center py-12">
          <SectionHeading title={t('download.title')} />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            viewport={{ once: true }}
            className="text-lg text-text mb-8"
          >
            {t('download.body')}
          </motion.p>
          
          <motion.div
            variants={buttonContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div variants={buttonVariants}>
              <NeonButton color="primary">
                {t('download.button.logo')}
              </NeonButton>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <NeonButton color="accent">
                {t('download.button.ui')}
              </NeonButton>
            </motion.div>
          </motion.div>
        </GlassmorphicCard>
      </Container>
    </section>
  );
};

export default DownloadSection;