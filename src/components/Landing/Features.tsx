import React from 'react';
import { Shield, RefreshCw, TrendingUp, Zap, BarChart3, Gauge } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Hedging',
      description: 'Smart contracts automatically hedge your positions to maintain delta neutrality and eliminate impermanent loss.',
      color: 'text-emerald-400'
    },
    {
      icon: RefreshCw,
      title: 'Smart Rebalancing',
      description: 'Dynamic portfolio rebalancing based on market conditions and risk parameters to optimize returns.',
      color: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Yield Optimization',
      description: 'Maximize returns by combining LP fees, lending yields, and trading revenue in unified strategies.',
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: 'Gas-Efficient Execution',
      description: 'Optimized smart contracts and batch operations minimize gas costs while maintaining security.',
      color: 'text-amber-400'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Analytics',
      description: 'Real-time insights into your positions, performance metrics, and risk exposure across all strategies.',
      color: 'text-cyan-400'
    },
    {
      icon: Gauge,
      title: 'Risk Assessment',
      description: 'Advanced risk modeling and monitoring to keep your investments within safe parameters.',
      color: 'text-red-400'
    }
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Risk Management
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced DeFi strategies powered by cutting-edge technology to protect and grow your assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 mb-6 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;