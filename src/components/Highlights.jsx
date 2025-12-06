import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import RevealCard from './RevealCard';
import LogoPlaceholder from './LogoPlaceholder';

import { highlightsData, highlightsStaticData } from '../assets/isi-konten';

const Highlights = ({ scrollY }) => {
  // Data moved to src/assets/isi-konten.js

  const leftColumn = highlightsData.filter((_, i) => i % 2 === 0);
  const rightColumn = highlightsData.filter((_, i) => i % 2 !== 0);

  return (
    <section id="highlights" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400 rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
      <div className="w-full px-6 md:px-12 relative z-10 max-w-screen-2xl mx-auto">
        <RevealCard>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 border-b border-neutral-800 pb-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">{highlightsStaticData.title.prefix} <br/> <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '2px #a3e635' }}>{highlightsStaticData.title.highlight}</span></h2>
            <div className="flex flex-col items-end"><p className="text-lime-400 font-mono text-xl mb-2">{highlightsStaticData.rewind}</p><p className="text-neutral-400 max-w-xs text-right text-sm">{highlightsStaticData.desc}</p></div>
          </div>
        </RevealCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative">
           <div className="space-y-12 md:space-y-24 pt-0 md:pt-12">
             {leftColumn.map((item, idx) => (
               <RevealCard key={`left-${idx}`} className="w-full group">
                  <div className={`relative bg-neutral-800 p-4 pb-12 rounded-sm shadow-xl transform ${item.rotate} transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:z-10 border border-neutral-700 hover:border-lime-400`}>
                    <LogoPlaceholder />
                    <div className="aspect-[4/5] overflow-hidden mb-4 bg-black relative"><img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /><div className="absolute top-2 left-2 bg-black/70 text-lime-400 text-xs font-bold px-2 py-1 uppercase tracking-widest border border-lime-400/30">{item.tag}</div></div>
                    <div className="px-2"><h3 className="text-3xl font-black uppercase text-white mb-2 font-mono leading-none">{item.title}</h3><div className="flex justify-between items-center text-xs text-neutral-400 font-mono border-t border-neutral-700 pt-3 mt-2"><div className="flex items-center gap-1"><Calendar size={12} /> {item.date}</div><div className="flex items-center gap-1"><MapPin size={12} /> {item.loc}</div></div></div>
                  </div>
               </RevealCard>
             ))}
           </div>
           <div className="space-y-12 md:space-y-24" style={{ transform: `translateY(${scrollY * -0.1}px)`, transition: 'transform 0.1s ease-out' }}>
              <div className="hidden md:block h-32"></div>
              {rightColumn.map((item, idx) => (
               <RevealCard key={`right-${idx}`} className="w-full group">
                  <div className={`relative bg-neutral-800 p-4 pb-12 rounded-sm shadow-xl transform ${item.rotate} transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:z-10 border border-neutral-700 hover:border-lime-400`}>
                    <LogoPlaceholder />
                    <div className="aspect-[4/5] overflow-hidden mb-4 bg-black relative"><img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /><div className="absolute top-2 left-2 bg-black/70 text-lime-400 text-xs font-bold px-2 py-1 uppercase tracking-widest border border-lime-400/30">{item.tag}</div></div>
                    <div className="px-2"><h3 className="text-3xl font-black uppercase text-white mb-2 font-mono leading-none">{item.title}</h3><div className="flex justify-between items-center text-xs text-neutral-400 font-mono border-t border-neutral-700 pt-3 mt-2"><div className="flex items-center gap-1"><Calendar size={12} /> {item.date}</div><div className="flex items-center gap-1"><MapPin size={12} /> {item.loc}</div></div></div>
                  </div>
               </RevealCard>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
