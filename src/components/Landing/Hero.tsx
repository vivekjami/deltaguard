import React, { useState } from 'react';
import { Shield, Play, Menu, X, TrendingUp, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              DeltaGuard
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
            <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">About</a>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Launch App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">About</a>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-lg font-semibold text-left">
                Launch App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Delta-Neutral
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Strategies
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                Maximize DeFi yields while eliminating impermanent loss through 
                sophisticated automated hedging strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25">
                Get Started
              </button>
              <button className="flex items-center justify-center space-x-2 border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-2xl font-bold text-emerald-400">95%</span>
                </div>
                <p className="text-sm text-slate-400">IL Protection</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-2xl font-bold text-blue-400">18.5%</span>
                </div>
                <p className="text-sm text-slate-400">Average APY</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="w-5 h-5 text-amber-400 mr-2" />
                  <span className="text-2xl font-bold text-amber-400">$125M+</span>
                </div>
                <p className="text-sm text-slate-400">TVL</p>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-lg mx-auto">
                {/* 3D Shield Illustration */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-full blur-3xl"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8">
                    <div className="text-center space-y-6">
                      <div className="relative mx-auto w-32 h-32">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full animate-pulse"></div>
                        <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                          <Shield className="w-16 h-16 text-blue-400" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Protected Portfolio</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-slate-800/50 rounded-lg p-3">
                            <div className="text-emerald-400 font-semibold">+$12,450</div>
                            <div className="text-slate-400">Total Yield</div>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-3">
                            <div className="text-blue-400 font-semibold">0.02%</div>
                            <div className="text-slate-400">IL Risk</div>
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