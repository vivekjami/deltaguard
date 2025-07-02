import React, { useState } from 'react';
import { RotateCcw, Clock, DollarSign, TrendingUp, Settings, AlertCircle } from 'lucide-react';
import { formatPercentage } from '../../utils/formatters';

const RebalanceManager: React.FC = () => {
  const [threshold, setThreshold] = useState(5);
  const [maxGasCost, setMaxGasCost] = useState(50);
  const [autoRebalance, setAutoRebalance] = useState(true);

  const rebalanceHistory = [
    {
      id: 1,
      timestamp: '2024-01-15 14:30',
      strategy: 'ETH/USDC',
      trigger: 'Delta threshold',
      deltaChange: 0.08,
      gasCost: 25.50,
      impact: 0.3,
      status: 'Completed'
    },
    {
      id: 2,
      timestamp: '2024-01-15 09:15',
      strategy: 'BTC/USDC',
      trigger: 'Manual',
      deltaChange: 0.06,
      gasCost: 32.10,
      impact: 0.2,
      status: 'Completed'
    },
    {
      id: 3,
      timestamp: '2024-01-14 22:45',
      strategy: 'LINK/USDC',
      trigger: 'Scheduled',
      deltaChange: 0.04,
      gasCost: 18.75,
      impact: 0.1,
      status: 'Completed'
    }
  ];

  const upcomingRebalances = [
    {
      strategy: 'ETH/USDC',
      estimatedTime: '2 hours',
      reason: 'Delta approaching threshold',
      priority: 'Medium'
    },
    {
      strategy: 'BTC/USDC',
      estimatedTime: '6 hours',
      reason: 'Scheduled maintenance',
      priority: 'Low'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-400 bg-red-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'Low': return 'text-green-400 bg-green-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="space-y-6">
      {/* Settings Panel */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Settings className="text-blue-400" size={24} />
          <h3 className="text-xl font-semibold text-white">Rebalancing Settings</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Auto Rebalancing */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Auto Rebalancing</span>
              <button
                onClick={() => setAutoRebalance(!autoRebalance)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  autoRebalance ? 'bg-blue-600' : 'bg-slate-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoRebalance ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400">Delta Threshold</span>
                <span className="text-white">{threshold}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={threshold}
                onChange={(e) => setThreshold(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1%</span>
                <span>10%</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400">Max Gas Cost</span>
                <span className="text-white">${maxGasCost}</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={maxGasCost}
                onChange={(e) => setMaxGasCost(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$10</span>
                <span>$100</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">Total Rebalances (30d)</div>
              <div className="text-2xl font-bold text-white">24</div>
              <div className="text-sm text-green-400">+12% from last month</div>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">Avg Gas Cost</div>
              <div className="text-2xl font-bold text-white">$28.50</div>
              <div className="text-sm text-red-400">+5% from last month</div>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">Success Rate</div>
              <div className="text-2xl font-bold text-white">98.5%</div>
              <div className="text-sm text-green-400">Excellent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Rebalances */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Clock className="text-yellow-400" size={24} />
          <h3 className="text-xl font-semibold text-white">Upcoming Rebalances</h3>
        </div>

        <div className="space-y-3">
          {upcomingRebalances.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-white font-medium">{item.strategy}</div>
                <div 
                  className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(item.priority)}`}
                >
                  {item.priority}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-white font-medium">In {item.estimatedTime}</div>
                <div className="text-slate-400 text-sm">{item.reason}</div>
              </div>
            </div>
          ))}
        </div>

        {upcomingRebalances.length === 0 && (
          <div className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400">No upcoming rebalances scheduled</p>
          </div>
        )}
      </div>

      {/* Rebalance History */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <RotateCcw className="text-green-400" size={24} />
          <h3 className="text-xl font-semibold text-white">Rebalance History</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 font-medium py-3">Time</th>
                <th className="text-left text-slate-400 font-medium py-3">Strategy</th>
                <th className="text-left text-slate-400 font-medium py-3">Trigger</th>
                <th className="text-left text-slate-400 font-medium py-3">Delta Change</th>
                <th className="text-left text-slate-400 font-medium py-3">Gas Cost</th>
                <th className="text-left text-slate-400 font-medium py-3">Impact</th>
                <th className="text-left text-slate-400 font-medium py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {rebalanceHistory.map((item) => (
                <tr key={item.id} className="border-b border-slate-700/50">
                  <td className="py-3 text-slate-300">{item.timestamp}</td>
                  <td className="py-3 text-white font-medium">{item.strategy}</td>
                  <td className="py-3 text-slate-300">{item.trigger}</td>
                  <td className="py-3 text-blue-400">{formatPercentage(item.deltaChange)}</td>
                  <td className="py-3 text-red-400">${item.gasCost.toFixed(2)}</td>
                  <td className="py-3 text-green-400">-{item.impact}% IL</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-400/10 text-green-400 rounded text-xs">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cost Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <DollarSign className="text-red-400" size={20} />
            <span className="text-slate-400">Total Gas Spent</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">$684.50</div>
          <div className="text-sm text-slate-500">Last 30 days</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="text-green-400" size={20} />
            <span className="text-slate-400">IL Prevented</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">$2,450</div>
          <div className="text-sm text-slate-500">Net benefit</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <RotateCcw className="text-blue-400" size={20} />
            <span className="text-slate-400">Efficiency</span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">3.6x</div>
          <div className="text-sm text-slate-500">ROI on gas costs</div>
        </div>
      </div>
    </div>
  );
};

export default RebalanceManager;