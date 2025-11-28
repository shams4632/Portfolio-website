import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-brand-500/10 text-brand-400 rounded-full text-sm font-medium border border-brand-500/20">
          WordPress Developer & Web Designer
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
          Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Masterpieces</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft professional, high-converting websites using WordPress and Elementor. 
          Bridging the gap between stunning design and technical excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#portfolio" 
            className="group px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-medium transition-all flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-transparent border border-slate-700 hover:border-brand-500 hover:text-brand-400 text-slate-300 rounded-full font-medium transition-all flex items-center gap-2"
          >
            Contact Me
            <Download className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8 max-w-4xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-white mb-1">5+</div>
            <div className="text-sm text-slate-500">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">100+</div>
            <div className="text-sm text-slate-500">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-slate-500">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm text-slate-500">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};