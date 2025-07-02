import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Alexandra Chen',
      position: 'Lead Developer at Aave',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'DeltaGuard has revolutionized how we think about LP strategies. The automated hedging is incredibly sophisticated yet elegantly simple to use.',
      rating: 5
    },
    {
      name: 'Sarah Rodriguez',
      position: 'DeFi Strategist at Compound',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'Finally, a platform that eliminates impermanent loss without sacrificing yield. Our portfolio performance has improved by 40% with their elegant approach.',
      rating: 5
    },
    {
      name: 'Marcus Thompson',
      position: 'Portfolio Manager at Three Arrows',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'The risk management tools are institutional-grade. DeltaGuard gives us the confidence to deploy larger amounts in DeFi with their sophisticated platform.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-elegant-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-elegant-green-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-elegant-blue-50 to-elegant-green-50 px-4 py-2 rounded-full border border-elegant-blue-100 mb-8">
            <span className="text-sm font-medium text-elegant-blue-700">Testimonials</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-serif font-semibold mb-8">
            <span className="text-navy-900">
              Trusted by
            </span>
            <br />
            <span className="gradient-text-elegant">
              DeFi Experts
            </span>
          </h2>
          
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Leading protocols and institutions trust DeltaGuard for their delta-neutral strategies and sophisticated risk management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elegant glass-elegant rounded-3xl p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="mb-8">
                  <Quote className="w-10 h-10 text-elegant-blue-400 opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cream-600 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-elegant leading-relaxed mb-8 italic text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 shadow-lg"
                  />
                  <div>
                    <div className="font-semibold text-navy-800 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-navy-600 font-medium">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-navy-600 mb-8 font-medium">Trusted by leading DeFi protocols</p>
          <div className="flex items-center justify-center space-x-16 opacity-60">
            {['Aave', 'Compound', 'Uniswap', 'Curve', 'Balancer'].map((protocol, index) => (
              <div key={index} className="text-navy-500 font-semibold text-xl">
                {protocol}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;