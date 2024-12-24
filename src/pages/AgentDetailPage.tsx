import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AgentHeader from '../components/agent/AgentHeader';
import AgentCapabilities from '../components/agent/AgentCapabilities';
import AgentUseCases from '../components/agent/AgentUseCases';
import { sampleAgents } from '../data/sampleData';
import { getAgentDetails } from '../utils/agentDetails';

const AgentDetailPage = () => {
  const { id } = useParams();
  const agent = sampleAgents.find(a => a.id === id);
  
  if (!agent) {
    return (
      <div className="py-24 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl text-white">AI Agent not found</h1>
        </div>
      </div>
    );
  }

  const { capabilities, useCases } = getAgentDetails(agent.name);

  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/marketplace" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Marketplace
        </Link>
        
        <AgentHeader agent={agent} />
        <AgentCapabilities capabilities={capabilities} />
        <AgentUseCases useCases={useCases} />
        
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">About the Developer</h2>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
              <span className="text-xl text-white font-bold">
                {agent.developer.name.charAt(0)}
              </span>
            </div>
            <div>
              <Link 
                to={`/developer/${agent.developer.id}`}
                className="text-lg font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                {agent.developer.name}
              </Link>
              <p className="text-gray-400">Expert AI Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailPage;