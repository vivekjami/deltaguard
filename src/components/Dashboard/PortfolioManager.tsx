import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown, Settings, Download, RefreshCw } from 'lucide-react';
import { usePortfolio } from '../../hooks/usePortfolio';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

const PortfolioManager: React.FC = () => {
  const { portfolio, refreshPortfolio } = usePortfolio();
  const [selectedView, setSelectedView] = useState<'allocation' | 'performance' | 'assets'>('allocation');

  if (!portfolio) return null;

  const allocationData = portfolio.strategies.map(strategy => ({
    name: strategy.pair,
    value: strategy.value,
    percentage: (strategy.value / portfolio.totalValue) * 100,
    color: strategy.pair === 'ETH/USDC' ? '#3b82f6' : 
           strategy.pair === 'BTC/USDC' ? '#f59e0b' : '#10b981'
  }));

  const performanceData = portfolio.strategies.map(strategy => ({
    name: strategy.pair,
    pnl: strategy.pnlPercentage,
    apy: strategy.apy
  }));

  const assetBreakdown = [
    { asset: 'ETH', amount: 18.5, value: 45200, change: 3.2, icon: '🔷' },
    { asset: 'BTC', amount: 1.2, value: 38800, change: 1.8, icon: '₿' },
    { asset: 'LINK', amount: 2850, value: 41500, change: 2.1, icon: '🔗' },
    { asset: 'USDC', amount: 125500, value: 125500, change: 0, icon: '💵' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium">{payload[0].payload.name}</p>
          <p className="text-slate-300">
            Value: {formatCurrency(payload[0].payload.value)}
          </p>
          <p className="text-slate-300">
            Allocation: {payload[0].payload.percentage?.toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Portfolio Manager</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={refreshPortfolio}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <Download className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <Settings className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* View Selector */}
      <div className="flex space-x-2 mb-6">
        {[
          { key: 'allocation', label: 'Allocation' },
          { key: 'performance', label: 'Performance' },
          { key: 'assets', label: 'Assets' }
        ].map((view) => (
          <button
            key={view.key}
            onClick={() => setSelectedView(view.key as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedView === view.key
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {view.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {selectedView === 'allocation' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Portfolio Allocation</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percentage }) => `${name} ${percentage.toFixed(1)}%`}
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Allocation Details */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Strategy Breakdown</h3>
            <div className="space-y-3">
              {allocationData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-white font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{formatCurrency(item.value)}</div>
                    <div className="text-slate-400 text-sm">{item.percentage.toFixed(1)}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedView === 'performance' && (
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Performance Comparison</h3>
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="name" 
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
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="pnl" fill="#10b981" name="P&L %" radius={[4, 4, 0, 0]} />
                <Bar dataKey="apy" fill="#3b82f6" name="APY %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolio.strategies.map((strategy, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="text-white font-medium mb-2">{strategy.pair}</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">P&L</span>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: strategy.pnlPercentage >= 0 ? '#10b981' : '#ef4444' }}
                    >
                      {formatPercentage(strategy.pnlPercentage)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">APY</span>
                    <span className="text-blue-400 text-sm font-medium">
                      {strategy.apy.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedView === 'assets' && (
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Asset Breakdown</h3>
          <div className="space-y-3">
            {assetBreakdown.map((asset, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{asset.icon}</div>
                  <div>
                    <div className="text-white font-medium">{asset.asset}</div>
                    <div className="text-slate-400 text-sm">
                      {asset.amount.toLocaleString()} {asset.asset}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-white font-medium">{formatCurrency(asset.value)}</div>
                  <div className="flex items-center space-x-1">
                    <span 
                      className="text-sm"
                      style={{ color: asset.change >= 0 ? '#10b981' : '#ef4444' }}
                    >
                      {formatPercentage(asset.change)}
                    </span>
                    {asset.change >= 0 ? (
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    ) : asset.change < 0 ? (
                      <TrendingDown className="w-3 h-3 text-red-400" />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Asset Summary */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-xs text-slate-400 mb-1">Total Assets</div>
              <div className="text-lg font-semibold text-white">4</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-xs text-slate-400 mb-1">Diversification</div>
              <div className="text-lg font-semibold text-blue-400">High</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-xs text-slate-400 mb-1">Correlation</div>
              <div className="text-lg font-semibold text-yellow-400">0.65</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="text-xs text-slate-400 mb-1">Rebalance</div>
              <div className="text-lg font-semibold text-green-400">Optimal</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioManager;