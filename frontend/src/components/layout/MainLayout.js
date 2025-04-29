import React from 'react';
import BackgroundParticles from '../../animations/BackgroundParticles';
import LanguageSwitcher from './LanguageSwitcher';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-text relative">
      {/* Background effects */}
      <BackgroundParticles />
      
      {/* Language switcher */}
      <LanguageSwitcher />
      
      {/* Main content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;