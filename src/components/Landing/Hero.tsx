import React, { useState } from 'react';
import { Shield, Play, Menu, X, TrendingUp, DollarSign, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-elegant rounded-2xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Shield className="w-8 h-8 text-elegant-blue-600" />
                  <div className="absolute inset-0 bg-elegant-blue-600 rounded-full blur-lg opacity-20"></div>
                </div>
                <span className="text-2xl font-serif font-semibold gradient-text-elegant">
                  DeltaGuard
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-navy-600 hover:text-elegant-blue-600 transition-colors font-medium">Features</a>
                <a href="#how-it-works" className="text-navy-600 hover:text-elegant-blue-600 transition-colors font-medium">How It Works</a>
                <a href="#testimonials" className="text-navy-600 hover:text-elegant-blue-600 transition-colors font-medium">About</a>
                <button className="btn-elegant px-6 py-3 rounded-xl font-semibold text-white shadow-elegant">
                  Launch App
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-navy-700 p-2 rounded-lg hover:bg-white/50 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/30">
                <div className="flex flex-col space-y-4">
                  <a href="#features" className="text-navy-600 hover:text-elegant-blue-600 transition-colors font-medium">Features</a>
                  <a href="#how-it-works" className="text-navy-600 hover:text-elegant-blue-600 transition-colors font-medium">How It Works</a>
                  <a href="#testimonials" className="text-navy-600 hover:text-elegant-blue-600 transition-colors font-medium">About</a>
                  <button className="btn-elegant px-6 py-3 rounded-xl font-semibold text-white text-left">
                    Launch App
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-elegant-blue-50 to-elegant-green-50 px-4 py-2 rounded-full border border-elegant-blue-100">
                <Sparkles className="w-4 h-4 text-elegant-blue-600" />
                <span className="text-sm font-medium text-elegant-blue-700">Introducing DeltaGuard</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-semibold leading-tight">
                <span className="text-navy-900">
                  Delta-Neutral
                </span>
                <br />
                <span className="gradient-text-elegant">
                  Strategies
                </span>
                <br />
                <span className="text-navy-700">
                  Made Elegant
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-elegant leading-relaxed max-w-2xl">
                Maximize DeFi yields while eliminating impermanent loss through 
                sophisticated automated hedging strategies designed for the modern investor.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-elegant px-10 py-5 rounded-2xl font-semibold text-lg text-white shadow-elegant">
                Get Started
              </button>
              <button className="flex items-center justify-center space-x-3 glass-subtle px-10 py-5 rounded-2xl font-semibold text-lg text-navy-700 hover:bg-white/80 transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-elegant-green-600 mr-2" />
                  <span className="text-3xl font-bold text-elegant-green-600">95%</span>
                </div>
                <p className="text-sm font-medium text-navy-600">IL Protection</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-elegant-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-elegant-blue-600">18.5%</span>
                </div>
                <p className="text-sm font-medium text-navy-600">Average APY</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <DollarSign className="w-6 h-6 text-elegant-teal-600 mr-2" />
                  <span className="text-3xl font-bold text-elegant-teal-600">$125M+</span>
                </div>
                <p className="text-sm font-medium text-navy-600">Total Value Locked</p>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <div className="w-full max-w-lg mx-auto">
                {/* Elegant Shield Illustration */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-100/50 to-elegant-green-100/50 rounded-full blur-3xl"></div>
                  <div className="relative glass-elegant rounded-3xl p-12 shadow-elegant">
                    <div className="text-center space-y-8">
                      <div className="relative mx-auto w-40 h-40">
                        <div className="absolute inset-0 bg-gradient-elegant rounded-full animate-pulse-slow"></div>
                        <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-inner-elegant">
                          <Shield className="w-20 h-20 text-elegant-blue-600" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-elegant-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-semibold text-navy-800">Protected Portfolio</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="glass-subtle rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-elegant-green-600 mb-1">+$12,450</div>
                            <div className="text-navy-600 font-medium">Total Yield</div>
                          </div>
                          <div className="glass-subtle rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-elegant-blue-600 mb-1">0.02%</div>
                            <div className="text-navy-600 font-medium">IL Risk</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;