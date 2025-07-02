import React, { useState } from 'react';
import { TrendingUp, DollarSign, Shield, Zap, Plus, Bell, Wallet, ChevronDown, Activity, Target } from 'lucide-react';
import { usePortfolio } from '../../hooks/usePortfolio';
import { formatCurrency, formatPercentage, formatAddress } from '../../utils/formatters';
import StrategyCard from './StrategyCard';
import PriceChart from '../Charts/PriceChart';

const Overview: React.FC = () => {
  const { portfolio, isLoading } = usePortfolio();
  const [isWalletConnected] = useState(true);
  const [walletAddress] = useState('0x1234567890abcdef1234567890abcdef12345678');

  if (isLoading || !portfolio) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back to DeltaGuard
            </h1>
            <p className="text-slate-300 text-lg">
              Your delta-neutral strategies are performing exceptionally well
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400 mb-1">Total Portfolio Value</div>
            <div className="text-3xl font-bold text-white">
              {formatCurrency(portfolio.totalValue)}
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <span 
                className="text-lg font-semibold"
                style={{ color: portfolio.totalPnlPercentage >= 0 ? '#10b981' : '#ef4444' }}
              >
                {formatPercentage(portfolio.totalPnlPercentage)}
              </span>
              <span className="text-slate-400">24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <DollarSign className="text-white" size={24} />
            </div>
            <span className="text-slate-400 font-medium">Total Value Locked</span>
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {formatCurrency(portfolio.totalValue)}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-emerald-400 font-semibold">
              {formatPercentage(portfolio.totalPnlPercentage)}
            </span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-500 text-sm">vs last week</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
            <span className="text-slate-400 font-medium">Average APY</span>
          </div>
          <div className="text-3xl font-bold text-blue-400 mb-2">
            {portfolio.avgApy.toFixed(1)}%
          </div>
          <div className="text-slate-500 text-sm">
            Across {portfolio.activePositions} active strategies
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Shield className="text-white" size={24} />
            </div>
            <span className="text-slate-400 font-medium">IL Protected</span>
          </div>
          <div className="text-3xl font-bold text-purple-400 mb-2">
            {portfolio.ilProtected}%
          </div>
          <div className="text-slate-500 text-sm">
            Delta-neutral hedging active
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Activity className="text-white" size={24} />
            </div>
            <span className="text-slate-400 font-medium">Active Positions</span>
          </div>
          <div className="text-3xl font-bold text-orange-400 mb-2">
            {portfolio.activePositions}
          </div>
          <div className="flex items-center space-x-2">
            {portfolio.alertCount > 0 ? (
              <>
                <span className="text-red-400 text-sm font-medium">
                  {portfolio.alertCount} alert{portfolio.alertCount !== 1 ? 's' : ''}
                </span>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </>
            ) : (
              <span className="text-green-400 text-sm font-medium">All healthy</span>
            )}
          </div>
        </div>
      </div>

      {/* Portfolio Performance Chart */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Portfolio Performance</h2>
            <p className="text-slate-400">Track your delta-neutral strategy returns over time</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">7D</button>
            <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 transition-colors">30D</button>
            <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 transition-colors">90D</button>
            <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 transition-colors">1Y</button>
          </div>
        </div>
        <PriceChart />
      </div>

      {/* Strategy Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Active Strategies</h2>
            <p className="text-slate-400">Manage your delta-neutral liquidity positions</p>
          </div>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            <Plus className="w-5 h-5" />
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

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-400" />
            <span>Quick Actions</span>
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl transition-colors">
              <Plus className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Add Liquidity</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl transition-colors">
              <Activity className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Rebalance All</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl transition-colors">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Risk Assessment</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <span className="text-white font-medium">ETH/USDC rebalanced</span>
                  <div className="text-slate-400 text-sm">Delta: 0.03 → 0.05</div>
                </div>
              </div>
              <span className="text-slate-400 text-sm">2h ago</span>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div>
                  <span className="text-white font-medium">BTC/USDC threshold alert</span>
                  <div className="text-slate-400 text-sm">Rebalancing recommended</div>
                </div>
              </div>
              <span className="text-slate-400 text-sm">4h ago</span>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div>
                  <span className="text-white font-medium">LINK/USDC position opened</span>
                  <div className="text-slate-400 text-sm">$41,500 deployed</div>
                </div>
              </div>
              <span className="text-slate-400 text-sm">1d ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;