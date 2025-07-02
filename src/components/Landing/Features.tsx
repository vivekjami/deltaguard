import React from 'react';
import { Shield, RefreshCw, TrendingUp, Zap, BarChart3, Gauge } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Automated Hedging',
      description: 'Smart contracts automatically hedge your positions to maintain delta neutrality and eliminate impermanent loss with institutional-grade precision.',
      color: 'text-elegant-green-600',
      bgColor: 'from-elegant-green-50 to-elegant-green-100'
    },
    {
      icon: RefreshCw,
      title: 'Smart Rebalancing',
      description: 'Dynamic portfolio rebalancing based on market conditions and risk parameters to optimize returns while maintaining elegant simplicity.',
      color: 'text-elegant-blue-600',
      bgColor: 'from-elegant-blue-50 to-elegant-blue-100'
    },
    {
      icon: TrendingUp,
      title: 'Yield Optimization',
      description: 'Maximize returns by combining LP fees, lending yields, and trading revenue in unified strategies designed for sophisticated investors.',
      color: 'text-elegant-teal-600',
      bgColor: 'from-elegant-teal-50 to-elegant-teal-100'
    },
    {
      icon: Zap,
      title: 'Gas-Efficient Execution',
      description: 'Optimized smart contracts and batch operations minimize gas costs while maintaining the highest security standards.',
      color: 'text-cream-700',
      bgColor: 'from-cream-100 to-cream-200'
    },
    {
      icon: BarChart3,
      title: 'Portfolio Analytics',
      description: 'Real-time insights into your positions, performance metrics, and risk exposure across all strategies with elegant visualizations.',
      color: 'text-elegant-blue-700',
      bgColor: 'from-elegant-blue-50 to-cream-100'
    },
    {
      icon: Gauge,
      title: 'Risk Assessment',
      description: 'Advanced risk modeling and monitoring to keep your investments within safe parameters using cutting-edge algorithms.',
      color: 'text-elegant-green-700',
      bgColor: 'from-elegant-green-50 to-cream-100'
    }
  ];

  return (
    <section id="features" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-elegant-blue-50 to-elegant-green-50 px-4 py-2 rounded-full border border-elegant-blue-100 mb-8">
            <span className="text-sm font-medium text-elegant-blue-700">Premium Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-serif font-semibold mb-8">
            <span className="text-navy-900">
              Next-Generation
            </span>
            <br />
            <span className="gradient-text-elegant">
              Risk Management
            </span>
          </h2>
          
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Advanced DeFi strategies powered by cutting-edge technology to protect and grow your assets with institutional-grade sophistication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elegant glass-elegant rounded-3xl p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgColor} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold mb-6 text-navy-800 group-hover:text-elegant-blue-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-elegant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="btn-elegant px-10 py-5 rounded-2xl font-semibold text-lg text-white shadow-elegant">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;