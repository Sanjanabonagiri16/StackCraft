
import React from 'react';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import ProcessSection from '@/components/ProcessSection';
import DesignStudio from '@/components/DesignStudio';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DemoSection />
      <ProcessSection />
      <DesignStudio />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
