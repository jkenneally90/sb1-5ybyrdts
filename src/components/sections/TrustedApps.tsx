import React from 'react';
import { ShieldCheck, Lock, Gauge, Sparkles } from 'lucide-react';
import Web3Background from '../layouts/Web3Background';
import GlassCard from '../common/GlassCard';

const TrustedApps = () => {
  return (
    <Web3Background>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Trusted Applications?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference of using thoroughly vetted and secure AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Security First',
                description: 'Every application undergoes thorough security testing'
              },
              {
                icon: Lock,
                title: 'Data Privacy',
                description: 'Your data is protected with enterprise-grade security'
              },
              {
                icon: Gauge,
                title: 'Performance',
                description: 'Optimized for reliability and speed'
              },
              {
                icon: Sparkles,
                title: 'Quality Assured',
                description: 'Vetted by experts and community leaders'
              }
            ].map((feature, index) => (
              <GlassCard 
                key={index} 
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-8 w-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Web3Background>
  );
};

export default TrustedApps;