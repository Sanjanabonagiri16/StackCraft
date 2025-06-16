
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  
  const demos = [
    {
      input: "Create a blog app with user login, comment section, and admin panel",
      plainLanguage: "I want users to write posts, leave comments, and have admins manage everything",
      output: "Complete blog platform with user authentication, commenting system, and admin dashboard",
      features: ["User Registration & Login", "Rich Text Editor", "Comment System", "Admin Panel", "User Profiles", "Content Management"]
    },
    {
      input: "Build an e-commerce store with shopping cart and payment integration",
      plainLanguage: "People should browse products, add them to cart, and pay securely online",
      output: "Full online store with product catalog, cart functionality, and secure payments",
      features: ["Product Catalog", "Shopping Cart", "Stripe Integration", "Order Management", "Inventory Tracking", "Customer Portal"]
    },
    {
      input: "Make a task management app with team collaboration features",
      plainLanguage: "Teams need to assign tasks, track progress, and work together efficiently",
      output: "Project management tool with real-time collaboration and progress tracking",
      features: ["Task Assignment", "Team Chat", "Progress Tracking", "File Sharing", "Notifications", "Time Tracking"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Plain English to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Working App
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how simple descriptions transform into complete, functional applications in real-time
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeDemo === index ? 'ring-2 ring-purple-500 bg-purple-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        activeDemo === index ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-500">You say:</span>
                        </div>
                        <div className="text-gray-700 mb-3 italic bg-gray-100 p-3 rounded-lg">
                          "{demo.plainLanguage}"
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-purple-500" />
                          <span className="text-sm font-medium text-purple-600">AI understands:</span>
                        </div>
                        <div className="text-gray-600 text-sm">"{demo.input}"</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center py-2">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg font-semibold rounded-xl">
              <Play className="mr-2 w-5 h-5" />
              Try It Yourself - It's Free!
            </Button>
          </div>
          
          <div className="lg:pl-8">
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-400">Generated in 15 seconds</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-lg font-semibold">AI Generated Result:</span>
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-green-400">{demos[activeDemo].output}</h3>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm bg-white/10 rounded-lg p-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-300 text-sm font-medium">
                    ✨ Complete with database, authentication, responsive design, and deployment-ready code
                  </p>
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
