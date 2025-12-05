import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import RevealCard from './RevealCard';
import LogoPlaceholder from './LogoPlaceholder';

const Highlights = ({ scrollY }) => {
  const journeyHighlights = [
    { title: "First Gathering", date: "Jan 2024", loc: "Villa Kaliurang", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600", rotate: "rotate-3", tag: "Kick Off" },
    { title: "Rapat Kerja I", date: "Feb 2024", loc: "Co-Working Space", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600", rotate: "-rotate-2", tag: "Serious Mode" },
    { title: "Webinar Nasional", date: "Apr 2024", loc: "Zoom Meeting", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=600", rotate: "rotate-6", tag: "Public Event" },
    { title: "Team Bonding", date: "Jun 2024", loc: "Pantai Selatan", img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=600", rotate: "-rotate-3", tag: "Healing" },
    { title: "Kunjungan Riset", date: "Aug 2024", loc: "Desa Binaan", img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600", rotate: "rotate-2", tag: "Field Trip" },
    { title: "Proposal Camp", date: "Sep 2024", loc: "Perpus Pusat", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", rotate: "rotate-4", tag: "Focus" },
    { title: "Award Night", date: "Dec 2024", loc: "Main Hall", img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=600", rotate: "-rotate-1", tag: "Victory" }
  ];

  const leftColumn = journeyHighlights.filter((_, i) => i % 2 === 0);
  const rightColumn = journeyHighlights.filter((_, i) => i % 2 !== 0);

  return (
    <section id="highlights" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400 rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
      <div className="w-full px-6 md:px-12 relative z-10 max-w-screen-2xl mx-auto">
        <RevealCard>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 border-b border-neutral-800 pb-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Our <br/> <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '2px #a3e635' }}>Journey</span></h2>
            <div className="flex flex-col items-end"><p className="text-lime-400 font-mono text-xl mb-2">2024 REWIND</p><p className="text-neutral-400 max-w-xs text-right text-sm">Sorotan kegiatan dan momen krusial yang membentuk departemen kami tahun ini.</p></div>
          </div>
        </RevealCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative">
           <div className="space-y-12 md:space-y-24 pt-0 md:pt-12">
             {leftColumn.map((item, idx) => (
               <RevealCard key={`left-${idx}`} className="w-full group">
                  <div className={`relative bg-neutral-800 p-4 pb-12 rounded-sm shadow-xl transform ${item.rotate} transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:z-10 border border-neutral-700 hover:border-lime-400`}>
                    <LogoPlaceholder />
                    <div className="aspect-[4/5] overflow-hidden mb-4 bg-black relative"><img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /><div className="absolute top-2 left-2 bg-black/70 text-lime-400 text-xs font-bold px-2 py-1 uppercase tracking-widest border border-lime-400/30">{item.tag}</div></div>
                    <div className="px-2"><h3 className="text-3xl font-black uppercase text-white mb-2 font-mono leading-none">{item.title}</h3><div className="flex justify-between items-center text-xs text-neutral-400 font-mono border-t border-neutral-700 pt-3 mt-2"><div className="flex items-center gap-1"><Calendar size={12} /> {item.date}</div><div className="flex items-center gap-1"><MapPin size={12} /> {item.loc}</div></div></div>
                  </div>
               </RevealCard>
             ))}
           </div>
           <div className="space-y-12 md:space-y-24" style={{ transform: `translateY(${scrollY * -0.1}px)`, transition: 'transform 0.1s ease-out' }}>
              <div className="hidden md:block h-32"></div>
              {rightColumn.map((item, idx) => (
               <RevealCard key={`right-${idx}`} className="w-full group">
                  <div className={`relative bg-neutral-800 p-4 pb-12 rounded-sm shadow-xl transform ${item.rotate} transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:z-10 border border-neutral-700 hover:border-lime-400`}>
                    <LogoPlaceholder />
                    <div className="aspect-[4/5] overflow-hidden mb-4 bg-black relative"><img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /><div className="absolute top-2 left-2 bg-black/70 text-lime-400 text-xs font-bold px-2 py-1 uppercase tracking-widest border border-lime-400/30">{item.tag}</div></div>
                    <div className="px-2"><h3 className="text-3xl font-black uppercase text-white mb-2 font-mono leading-none">{item.title}</h3><div className="flex justify-between items-center text-xs text-neutral-400 font-mono border-t border-neutral-700 pt-3 mt-2"><div className="flex items-center gap-1"><Calendar size={12} /> {item.date}</div><div className="flex items-center gap-1"><MapPin size={12} /> {item.loc}</div></div></div>
                  </div>
               </RevealCard>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
