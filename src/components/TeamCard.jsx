import React from 'react';
import { Sparkles, Quote } from 'lucide-react';

const TeamCard = ({ role, title, traits, quote, img }) => {
  return (
    <div className="group relative w-full h-[450px] bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700 hover:border-lime-400 transition-all duration-500 hover:-translate-y-2">
      {/* Image Layer */}
      <div className="absolute inset-0 z-0">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 bg-lime-400 text-black text-xs font-bold uppercase tracking-wider rounded mb-2">
            {role}
          </span>
          <h3 className="text-2xl font-black uppercase text-white mb-1 leading-tight">{title}</h3>
          
          {/* Hidden Traits - Reveal on Hover */}
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
            <div className="pt-4 border-t border-white/20 mt-4 space-y-2">
              {traits.map((trait, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                  <Sparkles size={14} className="text-lime-400" />
                  <span>{trait}</span>
                </div>
              ))}
              <div className="mt-4 bg-white/10 backdrop-blur p-3 rounded-xl border border-white/10">
                <Quote size={16} className="text-lime-400 mb-1" />
                <p className="text-xs italic text-white">"{quote}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
