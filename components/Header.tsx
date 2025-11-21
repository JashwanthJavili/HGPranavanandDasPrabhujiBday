import React, { useState } from 'react';
import { Menu, X, Flower } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Glorification', href: '#glorification' },
    { label: 'Teachings', href: '#teachings' },
    { label: 'Tribute', href: '#tribute' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-saffron-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="relative">
                <Flower className="h-8 w-8 text-saffron-500 group-hover:rotate-45 transition-transform duration-500" />
                <div className="absolute inset-0 bg-saffron-200 blur-lg opacity-50 rounded-full"></div>
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-stone-800 tracking-wide leading-none">
                Guru's Shelter
                </span>
                <span className="font-sans text-xs text-saffron-600 font-medium tracking-wider uppercase">
                Service & Devotion
                </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-stone-600 hover:text-saffron-700 relative group px-1 py-2 text-sm font-bold uppercase tracking-wider"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-saffron-700 p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-saffron-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:text-saffron-700 hover:bg-saffron-50 border-l-4 border-transparent hover:border-saffron-500 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;