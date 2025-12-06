import React from 'react';
import { Heart, Lightbulb, Globe } from 'lucide-react';
import RevealCard from './RevealCard';

import { dnaData } from '../assets/isi-konten';

const DNA = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Heart': return <Heart size={40} className="text-red-500 fill-current" />;
      case 'Lightbulb': return <Lightbulb size={40} className="text-yellow-200 fill-current" />;
      case 'Globe': return <Globe size={40} className="text-blue-600" />;
      default: return null;
    }
  };

  return (
    <section id="dna" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Visual Noise/Doodles Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#a3e635 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="w-full px-6 md:px-12 relative z-10 max-w-screen-2xl mx-auto">
        <RevealCard>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
              {dnaData.header.title} <br/> <span className="text-lime-400 italic font-serif lowercase">{dnaData.header.highlight}</span>
            </h2>
            <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
              {dnaData.header.desc}
            </p>
          </div>
        </RevealCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dnaData.items.map((item, idx) => (
            <RevealCard key={idx} className={`transform ${item.rotate} hover:rotate-0 transition-transform duration-300 ${idx === 1 ? 'md:-mt-8' : ''}`}>
              <div className={`${item.color} text-black p-8 shadow-2xl relative h-full min-h-[300px] flex flex-col font-mono`}>
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur transform ${idx % 2 === 0 ? '-rotate-2' : 'rotate-1'}`}></div>
                <div className="mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase border-b-2 border-black pb-2">{item.title}</h3>
                <p className="text-lg leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <span className="text-xs font-bold mt-4 opacity-60">{item.tag}</span>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DNA;
