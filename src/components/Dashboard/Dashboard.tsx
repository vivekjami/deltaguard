import React, { useState } from 'react';
import { ArrowLeft, Bell, Wallet, ChevronDown } from 'lucide-react';
import Overview from './Overview';
import PortfolioManager from './PortfolioManager';
import YieldChart from '../Charts/YieldChart';
import RiskMetrics from '../Charts/RiskMetrics';
import HedgeEngine from '../DeltaNeutral/HedgeEngine';
import RebalanceManager from '../DeltaNeutral/RebalanceManager';
import RiskAssessment from '../DeltaNeutral/RiskAssessment';
import Integration from '../EulerSwap/Integration';
import { generateMockStrategies } from '../../utils/mockData';
import { formatAddress } from '../../utils/formatters';

interface DashboardProps {
  isWalletConnected: boolean;
  onBackToLanding: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ isWalletConnected, onBackToLanding }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [walletAddress] = useState('0x1234567890abcdef1234567890abcdef12345678');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackToLanding}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🛡️</div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DeltaGuard
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-slate-400">Portfolio Value</div>
                <div className="text-lg font-semibold text-white">$125,500</div>
              </div>
              
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-slate-400" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </button>
              
              {isWalletConnected ? (
                <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                  <Wallet className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white">{formatAddress(walletAddress)}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              ) : (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
          
          <div className="flex space-x-1 pb-4">
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
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;