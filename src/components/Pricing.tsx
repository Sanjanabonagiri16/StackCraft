
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "10 app generations per month",
        "Basic templates",
        "Community support",
        "Standard deployment",
        "1 team member"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "100 app generations per month",
        "Premium templates",
        "Priority support",
        "Advanced deployment options",
        "5 team members",
        "Custom branding",
        "API access"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited app generations",
        "Custom templates",
        "Dedicated support manager",
        "Private cloud deployment",
        "Unlimited team members",
        "White-label solution",
        "SLA guarantee",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 relative hover:shadow-2xl transition-all duration-300 ${
              plan.popular 
                ? 'ring-2 ring-purple-500 scale-105 bg-gradient-to-b from-purple-50 to-white' 
                : 'hover:scale-105'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include our core features. Need something custom?{" "}
            <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
