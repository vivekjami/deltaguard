import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { generateYieldData } from '../../utils/mockData';

const YieldChart: React.FC = () => {
  const data = generateYieldData(30).map(item => ({
    date: new Date(item.timestamp).toLocaleDateString(),
    'LP Fees': item.lpFees,
    'Lending Yield': item.lendingYield,
    'Borrowing Cost': -item.borrowingCost,
    'Net Yield': item.netYield
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl">
          <p className="text-slate-300 text-sm mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toFixed(2)}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Yield Breakdown</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm text-slate-300">LP Fees</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-slate-300">Lending</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <span className="text-sm text-slate-300">Borrowing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span className="text-sm text-slate-300">Net</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="lpFeesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="lendingGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="borrowingGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="netGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="date" 
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
            
            <Area
              type="monotone"
              dataKey="LP Fees"
              stackId="1"
              stroke="#10b981"
              fill="url(#lpFeesGradient)"
            />
            <Area
              type="monotone"
              dataKey="Lending Yield"
              stackId="1"
              stroke="#3b82f6"
              fill="url(#lendingGradient)"
            />
            <Area
              type="monotone"
              dataKey="Borrowing Cost"
              stackId="1"
              stroke="#ef4444"
              fill="url(#borrowingGradient)"
            />
            <Area
              type="monotone"
              dataKey="Net Yield"
              stroke="#8b5cf6"
              strokeWidth={3}
              fill="url(#netGradient)"
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Yield Summary */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="text-xs text-slate-400 mb-1">Avg LP Fees</div>
          <div className="text-lg font-semibold text-green-400">9.2%</div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="text-xs text-slate-400 mb-1">Lending APY</div>
          <div className="text-lg font-semibold text-blue-400">6.8%</div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="text-xs text-slate-400 mb-1">Borrow Cost</div>
          <div className="text-lg font-semibold text-red-400">7.1%</div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-4">
          <div className="text-xs text-slate-400 mb-1">Net APY</div>
          <div className="text-lg font-semibold text-purple-400">18.9%</div>
        </div>
      </div>
    </div>
  );
};

export default YieldChart;