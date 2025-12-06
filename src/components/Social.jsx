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
           <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-center text-white">{socialData.header.title} <span className="text-primary italic">{socialData.header.highlight}</span></h2>
        </RevealCard>
        
        {/* Updated Grid for 5 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
           {socialData.items.map((item, idx) => (
             <RevealCard key={idx} className={`flex flex-col items-center ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}> {/* Stagger effect for even items */}
               <div className={`relative w-full max-w-sm aspect-[4/5] bg-neutral-900 rounded-[3rem] p-4 shadow-2xl ${item.rotate} hover:rotate-0 transition-transform duration-500 border border-neutral-800 hover:border-primary/50 group`}>
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-neutral-950 rounded-b-xl z-20 border-b border-r border-l border-neutral-800"></div>
                  
                  {/* Screen/Content Area */}
                  <div className={`w-full h-full ${item.isTheme ? 'bg-primary flex items-center justify-center' : 'bg-neutral-800'} rounded-[2.5rem] overflow-hidden relative`}>
                     {item.isTheme ? (
                        <>
                           <LogoPlaceholder />
                           <h2 className="text-6xl font-black text-black z-10 relative">TEMA</h2>
                        </>
                     ) : (
                       <> 
                         <img src={item.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt={item.name} />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                       </>
                     )}
                     
                     {/* Overlay Content */}
                     <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${item.isTheme ? 'bg-black text-white' : 'bg-primary text-white'}`}>
                                {item.handle}
                            </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 text-center max-w-xs">
                   <h3 className="text-3xl font-black uppercase text-white mb-2">{item.name}</h3>
                   <p className="font-mono text-neutral-400 text-sm">{item.desc}</p>
               </div>
             </RevealCard>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
