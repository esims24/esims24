import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';
import GlassmorphicCard from '../layout/GlassmorphicCard';

const ProductsSection = () => {
  const { t } = useTranslation();

  // Product data
  const products = [
    {
      id: 'nexorasim',
      icon: '📱',
      color: 'primary',
    },
    {
      id: 'nexorahub',
      icon: '🌐',
      color: 'accent',
    },
    {
      id: 'nexoraai',
      icon: '🤖',
      color: 'primary',
    },
    {
      id: 'nexorapay',
      icon: '💳',
      color: 'accent',
    },
    {
      id: 'nexoracloud',
      icon: '☁️',
      color: 'primary',
    },
    {
      id: 'nexoraverify',
      icon: '🔐',
      color: 'accent',
    },
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
    <section id="products" className="py-20 relative">
      <Container>
        <SectionHeading title={t('products.title')} />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              icon={product.icon}
              neonColor={product.color}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

const ProductCard = ({ id, icon, neonColor, delay }) => {
  const { t } = useTranslation();
  
  return (
    <GlassmorphicCard 
      neonColor={neonColor}
      delay={delay}
      className="h-full flex flex-col"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">
        {t(`products.${id}.title`)}
      </h3>
      <p className="text-text">
        {t(`products.${id}.description`)}
      </p>
    </GlassmorphicCard>
  );
};

export default ProductsSection;