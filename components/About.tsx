import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SKILLS = [
  "WordPress Core", "Elementor Pro", "WooCommerce", 
  "HTML5 & CSS3", "JavaScript / React", "PHP", 
  "Figma / UI Design", "SEO Optimization", "Website Speed"
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-brand-500 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            <img 
              src="https://picsum.photos/600/800?random=99" 
              alt="Workspace" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-brand-500 font-medium tracking-wide text-sm uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Passionate about creating <br />
              <span className="text-brand-400">Intuitive Web Experiences</span>
            </h3>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Hello! I'm Alex, a dedicated WordPress Developer and Web Designer. I combine my technical knowledge of code with my eye for design to build websites that are not only beautiful but also performant and easy to manage.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Whether you need a simple landing page or a complex e-commerce solution, I leverage tools like Elementor and custom coding to bring your vision to life without the bloat.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {SKILLS.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-500" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};