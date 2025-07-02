import React, { useState } from 'react';
import { Shield, TrendingUp, AlertTriangle, Settings, Play, Pause, RotateCcw } from 'lucide-react';
import { Strategy } from '../../types';
import { useDeltaNeutral } from '../../hooks/useDeltaNeutral';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

interface HedgeEngineProps {
  strategy: Strategy;
}

const HedgeEngine: React.FC<HedgeEngineProps> = ({ strategy }) => {
  const { isRebalancing, riskMetrics, executeRebalance } = useDeltaNeutral(strategy);
  const [autoHedging, setAutoHedging] = useState(true);
  const [targetDelta, setTargetDelta] = useState(0.05);

  const getRiskColor = (risk: number) => {
    if (risk < 20) return 'text-green-400';
    if (risk < 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const deltaProgress = Math.abs(strategy.deltaRatio / targetDelta) * 100;
  const isOutOfRange = Math.abs(strategy.deltaRatio - targetDelta) > 0.02;

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Shield className="text-blue-400" size={24} />
          <h3 className="text-xl font-semibold text-white">Delta-Neutral Engine</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <Settings className="w-4 h-4 text-slate-400" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-400">Auto</span>
            <button
              onClick={() => setAutoHedging(!autoHedging)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoHedging ? 'bg-blue-600' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoHedging ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Delta Visualization */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-400">Delta Ratio</span>
          <div className="flex items-center space-x-2">
            <span className="text-white font-medium">
              {strategy.deltaRatio.toFixed(3)}
            </span>
            <span className="text-slate-400">/</span>
            <span className="text-blue-400 font-medium">
              {targetDelta.toFixed(3)}
            </span>
            {isOutOfRange && (
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
            )}
          </div>
        </div>

        {/* Delta Progress Bar */}
        <div className="relative">
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                isOutOfRange ? 'bg-gradient-to-r from-yellow-500 to-red-500' : 'bg-gradient-to-r from-blue-500 to-green-500'
              }`}
              style={{ width: `${Math.min(deltaProgress, 100)}%` }}
            />
          </div>
          <div 
            className="absolute top-0 w-1 h-3 bg-blue-400 rounded"
            style={{ left: `${(targetDelta / 0.1) * 100}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>0.000</span>
          <span>Target: {targetDelta.toFixed(3)}</span>
          <span>0.100</span>
        </div>
      </div>

      {/* Position Details */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="text-green-400" size={16} />
            <span className="text-sm text-slate-400">LP Position</span>
          </div>
          <div className="text-lg font-bold text-white">
            {formatCurrency(strategy.value)}
          </div>
          <div className="text-sm text-green-400">
            {formatPercentage(strategy.pnlPercentage)}
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="text-blue-400" size={16} />
            <span className="text-sm text-slate-400">Borrowed</span>
          </div>
          <div className="text-lg font-bold text-white">
            {formatCurrency(strategy.borrowedAmount)}
          </div>
          <div className="text-sm text-blue-400">
            Hedge ratio: {(strategy.borrowedAmount / strategy.value * 100).toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-white mb-3">Risk Assessment</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
            <span className="text-slate-300">Impermanent Loss</span>
            <div className="text-right">
              <span className={getRiskColor(riskMetrics.currentIL)}>
                {riskMetrics.currentIL.toFixed(2)}%
              </span>
              <div className="text-xs text-slate-500">
                Max: {riskMetrics.maxIL}%
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
            <span className="text-slate-300">Collateral Health</span>
            <div className="text-right">
              <span className={getRiskColor(100 - riskMetrics.collateralHealth)}>
                {riskMetrics.collateralHealth.toFixed(0)}%
              </span>
              <div className="text-xs text-slate-500">
                Safe: >150%
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
            <span className="text-slate-300">Liquidation Risk</span>
            <div className="text-right">
              <span className={getRiskColor(riskMetrics.liquidationRisk)}>
                {riskMetrics.liquidationRisk.toFixed(1)}%
              </span>
              <div className="text-xs text-slate-500">
                Very low
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Target Delta</span>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.001"
              value={targetDelta}
              onChange={(e) => setTargetDelta(parseFloat(e.target.value))}
              className="w-24 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-white text-sm w-12">
              {targetDelta.toFixed(3)}
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => executeRebalance(targetDelta)}
            disabled={isRebalancing || !isOutOfRange}
            className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            {isRebalancing ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin" />
                <span>Rebalancing...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Rebalance Now</span>
              </>
            )}
          </button>

          <button
            onClick={() => setAutoHedging(!autoHedging)}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              autoHedging 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-slate-600 hover:bg-slate-700 text-white'
            }`}
          >
            {autoHedging ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Last Rebalance</span>
          <span className="text-white text-sm">{strategy.lastRebalance}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-slate-400 text-sm">Next Check</span>
          <span className="text-blue-400 text-sm">
            {autoHedging ? 'In 2 hours' : 'Manual only'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HedgeEngine;