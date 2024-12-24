import React from 'react';
import { Shield, Users, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-indigo-500">CerebroAI</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building the future of trusted AI solutions through community-driven excellence
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: 'Our Mission',
              description: 'To create a trusted ecosystem for AI development and deployment'
            },
            {
              icon: Users,
              title: 'Our Community',
              description: 'Building together with developers and users worldwide'
            },
            {
              icon: Target,
              title: 'Our Vision',
              description: 'Making AI accessible, secure, and reliable for everyone'
            }
          ].map((section, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg"
            >
              <section.icon className="h-8 w-8 text-indigo-500 mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'CTO',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              },
              {
                name: 'Emily Wong',
                role: 'Head of Product',
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;