
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Services', page: 'SERVICES' },
    { label: 'Stack', page: 'PRODUCTS' },
    { label: 'Portfolio', page: 'PORTFOLIO' },
    { label: 'Tech Log', page: 'TECH_LOG' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav bg-white/70 shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('HOME')}
        >
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-xs group-hover:bg-[#00A3FF] transition-colors">
            LOF
          </div>
          <span className="text-xl font-black tracking-tighter">Logic On Fire</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`text-sm font-semibold transition-colors hover:text-[#00A3FF] ${
                activePage === link.page ? 'text-[#00A3FF]' : 'text-slate-600'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('CONTACT')}
            className="bg-[#00A3FF] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
          >
            문의하기
          </button>
        </div>

        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
