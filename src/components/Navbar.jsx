import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';

import { navbarData } from '../assets/isi-konten';

const Navbar = ({ unlockedSections, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <div className="text-3xl font-black tracking-tighter uppercase italic z-50">
        LITBANG<span className="text-lime-400 not-italic">.</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
        {navbarData.map(({ id, label }) => {
           const isUnlocked = unlockedSections.includes(id);
           const isActive = activeSection === id;
           return (
            <a 
              key={id} 
              href={`#${id}`} 
              className={`
                transition-all duration-500 transform
                ${isUnlocked 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4 pointer-events-none'
                }
                hover:text-lime-400 hover:scale-110 active:scale-95
                ${isActive ? 'text-lime-400 scale-110' : 'text-white'}
                ${id === 'journey' && isUnlocked && !isActive ? 'animate-pulse' : ''} 
              `}
            >
              {label}
            </a>
           )
        })}
      </div>

      <div className="flex items-center gap-4 z-50">
        <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-lime-400 transition-colors uppercase text-sm flex items-center gap-2 hover:scale-105 active:scale-95 hidden md:flex">
          <Camera size={16} /> Join Us
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navbarData.map(({ id, label }) => (
            <a 
              key={id} 
              href={`#${id}`} 
              className="text-2xl font-black uppercase tracking-widest text-white hover:text-lime-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-lime-400 transition-colors uppercase text-lg flex items-center gap-2 mt-4">
            <Camera size={20} /> Join Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
