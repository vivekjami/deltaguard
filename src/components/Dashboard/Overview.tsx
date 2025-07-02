import React, { useState } from 'react';
import { TrendingUp, DollarSign, Shield, Zap, Plus, Bell, Wallet, ChevronDown } from 'lucide-react';
import { usePortfolio } from '../../hooks/usePortfolio';
import { formatCurrency, formatPercentage, formatAddress } from '../../utils/formatters';
import StrategyCard from './StrategyCard';
import PriceChart from '../Charts/PriceChart';

const Overview: React.FC = () => {
  const { portfolio, isLoading } = usePortfolio();
  const [isWalletConnected, setIsWalletConnected] = useState(true);
  const [walletAddress] = useState('0x1234567890abcdef1234567890abcdef12345678');

  if (isLoading || !portfolio) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🛡️</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DeltaGuard
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-slate-400">Portfolio Value</div>
                <div className="text-lg font-semibold text-white">
                  {formatCurrency(portfolio.totalValue)}
                </div>
              </div>
              
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-slate-400" />
                {portfolio.alertCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {portfolio.alertCount}
                  </span>
                )}
              </button>
              
              {isWalletConnected ? (
                <div className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                  <Wallet className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white">{formatAddress(walletAddress)}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              ) : (
                <button 
                  onClick={() => setIsWalletConnected(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Stats */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <DollarSign className="text-green-400" size={24} />
                <span className="text-slate-400">Total Portfolio</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {formatCurrency(portfolio.totalValue)}
              </div>
              <div className="flex items-center space-x-2">
                <span 
                  className="text-sm font-medium"
                  style={{ color: portfolio.totalPnlPercentage >= 0 ? '#10b981' : '#ef4444' }}
                >
                  {formatPercentage(portfolio.totalPnlPercentage)}
                </span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <TrendingUp className="text-blue-400" size={24} />
                <span className="text-slate-400">Average APY</span>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {portfolio.avgApy.toFixed(1)}%
              </div>
              <div className="text-sm text-slate-500">
                Across {portfolio.activePositions} strategies
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="text-yellow-400" size={24} />
                <span className="text-slate-400">IL Protected</span>
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">
                {portfolio.ilProtected}%
              </div>
              <div className="text-sm text-slate-500">
                Delta-neutral hedging
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="text-purple-400" size={24} />
                <span className="text-slate-400">Active Positions</span>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {portfolio.activePositions}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-500">
                  {portfolio.alertCount} alert{portfolio.alertCount !== 1 ? 's' : ''}
                </span>
                {portfolio.alertCount > 0 && (
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Chart */}
        <div className="mb-8">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Portfolio Performance</h2>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">7D</button>
                <button className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600">30D</button>
                <button className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600">90D</button>
              </div>
            </div>
            <PriceChart />
          </div>
        </div>

        {/* Strategy Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Active Strategies</h2>
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              <Plus className="w-4 h-4" />
              <span>Create New Strategy</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {portfolio.strategies.map((strategy) => (
              <StrategyCard 
                key={strategy.id} 
                strategy={strategy}
                onRebalance={() => console.log('Rebalance', strategy.id)}
                onViewDetails={() => console.log('View details', strategy.id)}
                onClose={() => console.log('Close', strategy.id)}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white">ETH/USDC strategy rebalanced</span>
              </div>
              <span className="text-slate-400 text-sm">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-white">BTC/USDC delta threshold reached</span>
              </div>
              <span className="text-slate-400 text-sm">4 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white">LINK/USDC position opened</span>
              </div>
              <span className="text-slate-400 text-sm">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;