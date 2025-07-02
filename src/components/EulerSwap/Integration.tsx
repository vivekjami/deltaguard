import React from 'react';
import { Zap, TrendingUp, DollarSign, Activity, ArrowUpDown, Layers } from 'lucide-react';
import { useEulerSwap } from '../../hooks/useEulerSwap';
import { formatCurrency } from '../../utils/formatters';

interface IntegrationProps {
  pair: string;
}

const Integration: React.FC<IntegrationProps> = ({ pair }) => {
  const { data, isLoading, simulateJITLiquidity } = useEulerSwap(pair);

  if (isLoading) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-slate-700 rounded w-1/3"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-slate-700 rounded"></div>
            <div className="h-20 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const jitMultiplier = simulateJITLiquidity(100000) / 100000;

  return (
    <div className="space-y-6">
      {/* EulerSwap Overview */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Zap className="text-yellow-400" size={24} />
          <h3 className="text-xl font-semibold text-white">EulerSwap Integration</h3>
          <div className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs font-medium">
            {pair}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="text-green-400" size={16} />
              <span className="text-sm text-slate-400">Total Liquidity</span>
            </div>
            <div className="text-lg font-bold text-white">
              {formatCurrency(data.totalLiquidity)}
            </div>
            <div className="text-sm text-green-400">
              +12.5% this week
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="text-blue-400" size={16} />
              <span className="text-sm text-slate-400">Utilization</span>
            </div>
            <div className="text-lg font-bold text-blue-400">
              {data.utilizationRate.toFixed(1)}%
            </div>
            <div className="text-sm text-slate-500">
              Optimal range
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="text-purple-400" size={16} />
              <span className="text-sm text-slate-400">Supply APY</span>
            </div>
            <div className="text-lg font-bold text-green-400">
              {data.supplyRate.toFixed(2)}%
            </div>
            <div className="text-sm text-slate-500">
              Variable rate
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <ArrowUpDown className="text-red-400" size={16} />
              <span className="text-sm text-slate-400">Borrow APY</span>
            </div>
            <div className="text-lg font-bold text-red-400">
              {data.borrowingRate.toFixed(2)}%
            </div>
            <div className="text-sm text-slate-500">
              Variable rate
            </div>
          </div>
        </div>
      </div>

      {/* JIT Liquidity Simulation */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Layers className="text-purple-400" size={24} />
          <h3 className="text-xl font-semibold text-white">JIT Liquidity Optimization</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Depth Simulation */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Liquidity Depth Simulation</h4>
            
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-4 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {jitMultiplier.toFixed(1)}x
                </div>
                <div className="text-sm text-slate-300">
                  Effective liquidity multiplier vs traditional AMM
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Traditional AMM Depth</span>
                <span className="text-white">$100K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">EulerSwap Effective Depth</span>
                <span className="text-yellow-400 font-bold">
                  {formatCurrency(jitMultiplier * 100000)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Slippage Reduction</span>
                <span className="text-green-400">
                  -{((1 - 1/jitMultiplier) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Capital Efficiency */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Capital Efficiency Benefits</h4>
            
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Unified Capital Model</span>
                  <span className="text-green-400 font-medium">Active</span>
                </div>
                <p className="text-sm text-slate-300">
                  Same capital powers swaps, lending, and collateral simultaneously
                </p>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Capital Utilization</span>
                  <span className="text-blue-400 font-medium">3.2x</span>
                </div>
                <p className="text-sm text-slate-300">
                  Improved efficiency vs traditional isolated protocols
                </p>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Gas Optimization</span>
                  <span className="text-purple-400 font-medium">-45%</span>
                </div>
                <p className="text-sm text-slate-300">
                  Reduced transaction costs through batched operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Benefits */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Integration Benefits for Delta-Neutral Strategies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-blue-400" size={24} />
            </div>
            <h4 className="text-lg font-medium text-white mb-2">Instant Liquidity</h4>
            <p className="text-sm text-slate-400">
              Access up to 50x liquidity depth for large rebalancing operations without slippage
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-green-400" size={24} />
            </div>
            <h4 className="text-lg font-medium text-white mb-2">Cost Efficiency</h4>
            <p className="text-sm text-slate-400">
              Reduced borrowing costs and improved lending yields through unified capital model
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="text-purple-400" size={24} />
            </div>
            <h4 className="text-lg font-medium text-white mb-2">Real-time Optimization</h4>
            <p className="text-sm text-slate-400">
              Dynamic rate adjustments and automated position management for optimal yields
            </p>
          </div>
        </div>
      </div>

      {/* Live Market Data */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Live Market Data</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-xs text-slate-400 mb-1">24h Volume</div>
            <div className="text-lg font-semibold text-white">$2.4M</div>
            <div className="text-sm text-green-400">+18.5%</div>
          </div>
          
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-xs text-slate-400 mb-1">Active LPs</div>
            <div className="text-lg font-semibold text-white">1,247</div>
            <div className="text-sm text-blue-400">+12 today</div>
          </div>
          
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-xs text-slate-400 mb-1">Avg Trade Size</div>
            <div className="text-lg font-semibold text-white">$8.5K</div>
            <div className="text-sm text-slate-400">Stable</div>
          </div>
          
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-xs text-slate-400 mb-1">Protocol TVL</div>
            <div className="text-lg font-semibold text-white">$127M</div>
            <div className="text-sm text-green-400">+5.2%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;