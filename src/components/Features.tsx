
import React from 'react';
import { Card } from '@/components/ui/card';
import { MessageSquare, Eye, Download, Users, Zap, Shield, Palette, Code } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "No Coding Skills Required",
      description: "Just describe your app idea in plain English. No technical jargon, no programming knowledge needed — anyone can build apps.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Watch your ideas come to life in seconds. Complete applications with frontend, backend, and database ready instantly.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Eye,
      title: "Preview & Customize",
      description: "See your app in action immediately. Make changes visually with our intuitive editor — no code required.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Download,
      title: "One-Click Deploy",
      description: "Love what you see? Deploy your app to the web instantly or download the complete code to use anywhere.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Beautiful by Default",
      description: "Every generated app comes with professional styling and responsive design that looks great on any device.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Built-in security, authentication, and best practices ensure your app is ready for real users from day one.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share your projects with team members, gather feedback, and iterate together seamlessly.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Full Code Access",
      description: "Own your code completely. Download, modify, or extend it however you want — no vendor lock-in.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            No Coding Skills?{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              No Problem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn your app ideas into reality without writing a single line of code. 
            It's as easy as writing a note to a friend.
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
