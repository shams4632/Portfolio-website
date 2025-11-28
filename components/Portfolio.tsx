import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-500 font-medium tracking-wide text-sm uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Latest Projects</h3>
          </div>
          <button className="hidden md:block px-6 py-2 border border-slate-700 text-slate-300 rounded-full hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group rounded-2xl overflow-hidden bg-dark-900 border border-slate-800">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="p-3 bg-white text-dark-900 rounded-full hover:bg-brand-500 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-dark-900 text-white rounded-full hover:bg-brand-500 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-dark-900/90 text-xs font-bold text-white rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs text-brand-400 font-medium">
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-2 border border-slate-700 text-slate-300 rounded-full hover:bg-brand-600 hover:text-white transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};