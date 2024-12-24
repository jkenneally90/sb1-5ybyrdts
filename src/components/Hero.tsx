import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Code, Users, Sparkles } from 'lucide-react';
import ParticleNetwork from './animations/ParticleNetwork';
import GlowingOrb from './animations/GlowingOrb';
import FloatingLines from './animations/FloatingLines';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Web3 Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-indigo-950">
        <ParticleNetwork />
        <GlowingOrb />
        <FloatingLines />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          {/* Logo and title */}
          <div className="relative inline-block animate-fade-in">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient">Cerebro</span>
              <span className="relative inline-block text-white">
                AI
                <Sparkles className="absolute -top-8 -right-8 h-8 w-8 text-yellow-400 animate-float-slow" />
              </span>
            </h1>
          </div>

          <p className="mt-6 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-8 md:max-w-3xl animate-fade-in">
            The trusted marketplace for verified AI agents. Every application is thoroughly vetted by our admin team and trusted community members.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link 
              to="/marketplace"
              className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-md text-white font-medium md:text-lg animate-fade-in hover:scale-105 transition-transform duration-300"
            >
              Explore Marketplace
              <div className="w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              to="/developers"
              className="group px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white font-medium md:text-lg animate-fade-in hover:scale-105 transition-transform duration-300"
            >
              For Developers
              <div className="w-full h-0.5 bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </div>
        </div>

        {/* Features section */}
        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Secure & Trusted",
              description: "Every AI agent undergoes rigorous security and quality checks before approval.",
              animation: "animate-fade-in"
            },
            {
              icon: Code,
              title: "Developer Platform",
              description: "Build and showcase your AI agents to a verified audience of potential users.",
              animation: "animate-fade-in"
            },
            {
              icon: Users,
              title: "Community Verified",
              description: "Benefit from reviews and ratings from our trusted community members.",
              animation: "animate-fade-in"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.animation} flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105`}
            >
              <div className="group flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/10 mb-6 transition-all duration-300 hover:bg-indigo-500/20">
                <feature.icon className="h-8 w-8 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;