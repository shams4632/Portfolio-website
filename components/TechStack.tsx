import React from 'react';
import { TECH_STACK } from '../constants';

export const TechStack: React.FC = () => {
  return (
    <section className="py-10 bg-dark-900 border-b border-slate-800/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-8">Powering Next-Gen Websites With</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {TECH_STACK.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
              <div className="p-3 bg-dark-800 rounded-xl text-slate-400 group-hover:text-brand-400 group-hover:bg-dark-700 transition-all duration-300 group-hover:-translate-y-1">
                {React.cloneElement(tech.icon as React.ReactElement, { size: 28 })}
              </div>
              <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};