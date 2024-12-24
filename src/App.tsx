import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import DevelopersPage from './pages/DevelopersPage';
import AboutPage from './pages/AboutPage';
import DeveloperProfilePage from './pages/DeveloperProfilePage';
import AgentDetailPage from './pages/AgentDetailPage';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <AnimatedCursor />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/developer/:id" element={<DeveloperProfilePage />} />
            <Route path="/agent/:id" element={<AgentDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;