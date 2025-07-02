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
      <div className="min-h-screen bg-gradient-to-br from-pearl via-warm-cream to-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto mb-4"></div>
          <p className="text-slate-blue">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-warm-cream to-cream">
      {/* Header */}
      <header className="border-b border-primary-blue/20 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-sage-green rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">🛡️</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-blue to-forest-green bg-clip-text text-transparent">
                DeltaGuard
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-slate-blue">Portfolio Value</div>
                <div className="text-lg font-semibold text-navy">
                  {formatCurrency(portfolio.totalValue)}
                </div>
              </div>
              
              <button className="p-2 hover:bg-primary-blue/10 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-slate-blue" />
                {portfolio.alertCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {portfolio.alertCount}
                  </span>
                )}
              </button>
              
              {isWalletConnected ? (
                <div className="flex items-center space-x-2 bg-sage-green/10 border border-sage-green/20 rounded-lg px-3 py-2">
                  <Wallet className="w-4 h-4 text-sage-green" />
                  <span className="text-sm text-navy">{formatAddress(walletAddress)}</span>
                  <ChevronDown className="w-4 h-4 text-slate-blue" />
                </div>
              ) : (
                <button 
                  onClick={() => setIsWalletConnected(true)}
                  className="bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
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
            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-3 mb-2">
                <DollarSign className="text-sage-green" size={24} />
                <span className="text-slate-blue">Total Portfolio</span>
              </div>
              <div className="text-3xl font-bold text-navy mb-1">
                {formatCurrency(portfolio.totalValue)}
              </div>
              <div className="flex items-center space-x-2">
                <span 
                  className="text-sm font-medium"
                  style={{ color: portfolio.totalPnlPercentage >= 0 ? '#10b981' : '#ef4444' }}
                >
                  {formatPercentage(portfolio.totalPnlPercentage)}
                </span>
                <TrendingUp className="w-4 h-4 text-sage-green" />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-3 mb-2">
                <TrendingUp className="text-primary-blue" size={24} />
                <span className="text-slate-blue">Average APY</span>
              </div>
              <div className="text-3xl font-bold text-primary-blue mb-1">
                {portfolio.avgApy.toFixed(1)}%
              </div>
              <div className="text-sm text-slate-blue">
                Across {portfolio.activePositions} strategies
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="text-forest-green" size={24} />
                <span className="text-slate-blue">IL Protected</span>
              </div>
              <div className="text-3xl font-bold text-forest-green mb-1">
                {portfolio.ilProtected}%
              </div>
              <div className="text-sm text-slate-blue">
                Delta-neutral hedging
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="text-mint-green" size={24} />
                <span className="text-slate-blue">Active Positions</span>
              </div>
              <div className="text-3xl font-bold text-mint-green mb-1">
                {portfolio.activePositions}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-blue">
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
          <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/20 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-navy">Portfolio Performance</h2>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-primary-blue text-white rounded-lg text-sm transition-all duration-300 hover:scale-105">7D</button>
                <button className="px-3 py-1 bg-slate-blue/20 text-slate-blue rounded-lg text-sm hover:bg-slate-blue/30 transition-colors">30D</button>
                <button className="px-3 py-1 bg-slate-blue/20 text-slate-blue rounded-lg text-sm hover:bg-slate-blue/30 transition-colors">90D</button>
              </div>
            </div>
            <PriceChart />
          </div>
        </div>

        {/* Strategy Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-navy">Active Strategies</h2>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
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
        <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/20 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-navy mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-primary-blue/10">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
                <span className="text-navy">ETH/USDC strategy rebalanced</span>
              </div>
              <span className="text-slate-blue text-sm">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-primary-blue/10">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-navy">BTC/USDC delta threshold reached</span>
              </div>
              <span className="text-slate-blue text-sm">4 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse"></div>
                <span className="text-navy">LINK/USDC position opened</span>
              </div>
              <span className="text-slate-blue text-sm">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;