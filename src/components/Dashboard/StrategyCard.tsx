import React from 'react';
import { Strategy } from '../../types';
import { Shield, AlertTriangle, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { formatTVL, formatAPY } from '../../utils/formatters';

interface StrategyCardProps {
  strategy: Strategy;
  onManage?: (strategy: Strategy) => void;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy, onManage }) => {
  const getRiskColor = (risk: Strategy['risk']) => {
    switch (risk) {
      case 'Low': return 'text-green-400 bg-green-900';
      case 'Medium': return 'text-yellow-400 bg-yellow-900';
      case 'High': return 'text-red-400 bg-red-900';
      default: return 'text-gray-400 bg-gray-700';
    }
  };

  const getHealthStatus = (ratio: number) => {
    if (ratio >= 200) return { label: 'Excellent', color: 'text-green-400', bg: 'bg-green-900' };
    if (ratio >= 150) return { label: 'Good', color: 'text-blue-400', bg: 'bg-blue-900' };
    if (ratio >= 120) return { label: 'Moderate', color: 'text-yellow-400', bg: 'bg-yellow-900' };
    return { label: 'At Risk', color: 'text-red-400', bg: 'bg-red-900' };
  };

  const health = getHealthStatus(strategy.collateralRatio);
  const riskColors = getRiskColor(strategy.risk);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold mb-1">{strategy.name}</h3>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <span>{strategy.pair}</span>
              {strategy.isActive && (
                <div className="flex items-center gap-1 text-green-400">
                  <Activity size={12} />
                  <span className="text-xs">Active</span>
                </div>
              )}
            </div>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-medium ${riskColors}`}>
            {strategy.risk} Risk
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Key metrics grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-700 rounded p-3">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <DollarSign size={14} />
              <span>TVL</span>
            </div>
            <div className="text-lg font-bold text-white">
              {formatTVL(strategy.tvl)}
            </div>
          </div>
          
          <div className="bg-gray-700 rounded p-3">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <TrendingUp size={14} />
              <span>APY</span>
            </div>
            <div className="text-lg font-bold text-green-400">
              {formatAPY(strategy.apy)}
            </div>
          </div>
        </div>

        {/* Delta and IL info */}
        <div className="bg-gray-700 rounded p-3 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                <Shield size={14} />
                <span>Delta Ratio</span>
              </div>
              <span className="font-medium text-blue-400">{strategy.deltaRatio.toFixed(3)}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                <AlertTriangle size={14} />
                <span>IL Exposure</span>
              </div>
              <span className="font-medium text-yellow-400">{strategy.impermanentLoss.toFixed(2)}%</span>
            </div>
          </div>
        </div>

        {/* Health status and collateral */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-sm text-gray-400 mb-1">Collateral Health</div>
            <div className={`inline-flex items-center gap-2 px-2 py-1 rounded text-sm ${health.bg} ${health.color}`}>
              <div className="w-2 h-2 rounded-full bg-current"></div>
              <span>{health.label}</span>
              <span className="text-xs">({strategy.collateralRatio}%)</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-gray-400">Borrowed</div>
            <div className="font-medium text-white">
              {formatTVL(strategy.borrowedAmount)}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => onManage?.(strategy)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded transition-colors"
          >
            Manage Position
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded transition-colors">
            Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;