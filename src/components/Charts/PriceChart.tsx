import React, { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { generatePriceData } from '../../utils/mockData';
import { formatCurrency } from '../../utils/formatters';

const PriceChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [showComparison, setShowComparison] = useState(false);
  
  const data = generatePriceData(125500, 168).map((item, index) => ({
    time: new Date(item.timestamp).toLocaleDateString(),
    portfolio: item.price,
    baseline: 125500 * (1 + (Math.random() - 0.5) * 0.001 * index),
    volume: item.volume
  }));

  const timeRanges = [
    { label: '1D', value: '1d' },
    { label: '7D', value: '7d' },
    { label: '30D', value: '30d' },
    { label: '90D', value: '90d' },
    { label: 'ALL', value: 'all' }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-xl border border-primary-blue/20 rounded-lg p-3 shadow-xl">
          <p className="text-slate-blue text-sm mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                  timeRange === range.value
                    ? 'bg-primary-blue text-white shadow-lg'
                    : 'bg-slate-blue/20 text-slate-blue hover:bg-slate-blue/30'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setShowComparison(!showComparison)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
              showComparison
                ? 'bg-sage-green text-white shadow-lg'
                : 'bg-slate-blue/20 text-slate-blue hover:bg-slate-blue/30'
            }`}
          >
            vs Baseline
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-blue to-sage-green rounded-full"></div>
            <span className="text-sm text-slate-blue">Portfolio</span>
          </div>
          {showComparison && (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-slate-blue rounded-full"></div>
              <span className="text-sm text-slate-blue">Baseline</span>
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="baselineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#475569" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#475569" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.2} />
            <XAxis 
              dataKey="time" 
              stroke="#475569"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#475569"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => formatCurrency(value, 0)}
            />
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              type="monotone"
              dataKey="portfolio"
              stroke="#2563eb"
              strokeWidth={2}
              fill="url(#portfolioGradient)"
              name="Portfolio"
            />
            
            {showComparison && (
              <Area
                type="monotone"
                dataKey="baseline"
                stroke="#475569"
                strokeWidth={2}
                fill="url(#baselineGradient)"
                name="Baseline"
                strokeDasharray="5 5"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-sage-green/10 rounded-lg p-4">
          <div className="text-xs text-slate-blue mb-1">24h Change</div>
          <div className="text-lg font-semibold text-sage-green">+2.45%</div>
        </div>
        <div className="bg-sage-green/10 rounded-lg p-4">
          <div className="text-xs text-slate-blue mb-1">7d Change</div>
          <div className="text-lg font-semibold text-sage-green">+8.12%</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4">
          <div className="text-xs text-slate-blue mb-1">Max Drawdown</div>
          <div className="text-lg font-semibold text-red-500">-1.23%</div>
        </div>
        <div className="bg-primary-blue/10 rounded-lg p-4">
          <div className="text-xs text-slate-blue mb-1">Sharpe Ratio</div>
          <div className="text-lg font-semibold text-primary-blue">2.34</div>
        </div>
      </div>
    </div>
  );
};

export default PriceChart;