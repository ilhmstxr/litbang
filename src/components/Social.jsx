import React from 'react';
import { Instagram } from 'lucide-react';
import RevealCard from './RevealCard';
import LogoPlaceholder from './LogoPlaceholder';

const Social = () => {
  return (
    <section id="social" className="py-24 bg-neutral-950 text-white relative">
      <div className="w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
        <RevealCard>
           <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 text-center text-white">On <span className="text-lime-500 italic">Socials</span></h2>
        </RevealCard>
        <div className="grid md:grid-cols-2 gap-12">
           <RevealCard className="flex flex-col items-center">
             <div className="relative w-full max-w-sm aspect-[4/5] bg-black rounded-[3rem] p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-neutral-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-neutral-800 rounded-[2.5rem] overflow-hidden relative group">
                   <LogoPlaceholder />
                   <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-80" alt="Edulit Post" />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-center text-white"><Instagram size={48} className="mx-auto mb-2" /><h3 className="font-bold text-2xl">@edulit.riset</h3></div>
                   </div>
                </div>
             </div>
             <div className="mt-8 text-center"><h3 className="text-4xl font-bold uppercase text-white">Edulit</h3><p className="font-mono text-neutral-500">Educational Literacy</p></div>
           </RevealCard>
           <RevealCard className="flex flex-col items-center mt-12 md:mt-0">
             <div className="relative w-full max-w-sm aspect-[4/5] bg-black rounded-[3rem] p-4 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 border border-neutral-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-lime-400 rounded-[2.5rem] overflow-hidden relative group flex items-center justify-center">
                   <LogoPlaceholder />
                   <h2 className="text-6xl font-black text-black">TEMA</h2>
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-center text-white"><Instagram size={48} className="mx-auto mb-2" /><h3 className="font-bold text-2xl">@tema.mhs</h3></div>
                   </div>
                </div>
             </div>
             <div className="mt-8 text-center"><h3 className="text-4xl font-bold uppercase text-white">Tema</h3><p className="font-mono text-neutral-500">Teman Mahasiswa</p></div>
           </RevealCard>
        </div>
      </div>
    </section>
  );
};

export default Social;
