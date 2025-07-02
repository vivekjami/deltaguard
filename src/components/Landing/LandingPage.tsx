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
  Triangle,
  Menu,
  X,
  CheckCircle,
  Globe,
  Smartphone,
  Tablet
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [particleAnimation, setParticleAnimation] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger initial animation
    setTimeout(() => setIsVisible(true), 100);
    
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
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(featureInterval);
  }, []);

  useEffect(() => {
    const particleInterval = setInterval(() => {
      setParticleAnimation((prev) => prev + 1);
    }, 100);
    return () => clearInterval(particleInterval);
  }, []);

  const stats = [
    { label: 'Total Value Protected', value: '$127.3M', change: '+23.4%', icon: Shield },
    { label: 'Average APY', value: '24.7%', change: '+5.2%', icon: TrendingUp },
    { label: 'IL Protection Rate', value: '98.9%', change: '+0.3%', icon: Lock }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Delta-Neutral Protection',
      description: 'Eliminate impermanent loss with sophisticated hedging strategies that maintain market-neutral positions automatically.',
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      darkBgColor: 'bg-blue-900/20',
      particles: 12,
      benefits: ['98.9% IL Protection', 'Automated Hedging', 'Real-time Monitoring']
    },
    {
      icon: Zap,
      title: 'JIT Liquidity Optimization',
      description: 'Access up to 50x liquidity depth through EulerSwap\'s revolutionary just-in-time liquidity system for optimal trading.',
      gradient: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      darkBgColor: 'bg-green-900/20',
      particles: 15,
      benefits: ['50x Liquidity Depth', 'Minimal Slippage', 'Gas Optimization']
    },
    {
      icon: BarChart3,
      title: 'Automated Rebalancing',
      description: 'Smart contracts continuously monitor and rebalance positions to maintain optimal delta ratios and maximize yields.',
      gradient: 'from-violet-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50',
      darkBgColor: 'bg-purple-900/20',
      particles: 10,
      benefits: ['Smart Rebalancing', '24/7 Monitoring', 'Optimal Yields']
    }
  ];

  const storySteps = [
    {
      icon: DollarSign,
      title: 'Provide Liquidity',
      description: 'Add your assets to earn trading fees',
      color: 'text-emerald-600',
      bgGradient: 'from-emerald-100 to-teal-100',
      step: '01'
    },
    {
      icon: Target,
      title: 'Auto-Hedge',
      description: 'Smart contracts protect your position',
      color: 'text-blue-600',
      bgGradient: 'from-blue-100 to-indigo-100',
      step: '02'
    },
    {
      icon: Activity,
      title: 'Monitor & Rebalance',
      description: 'Continuous optimization for maximum yield',
      color: 'text-violet-600',
      bgGradient: 'from-violet-100 to-purple-100',
      step: '03'
    },
    {
      icon: TrendingUp,
      title: 'Earn Protected Yield',
      description: 'Enjoy returns without impermanent loss',
      color: 'text-amber-600',
      bgGradient: 'from-amber-100 to-orange-100',
      step: '04'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'DeFi Trader',
      avatar: '👨‍💼',
      quote: 'DeltaGuard eliminated my IL concerns completely. 24.7% APY with 98.9% protection is incredible.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      role: 'Yield Farmer',
      avatar: '👩‍💻',
      quote: 'The automated rebalancing saved me countless hours. Set it and forget it!',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      role: 'LP Provider',
      avatar: '👨‍🔬',
      quote: 'Finally, a solution that actually works. My portfolio has never been more stable.',
      rating: 5
    }
  ];

  // Generate floating particles with better mobile performance
  const generateParticles = (count: number) => {
    return Array.from({ length: Math.min(count, window.innerWidth < 768 ? 5 : count) }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-amber-400/40 to-orange-400/40 rounded-full animate-float opacity-60"
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-amber-900 overflow-hidden relative">
      {/* Enhanced Animated Background - Cream Theme */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        {/* Floating geometric shapes with cream colors */}
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full animate-float shadow-2xl"></div>
        <div className="absolute top-20 md:top-40 right-10 md:right-20 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full animate-float shadow-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 md:bottom-40 left-1/4 w-10 h-10 md:w-20 md:h-20 bg-gradient-to-br from-violet-400/30 to-purple-400/30 rounded-full animate-float shadow-lg" style={{ animationDelay: '4s' }}></div>
        
        {/* Cream-colored geometric shapes */}
        <div className="hidden md:block absolute top-60 right-1/3 animate-spin" style={{ animationDuration: '20s' }}>
          <Hexagon className="w-16 h-16 text-amber-300/40" />
        </div>
        <div className="hidden md:block absolute bottom-60 right-10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <Triangle className="w-12 h-12 text-orange-300/40" />
        </div>
        
        {/* Orbiting cream elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96 animate-spin" style={{ animationDuration: '30s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400/30 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-400/30 rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-400/30 rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-violet-400/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Mouse-following gradient - Desktop only */}
        <div 
          className="hidden md:block absolute w-96 h-96 bg-gradient-radial from-amber-400/10 to-transparent rounded-full pointer-events-none transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Enhanced Navigation with Cream Theme */}
      <nav className="relative z-50 px-4 md:px-6 py-4 md:py-6 bg-gradient-to-r from-amber-50/95 to-orange-50/95 backdrop-blur-xl border-b border-amber-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`flex items-center space-x-3 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
              <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
              DeltaGuard
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
            <a href="#features" className="text-amber-700 hover:text-amber-900 transition-all duration-300 font-medium hover:scale-105 transform">Features</a>
            <a href="#how-it-works" className="text-amber-700 hover:text-amber-900 transition-all duration-300 font-medium hover:scale-105 transform">How it Works</a>
            <a href="#testimonials" className="text-amber-700 hover:text-amber-900 transition-all duration-300 font-medium hover:scale-105 transform">Reviews</a>
            <button 
              onClick={onConnectWallet}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-amber-50/95 to-orange-50/95 backdrop-blur-xl border-b border-amber-200/50 shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-amber-700 hover:text-amber-900 transition-colors font-medium py-2">Features</a>
            <a href="#how-it-works" className="block text-amber-700 hover:text-amber-900 transition-colors font-medium py-2">How it Works</a>
            <a href="#testimonials" className="block text-amber-700 hover:text-amber-900 transition-colors font-medium py-2">Reviews</a>
            <button 
              onClick={onConnectWallet}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with Cream Theme */}
      <section className="relative z-10 px-4 md:px-6 pt-10 md:pt-20 pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Animated Badge */}
          <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300/50 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 backdrop-blur-sm shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600 animate-pulse" />
            <span className="text-amber-800 text-xs md:text-sm font-medium">Built for EulerSwap • Delta-Neutral Strategies</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
          </div>

          {/* Main Headline with Cream Colors */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-amber-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-500">
                Eliminate
              </span>
            </div>
            <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-500">
                Impermanent Loss
              </span>
            </div>
          </h1>

          <p className={`text-lg md:text-xl lg:text-2xl text-amber-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Advanced delta-neutral liquidity strategies that protect your capital while maximizing yield. 
            Built on EulerSwap's revolutionary unified capital model.
          </p>

          {/* Enhanced CTA Buttons with Cream Theme */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 md:mb-16 transition-all duration-1000 delay-1300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <button 
              onClick={onEnterApp}
              className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Launch App</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </button>
            
            <button className="group flex items-center space-x-3 text-amber-700 hover:text-amber-900 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-100 to-orange-100 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300 shadow-xl group-hover:shadow-2xl transform group-hover:scale-110">
                <Play className="w-5 h-5 md:w-6 md:h-6 ml-1 text-blue-600" />
              </div>
              <span className="font-medium text-base md:text-lg">Watch Demo</span>
            </button>
          </div>

          {/* Enhanced Live Stats with Cream Theme */}
          <div className={`bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-xl border border-amber-200/50 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              {generateParticles(15)}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`transition-all duration-1000 transform ${
                      currentStat === index ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Icon className={`w-8 h-8 md:w-10 md:h-10 text-blue-600 ${currentStat === index ? 'animate-pulse' : ''}`} />
                    </div>
                    <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent transition-all duration-500 ${
                      currentStat === index ? 'animate-pulse' : ''
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-amber-700 mb-2 font-medium text-sm md:text-lg">{stat.label}</div>
                    <div className="text-emerald-600 text-xs md:text-sm font-medium flex items-center justify-center space-x-1">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{stat.change} this week</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-1 md:space-y-2">
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-amber-600 animate-bounce" />
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-amber-600/60 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Cream Theme */}
      <section id="features" className="relative z-10 px-4 md:px-6 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto">
              Cutting-edge technology that redefines liquidity provision in DeFi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              return (
                <div 
                  key={index}
                  className={`group ${feature.bgColor} backdrop-blur-xl border border-amber-200/50 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-gradient-to-br hover:from-amber-100 hover:to-orange-100 transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden ${isActive ? 'ring-2 ring-blue-500/50 scale-105' : ''}`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  {/* Animated particles */}
                  <div className="absolute inset-0 opacity-20">
                    {generateParticles(feature.particles)}
                  </div>
                  
                  {/* Enhanced Icon */}
                  <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl z-10`}>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:animate-pulse"></div>
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-amber-900 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-amber-700 leading-relaxed group-hover:text-amber-800 transition-colors duration-300 mb-6">{feature.description}</p>
                  
                  {/* Benefits List */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-amber-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works with Cream Theme */}
      <section id="how-it-works" className="relative z-10 px-4 md:px-6 py-16 md:py-32 bg-gradient-to-r from-amber-100/50 to-orange-100/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto">
              Simple steps to start earning protected yield
            </p>
          </div>

          {/* Mobile-optimized story flow */}
          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500 rounded-full opacity-40"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
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
                    {/* Step number */}
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl scale-110' 
                          : 'bg-amber-400'
                      }`}>
                        {step.step}
                      </div>
                    </div>

                    {/* Enhanced Icon Container */}
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-br from-amber-50 to-orange-50 shadow-2xl transform scale-110' 
                        : 'bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg'
                    }`}>
                      {/* Animated ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-ping"></div>
                      )}
                      
                      {/* Background gradient */}
                      <div className={`absolute inset-2 rounded-full bg-gradient-to-r ${step.bgGradient} ${isActive ? 'animate-pulse' : ''}`}></div>
                      
                      <Icon className={`w-10 h-10 md:w-12 md:h-12 ${step.color} ${isActive ? 'animate-bounce' : ''} relative z-10`} />
                    </div>
                    
                    {/* Enhanced Text */}
                    <h3 className={`text-lg md:text-xl font-bold mb-3 transition-all duration-500 ${
                      isActive ? 'text-amber-900 scale-105' : 'text-amber-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-amber-700 text-sm md:text-base leading-relaxed">{step.description}</p>
                    
                    {/* Progress indicator */}
                    {isActive && (
                      <div className="mt-4 w-full bg-amber-200 rounded-full h-1">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Performance showcase with Cream Theme */}
          <div className="mt-16 md:mt-24 bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-xl border border-amber-200/50 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-amber-900">Live Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg hover:from-emerald-200 hover:to-teal-200 transition-colors duration-300">
                    <span className="text-amber-800 font-medium">LP Fees</span>
                    <span className="text-emerald-700 font-bold text-lg">+12.4% APY</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg hover:from-blue-200 hover:to-indigo-200 transition-colors duration-300">
                    <span className="text-amber-800 font-medium">Lending Yield</span>
                    <span className="text-blue-700 font-bold text-lg">+8.7% APY</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg hover:from-red-200 hover:to-pink-200 transition-colors duration-300">
                    <span className="text-amber-800 font-medium">Hedging Cost</span>
                    <span className="text-red-600 font-bold text-lg">-6.3% APY</span>
                  </div>
                  <div className="border-t border-amber-200 pt-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
                      <span className="text-amber-900 font-bold text-xl">Net APY</span>
                      <span className="text-blue-700 font-bold text-3xl animate-pulse">+24.7%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="text-6xl md:text-8xl font-bold text-amber-900 mb-4 animate-pulse">98.9%</div>
                  <div className="text-lg md:text-xl text-amber-700 font-medium">Impermanent Loss Protection</div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Cream Theme */}
      <section id="testimonials" className="relative z-10 px-4 md:px-6 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
              Trusted by Thousands
            </h2>
            <p className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto">
              See what our users are saying about DeltaGuard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-xl border border-amber-200/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl md:text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-amber-900">{testimonial.name}</h4>
                    <p className="text-amber-700 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-amber-800 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof with Cream Theme */}
      <section className="relative z-10 px-4 md:px-6 py-16 md:py-32 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
            {[
              { icon: Users, value: '1,247', label: 'Active Users', color: 'text-blue-600' },
              { icon: DollarSign, value: '$127M', label: 'TVL Protected', color: 'text-emerald-600' },
              { icon: TrendingUp, value: '24.7%', label: 'Avg APY', color: 'text-violet-600' },
              { icon: Star, value: '4.9/5', label: 'User Rating', color: 'text-yellow-600' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-xl border border-amber-200/50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 ${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-2xl md:text-3xl font-bold text-amber-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">{item.value}</div>
                  <div className="text-amber-700 text-xs md:text-sm">{item.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-xl border border-amber-200/50 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              {generateParticles(20)}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-amber-900">Ready to Protect Your Liquidity?</h3>
              <p className="text-lg md:text-xl text-amber-700 mb-6 md:mb-8 max-w-2xl mx-auto">
                Join thousands of LPs who have eliminated impermanent loss while earning superior yields
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={onConnectWallet}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Start Earning Protected Yield</span>
                </button>
                <button 
                  onClick={onEnterApp}
                  className="w-full sm:w-auto border-2 border-amber-400 hover:border-amber-500 text-amber-800 hover:text-amber-900 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Explore Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Cream Theme */}
      <footer className="relative z-10 px-4 md:px-6 py-12 md:py-16 border-t border-amber-200/50 bg-gradient-to-r from-amber-50/60 to-orange-50/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
                DeltaGuard
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center space-x-6 text-amber-700">
              <a href="#" className="hover:text-amber-900 transition-all duration-300 transform hover:scale-105">Documentation</a>
              <a href="#" className="hover:text-amber-900 transition-all duration-300 transform hover:scale-105">Discord</a>
              <a href="#" className="hover:text-amber-900 transition-all duration-300 transform hover:scale-105">Twitter</a>
              <a href="#" className="hover:text-amber-900 transition-all duration-300 transform hover:scale-105">GitHub</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-amber-200/50 text-center text-amber-700">
            <p>&copy; 2025 DeltaGuard. Built for EulerSwap Builder Competition.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;