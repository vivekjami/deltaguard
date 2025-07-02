import React from 'react';
import { AlertTriangle, Shield, TrendingDown, Activity, Target, Zap } from 'lucide-react';
import RiskMetrics from '../Charts/RiskMetrics';

const RiskAssessment: React.FC = () => {
  const riskFactors = [
    {
      name: 'Impermanent Loss',
      current: 0.85,
      threshold: 5.0,
      status: 'Low',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      name: 'Liquidation Risk',
      current: 2.1,
      threshold: 10.0,
      status: 'Low',
      icon: AlertTriangle,
      color: 'text-green-400'
    },
    {
      name: 'Gas Cost Impact',
      current: 15.2,
      threshold: 25.0,
      status: 'Medium',
      icon: Zap,
      color: 'text-yellow-400'
    },
    {
      name: 'Market Volatility',
      current: 8.4,
      threshold: 15.0,
      status: 'Low',
      icon: Activity,
      color: 'text-green-400'
    }
  ];

  const recommendations = [
    {
      priority: 'High',
      title: 'Optimize Gas Timing',
      description: 'Consider rebalancing during lower gas periods to reduce costs',
      action: 'Schedule rebalancing for off-peak hours',
      impact: 'Reduce costs by ~30%'
    },
    {
      priority: 'Medium',
      title: 'Increase Delta Threshold',
      description: 'Current 5% threshold may be too aggressive for current volatility',
      action: 'Consider increasing to 7% for ETH/USDC',
      impact: 'Reduce rebalancing frequency'
    },
    {
      priority: 'Low',
      title: 'Diversify Strategies',
      description: 'Consider adding more uncorrelated pairs to reduce portfolio risk',
      action: 'Explore LINK/USDC or other altcoin pairs',
      impact: 'Improve risk-adjusted returns'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'border-red-400 bg-red-400/10';
      case 'Medium': return 'border-yellow-400 bg-yellow-400/10';
      case 'Low': return 'border-green-400 bg-green-400/10';
      default: return 'border-slate-400 bg-slate-400/10';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Low': return 'text-green-400 bg-green-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'High': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="space-y-6">
      {/* Risk Factors Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {riskFactors.map((factor, index) => {
          const Icon = factor.icon;
          const progress = (factor.current / factor.threshold) * 100;
          
          return (
            <div key={index} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon className={factor.color} size={20} />
                <span className="text-slate-400 text-sm">{factor.name}</span>
              </div>
              
              <div className="mb-3">
                <div className="text-2xl font-bold text-white">
                  {factor.current.toFixed(1)}%
                </div>
                <div className="text-sm text-slate-500">
                  Threshold: {factor.threshold}%
                </div>
              </div>

              <div className="mb-3">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      progress < 50 ? 'bg-green-400' : 
                      progress < 80 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>

              <div 
                className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(factor.status)}`}
              >
                {factor.status} Risk
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Risk Metrics */}
      <RiskMetrics />

      {/* Risk Recommendations */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="text-purple-400" size={24} />
          <h3 className="text-xl font-semibold text-white">Risk Management Recommendations</h3>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-4 ${getPriorityColor(rec.priority)}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      rec.priority === 'High' ? 'text-red-400 bg-red-400/20' :
                      rec.priority === 'Medium' ? 'text-yellow-400 bg-yellow-400/20' :
                      'text-green-400 bg-green-400/20'
                    }`}
                  >
                    {rec.priority} Priority
                  </div>
                  <h4 className="text-white font-medium">{rec.title}</h4>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-3">{rec.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Recommended Action</div>
                  <div className="text-white text-sm">{rec.action}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Expected Impact</div>
                  <div className="text-blue-400 text-sm">{rec.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Monitoring Settings */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Risk Monitoring & Alerts</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Alert Thresholds</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">IL Warning</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="3"
                    className="w-20 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white text-sm w-8">3%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">Liquidation Alert</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="120"
                    max="200"
                    defaultValue="150"
                    className="w-20 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white text-sm w-12">150%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">Gas Cost Alert</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="50"
                    max="200"
                    defaultValue="100"
                    className="w-20 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white text-sm w-12">100 gwei</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Notification Settings</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Email Alerts</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">SMS Alerts</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">Discord Webhook</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;