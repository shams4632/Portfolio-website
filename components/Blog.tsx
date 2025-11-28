import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-500 font-medium tracking-wide text-sm uppercase mb-2">From The Blog</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Latest Insights</h3>
          </div>
          <button className="hidden md:block text-brand-400 hover:text-white font-medium transition-colors">
            Read All Articles &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {post.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-sm font-medium text-brand-500 flex items-center gap-1">
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};