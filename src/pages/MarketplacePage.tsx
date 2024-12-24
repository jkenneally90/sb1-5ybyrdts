import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import AgentCard from '../components/marketplace/AgentCard';
import DeveloperCard from '../components/marketplace/DeveloperCard';
import { sampleAgents, sampleDevelopers } from '../data/sampleData';

const MarketplacePage = () => {
  const [showDevelopers, setShowDevelopers] = useState(false);

  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI Agent Marketplace</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover and integrate verified AI agents for your projects
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 rounded-lg p-1">
            <button
              onClick={() => setShowDevelopers(false)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !showDevelopers ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              AI Agents
            </button>
            <button
              onClick={() => setShowDevelopers(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                showDevelopers ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Developers
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={showDevelopers ? "Search developers..." : "Search AI agents..."}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white hover:bg-gray-800 transition-colors">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(showDevelopers ? ['All', 'Top Rated', 'Most Published', 'Recently Active'] : 
            ['All', 'Machine Learning', 'NLP', 'Computer Vision', 'Data Analysis']).map((category) => (
            <button
              key={category}
              className="px-4 py-1 rounded-full text-sm bg-gray-900 text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showDevelopers
            ? sampleDevelopers.map((developer) => (
                <DeveloperCard key={developer.id} developer={developer} />
              ))
            : sampleAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;