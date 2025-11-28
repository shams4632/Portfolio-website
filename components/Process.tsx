import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand-500 font-medium tracking-wide text-sm uppercase mb-2">My Workflow</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">How I Bring Ideas to Life</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">A transparent, step-by-step process ensuring your project is delivered on time, on budget, and beyond expectations.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="relative group">
                <div className="bg-dark-900 border border-slate-800 p-8 rounded-2xl h-full hover:border-brand-500 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-900/20">
                  <div className="w-14 h-14 bg-dark-800 rounded-full flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                    <span className="font-serif font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};