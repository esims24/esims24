import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n configuration
import './App.css';

// Layout Components
import MainLayout from './components/layout/MainLayout';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProductsSection from './components/sections/ProductsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import DownloadSection from './components/sections/DownloadSection';
import TechStackSection from './components/sections/TechStackSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const { i18n } = useTranslation();

  // Set language based on browser preference on initial load
  useEffect(() => {
    const browserLang = navigator.language;
    if (browserLang.startsWith('my') || browserLang.startsWith('mm')) {
      i18n.changeLanguage('mm');
    }
  }, [i18n]);

  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FeaturesSection />
      <DownloadSection />
      <TechStackSection />
      <ContactSection />
    </MainLayout>
  );
}

export default App;