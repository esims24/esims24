import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';
import GlassmorphicCard from '../layout/GlassmorphicCard';
import NeonButton from '../layout/NeonButton';

const ContactSection = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    { 
      key: 'website', 
      value: 'https://www.nexorasim.com',
      icon: '🌐'
    },
    { 
      key: 'email', 
      value: 'support@nexorasim.com',
      icon: '📧'
    },
    { 
      key: 'locations', 
      value: 'Singapore | Myanmar | Remote Global',
      icon: '📍'
    }
  ];
  
  return (
    <section id="contact" className="py-20 relative">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading title={t('contact.title')} subtitle={t('contact.body')} />
          
          <GlassmorphicCard className="mb-8">
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: 0.3 + (index * 0.1) } 
                  }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <span className="text-text-dark mr-2">
                      {t(`contact.${item.key}`)}:
                    </span>
                    <span className="text-text-light">
                      {item.value}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </GlassmorphicCard>
          
          <div className="text-center">
            <NeonButton color="primary">
              {t('contact.button')}
            </NeonButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;