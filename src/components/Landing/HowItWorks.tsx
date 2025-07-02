import React from 'react';
import { Wallet, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Wallet,
      title: 'Connect',
      description: 'Connect your wallet and deposit assets into our secure smart contracts.',
      illustration: (
        <div className="relative w-full h-48 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '02',
      icon: Settings,
      title: 'Select',
      description: 'Choose from pre-configured strategies or customize your own risk parameters.',
      illustration: (
        <div className="relative w-full h-48 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-sm text-slate-300">Conservative</span>
              <span className="text-sm text-emerald-400">8.5% APY</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-600/20 border border-blue-500/50 rounded-lg">
              <span className="text-sm text-white">Balanced</span>
              <span className="text-sm text-blue-400">15.2% APY</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-sm text-slate-300">Aggressive</span>
              <span className="text-sm text-amber-400">22.8% APY</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Earn',
      description: 'Watch your portfolio grow with automated yield optimization and risk protection.',
      illustration: (
        <div className="relative w-full h-48 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 p-6">
          <div className="h-full flex items-end justify-between space-x-2">
            {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-blue-600 to-emerald-400 rounded-t-sm flex-1"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg px-3 py-1">
            <span className="text-emerald-400 text-sm font-semibold">+18.5%</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Simple. Powerful.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Secure.
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get started with delta-neutral strategies in three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur-lg opacity-30"></div>
                  </div>
                </div>

                {/* Illustration */}
                <div className="mb-8">
                  {step.illustration}
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-blue-400 mr-2" />
                    <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;