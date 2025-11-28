import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { AIChatBot } from './components/AIChatBot';

const App: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen text-slate-300">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Process />
        <Services />
        <Portfolio />
        <Pricing />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Contact />
      <AIChatBot />
    </div>
  );
};

export default App;