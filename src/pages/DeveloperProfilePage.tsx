import React from 'react';
import { useParams } from 'react-router-dom';
import { Award } from 'lucide-react';
import DeveloperStats from '../components/profile/DeveloperStats';
import DeveloperAgents from '../components/profile/DeveloperAgents';
import { sampleDevelopers, sampleAgents } from '../data/sampleData';

const DeveloperProfilePage = () => {
  const { id } = useParams();
  const developer = sampleDevelopers.find(dev => dev.id === id);
  const developerAgents = sampleAgents.filter(agent => agent.developer.id === id);
  
  if (!developer) {
    return (
      <div className="py-24 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl text-white">Developer not found</h1>
        </div>
      </div>
    );
  }

  const stats = {
    totalAgents: developerAgents.length,
    averageRating: developerAgents.reduce((acc, curr) => acc + curr.rating, 0) / developerAgents.length,
    totalUsers: 1234 // Placeholder value
  };

  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Developer Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">
                {developer.name.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{developer.name}</h1>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-400">Verified Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Stats */}
        <DeveloperStats {...stats} />

        {/* Developer's AI Agents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Published AI Agents</h2>
          <DeveloperAgents agents={developerAgents} />
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfilePage;