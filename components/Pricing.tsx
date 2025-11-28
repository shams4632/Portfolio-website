import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-500 font-medium tracking-wide text-sm uppercase mb-2">Pricing Packages</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Transparent Investment</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">Choose the perfect plan for your business needs. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-3xl border ${
                plan.recommended 
                  ? 'bg-dark-800/80 border-brand-500 shadow-2xl shadow-brand-900/20 scale-105 z-10' 
                  : 'bg-dark-800/40 border-slate-800'
              } transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-lg font-medium text-slate-300 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500">/project</span>
                </div>
                <p className="text-slate-400 text-sm mt-4">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-5 h-5 text-brand-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.recommended 
                    ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};