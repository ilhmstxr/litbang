import React from 'react';
import { ChevronDown } from 'lucide-react';
import RevealCard from './RevealCard';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-end pb-20 px-6">
      <div className="absolute inset-0 z-0">
         <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920" alt="Research" className="w-full h-full object-cover opacity-30 grayscale mix-blend-screen" />
         <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
      </div>

      <div className="w-full px-6 md:px-12 z-10 max-w-screen-2xl mx-auto">
        <RevealCard>
          <span className="inline-block px-4 py-2 rounded-full border border-lime-400 text-lime-400 font-mono text-sm mb-6 animate-pulse">
            ● EST. 2024
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.8] font-black tracking-tighter uppercase mb-4 text-white drop-shadow-2xl break-words">
            RESEARCH <br />
            <span className="text-transparent stroke-white stroke-2 italic" style={{ WebkitTextStroke: '2px #a3e635' }}>& DEV</span> <br />
            JOURNEY
          </h1>
        </RevealCard>
        
        <RevealCard className="flex flex-col md:flex-row justify-between items-end mt-8 border-t border-neutral-800 pt-8">
          <p className="text-neutral-300 text-xl font-medium max-w-lg">
            Sebuah arsip visual perjalanan kami. Dari brainstorming larut malam hingga selebrasi keberhasilan.
          </p>
          <div className="animate-bounce mt-8 md:mt-0 p-4 rounded-full border border-lime-400 text-lime-400">
             <ChevronDown size={32} />
          </div>
        </RevealCard>
      </div>
    </header>
  );
};

export default Hero;
