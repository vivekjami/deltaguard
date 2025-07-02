import React, { useState } from 'react';
import Overview from './components/Dashboard/Overview';
import PortfolioManager from './components/Dashboard/PortfolioManager';
import YieldChart from './components/Charts/YieldChart';
import RiskMetrics from './components/Charts/RiskMetrics';
import HedgeEngine from './components/DeltaNeutral/HedgeEngine';
import RebalanceManager from './components/DeltaNeutral/RebalanceManager';
import RiskAssessment from './components/DeltaNeutral/RiskAssessment';
import Integration from './components/EulerSwap/Integration';
import { generateMockStrategies } from './utils/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const mockStrategies = generateMockStrategies();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼' },
    { id: 'yield', label: 'Yield Analysis', icon: '📈' },
    { id: 'risk', label: 'Risk Metrics', icon: '🛡️' },
    { id: 'hedge', label: 'Hedge Engine', icon: '⚖️' },
    { id: 'rebalance', label: 'Rebalancing', icon: '🔄' },
    { id: 'assessment', label: 'Risk Assessment', icon: '🎯' },
    { id: 'integration', label: 'EulerSwap', icon: '⚡' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'portfolio':
        return <PortfolioManager />;
      case 'yield':
        return <YieldChart />;
      case 'risk':
        return <RiskMetrics />;
      case 'hedge':
        return <HedgeEngine strategy={mockStrategies[0]} />;
      case 'rebalance':
        return <RebalanceManager />;
      case 'assessment':
        return <RiskAssessment />;
      case 'integration':
        return <Integration pair="ETH/USDC" />;
      default:
        return <Overview />;
    }
  };

  // If overview is selected, render it without the tab navigation
  if (activeTab === 'overview') {
    return <Overview />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🛡️</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DeltaGuard
              </h1>
            </div>
            
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;