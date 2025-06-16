
import React from 'react';
import { Card } from '@/components/ui/card';
import { MessageSquare, Cpu, Eye, Rocket, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Describe",
      description: "Tell us what you want to build in plain English",
      example: "I want a blog with user accounts and comments",
      color: "from-blue-500 to-indigo-500"
    },
    {
      number: 2,
      icon: Cpu,
      title: "Generate",
      description: "AI creates your complete app with UI, backend & database",
      example: "Full-stack blog app with authentication system",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      icon: Eye,
      title: "Preview",
      description: "See your app in action and customize it visually",
      example: "Live preview with drag-and-drop editing",
      color: "from-green-500 to-teal-500"
    },
    {
      number: 4,
      icon: Rocket,
      title: "Deploy",
      description: "Launch your app instantly or download the code",
      example: "Live website ready for users in minutes",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Idea to App in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No technical knowledge required. Just follow these simple steps and watch your app come to life.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 h-full text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group border-0 bg-white relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mt-6">
                    <p className="text-sm text-gray-500 mb-1">Example:</p>
                    <p className="text-sm font-medium text-gray-700 italic">"{step.example}"</p>
                  </div>
                </Card>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-semibold text-purple-600">Save weeks of development time</span> — 
            what used to take months now takes minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
