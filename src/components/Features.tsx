
import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Zap, Code, Database, Palette, Shield, Rocket, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Generation",
      description: "Advanced AI understands your requirements and generates complete applications with intelligent architecture decisions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Go from idea to working application in seconds, not weeks. No more waiting for development cycles.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Code,
      title: "Clean, Production Code",
      description: "Generated code follows best practices, is well-documented, and ready for production deployment.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Full-Stack Architecture",
      description: "Complete applications with frontend, backend APIs, database models, and proper data relationships.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Palette,
      title: "Beautiful UI/UX",
      description: "Modern, responsive designs with professional styling and intuitive user experiences out of the box.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Security Built-In",
      description: "Authentication, authorization, data validation, and security best practices implemented automatically.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "One-Click Deploy",
      description: "Deploy your generated applications instantly to the cloud with integrated hosting and CI/CD pipelines.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share projects with your team, iterate together, and maintain version control seamlessly.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Build Faster
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform handles all the complexity so you can focus on what matters most — your ideas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group border-0 bg-gradient-to-br from-gray-50 to-white">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
