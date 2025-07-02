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
  Layers,
  Orbit,
  Hexagon,
  Triangle
} from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
  onConnectWallet: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp, onConnectWallet }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particleAnimation, setParticleAnimation] = useState(0);

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

  useEffect(() => {
    const particleInterval = setInterval(() => {
      setParticleAnimation((prev) => prev + 1);
    }, 100);
    return () => clearInterval(particleInterval);
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
      bgColor: 'bg-primary-blue/10',
      particles: 12
    },
    {
      icon: Zap,
      title: 'JIT Liquidity Optimization',
      description: 'Access up to 50x liquidity depth through EulerSwap\'s revolutionary just-in-time liquidity system.',
      gradient: 'from-sage-green to-mint-green',
      bgColor: 'bg-sage-green/10',
      particles: 15
    },
    {
      icon: BarChart3,
      title: 'Automated Rebalancing',
      description: 'Smart contracts continuously monitor and rebalance positions to maintain optimal delta ratios.',
      gradient: 'from-forest-green to-sage-green',
      bgColor: 'bg-forest-green/10',
      particles: 10
    }
  ];

  const storySteps = [
    {
      icon: DollarSign,
      title: 'Provide Liquidity',
      description: 'Add your assets to earn trading fees',
      color: 'text-sage-green',
      bgGradient: 'from-sage-green/20 to-mint-green/20'
    },
    {
      icon: Target,
      title: 'Auto-Hedge',
      description: 'Smart contracts protect your position',
      color: 'text-primary-blue',
      bgGradient: 'from-primary-blue/20 to-light-blue/20'
    },
    {
      icon: Activity,
      title: 'Monitor & Rebalance',
      description: 'Continuous optimization for maximum yield',
      color: 'text-forest-green',
      bgGradient: 'from-forest-green/20 to-sage-green/20'
    },
    {
      icon: TrendingUp,
      title: 'Earn Protected Yield',
      description: 'Enjoy returns without impermanent loss',
      color: 'text-mint-green',
      bgGradient: 'from-mint-green/20 to-sage-green/20'
    }
  ];

  // Generate floating particles
  const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-primary-blue/30 to-sage-green/30 rounded-full animate-float opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${4 + Math.random() * 4}s`
        }}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-warm-cream to-cream text-navy overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 opacity-30">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-blue/40 to-light-blue/40 rounded-full animate-float shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sage-green/40 to-mint-green/40 rounded-full animate-float shadow-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-forest-green/40 to-sage-green/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '4s' }}></div>
        
        {/* Hexagon shapes */}
        <div className="absolute top-60 right-1/3 animate-spin" style={{ animationDuration: '20s' }}>
          <Hexagon className="w-16 h-16 text-primary-blue/20" />
        </div>
        <div className="absolute bottom-60 right-10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <Triangle className="w-12 h-12 text-sage-green/20" />
        </div>
        
        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96 animate-spin" style={{ animationDuration: '30s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-blue/30 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-sage-green/30 rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-mint-green/30 rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-forest-green/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Parallax background layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-blue/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tl from-transparent via-sage-green/3 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        {/* Mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary-blue/10 to-transparent rounded-full pointer-events-none transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Navigation with enhanced animations */}
      <nav className="relative z-50 px-6 py-6 bg-white/90 backdrop-blur-xl border-b border-primary-blue/20 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-up">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-light-blue rounded-xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-blue to-forest-green bg-clip-text text-transparent">
              DeltaGuard
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            <a href="#features" className="text-slate-blue hover:text-navy transition-all duration-300 font-medium hover:scale-105 transform">Features</a>
            <a href="#how-it-works" className="text-slate-blue hover:text-navy transition-all duration-300 font-medium hover:scale-105 transform">How it Works</a>
            <a href="#security" className="text-slate-blue hover:text-navy transition-all duration-300 font-medium hover:scale-105 transform">Security</a>
            <button 
              onClick={onConnectWallet}
              className="bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue/10 to-sage-green/10 border border-primary-blue/30 rounded-full px-6 py-3 mb-8 animate-scale-in backdrop-blur-sm shadow-lg">
            <Sparkles className="w-5 h-5 text-primary-blue animate-pulse" />
            <span className="text-primary-blue text-sm font-medium">Built for EulerSwap • Delta-Neutral Strategies</span>
            <div className="w-2 h-2 bg-sage-green rounded-full animate-ping"></div>
          </div>

          {/* Main Headline with enhanced animations */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <div className="animate-slide-up">
              <span className="bg-gradient-to-r from-navy via-primary-blue to-forest-green bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-500">
                Eliminate
              </span>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-sage-green to-mint-green bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-500">
                Impermanent Loss
              </span>
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-slate-blue mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Advanced delta-neutral liquidity strategies that protect your capital while maximizing yield. 
            Built on EulerSwap's revolutionary unified capital model.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={onEnterApp}
              className="group bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 flex items-center space-x-3 shadow-2xl hover:shadow-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Launch App</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </button>
            
            <button className="group flex items-center space-x-3 text-slate-blue hover:text-navy transition-all duration-300">
              <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 shadow-xl group-hover:shadow-2xl transform group-hover:scale-110">
                <Play className="w-6 h-6 ml-1 text-primary-blue" />
              </div>
              <span className="font-medium text-lg">Watch Demo</span>
            </button>
          </div>

          {/* Enhanced Live Stats with morphing animations */}
          <div className="bg-white/90 backdrop-blur-xl border border-primary-blue/20 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl animate-slide-up relative overflow-hidden" style={{ animationDelay: '0.8s' }}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              {generateParticles(20)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 transform ${
                    currentStat === index ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                  }`}
                >
                  <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary-blue to-sage-green bg-clip-text text-transparent transition-all duration-500 ${
                    currentStat === index ? 'animate-pulse' : ''
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-blue mb-2 font-medium text-lg">{stat.label}</div>
                  <div className="text-sage-green text-sm font-medium flex items-center justify-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.change} this week</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="w-6 h-6 text-slate-blue animate-bounce" />
            <ChevronDown className="w-4 h-4 text-slate-blue/60 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </section>

      {/* Enhanced Animated Story Section */}
      <section className="relative z-10 px-6 py-32 bg-gradient-to-r from-white/60 to-warm-cream/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy to-primary-blue bg-clip-text text-transparent">
              Your Journey to Protected Yield
            </h2>
            <p className="text-xl text-slate-blue max-w-3xl mx-auto">
              Watch how DeltaGuard transforms your liquidity provision experience
            </p>
          </div>

          {/* Enhanced Animated Story Flow */}
          <div className="relative">
            {/* Animated Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary-blue via-sage-green to-forest-green rounded-full opacity-40 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-white/50 to-transparent animate-pulse"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {storySteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = animationStep === index;
                
                return (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-1000 transform ${
                      isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                    }`}
                  >
                    {/* Enhanced Icon Container */}
                    <div className={`relative w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'bg-white shadow-2xl transform scale-110' 
                        : 'bg-white/90 shadow-lg'
                    }`}>
                      {/* Animated ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-4 border-primary-blue/30 animate-ping"></div>
                      )}
                      
                      {/* Background gradient */}
                      <div className={`absolute inset-2 rounded-full bg-gradient-to-r ${step.bgGradient} ${isActive ? 'animate-pulse' : ''}`}></div>
                      
                      <Icon className={`w-12 h-12 ${step.color} ${isActive ? 'animate-bounce-gentle' : ''} relative z-10`} />
                    </div>
                    
                    {/* Enhanced Step Number */}
                    <div className={`w-10 h-10 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-blue to-sage-green shadow-xl scale-110' 
                        : 'bg-slate-blue/60'
                    }`}>
                      {index + 1}
                    </div>
                    
                    {/* Enhanced Text */}
                    <h3 className={`text-xl font-bold mb-3 transition-all duration-500 ${
                      isActive ? 'text-navy scale-105' : 'text-slate-blue'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-blue text-sm leading-relaxed">{step.description}</p>
                    
                    {/* Progress indicator */}
                    {isActive && (
                      <div className="mt-4 w-full bg-slate-blue/20 rounded-full h-1">
                        <div className="bg-gradient-to-r from-primary-blue to-sage-green h-1 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
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
                  className={`group ${feature.bgColor} backdrop-blur-xl border border-primary-blue/20 rounded-3xl p-8 hover:bg-white/90 transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden`}
                >
                  {/* Animated particles */}
                  <div className="absolute inset-0 opacity-20">
                    {generateParticles(feature.particles)}
                  </div>
                  
                  {/* Enhanced Icon */}
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl z-10`}>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:animate-pulse"></div>
                    <Icon className="w-10 h-10 text-white relative z-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-navy group-hover:text-primary-blue transition-colors duration-300">{feature.title}</h3>
                  <p className="text-slate-blue leading-relaxed group-hover:text-navy transition-colors duration-300">{feature.description}</p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-sage-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-32 bg-gradient-to-r from-primary-blue/5 to-sage-green/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy to-forest-green bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-up group">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-light-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-navy">Provide Liquidity</h3>
                  <p className="text-slate-blue">Add liquidity to EulerSwap pools and earn trading fees</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-up group" style={{ animationDelay: '0.2s' }}>
                <div className="w-10 h-10 bg-gradient-to-r from-sage-green to-mint-green rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-navy">Auto-Hedge Position</h3>
                  <p className="text-slate-blue">Smart contracts automatically hedge your position to maintain delta neutrality</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-up group" style={{ animationDelay: '0.4s' }}>
                <div className="w-10 h-10 bg-gradient-to-r from-forest-green to-sage-green rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-navy">Earn Protected Yield</h3>
                  <p className="text-slate-blue">Enjoy LP fees + lending yield while being protected from impermanent loss</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xl border border-primary-blue/20 rounded-3xl p-8 shadow-2xl animate-scale-in relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-10">
                {generateParticles(15)}
              </div>
              
              <div className="text-center mb-6 relative z-10">
                <div className="text-5xl font-bold text-navy mb-2 animate-pulse">98.9%</div>
                <div className="text-slate-blue font-medium text-lg">Impermanent Loss Protection</div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center p-3 bg-sage-green/10 rounded-lg hover:bg-sage-green/20 transition-colors duration-300">
                  <span className="text-slate-blue">LP Fees</span>
                  <span className="text-sage-green font-medium">+12.4% APY</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-sage-green/10 rounded-lg hover:bg-sage-green/20 transition-colors duration-300">
                  <span className="text-slate-blue">Lending Yield</span>
                  <span className="text-sage-green font-medium">+8.7% APY</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300">
                  <span className="text-slate-blue">Hedging Cost</span>
                  <span className="text-red-500 font-medium">-6.3% APY</span>
                </div>
                <div className="border-t border-primary-blue/20 pt-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-blue/10 to-sage-green/10 rounded-lg">
                    <span className="text-navy font-medium text-lg">Net APY</span>
                    <span className="text-primary-blue font-bold text-2xl animate-pulse">+24.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, value: '1,247', label: 'Active Users', color: 'text-primary-blue' },
              { icon: DollarSign, value: '$127M', label: 'TVL Protected', color: 'text-sage-green' },
              { icon: TrendingUp, value: '24.7%', label: 'Avg APY', color: 'text-forest-green' },
              { icon: Star, value: '4.9/5', label: 'User Rating', color: 'text-yellow-500' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/90 backdrop-blur-xl border border-primary-blue/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <Icon className={`w-10 h-10 ${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-3xl font-bold text-navy mb-1 group-hover:text-primary-blue transition-colors duration-300">{item.value}</div>
                  <div className="text-slate-blue text-sm">{item.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary-blue/10 to-sage-green/10 backdrop-blur-xl border border-primary-blue/30 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
              {generateParticles(25)}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-navy">Ready to Protect Your Liquidity?</h3>
              <p className="text-xl text-slate-blue mb-8 max-w-2xl mx-auto">
                Join thousands of LPs who have eliminated impermanent loss while earning superior yields
              </p>
              <button 
                onClick={onConnectWallet}
                className="bg-gradient-to-r from-primary-blue to-sage-green hover:from-light-blue hover:to-mint-green text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Start Earning Protected Yield</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-primary-blue/20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-sage-green rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-blue to-forest-green bg-clip-text text-transparent">
                DeltaGuard
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-slate-blue">
              <a href="#" className="hover:text-navy transition-all duration-300 transform hover:scale-105">Documentation</a>
              <a href="#" className="hover:text-navy transition-all duration-300 transform hover:scale-105">Discord</a>
              <a href="#" className="hover:text-navy transition-all duration-300 transform hover:scale-105">Twitter</a>
              <a href="#" className="hover:text-navy transition-all duration-300 transform hover:scale-105">GitHub</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-blue/20 text-center text-slate-blue">
            <p>&copy; 2025 DeltaGuard. Built for EulerSwap Builder Competition.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;