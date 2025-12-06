import React from 'react';
import { Upload } from 'lucide-react';
import RevealCard from './RevealCard';
import PhotoDeck from './PhotoDeck';

import { memoriesData } from '../assets/isi-konten';

const Memories = ({ onOpenStory }) => {
  return (
    <section id="memories" className="py-32 px-6 bg-neutral-950 overflow-hidden relative">
      <div className="absolute top-10 left-0 w-full text-center pointer-events-none select-none">
         <span className="text-6xl md:text-9xl font-black text-neutral-900 uppercase leading-none opacity-50">{memoriesData.bgText}</span>
      </div>
      <div className="w-full px-6 md:px-12 relative z-10 text-center max-w-screen-2xl mx-auto">
         <RevealCard>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{memoriesData.title}</h2>
           <p className="text-neutral-400 mb-12">{memoriesData.desc}</p>
         </RevealCard>
         <PhotoDeck />
         <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
           <button className="bg-white text-black px-8 py-4 rounded-full font-black text-xl uppercase tracking-wider hover:bg-primary hover:text-white transition-colors flex items-center gap-3 shadow-lg shadow-white/10 hover:shadow-primary/50"><Upload size={24} /> Setor Foto Kamu</button>
           <button onClick={onOpenStory} className="text-neutral-500 font-mono text-sm hover:text-white underline underline-offset-4 decoration-primary decoration-2 transition-colors">
              Lihat Template Story
           </button>
         </div>
         <p className="text-neutral-500 mt-4 text-sm font-mono">*Foto akan dikurasi sebelum ditampilkan di website.</p>
      </div>
    </section>
  );
};

export default Memories;
