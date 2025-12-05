import React from 'react';
import { Upload } from 'lucide-react';
import RevealCard from './RevealCard';
import PhotoDeck from './PhotoDeck';

const Memories = () => {
  return (
    <section id="memories" className="py-32 px-6 bg-neutral-950 overflow-hidden relative">
      <div className="absolute top-10 left-0 w-full text-center pointer-events-none select-none">
         <span className="text-6xl md:text-9xl font-black text-neutral-900 uppercase leading-none opacity-50">UNFILTERED</span>
      </div>
      <div className="w-full px-6 md:px-12 relative z-10 text-center max-w-screen-2xl mx-auto">
         <RevealCard>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">CAPTURE THE MOMENT</h2>
           <p className="text-neutral-400 mb-12">Geser, lihat, dan tambahkan kenanganmu sendiri.</p>
         </RevealCard>
         <PhotoDeck />
         <div className="mt-12">
           <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-black text-xl uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-lg shadow-lime-400/20"><Upload size={24} /> Setor Foto Kamu</button>
           <p className="text-neutral-500 mt-4 text-sm font-mono">*Foto akan dikurasi sebelum ditampilkan di website.</p>
         </div>
      </div>
    </section>
  );
};

export default Memories;
