import React from 'react';
import { FileCheck, UserCheck, Award } from 'lucide-react';
import Web3Background from '../layouts/Web3Background';
import GlassCard from '../common/GlassCard';

const Process = () => {
  const steps = [
    {
      icon: FileCheck,
      title: 'Initial Review',
      description: 'Our admin team performs the first technical assessment'
    },
    {
      icon: UserCheck,
      title: 'Community Testing',
      description: 'Trusted members test and provide detailed feedback'
    },
    {
      icon: Award,
      title: 'Final Approval',
      description: 'Applications meeting our standards get certified'
    }
  ];

  return (
    <Web3Background>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vetting Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we ensure only the best AI agents make it to our marketplace
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -translate-y-1/2 hidden md:block" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <GlassCard className={`animate-fade-in`} style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-indigo-950/80 rounded-full border-4 border-black flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Web3Background>
  );
};

export default Process;