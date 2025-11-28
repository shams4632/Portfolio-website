import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-medium tracking-wide text-sm uppercase mb-2">My Services</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">What I Can Do For You</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-2xl bg-dark-800 border border-slate-800 hover:border-brand-500/50 hover:bg-dark-800/80 transition-all duration-300 hover:-translate-y-2 cursor-default"
            >
              <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-500 group-hover:text-white">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};