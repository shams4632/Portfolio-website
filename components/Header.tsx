import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Code2, Sparkles, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Navbar */}
      <header className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'w-auto' : 'w-auto'}`}>
        <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-full px-3 py-2 shadow-2xl flex items-center gap-1">
          {/* Logo Icon */}
          <a href="#home" className="flex items-center justify-center w-10 h-10 bg-dark-900 rounded-full text-white mr-2 hover:scale-110 transition-transform">
            <Code2 className="w-5 h-5" />
          </a>

          {/* Nav Links */}
          <nav className="flex items-center">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group ${
                    isActive ? 'text-dark-900 bg-slate-100' : 'text-slate-600 hover:text-dark-900'
                  }`}
                >
                  {link.name}
                  {/* Hover Effect */}
                  <span className="absolute inset-0 rounded-full bg-slate-100 scale-0 group-hover:scale-100 -z-10 transition-transform duration-300 origin-center"></span>
                </a>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="w-px h-6 bg-slate-200 mx-2"></div>

          {/* Hire Me Button */}
          <a 
            href="#contact"
            className="group relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-brand-600 to-indigo-600 text-white rounded-full text-sm font-bold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hire Me 
              <Sparkles className="w-3 h-3 group-hover:animate-spin" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
             <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
              <Code2 className="w-5 h-5" />
             </div>
             <span className={`font-bold text-lg ${isScrolled ? 'text-dark-900' : 'text-white'}`}>AlexDev</span>
          </a>
          
          <button 
            className={`p-2 rounded-lg ${isScrolled ? 'text-dark-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-lg pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-2xl font-serif text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="mt-4 py-4 bg-white text-dark-900 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </>
  );
};