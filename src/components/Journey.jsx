import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

// --- Components Pendukung ---

// Reveal Component untuk Header
const Reveal = ({ children, className, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Bento Item Component
const BentoItem = ({ item, className }) => (
  <div className={`relative group overflow-hidden border border-white/10 ${className}`}>
    <img 
      src={item.img} 
      alt={item.title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <div className="text-lime-400 text-xs font-bold tracking-widest mb-2 uppercase">{item.date}</div>
      <h3 className="text-2xl md:text-3xl font-black text-white mb-1 leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>
        {item.title}
      </h3>
      <p className="text-sm text-neutral-400 font-sans line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
        {item.subtitle}
      </p>
    </div>
  </div>
);

// --- Main Component ---

import { journeyData, journeyStaticData } from '../assets/isi-konten';

const Journey = () => {
  // Refs untuk menghitung dimensi dan posisi scroll
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Data Highlights
  // journeyHighlights is now imported as journeyData

  // Logic Scroll Horizontal
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Hitung start dan end point scroll
      const start = sectionTop;
      const end = sectionTop + sectionHeight - windowHeight;

      // Hitung progress (0 sampai 1)
      let percent = (scrollY - start) / (end - start);
      percent = Math.max(0, Math.min(1, percent));

      setProgress(percent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hitung total translasi track (Scroll horizontal container)
  const getTranslateX = () => {
    if (!trackRef.current) return 0;
    const trackWidth = trackRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const maxTranslate = trackWidth - windowWidth + 100; // +100 untuk padding akhir
    return -(progress * maxTranslate);
  };

  // Helper untuk render Card Single
  const renderSingleCard = (item, idx) => (
    <div 
      key={idx} 
      className={`relative group flex-shrink-0 ${
        item.type === 'landscape' 
          ? 'w-[60vw] md:w-[800px]' 
          : 'w-[80vw] md:w-[500px]'
      }`}
    >
      {/* Item Layout */}
      <div className={`
         flex flex-col ${idx % 2 === 0 ? 'md:flex-col' : 'md:flex-col-reverse'} gap-6
         transform transition-transform duration-700 ease-out
      `}>
         
         {/* Image Container + PARALLAX EFFECT */}
         <div className="relative overflow-hidden shadow-2xl border border-neutral-800 group-hover:border-lime-400 transition-colors duration-500">
            <div className={`
              w-full overflow-hidden relative
              ${item.type === 'landscape' ? 'aspect-video' : 'aspect-[3/4]'}
            `}>
               {/* Parallax Wrapper */}
               <div 
                 className="absolute top-0 left-0 h-full w-[120%] -ml-[10%]"
                 style={{ 
                   transform: `translateX(${progress * 60}px)`, 
                   transition: 'transform 0.1s linear' 
                 }}
               >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                  />
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-0 left-0 bg-black/80 text-lime-400 px-4 py-2 font-mono text-xs font-bold uppercase backdrop-blur-md z-10">
              {item.date}
            </div>
         </div>

         {/* Text Content */}
         <div className="flex justify-between items-start border-l-2 border-white/10 pl-6">
            <div>
              <h3 className="text-4xl md:text-6xl mb-2 text-white group-hover:text-lime-400 transition-colors" style={{ fontFamily: '"Playfair Display", serif' }}>
                {item.title}
              </h3>
              <p className="text-lg font-bold uppercase tracking-tight mb-1 text-neutral-300">{item.subtitle}</p>
              <p className="text-sm text-neutral-500 font-sans max-w-xs">{item.desc}</p>
            </div>
            <div className="hidden md:block">
               <span className="text-6xl font-black text-white/5 font-sans">
                 0{idx + 1}
               </span>
            </div>
         </div>

      </div>
    </div>
  );

  // Helper untuk render Bento Grid
  const renderBentoGrid = (group, idx) => {
    const items = group.items;
    const count = items.length;

    // Layout untuk 3 Items (Competition)
    if (count === 3) {
      return (
        <div key={idx} className="flex-shrink-0 flex gap-4 h-[60vh] w-[900px]">
          <BentoItem item={items[0]} className="w-2/3 h-full" />
          <div className="flex flex-col gap-4 w-1/3 h-full">
            <BentoItem item={items[1]} className="h-1/2" />
            <BentoItem item={items[2]} className="h-1/2" />
          </div>
        </div>
      );
    }

    // Layout untuk 4 Items (Workshop, PKM)
    if (count === 4) {
      return (
        <div key={idx} className="flex-shrink-0 flex gap-4 h-[60vh] w-[1100px]">
          <BentoItem item={items[0]} className="w-3/5 h-full" />
          <div className="flex flex-col gap-4 w-2/5 h-full">
            <BentoItem item={items[1]} className="h-1/2" />
            <div className="flex gap-4 h-1/2">
              <BentoItem item={items[2]} className="w-1/2" />
              <BentoItem item={items[3]} className="w-1/2" />
            </div>
          </div>
        </div>
      );
    }

    // Layout untuk 5 Items (Belajar)
    if (count === 5) {
      return (
        <div key={idx} className="flex-shrink-0 flex gap-4 h-[60vh] w-[1200px]">
          <BentoItem item={items[0]} className="w-1/2 h-full" />
          <div className="grid grid-cols-2 gap-4 w-1/2 h-full">
            {items.slice(1).map((item, i) => (
              <BentoItem key={i} item={item} className="w-full h-full" />
            ))}
          </div>
        </div>
      );
    }

    // Layout untuk 8 Items (Kegiatan)
    if (count === 8) {
      return (
        <div key={idx} className="flex-shrink-0 grid grid-rows-2 grid-flow-col gap-4 h-[60vh] w-[1600px]">
          {items.map((item, i) => (
            <BentoItem key={i} item={item} className="w-[400px]" />
          ))}
        </div>
      );
    }

    // Fallback default
    return null;
  };

  return (
    <div id="journey" className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-lime-400 selection:text-black">
      
      {/* HORIZONTAL SCROLL SECTION */}
      {/* Container ini dibuat sangat tinggi (1500vh) untuk memberikan ruang scroll yang cukup panjang */}
      <div ref={sectionRef} className="relative h-[1500vh]"> 
        
        {/* Sticky Wrapper */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-neutral-950">
          
          {/* Horizontal Track */}
          <div 
            ref={trackRef}
            className="flex items-center gap-12 md:gap-32 px-12 md:px-24 will-change-transform"
            style={{ transform: `translateX(${getTranslateX()}px)` }}
          >
            
            {/* Intro Text Card */}
            <div className="min-w-[300px] md:min-w-[400px] flex flex-col justify-center">
               <h2 className="text-4xl mb-4 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>{journeyStaticData.title}</h2>
               <p className="text-neutral-400 max-w-sm">
                 {journeyStaticData.desc}
               </p>
               <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest animate-pulse text-lime-400">
                  {journeyStaticData.scrollLabel} <ArrowUpRight className="rotate-90" />
               </div>
            </div>

            {/* Loop Items with Group Support */}
            {journeyData.map((item, idx) => {
              if (item.isGroup) {
                return renderBentoGrid(item, idx);
              }
              return renderSingleCard(item, idx);
            })}

            {/* Closing Card */}
            <div className="min-w-[400px] md:min-w-[600px] flex items-center justify-center bg-lime-400 h-[60vh] p-12">
               <div className="text-center">
                 <h2 className="text-6xl italic mb-6 text-black" style={{ fontFamily: '"Playfair Display", serif' }}>{journeyStaticData.closing.title}</h2>
                 <p className="font-sans text-lg max-w-md mx-auto mb-8 text-black">
                   {journeyStaticData.closing.desc}
                 </p>
                 <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                   {journeyStaticData.closing.button}
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;