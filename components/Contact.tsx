import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! This is a demo form.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-dark-900 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-500 font-medium tracking-wide text-sm uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-serif font-bold text-white mb-6">Let's work together!</h3>
            <p className="text-slate-400 mb-8 max-w-md">
              Have a project in mind? Looking for a partner to handle your WordPress development? Send me a message and let's chat.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-800 rounded-lg text-brand-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-brand-400 transition-colors">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-800 rounded-lg text-brand-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-800 rounded-lg text-brand-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-800 p-8 rounded-2xl border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-dark-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Alex Dev. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={SOCIAL_LINKS.github} className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href={SOCIAL_LINKS.linkedin} className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href={SOCIAL_LINKS.twitter} className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};