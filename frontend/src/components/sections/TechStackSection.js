import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';

const TechStackSection = () => {
  const { t } = useTranslation();
  
  const technologies = [
    'Next.js',
    'Tailwind CSS',
    'Firebase',
    'Supabase',
    'Cloudflare Workers',
    'Groq AI',
    'OpenAI',
    'Exa.ai',
    'Framer Motion'
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="py-20 relative">
      <Container>
        <SectionHeading title={t('tech.title')} />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md px-5 py-2 rounded-full 
                        border border-white/10 text-text hover:text-white 
                        hover:border-primary/50 transition-all duration-300"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TechStackSection;