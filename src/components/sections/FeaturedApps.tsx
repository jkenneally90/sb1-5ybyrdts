import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Web3Background from '../layouts/Web3Background';
import GlassCard from '../common/GlassCard';
import type { AIAgent } from '../../types';

const featuredAgents: AIAgent[] = [
  {
    id: '1',
    name: 'SmartAnalytics AI',
    description: 'Advanced data analysis and visualization agent with real-time insights.',
    developer: { id: '1', name: 'DataTech Labs', email: '', membershipLevel: 'developer' },
    status: 'approved',
    reviews: [],
    rating: 4.8
  },
  {
    id: '2',
    name: 'CodeAssist Pro',
    description: 'AI-powered code review and optimization assistant for developers.',
    developer: { id: '2', name: 'DevTools Inc', email: '', membershipLevel: 'developer' },
    status: 'approved',
    reviews: [],
    rating: 4.9
  },
  {
    id: '3',
    name: 'SecurityGuard AI',
    description: 'Automated security testing and vulnerability detection agent.',
    developer: { id: '3', name: 'SecureAI Systems', email: '', membershipLevel: 'developer' },
    status: 'approved',
    reviews: [],
    rating: 4.7
  }
];

const FeaturedApps = () => {
  return (
    <Web3Background>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">Featured AI Agents</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our top-rated and most trusted AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredAgents.map((agent, index) => (
              <GlassCard 
                key={agent.id}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-300">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{agent.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-400">by {agent.developer.name}</span>
                  <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Web3Background>
  );
};

export default FeaturedApps;