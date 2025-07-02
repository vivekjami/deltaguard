import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle, Sparkles } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-32 px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-elegant-blue-50/50 via-transparent to-elegant-green-50/50"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-elegant-blue-200 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-12 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-elegant-blue-50 to-elegant-green-50 px-4 py-2 rounded-full border border-elegant-blue-100 mb-8">
            <Sparkles className="w-4 h-4 text-elegant-blue-600" />
            <span className="text-sm font-medium text-elegant-blue-700">Ready to Begin</span>
          </div>

          <h2 className="text-4xl lg:text-7xl font-serif font-semibold">
            <span className="text-navy-900">
              Ready to Optimize Your
            </span>
            <br />
            <span className="gradient-text-elegant">
              DeFi Strategy?
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Start with as little as $100 in assets and experience the power of delta-neutral strategies with institutional-grade sophistication.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="btn-elegant px-12 py-6 rounded-2xl font-semibold text-xl text-white shadow-elegant group">
              Launch App
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform inline" />
            </button>
            
            <a
              href="/documentation"
              className="text-navy-600 hover:text-elegant-blue-600 font-semibold text-xl underline underline-offset-4 hover:underline-offset-8 transition-all duration-300"
            >
              Read Documentation
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 p-10 glass-elegant rounded-3xl shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif font-semibold mb-6 text-navy-800">Stay Updated</h3>
            <p className="text-elegant mb-8 text-lg">Get the latest updates on new features and sophisticated strategies.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 glass-subtle rounded-xl text-navy-800 placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-elegant-blue-300 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-elegant hover:shadow-elegant rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-white"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center space-x-8 text-navy-600 text-sm font-medium">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-elegant-green-400 rounded-full mr-3"></div>
              Audited Smart Contracts
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-elegant-blue-400 rounded-full mr-3"></div>
              Insurance Coverage
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cream-500 rounded-full mr-3"></div>
              24/7 Monitoring
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;