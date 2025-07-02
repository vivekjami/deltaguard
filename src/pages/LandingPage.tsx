import React from 'react';
import Hero from '../components/Landing/Hero';
import Features from '../components/Landing/Features';
import HowItWorks from '../components/Landing/HowItWorks';
import Testimonials from '../components/Landing/Testimonials';
import CallToAction from '../components/Landing/CallToAction';
import Footer from '../components/Landing/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-cream-100 text-navy-800 overflow-x-hidden">
      {/* Elegant Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-elegant-blue-50/30 via-transparent to-elegant-green-50/30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-elegant-blue-100 to-elegant-teal-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-elegant-green-100 to-cream-200 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-cream-200 to-elegant-blue-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-elegant-teal-100 to-elegant-green-100 rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;