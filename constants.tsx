import React from 'react';
import { Project, Service, Testimonial } from './types';
import { Layout, Code, Smartphone, Zap, Search, PenTool, Globe, Database, Server, Cpu } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Process', href: '#process' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '#blog' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Custom WordPress Dev',
    icon: <Code className="w-6 h-6" />,
    description: 'Tailor-made themes and plugins developed from scratch to fit your exact business needs.',
  },
  {
    id: 2,
    title: 'Elementor Expert',
    icon: <Layout className="w-6 h-6" />,
    description: 'Pixel-perfect, responsive layouts built with Elementor Pro for easy future management.',
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Websites that look stunning and function perfectly on desktops, tablets, and mobile devices.',
  },
  {
    id: 4,
    title: 'Speed Optimization',
    icon: <Zap className="w-6 h-6" />,
    description: 'Blazing fast load times to improve user experience and Core Web Vitals scores.',
  },
  {
    id: 5,
    title: 'SEO Strategy',
    icon: <Search className="w-6 h-6" />,
    description: 'Technical SEO setup ensuring your site ranks higher in search engine results.',
  },
  {
    id: 6,
    title: 'UI/UX Design',
    icon: <PenTool className="w-6 h-6" />,
    description: 'User-centric interfaces designed to convert visitors into loyal customers.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lumina E-Commerce',
    category: 'WooCommerce',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'A full-featured fashion store with custom product filtering and payment gateways.',
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
  },
  {
    id: 2,
    title: 'Apex Corporate',
    category: 'Business',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Modern corporate identity site for a financial tech firm with dynamic charts.',
    technologies: ['React', 'WordPress API', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Zenith Portfolio',
    category: 'Creative',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Minimalist portfolio theme for photographers featuring a masonry gallery.',
    technologies: ['WordPress', 'GSAP', 'JavaScript'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    text: 'The best WordPress developer I have worked with. The attention to detail in the Elementor designs is unmatched.',
    avatar: 'https://picsum.photos/100/100?random=10',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, StartUp Inc',
    text: 'Incredible speed optimization. Our site load time went from 4s to 0.8s. Highly recommended!',
    avatar: 'https://picsum.photos/100/100?random=11',
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'hello@alexdev.com',
};

// --- NEW DATA SECTIONS ---

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business goals, target audience, and brand vision to create a solid roadmap.',
    icon: <Search className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Design & Wireframing',
    description: 'I craft high-fidelity mockups and interactive prototypes so you can visualize the final product before we build.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Development',
    description: 'Turning designs into clean, semantic code using the latest WordPress standards and modern frameworks.',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Launch & Support',
    description: 'Rigorous testing, SEO setup, and deployment, followed by ongoing maintenance and training.',
    icon: <Zap className="w-6 h-6" />
  },
];

export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: '$999',
    description: 'Perfect for small businesses looking to establish an online presence.',
    features: ['5 Page Website', 'Responsive Design', 'Contact Form', 'Basic SEO', '1 Month Support'],
    recommended: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '$2,499',
    description: 'Comprehensive solution for growing companies needing dynamic features.',
    features: ['10+ Page Website', 'Custom Elementor Theme', 'Speed Optimization', 'Advanced SEO', 'Blog Setup', '3 Months Support'],
    recommended: true,
  },
  {
    id: 3,
    name: 'E-Commerce',
    price: '$4,999+',
    description: 'Full-scale online store with payment processing and inventory management.',
    features: ['WooCommerce Setup', 'Product Upload (up to 50)', 'Payment Gateway Integration', 'Customer Accounts', 'Sales Dashboard', '6 Months Support'],
    recommended: false,
  },
];

export const FAQS = [
  {
    question: "Do you work with custom themes or pre-built ones?",
    answer: "I specialize in both. For unique branding, I build custom themes from scratch. For tighter budgets, I can expertly customize premium themes like Hello Elementor or Astra."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard 5-page business site typically takes 2-3 weeks. Larger e-commerce projects can take 6-8 weeks depending on complexity."
  },
  {
    question: "Will I be able to edit the website myself?",
    answer: "Absolutely! I build everything with user-friendliness in mind (often using Elementor), so you can easily change text and images without touching code."
  },
  {
    question: "Do you offer website hosting?",
    answer: "I don't host websites directly, but I can recommend high-performance WordPress hosts and handle the entire setup process for you."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Why Elementor is the Future of WordPress',
    excerpt: 'Exploring how visual builders are changing the landscape of web development for agencies and clients alike.',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/600/400?random=20'
  },
  {
    id: 2,
    title: '5 Tips to Speed Up Your WordPress Site',
    excerpt: 'Practical actionable steps to get your Google PageSpeed score to 90+ without breaking the bank.',
    date: 'Nov 05, 2023',
    image: 'https://picsum.photos/600/400?random=21'
  },
  {
    id: 3,
    title: 'The Ultimate SEO Checklist for 2024',
    excerpt: 'Ensure your website ranks on the first page of Google with these technical SEO strategies.',
    date: 'Dec 10, 2023',
    image: 'https://picsum.photos/600/400?random=22'
  }
];

export const TECH_STACK = [
  { name: 'WordPress', icon: <Globe /> },
  { name: 'React', icon: <Cpu /> },
  { name: 'PHP', icon: <Server /> },
  { name: 'MySQL', icon: <Database /> },
  { name: 'Tailwind', icon: <Code /> },
  { name: 'Elementor', icon: <Layout /> },
];