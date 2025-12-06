import React from 'react';
import { Plus } from 'lucide-react';

import { photoDeckData } from '../assets/isi-konten';

const PhotoDeck = () => {
  const { cards, upload } = photoDeckData;

  return (
    <div className="relative h-[500px] flex items-center justify-center py-20 overflow-hidden group">
       {cards.map((card, idx) => {
         if (card.type === 'upload') {
           return (
            <div key={idx} className={`absolute w-48 h-64 md:w-64 md:h-80 bg-lime-400 rounded-3xl border-4 border-black shadow-2xl transition-all duration-500 transform rotate-12 translate-x-24 md:translate-x-48 hover:scale-110 hover:-translate-y-4 hover:rotate-0 z-10 cursor-pointer flex flex-col items-center justify-center group/upload`}>
                <div className="bg-black text-white p-4 rounded-full mb-2 group-hover/upload:scale-110 transition-transform">
                  <Plus size={32} />
                </div>
                <span className="font-black text-black uppercase text-xl">{upload.label}</span>
                <span className="text-xs font-mono font-bold mt-1">{upload.sublabel}</span>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
           );
         }

         return (
           <div 
             key={idx}
             className={`absolute w-48 h-64 md:w-64 md:h-80 bg-neutral-800 rounded-3xl border-4 border-white shadow-2xl overflow-hidden transition-all duration-700 ease-out transform ${card.rotate} ${card.translate} group-hover:translate-x-[${(idx - 2) * 150}px] hover:!scale-110 hover:!z-50 hover:!rotate-0 ${card.z} hover:shadow-lime-400/50`}
             style={{ 
               '--hover-translate': `${(idx - 2) * 120}px`
             }}
           >
             <img src={card.src} alt="Memory" className="w-full h-full object-cover" />
             <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  {card.label}
                </span>
             </div>
           </div>
         )
       })}
    </div>
  );
};

export default PhotoDeck;
