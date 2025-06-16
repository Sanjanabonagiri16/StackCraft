
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Layout, 
  Type, 
  Image, 
  Database, 
  Shield, 
  Settings, 
  Cloud, 
  Download,
  Github,
  Users,
  Play,
  Code,
  Zap
} from 'lucide-react';

const DesignStudio = () => {
  const studioFeatures = [
    {
      icon: Layout,
      title: "Live Canvas Preview",
      description: "See your app come to life in real-time with instant visual feedback",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Visual Style Editor",
      description: "Adjust colors, fonts, spacing, and layouts with intuitive tools",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Type,
      title: "Click-to-Edit Components",
      description: "Click any element to edit content, labels, images, and properties",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Image,
      title: "Pre-made Sections",
      description: "Choose from navigation bars, forms, dashboards, and more",
      color: "from-orange-500 to-red-500"
    }
  ];

  const backendFeatures = [
    {
      icon: Shield,
      title: "User Authentication",
      description: "Signup, login, roles, and permissions automatically configured"
    },
    {
      icon: Database,
      title: "Smart Database Schema",
      description: "Relationships, CRUD operations, and data validation built-in"
    },
    {
      icon: Settings,
      title: "API Endpoints",
      description: "RESTful APIs with error handling and admin features included"
    },
    {
      icon: Zap,
      title: "Auto-Scaling Ready",
      description: "Built to handle growth with reliable data storage"
    }
  ];

  const outputOptions = [
    {
      icon: Play,
      title: "Live Sandbox Testing",
      description: "Test your app in real-time before deployment"
    },
    {
      icon: Code,
      title: "Visual & Code Editing",
      description: "Switch between visual editing and code view"
    },
    {
      icon: Download,
      title: "Export Options",
      description: "Download as ZIP or push directly to GitHub"
    },
    {
      icon: Cloud,
      title: "One-Click Deploy",
      description: "Launch your app online instantly"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite teammates to co-create and iterate"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Design Studio Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Design Studio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a live design studio with canvas preview, visual editing tools, and pre-made components. 
            Even non-designers can create stunning, responsive interfaces without writing code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {studioFeatures.map((feature, index) => (
            <Card key={index} className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group border-0 bg-white">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Backend Power Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Invisible Yet{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Powerful Backend
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Behind every beautiful interface lies robust backend logic, authentication, 
              database management, and APIs that just work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {backendFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              ✨ Complete with data validation, error handling, and admin-level features that scale with your app
            </p>
          </div>
        </div>

        {/* Final Output Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Creation to{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Launch
            </span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perfect for solo builders, hackathons, MVP demos, or launching new startups fast. 
            Your app, your way, deployed in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {outputOptions.map((option, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-gray-50 to-white">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">{option.title}</h4>
              <p className="text-gray-600 text-xs leading-relaxed">{option.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
            Start Building Your App Now
            <Zap className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            Join thousands of creators who've built their apps without coding
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignStudio;
