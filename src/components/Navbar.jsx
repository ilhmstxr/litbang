import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';

import { navbarData } from '../assets/isi-konten';

const Navbar = ({ unlockedSections, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP SIDEBAR - Fixed Left, Transparent */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-24 bg-transparent z-50 flex-col items-center justify-center py-8">
        
        {/* Navigation Indicators */}
        <div className="flex flex-col gap-8 items-center">
          {navbarData.map(({ id, label }) => {
             const isUnlocked = unlockedSections.includes(id);
             const isActive = activeSection === id;
             
             return (
              <a 
                key={id} 
                href={`#${id}`} 
                className="group relative flex items-center justify-center h-6 w-full"
                title={label}
              >
                 {isActive ? (
                   /* Active: Show Text Rotated */
                   <span className="absolute -rotate-90 text-sm font-black uppercase tracking-widest text-primary whitespace-nowrap">
                      {label}
                   </span>
                 ) : (
                   /* Inactive: Show Dot */
                   <div className={`
                      w-2 h-2 rounded-full transition-all duration-500
                      ${isUnlocked ? 'bg-white/40 group-hover:bg-white group-hover:scale-150' : 'bg-white/10 cursor-not-allowed'}
                   `}></div>
                 )}
              </a>
             )
          })}
        </div>
      </nav>

      {/* MOBILE NAVBAR - Fixed Top (Unchanged behavior for mobile) */}
      <nav className="md:hidden fixed w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
          <div className="text-3xl font-black tracking-tighter uppercase italic z-50">
            LITBANG<span className="text-primary not-italic">.</span>
          </div>

          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navbarData.map(({ id, label }) => (
            <a 
              key={id} 
              href={`#${id}`} 
              className="text-2xl font-black uppercase tracking-widest text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors uppercase text-lg flex items-center gap-2 mt-4">
            <Camera size={20} /> Join Us
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
