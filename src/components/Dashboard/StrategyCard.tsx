import React from 'react';
import { TrendingUp, TrendingDown, Shield, AlertTriangle, MoreHorizontal } from 'lucide-react';
import { Strategy } from '../../types';
import { formatCurrency, formatPercentage, getPercentageColor, getRiskColor } from '../../utils/formatters';

interface StrategyCardProps {
  strategy: Strategy;
  onRebalance?: () => void;
  onViewDetails?: () => void;
  onClose?: () => void;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ 
  strategy, 
  onRebalance, 
  onViewDetails, 
  onClose 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-400';
      case 'Rebalancing': return 'text-yellow-400';
      case 'Alert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <Shield className="w-4 h-4" />;
      case 'Rebalancing': return <TrendingUp className="w-4 h-4 animate-pulse" />;
      case 'Alert': return <AlertTriangle className="w-4 h-4" />;
      default: return null;
    }
  };

  const deltaProgress = Math.abs(strategy.deltaRatio / strategy.targetDelta) * 100;

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{strategy.name}</h3>
          <p className="text-sm text-slate-400">{strategy.pair}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`flex items-center space-x-1 ${getStatusColor(strategy.status)}`}>
            {getStatusIcon(strategy.status)}
            <span className="text-xs font-medium">{strategy.status}</span>
          </div>
          <button className="p-1 hover:bg-slate-700 rounded-lg transition-colors">
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Value and P&L */}
      <div className="mb-4">
        <div className="text-2xl font-bold text-white mb-1">
          {formatCurrency(strategy.value)}
        </div>
        <div className="flex items-center space-x-2">
          <span 
            className="text-sm font-medium"
            style={{ color: getPercentageColor(strategy.pnlPercentage) }}
          >
            {formatPercentage(strategy.pnlPercentage)}
          </span>
          <span 
            className="text-sm"
            style={{ color: getPercentageColor(strategy.pnl) }}
          >
            ({strategy.pnl >= 0 ? '+' : ''}{formatCurrency(strategy.pnl)})
          </span>
          {strategy.pnlPercentage >= 0 ? (
            <TrendingUp className="w-4 h-4 text-green-400" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-400" />
          )}
        </div>
      </div>

      {/* Delta Ratio Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-400">Delta Ratio</span>
          <span className="text-sm text-white">
            {strategy.deltaRatio.toFixed(3)} / {strategy.targetDelta.toFixed(3)}
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(deltaProgress, 100)}%` }}
          />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-slate-900/50 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">APY</div>
          <div className="text-lg font-semibold text-green-400">
            {strategy.apy.toFixed(1)}%
          </div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-3">
          <div className="text-xs text-slate-400 mb-1">Risk</div>
          <div 
            className="text-lg font-semibold"
            style={{ color: getRiskColor(strategy.risk) }}
          >
            {strategy.risk}
          </div>
        </div>
      </div>

      {/* Mini Sparkline */}
      <div className="mb-4">
        <div className="text-xs text-slate-400 mb-2">Performance (24h)</div>
        <div className="h-8 flex items-end space-x-1">
          {strategy.sparklineData.slice(-20).map((value, index) => {
            const height = ((value - Math.min(...strategy.sparklineData)) / 
                          (Math.max(...strategy.sparklineData) - Math.min(...strategy.sparklineData))) * 100;
            return (
              <div
                key={index}
                className="bg-gradient-to-t from-blue-500/50 to-blue-400 rounded-sm flex-1"
                style={{ height: `${Math.max(height, 10)}%` }}
              />
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={onRebalance}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
        >
          Rebalance
        </button>
        <button
          onClick={onViewDetails}
          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
        >
          Details
        </button>
        <button
          onClick={onClose}
          className="px-3 py-2 bg-slate-700 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
        >
          ×
        </button>
      </div>

      {/* Last Rebalance */}
      <div className="mt-3 text-xs text-slate-500">
        Last rebalance: {strategy.lastRebalance}
      </div>
    </div>
  );
};

export default StrategyCard;