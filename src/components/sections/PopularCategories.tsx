import React from 'react';
import { Brain, MessageSquare, BarChart3, Shield, Code2, Search } from 'lucide-react';
import Web3Background from '../layouts/Web3Background';
import GlassCard from '../common/GlassCard';

const categories = [
  {
    icon: Brain,
    name: 'Machine Learning',
    count: 48,
    description: 'Advanced ML models and neural networks'
  },
  {
    icon: MessageSquare,
    name: 'Conversational AI',
    count: 36,
    description: 'Chatbots and language processing agents'
  },
  {
    icon: BarChart3,
    name: 'Data Analytics',
    count: 29,
    description: 'Business intelligence and data visualization'
  },
  {
    icon: Shield,
    name: 'Security & Testing',
    count: 25,
    description: 'Security analysis and automated testing'
  },
  {
    icon: Code2,
    name: 'Development Tools',
    count: 31,
    description: 'Code generation and optimization tools'
  },
  {
    icon: Search,
    name: 'Research Assistants',
    count: 22,
    description: 'Literature review and research automation'
  }
];

const PopularCategories = () => {
  return (
    <Web3Background>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Categories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our diverse collection of AI agents across various domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <GlassCard
                key={category.name}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                    <category.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                      <span className="text-sm text-indigo-400">({category.count})</span>
                    </div>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Web3Background>
  );
};

export default PopularCategories;