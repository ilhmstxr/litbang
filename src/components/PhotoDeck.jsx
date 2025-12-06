import React, { useState } from 'react';
import { Plus } from 'lucide-react';

import { photoDeckData } from '../assets/isi-konten';

const PhotoDeck = () => {
  const { cards, upload } = photoDeckData;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className="relative h-[600px] flex items-center justify-center py-20 overflow-hidden" 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
       {cards.map((card, idx) => {
         // Calculate target transform for open state (staggered)
         // Center index is 2 (since 5 cards). 
         const spreadX = (idx - 2) * 200; // Spread distance
         const isOpen = isHovering;

         if (card.type === 'upload') {
           return (
            <div 
                key={idx} 
                className={`absolute w-56 h-72 md:w-64 md:h-80 bg-white rounded-3xl border-4 border-black shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] z-40 cursor-pointer flex flex-col items-center justify-center group/upload hover:!scale-110`}
                style={{
                    transform: isOpen 
                        ? `translateX(${spreadX}px) rotate(0deg)` 
                        : `translateX(192px) rotate(12deg)` // Hardcoded close positions based on previous data
                }}
            >
                <div className="bg-black text-white p-4 rounded-full mb-2 group-hover/upload:scale-110 transition-transform">
                  <Plus size={32} />
                </div>
                <span className="font-black text-black uppercase text-xl">{upload.label}</span>
                <span className="text-xs font-mono font-bold mt-1 text-neutral-500">{upload.sublabel}</span>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
           );
         }

        // Standard Cards
         const defaultTransform = isOpen 
            ? `translateX(${spreadX}px) rotate(0deg) scale(1.1)` 
            : `${card.translate} ${card.rotate} scale(1)`;

         return (
           <div 
             key={idx}
             className={`absolute w-56 h-72 md:w-64 md:h-80 bg-neutral-900 rounded-3xl border-4 border-white shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${card.z} group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]`}
             style={{ 
               transform: defaultTransform,
               zIndex: isOpen ? 100 - Math.abs(idx - 2) : undefined // Ensure focused cards aren't overlapped weirdly
             }}
           >
             <img src={card.src} alt="Memory" className="w-full h-full object-cover" />
             
             {/* Label Tag */}
             <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-lg">
                  {card.label}
                </span>
             </div>
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
           </div>
         )
       })}
    </div>
  );
};

export default PhotoDeck;
