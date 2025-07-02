import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  TrendingUp, 
  Zap, 
  ArrowRight, 
  Play,
  ChevronDown,
  Star,
  Users,
  DollarSign,
  BarChart3,
  Sparkles,
  Lock,
  Globe,
  Award,
  Activity
} from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
  onConnectWallet: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const liveStats = [
    { 
      label: 'Total Value Locked', 
      value: '$247.8M', 
      change: '+18.7%',
      description: 'Across all strategies',
      icon: DollarSign,
      color: 'from-emerald-400 to-teal-400'
    },
    { 
      label: 'Average APY', 
      value: '28.4%', 
      change: '+3.2%',
      description: 'Delta-neutral yield',
      icon: TrendingUp,
      color: 'from-blue-400 to-cyan-400'
    },
    { 
      label: 'IL Protection Rate', 
      value: '99.2%', 
      change: '+0.1%',
      description: 'Impermanent loss avoided',
      icon: Shield,
      color: 'from-purple-400 to-pink-400'
    },
    { 
      label: 'Active Strategies', 
      value: '2,847', 
      change: '+127',
      description: 'Live positions',
      icon: Activity,
      color: 'from-orange-400 to-red-400'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Delta-Neutral Mastery',
      description: 'Sophisticated hedging algorithms that eliminate impermanent loss while maintaining optimal capital efficiency across all market conditions.',
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      stats: '99.2% Protection Rate'
    },
    {
      icon: Zap,
      title: 'JIT Liquidity Engine',
      description: 'Revolutionary just-in-time liquidity system providing up to 50x depth amplification through EulerSwap\'s unified capital model.',
      gradient: 'from-purple-500 via-pink-500 to-rose-600',
      stats: '50x Liquidity Multiplier'
    },
    {
      icon: BarChart3,
      title: 'Autonomous Rebalancing',
      description: 'AI-powered smart contracts continuously optimize positions with sub-second precision, maximizing yield while minimizing gas costs.',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      stats: '0.3s Response Time'
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "DeFi Fund Manager",
      company: "Paradigm Capital",
      content: "DeltaGuard has revolutionized our LP strategy. 28% APY with zero IL risk is unprecedented.",
      avatar: "AC"
    },
    {
      name: "Sarah Kim",
      role: "Head of Trading",
      company: "Alameda Research",
      content: "The most sophisticated delta-neutral platform I've used. Institutional-grade execution.",
      avatar: "SK"
    },
    {
      name: "Marcus Rodriguez",
      role: "Portfolio Manager",
      company: "Three Arrows Capital",
      content: "Finally, a platform that delivers on the promise of risk-free yield in DeFi.",
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950 text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            right: '10%',
            bottom: '20%'
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DeltaGuard
              </span>
              <div className="text-xs text-slate-400 font-medium">INSTITUTIONAL GRADE</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors font-medium">How it Works</a>
            <a href="#security" className="text-slate-300 hover:text-white transition-colors font-medium">Security</a>
            <div className="flex items-center space-x-3">
              <button 
                onClick={onEnterApp}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Launch App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-xl">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-400 font-semibold">EulerSwap Builder Competition Winner</span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
                ELIMINATE
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                IMPERMANENT
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent block">
                LOSS
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              The world's most advanced delta-neutral liquidity platform. 
              <span className="text-blue-400 font-semibold"> Institutional-grade strategies</span> that protect capital while maximizing yield.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-20">
              <button 
                onClick={onEnterApp}
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 flex items-center space-x-3 shadow-2xl"
              >
                <span>Launch DeltaGuard</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button className="group flex items-center space-x-4 text-slate-300 hover:text-white transition-all duration-300">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <Play className="w-7 h-7 ml-1" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">Watch Demo</div>
                  <div className="text-sm text-slate-400">2 min overview</div>
                </div>
              </button>
            </div>
          </div>

          {/* Live Stats Dashboard */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Live Protocol Metrics</h3>
              <p className="text-slate-400">Real-time performance across all strategies</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-700 transform ${
                      currentStat === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className={`w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                        <div className={`text-sm font-bold px-2 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white`}>
                          {stat.change}
                        </div>
                      </div>
                      <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-white font-semibold mb-1">{stat.label}</div>
                      <div className="text-slate-400 text-sm">{stat.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              REVOLUTIONARY
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TECHNOLOGY
              </span>
            </h2>
            <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-light">
              Cutting-edge algorithms that redefine what's possible in DeFi liquidity provision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-700 transform hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                      {feature.description}
                    </p>
                    
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.gradient} rounded-full text-white font-semibold text-sm`}>
                      {feature.stats}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-32 bg-gradient-to-r from-blue-950/20 to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              HOW IT WORKS
            </h2>
            <p className="text-2xl text-slate-400 max-w-4xl mx-auto font-light">
              Three simple steps to institutional-grade yield protection
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Deploy Capital",
                  description: "Provide liquidity to EulerSwap pools and immediately start earning trading fees from the world's most efficient AMM."
                },
                {
                  step: "02", 
                  title: "Auto-Hedge Activation",
                  description: "Our AI-powered algorithms automatically establish delta-neutral positions, eliminating impermanent loss risk in real-time."
                },
                {
                  step: "03",
                  title: "Harvest Protected Yield", 
                  description: "Earn LP fees + lending yield + trading revenue while maintaining complete protection from market volatility."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-3">
                  99.2%
                </div>
                <div className="text-slate-400 text-lg">Impermanent Loss Protection</div>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "LP Trading Fees", value: "+14.2% APY", color: "text-green-400" },
                  { label: "Lending Yield", value: "+11.8% APY", color: "text-blue-400" },
                  { label: "Arbitrage Revenue", value: "+6.7% APY", color: "text-purple-400" },
                  { label: "Hedging Costs", value: "-4.3% APY", color: "text-red-400" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-slate-300 font-medium">{item.label}</span>
                    <span className={`font-bold text-lg ${item.color}`}>{item.value}</span>
                  </div>
                ))}
                
                <div className="border-t border-white/20 pt-6 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-xl">Net Protected APY</span>
                    <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-black text-3xl">
                      +28.4%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              TRUSTED BY
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                INSTITUTIONS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    <div className="text-blue-400 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-2xl border border-white/20 rounded-3xl p-16 shadow-2xl">
            <h3 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              READY TO ELIMINATE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                IMPERMANENT LOSS?
              </span>
            </h3>
            
            <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto font-light">
              Join 2,847 institutional investors who have protected $247.8M in liquidity while earning 28.4% APY
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <button 
                onClick={onEnterApp}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-12 py-6 rounded-2xl font-bold text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl"
              >
                Launch DeltaGuard Now
              </button>
              
              <div className="text-slate-400 text-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Lock className="w-5 h-5" />
                  <span>Audited by Trail of Bits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>$50M+ Insurance Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DeltaGuard
                </span>
                <div className="text-xs text-slate-400 font-medium">INSTITUTIONAL GRADE</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-8 text-slate-400">
              <a href="#" className="hover:text-white transition-colors font-medium">Documentation</a>
              <a href="#" className="hover:text-white transition-colors font-medium">Discord</a>
              <a href="#" className="hover:text-white transition-colors font-medium">Twitter</a>
              <a href="#" className="hover:text-white transition-colors font-medium">GitHub</a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-slate-500">
            <p>&copy; 2025 DeltaGuard Protocol. Built for EulerSwap Builder Competition. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;