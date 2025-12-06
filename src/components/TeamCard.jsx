import React from 'react';
import { Sparkles, Quote } from 'lucide-react';

const TeamCard = ({ role, title, traits, quote, img, instagram }) => {
  return (
    <div className="group relative w-full h-[450px] bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-700 hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]">
      {/* Image Layer */}
      <div className="absolute inset-0 z-0">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end mb-2">
             <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded">
                {role}
             </span>
             {instagram && (
                 <a href={instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                 </a>
             )}
          </div>
          <h3 className="text-2xl font-black uppercase text-white mb-1 leading-tight">{title}</h3>
          
          {/* Hidden Traits - Reveal on Hover */}
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
            <div className="pt-4 border-t border-white/20 mt-4 space-y-2">
              {traits.map((trait, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                  <Sparkles size={14} className="text-primary" />
                  <span>{trait}</span>
                </div>
              ))}
              <div className="mt-4 bg-white/10 backdrop-blur p-3 rounded-xl border border-white/10">
                <Quote size={16} className="text-primary mb-1" />
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
