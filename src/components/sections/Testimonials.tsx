import React from 'react';
import { Quote } from 'lucide-react';
import Web3Background from '../layouts/Web3Background';
import GlassCard from '../common/GlassCard';

const testimonials = [
  {
    id: 1,
    content: "The vetting process gives us confidence that we're using secure and reliable AI agents. It's transformed how we approach AI integration.",
    author: "Sarah Chen",
    role: "CTO, TechVision Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    content: "As a developer, having a trusted platform to showcase our AI solutions has been invaluable. The community feedback helps us build better products.",
    author: "Marcus Rodriguez",
    role: "Lead Developer, AI Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <Web3Background>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Community Says</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from developers and users who are part of our trusted ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="relative">
                <div className="absolute -top-4 -left-4 text-indigo-500 z-10">
                  <Quote className="h-8 w-8" />
                </div>
                <GlassCard
                  className={`animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <p className="text-gray-300 mb-6">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-medium">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Web3Background>
  );
};

export default Testimonials;