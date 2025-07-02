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
  Target,
  Activity,
  Lock,
  Layers
} from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
  onConnectWallet: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp, onConnectWallet }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(animationInterval);
  }, []);

  const stats = [
    { label: 'Total Value Protected', value: '$127.3M', change: '+23.4%' },
    { label: 'Average APY', value: '24.7%', change: '+5.2%' },
    { label: 'IL Protection Rate', value: '98.9%', change: '+0.3%' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Delta-Neutral Protection',
      description: 'Eliminate impermanent loss with sophisticated hedging strategies that maintain market-neutral positions.',
      gradient: 'from-primary-blue to-light-blue',
      bgColor: 'bg-primary-blue/10'
    },
    {
      icon: Zap,
      title: 'JIT Liquidity Optimization',
      description: 'Access up to 50x liquidity depth through EulerSwap\'s revolutionary just-in-time liquidity system.',
      gradient: 'from-sage-green to-mint-green',
      bgColor: 'bg-sage-green/10'
    },
    {
      icon: BarChart3,
      title: 'Automated Rebalancing',
      description: 'Smart contracts continuously monitor and rebalance positions to maintain optimal delta ratios.',
      gradient: 'from-forest-green to-sage-green',
      bgColor: 'bg-forest-green/10'
    }
  ];

  const storySteps = [
    {
      icon: DollarSign,
      title: 'Provide Liquidity',
      description: 'Add your assets to earn trading fees',
      color: 'text-sage-green'
    },
    {
      icon: Target,
      title: 'Auto-Hedge',
      description: 'Smart contracts protect your position',
      color: 'text-primary-blue'
    },
    {
      icon: Activity,
      title: 'Monitor & Rebalance',
      description: 'Continuous optimization for maximum yield',
      color: 'text-forest-green'
    },
    {
      icon: TrendingUp,
      title: 'Earn Protected Yield',
      description: 'Enjoy returns without impermanent loss',
      color: 'text-mint-green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-warm-cream to-cream text-navy overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-blue/30 to-light-blue/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sage-green/30 to-mint-green/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-forest-green/30 to-sage-green/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-blue/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 bg-white/80 backdrop-blur-xl border-b border-primary-blue/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-up">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-light-blue rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-blue to-forest-green bg-clip-text text-transparent">
              DeltaGuard
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            <a href="#features" className="text-slate-blue hover:text-navy transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-blue hover:text-navy transition-colors font-medium">How it Works</a>
            <a href="#security" className="text-slate-blue hover:text-navy transition-colors font-medium">Security</a>
            <button 
              onClick={onConnectWallet}
              className="bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full px-4 py-2 mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary-blue" />
            <span className="text-primary-blue text-sm font-medium">Built for EulerSwap • Delta-Neutral Strategies</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-slide-up">
            <span className="bg-gradient-to-r from-navy via-primary-blue to-forest-green bg-clip-text text-transparent">
              Eliminate
            </span>
            <br />
            <span className="bg-gradient-to-r from-sage-green to-mint-green bg-clip-text text-transparent">
              Impermanent Loss
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-blue mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Advanced delta-neutral liquidity strategies that protect your capital while maximizing yield. 
            Built on EulerSwap's revolutionary unified capital model.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={onEnterApp}
              className="group bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-xl"
            >
              <span>Launch App</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center space-x-2 text-slate-blue hover:text-navy transition-colors">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-colors shadow-lg">
                <Play className="w-5 h-5 ml-1 text-primary-blue" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </div>

          {/* Live Stats */}
          <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/10 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${
                    currentStat === index ? 'scale-105 opacity-100' : 'opacity-70'
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary-blue to-sage-green bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-slate-blue mb-1 font-medium">{stat.label}</div>
                  <div className="text-sage-green text-sm font-medium">{stat.change} this week</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-slate-blue" />
        </div>
      </section>

      {/* Animated Story Section */}
      <section className="relative z-10 px-6 py-32 bg-gradient-to-r from-white/50 to-warm-cream/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy to-primary-blue bg-clip-text text-transparent">
              Your Journey to Protected Yield
            </h2>
            <p className="text-xl text-slate-blue max-w-3xl mx-auto">
              Watch how DeltaGuard transforms your liquidity provision experience
            </p>
          </div>

          {/* Animated Story Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue via-sage-green to-forest-green rounded-full opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {storySteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = animationStep === index;
                
                return (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-1000 ${
                      isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
                    }`}
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'bg-white shadow-2xl transform scale-110' 
                        : 'bg-white/80 shadow-lg'
                    }`}>
                      <Icon className={`w-10 h-10 ${step.color} ${isActive ? 'animate-pulse' : ''}`} />
                    </div>
                    
                    <div className={`w-8 h-8 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-blue to-sage-green shadow-lg' 
                        : 'bg-slate-blue/50'
                    }`}>
                      {index + 1}
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                      isActive ? 'text-navy' : 'text-slate-blue'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-blue text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy to-forest-green bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-slate-blue max-w-3xl mx-auto">
              Cutting-edge technology that redefines liquidity provision in DeFi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`group ${feature.bgColor} backdrop-blur-xl border border-primary-blue/10 rounded-3xl p-8 hover:bg-white/80 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy">{feature.title}</h3>
                  <p className="text-slate-blue leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-32 bg-gradient-to-r from-primary-blue/5 to-sage-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy to-forest-green bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-up">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-light-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-navy">Provide Liquidity</h3>
                  <p className="text-slate-blue">Add liquidity to EulerSwap pools and earn trading fees</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-8 h-8 bg-gradient-to-r from-sage-green to-mint-green rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-navy">Auto-Hedge Position</h3>
                  <p className="text-slate-blue">Smart contracts automatically hedge your position to maintain delta neutrality</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-8 h-8 bg-gradient-to-r from-forest-green to-sage-green rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-navy">Earn Protected Yield</h3>
                  <p className="text-slate-blue">Enjoy LP fees + lending yield while being protected from impermanent loss</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/10 rounded-3xl p-8 shadow-2xl animate-scale-in">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-navy mb-2">98.9%</div>
                <div className="text-slate-blue font-medium">Impermanent Loss Protection</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-blue">LP Fees</span>
                  <span className="text-sage-green font-medium">+12.4% APY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-blue">Lending Yield</span>
                  <span className="text-sage-green font-medium">+8.7% APY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-blue">Hedging Cost</span>
                  <span className="text-red-500 font-medium">-6.3% APY</span>
                </div>
                <div className="border-t border-primary-blue/10 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-navy font-medium">Net APY</span>
                    <span className="text-primary-blue font-bold text-xl">+24.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-8 h-8 text-primary-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-navy mb-1">1,247</div>
              <div className="text-slate-blue text-sm">Active Users</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <DollarSign className="w-8 h-8 text-sage-green mx-auto mb-3" />
              <div className="text-2xl font-bold text-navy mb-1">$127M</div>
              <div className="text-slate-blue text-sm">TVL Protected</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-8 h-8 text-forest-green mx-auto mb-3" />
              <div className="text-2xl font-bold text-navy mb-1">24.7%</div>
              <div className="text-slate-blue text-sm">Avg APY</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-primary-blue/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-navy mb-1">4.9/5</div>
              <div className="text-slate-blue text-sm">User Rating</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-blue/10 to-sage-green/10 backdrop-blur-xl border border-primary-blue/20 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-navy">Ready to Protect Your Liquidity?</h3>
            <p className="text-xl text-slate-blue mb-8 max-w-2xl mx-auto">
              Join thousands of LPs who have eliminated impermanent loss while earning superior yields
            </p>
            <button 
              onClick={onConnectWallet}
              className="bg-gradient-to-r from-primary-blue to-sage-green hover:from-light-blue hover:to-mint-green text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Earning Protected Yield
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-primary-blue/10 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-sage-green rounded-lg flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-forest-green bg-clip-text text-transparent">
                DeltaGuard
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-slate-blue">
              <a href="#" className="hover:text-navy transition-colors">Documentation</a>
              <a href="#" className="hover:text-navy transition-colors">Discord</a>
              <a href="#" className="hover:text-navy transition-colors">Twitter</a>
              <a href="#" className="hover:text-navy transition-colors">GitHub</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-blue/10 text-center text-slate-blue">
            <p>&copy; 2025 DeltaGuard. Built for EulerSwap Builder Competition.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;