import React from 'react';
import { Instagram } from 'lucide-react';
import RevealCard from './RevealCard';
import LogoPlaceholder from './LogoPlaceholder';

import { socialData } from '../assets/isi-konten';

const Social = () => {
  return (
    <section id="social" className="py-24 bg-neutral-950 text-white relative">
      <div className="w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
        <RevealCard>
           <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 text-center text-white">{socialData.header.title} <span className="text-lime-500 italic">{socialData.header.highlight}</span></h2>
        </RevealCard>
        <div className="grid md:grid-cols-2 gap-12">
           {socialData.items.map((item, idx) => (
             <RevealCard key={idx} className={`flex flex-col items-center ${idx === 1 ? 'mt-12 md:mt-0' : ''}`}>
               <div className={`relative w-full max-w-sm aspect-[4/5] bg-black rounded-[3rem] p-4 shadow-2xl ${item.rotate} hover:rotate-0 transition-transform duration-500 border border-neutral-800`}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                  <div className={`w-full h-full ${item.isTheme ? 'bg-lime-400 flex items-center justify-center' : 'bg-neutral-800'} rounded-[2.5rem] overflow-hidden relative group`}>
                     <LogoPlaceholder />
                     {item.isTheme ? (
                       <h2 className="text-6xl font-black text-black">TEMA</h2>
                     ) : (
                       <img src={item.img} className="w-full h-full object-cover opacity-80" alt={item.name} />
                     )}
                     <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-center text-white"><Instagram size={48} className="mx-auto mb-2" /><h3 className="font-bold text-2xl">{item.handle}</h3></div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 text-center"><h3 className="text-4xl font-bold uppercase text-white">{item.name}</h3><p className="font-mono text-neutral-500">{item.desc}</p></div>
             </RevealCard>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
