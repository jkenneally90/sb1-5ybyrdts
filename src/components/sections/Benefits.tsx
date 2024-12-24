import React from 'react';
import { Code, Users, Shield, CheckCircle } from 'lucide-react';
import Web3Background from '../layouts/Web3Background';
import GlassCard from '../common/GlassCard';

const Benefits = () => {
  return (
    <Web3Background>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">Membership Benefits</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our trusted ecosystem and unlock exclusive benefits based on your role
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Developer Benefits */}
            <GlassCard className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <Code className="h-8 w-8 text-indigo-400" />
                <h3 className="text-2xl font-bold text-white">For Developers</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Access to vetted code libraries and SDKs',
                  'Direct connection with verified end users',
                  'Priority technical support',
                  'Revenue sharing opportunities',
                  'Developer community access'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* End User Benefits */}
            <GlassCard className="animate-fade-in delay-100">
              <div className="flex items-center gap-4 mb-6">
                <Users className="h-8 w-8 text-indigo-400" />
                <h3 className="text-2xl font-bold text-white">For End Users</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Access to verified, secure AI agents',
                  'Early access to new features',
                  'Community support and feedback',
                  'Detailed documentation and guides',
                  'Integration support'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>
    </Web3Background>
  );
};

export default Benefits;