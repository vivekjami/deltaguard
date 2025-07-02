import React from 'react';
import { Shield, Twitter, MessageCircle, Github, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Send, href: '#', label: 'Telegram' }
  ];

  return (
    <footer className="py-20 px-6 lg:px-8 border-t border-elegant-blue-100 relative bg-gradient-to-br from-cream-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="w-10 h-10 text-elegant-blue-600" />
                <div className="absolute inset-0 bg-elegant-blue-600 rounded-full blur-lg opacity-20"></div>
              </div>
              <span className="text-3xl font-serif font-semibold gradient-text-elegant">
                DeltaGuard
              </span>
            </div>
            <p className="text-elegant leading-relaxed max-w-md text-lg mb-8">
              Advanced delta-neutral liquidity management platform that eliminates impermanent loss 
              while maximizing DeFi yields through sophisticated automated strategies.
            </p>
            <div className="flex items-center space-x-3 text-sm text-navy-600 font-medium">
              <span>Built for</span>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gradient-elegant rounded-sm"></div>
                <span className="font-semibold text-elegant-blue-700">EulerSwap</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-navy-800 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-navy-600 hover:text-elegant-blue-600 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-navy-800 mb-6">Community</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 glass-subtle rounded-xl flex items-center justify-center text-navy-600 hover:text-elegant-blue-600 hover:bg-white/80 transition-all duration-300 hover:transform hover:scale-110 shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-elegant-blue-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-navy-600 text-sm font-medium">
            © 2025 DeltaGuard. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8 text-sm text-navy-600 font-medium">
            <span>Secured by smart contracts</span>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-elegant-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;