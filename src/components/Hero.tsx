
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-white/80">AI-Powered Development Platform</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Turn Your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Ideas
          </span>{" "}
          Into{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Apps
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Just describe what you want — like "a blog app with login, comments, and admin panel" — 
          and watch as our AI instantly creates the complete application with UI, backend, APIs, and database.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Start Building Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl transition-all duration-300">
            Watch Demo
            <Zap className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">⚡</div>
            <div className="text-lg font-semibold text-white mb-1">Instant Creation</div>
            <div className="text-gray-400">From idea to app in seconds</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">🧠</div>
            <div className="text-lg font-semibold text-white mb-1">AI-Powered</div>
            <div className="text-gray-400">Understands natural language</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">🚀</div>
            <div className="text-lg font-semibold text-white mb-1">Full-Stack</div>
            <div className="text-gray-400">Complete apps, not just mockups</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
