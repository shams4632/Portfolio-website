import React from 'react';
import { Send } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-brand-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Let's discuss your project and create something extraordinary together. 
              My calendar is open for new opportunities.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 rounded-full font-bold text-lg hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl"
            >
              Start Your Project
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};