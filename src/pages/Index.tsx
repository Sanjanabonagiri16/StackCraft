
import React from 'react';
import Hero from '@/components/Hero';
import DemoSection from '@/components/DemoSection';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DemoSection />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
