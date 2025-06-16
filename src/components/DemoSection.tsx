
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Code, Database, Layout } from 'lucide-react';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  
  const demos = [
    {
      input: "Create a blog app with user login, comment section, and admin panel",
      output: "Generated full-stack blog application with authentication, CRUD operations, and admin dashboard",
      features: ["User Authentication", "Comment System", "Admin Dashboard", "Database Models"]
    },
    {
      input: "Build an e-commerce store with shopping cart and payment integration",
      output: "Complete online store with product catalog, cart functionality, and Stripe integration",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"]
    },
    {
      input: "Make a task management app with team collaboration features",
      output: "Project management tool with real-time collaboration and task tracking",
      features: ["Task Management", "Team Collaboration", "Real-time Updates", "Progress Tracking"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See It In{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI transforms simple descriptions into complete, working applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <Card 
                  key={index}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeDemo === index ? 'ring-2 ring-purple-500 bg-purple-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeDemo === index ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-2">Input:</div>
                      <div className="text-gray-600 italic">"{demo.input}"</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg font-semibold rounded-xl">
              <Play className="mr-2 w-5 h-5" />
              Try Interactive Demo
            </Button>
          </div>
          
          <div className="lg:pl-8">
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-400">Generated Application</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{demos[activeDemo].output}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <Layout className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Frontend UI Components</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <Code className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Backend API Endpoints</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <Database className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Database Schema</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
