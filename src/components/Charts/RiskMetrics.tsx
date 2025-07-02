import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Shield, AlertTriangle, TrendingDown, Activity } from 'lucide-react';

const RiskMetrics: React.FC = () => {
  const riskData = [
    { name: 'Protected', value: 95, color: '#10b981' },
    { name: 'At Risk', value: 5, color: '#ef4444' }
  ];

  const scenarioData = [
    { scenario: '-50% ETH', impact: -2.1 },
    { scenario: '-30% ETH', impact: -1.2 },
    { scenario: '-10% ETH', impact: -0.3 },
    { scenario: 'Current', impact: 0 },
    { scenario: '+10% ETH', impact: -0.2 },
    { scenario: '+30% ETH', impact: -0.8 },
    { scenario: '+50% ETH', impact: -1.5 }
  ];

  const liquidationData = [
    { strategy: 'ETH/USDC', health: 180, risk: 'Low' },
    { strategy: 'BTC/USDC', health: 165, risk: 'Medium' },
    { strategy: 'LINK/USDC', health: 195, risk: 'Low' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl">
          <p className="text-sm text-white">
            {payload[0].payload.scenario}: {payload[0].value.toFixed(2)}%
          </p>
        </div>
      );
    }
    return null;
  };

  const getRiskColor = (health: number) => {
    if (health >= 180) return '#10b981';
    if (health >= 150) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="space-y-6">
      {/* Risk Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="text-green-400" size={24} />
            <span className="text-slate-400">IL Protection</span>
          </div>
          <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
          <div className="text-sm text-slate-500">$187K protected</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="text-yellow-400" size={24} />
            <span className="text-slate-400">Risk Score</span>
          </div>
          <div className="text-3xl font-bold text-yellow-400 mb-2">23</div>
          <div className="text-sm text-slate-500">Low risk</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingDown className="text-red-400" size={24} />
            <span className="text-slate-400">Max Drawdown</span>
          </div>
          <div className="text-3xl font-bold text-red-400 mb-2">2.1%</div>
          <div className="text-sm text-slate-500">Last 90 days</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="text-purple-400" size={24} />
            <span className="text-slate-400">Volatility</span>
          </div>
          <div className="text-3xl font-bold text-purple-400 mb-2">8.4%</div>
          <div className="text-sm text-slate-500">30-day avg</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* IL Protection Gauge */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Impermanent Loss Protection</h3>
          
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                  >
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">95%</div>
                  <div className="text-sm text-slate-400">Protected</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Total Exposure</span>
              <span className="text-white font-medium">$125,500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Protected Amount</span>
              <span className="text-green-400 font-medium">$119,225</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">At Risk</span>
              <span className="text-red-400 font-medium">$6,275</span>
            </div>
          </div>
        </div>

        {/* Scenario Analysis */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Scenario Analysis</h3>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scenarioData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="scenario" 
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="impact" 
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 text-sm text-slate-400">
            Portfolio impact under different ETH price scenarios
          </div>
        </div>
      </div>

      {/* Liquidation Risk */}
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Liquidation Risk Assessment</h3>
        
        <div className="space-y-4">
          {liquidationData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-white font-medium">{item.strategy}</div>
                <div 
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: `${getRiskColor(item.health)}20`,
                    color: getRiskColor(item.health)
                  }}
                >
                  {item.risk} Risk
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-white font-medium">{item.health}%</div>
                  <div className="text-slate-400 text-sm">Collateral Ratio</div>
                </div>
                
                <div className="w-24 bg-slate-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.min((item.health / 200) * 100, 100)}%`,
                      backgroundColor: getRiskColor(item.health)
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="text-yellow-400" size={16} />
            <span className="text-yellow-400 font-medium">Risk Management</span>
          </div>
          <p className="text-slate-300 text-sm">
            All positions maintain healthy collateral ratios above 150%. 
            Automatic rebalancing triggers at 130% to prevent liquidation risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskMetrics;