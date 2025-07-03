import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Shield, Zap, Plus, BarChart3 } from 'lucide-react';
import { Strategy } from '../../types';
import { usePortfolio } from '../../hooks/usePortfolio';
import StrategyCard from './StrategyCard';
import { formatTVL, formatAPY } from '../../utils/formatters';

const Overview: React.FC = () => {
  const { 
    portfolio, 
    loading, 
    error, 
    calculateTotalValue, 
    calculateAverageAPY, 
    calculateTotalIL 
  } = usePortfolio();
  
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading portfolio data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900 border border-red-700 rounded-lg p-4">
        <p className="text-red-100">Error loading portfolio: {error.message}</p>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">No portfolio data available</p>
      </div>
    );
  }

  const totalTVL = calculateTotalValue();
  const avgAPY = calculateAverageAPY();
  const totalIL = calculateTotalIL();
  const activeStrategies = portfolio.strategies.filter(s => s.isActive);
  const ilProtection = Math.max(0, 100 - totalIL);

  const timeRanges = [
    { label: '24H', value: '1d' },
    { label: '7D', value: '7d' },
    { label: '30D', value: '30d' },
    { label: '90D', value: '90d' },
  ];

  const handleManageStrategy = (strategy: Strategy) => {
    console.log('Managing strategy:', strategy.name);
    // Navigate to strategy management page
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 p-6 rounded-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">DeltaGuard Dashboard</h1>
            <p className="text-blue-100 mb-4">
              Advanced Delta-Neutral LP Strategies for EulerSwap
            </p>
            
            {/* Time range selector */}
            <div className="flex gap-2">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setSelectedTimeRange(range.value)}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    selectedTimeRange === range.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-800 text-blue-100 hover:bg-blue-700'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Plus size={16} />
              New Strategy
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <BarChart3 size={16} />
              Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <DollarSign className="text-green-400" size={20} />
              <span className="text-sm text-gray-400">Total TVL</span>
            </div>
            <div className="text-xs text-green-400">+2.5%</div>
          </div>
          <p className="text-2xl font-bold text-green-400">
            {formatTVL(totalTVL)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Across {portfolio.strategies.length} strategies</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <TrendingUp className="text-blue-400" size={20} />
              <span className="text-sm text-gray-400">Avg APY</span>
            </div>
            <div className="text-xs text-blue-400">+0.8%</div>
          </div>
          <p className="text-2xl font-bold text-blue-400">
            {formatAPY(avgAPY)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Weighted average</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Shield className="text-yellow-400" size={20} />
              <span className="text-sm text-gray-400">IL Protected</span>
            </div>
            <div className="text-xs text-yellow-400">+1.2%</div>
          </div>
          <p className="text-2xl font-bold text-yellow-400">
            {ilProtection.toFixed(1)}%
          </p>
          <p className="text-xs text-gray-500 mt-1">Risk mitigation</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Zap className="text-purple-400" size={20} />
              <span className="text-sm text-gray-400">Active Strategies</span>
            </div>
            <div className="text-xs text-purple-400">↔</div>
          </div>
          <p className="text-2xl font-bold text-purple-400">
            {activeStrategies.length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Currently running</p>
        </div>
      </div>

      {/* Strategy Cards Grid */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Strategies</h2>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort by:</span>
            <select 
              className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white" 
              aria-label="Sort strategies by"
            >
              <option value="apy">APY (High to Low)</option>
              <option value="tvl">TVL (High to Low)</option>
              <option value="risk">Risk Level</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolio.strategies.map((strategy, index) => (
            <StrategyCard 
              key={`${strategy.name}-${index}`} 
              strategy={strategy} 
              onManage={handleManageStrategy}
            />
          ))}
        </div>
      </div>

      {/* Empty state for new users */}
      {portfolio.strategies.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2">No Strategies Yet</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Create your first delta-neutral strategy to start earning yield while protecting against impermanent loss.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            Create First Strategy
          </button>
        </div>
      )}
    </div>
  );
};

export default Overview;