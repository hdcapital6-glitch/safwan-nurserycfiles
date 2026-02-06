import React from 'react';
import HeroSection from './components/HeroSection';
import AnimationShowcase from './components/AnimationShowcase';
import SocialMediaHub from './components/SocialMediaHub';
import BrandFeel from './components/BrandFeel';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white relative selection:bg-yellow-200 selection:text-yellow-900">
      {/* Global Background Elements could go here if needed across sections */}
      
      <HeroSection />
      
      <AnimationShowcase />
      
      <SocialMediaHub />
      
      <BrandFeel />
      
      <Footer />
    </main>
  );
};

export default App;