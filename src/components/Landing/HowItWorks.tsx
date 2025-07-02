import React from 'react';
import { Wallet, Settings, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Wallet,
      title: 'Connect',
      description: 'Connect your wallet and deposit assets into our secure, audited smart contracts with institutional-grade security.',
      illustration: (
        <div className="relative w-full h-56 glass-elegant rounded-2xl border border-white/30 flex items-center justify-center p-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-elegant-blue-500 to-elegant-teal-500 rounded-2xl flex items-center justify-center shadow-elegant">
              <Wallet className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-elegant-green-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cream-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      number: '02',
      icon: Settings,
      title: 'Select',
      description: 'Choose from pre-configured strategies or customize your own risk parameters with our intuitive interface.',
      illustration: (
        <div className="relative w-full h-56 glass-elegant rounded-2xl border border-white/30 p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 glass-subtle rounded-xl">
              <span className="text-sm font-medium text-navy-700">Conservative</span>
              <span className="text-sm font-semibold text-elegant-green-600">8.5% APY</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-elegant-blue-100 to-elegant-teal-100 border border-elegant-blue-200 rounded-xl">
              <span className="text-sm font-medium text-navy-800">Balanced</span>
              <span className="text-sm font-semibold text-elegant-blue-700">15.2% APY</span>
            </div>
            <div className="flex items-center justify-between p-4 glass-subtle rounded-xl">
              <span className="text-sm font-medium text-navy-700">Aggressive</span>
              <span className="text-sm font-semibold text-cream-700">22.8% APY</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Earn',
      description: 'Watch your portfolio grow with automated yield optimization and risk protection, all managed elegantly.',
      illustration: (
        <div className="relative w-full h-56 glass-elegant rounded-2xl border border-white/30 p-6">
          <div className="h-full flex items-end justify-between space-x-2">
            {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-elegant-blue-500 to-elegant-green-400 rounded-t-lg flex-1 shadow-lg"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          <div className="absolute top-4 right-4 bg-elegant-green-100 border border-elegant-green-200 rounded-xl px-4 py-2">
            <span className="text-elegant-green-700 text-sm font-semibold">+18.5%</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-elegant-blue-50 to-elegant-green-50 px-4 py-2 rounded-full border border-elegant-blue-100 mb-8">
            <span className="text-sm font-medium text-elegant-blue-700">Simple Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-serif font-semibold mb-8">
            <span className="text-navy-900">Simple. Powerful.</span>
            <br />
            <span className="gradient-text-elegant">Secure.</span>
          </h2>
          
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Get started with delta-neutral strategies in three elegant steps designed for both beginners and professionals.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elegant-blue-200 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Step Number */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-elegant rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-elegant">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 bg-gradient-elegant rounded-full blur-xl opacity-30"></div>
                  </div>
                </div>

                {/* Illustration */}
                <div className="mb-8">
                  {step.illustration}
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-elegant-blue-600 mr-3" />
                    <h3 className="text-2xl font-serif font-semibold text-navy-800">{step.title}</h3>
                  </div>
                  <p className="text-elegant leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 glass-elegant rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-5 h-5 text-elegant-blue-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="btn-elegant px-10 py-5 rounded-2xl font-semibold text-lg text-white shadow-elegant">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;