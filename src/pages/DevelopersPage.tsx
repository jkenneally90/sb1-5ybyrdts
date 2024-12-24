import React from 'react';
import { Code, Shield, Users, Zap } from 'lucide-react';

const DevelopersPage = () => {
  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build for the <span className="text-indigo-500">Future</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Join our community of developers building the next generation of AI solutions
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Start Building
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Code,
              title: 'Developer Tools',
              description: 'Access our SDK and APIs'
            },
            {
              icon: Shield,
              title: 'Security First',
              description: 'Built-in security features'
            },
            {
              icon: Users,
              title: 'Community',
              description: 'Join our developer community'
            },
            {
              icon: Zap,
              title: 'Fast Integration',
              description: 'Quick and easy deployment'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg hover:border-indigo-500 transition-colors"
            >
              <feature.icon className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Documentation Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Documentation</h2>
          <p className="text-gray-400 mb-6">
            Everything you need to know about building and deploying AI agents on our platform
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Quick Start Guide',
              'API Reference',
              'Security Guidelines',
              'Best Practices'
            ].map((doc) => (
              <a
                key={doc}
                href="#"
                className="p-4 bg-black/50 rounded-lg text-white hover:bg-indigo-600/10 transition-colors"
              >
                {doc} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersPage;