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

// --- Main Component ---

const Journey = () => {
  // Refs untuk menghitung dimensi dan posisi scroll
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Data Highlights
  const journeyHighlights = [
    { 
      title: "KICK OFF", 
      subtitle: "First Gathering",
      desc: "Permulaan perjalanan kami di Villa Kaliurang.",
      date: "JAN 2024", 
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", 
      type: "landscape"
    },
    { 
      title: "SERIOUS MODE", 
      subtitle: "Rapat Kerja I",
      desc: "Menyusun strategi satu tahun ke depan.",
      date: "FEB 2024", 
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600", 
      type: "portrait"
    },
    { 
      title: "PUBLIC EVENT", 
      subtitle: "Webinar Nasional",
      desc: "Berbagi ilmu lewat Zoom Meeting.",
      date: "APR 2024", 
      img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=600", 
      type: "portrait"
    },
    { 
      title: "HEALING", 
      subtitle: "Team Bonding",
      desc: "Melepas penat di Pantai Selatan.",
      date: "JUN 2024", 
      img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800", 
      type: "landscape"
    },
    { 
      title: "FIELD TRIP", 
      subtitle: "Kunjungan Riset",
      desc: "Terjun langsung ke Desa Binaan.",
      date: "AUG 2024", 
      img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600", 
      type: "portrait"
    },
    { 
      title: "FOCUS", 
      subtitle: "Proposal Camp",
      desc: "Karantina ide di Perpus Pusat.",
      date: "SEP 2024", 
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", 
      type: "portrait"
    },
    { 
      title: "VICTORY", 
      subtitle: "Award Night",
      desc: "Malam apresiasi di Main Hall.",
      date: "DEC 2024", 
      img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800", 
      type: "landscape"
    }
  ];

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

  return (
    <div id="journey" className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-lime-400 selection:text-black">
      
      {/* HEADER SECTION (Static) */}
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-white/10 pb-8 mb-12">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our <br/> <span className="italic font-light text-lime-400">Journey</span>
            </h1>
            <div className="mt-8 md:mt-0 text-right">
              <span className="block font-bold text-xs tracking-[0.2em] uppercase mb-2 text-lime-400">Since 2024</span>
              <p className="max-w-xs text-sm text-neutral-400 font-sans leading-relaxed">
                Geser ke bawah untuk menyusuri jejak langkah kami sepanjang tahun ini.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HORIZONTAL SCROLL SECTION */}
      {/* Container ini dibuat sangat tinggi (300vh) untuk memberikan ruang scroll */}
      <div ref={sectionRef} className="relative h-[400vh]"> 
        
        {/* Sticky Wrapper */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-neutral-950">
          
          {/* Horizontal Track */}
          <div 
            ref={trackRef}
            className="flex items-center gap-12 md:gap-24 px-12 md:px-24 will-change-transform"
            style={{ transform: `translateX(${getTranslateX()}px)` }}
          >
            
            {/* Intro Text Card */}
            <div className="min-w-[300px] md:min-w-[400px] flex flex-col justify-center">
               <h2 className="text-4xl mb-4 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>The Timeline</h2>
               <p className="text-neutral-400 max-w-sm">
                 Setiap langkah memiliki cerita. Dari inisiasi awal hingga pencapaian akhir, ini adalah galeri kenangan yang kami bangun bersama.
               </p>
               <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest animate-pulse text-lime-400">
                  Scroll Down <ArrowUpRight className="rotate-90" />
               </div>
            </div>

            {/* Loop Items */}
            {journeyHighlights.map((item, idx) => (
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
                         {/* Parallax Wrapper: Bergerak pelan ke kanan berdasarkan progress scroll */}
                         <div 
                           className="absolute top-0 left-0 h-full w-[120%] -ml-[10%]"
                           style={{ 
                             transform: `translateX(${progress * 60}px)`, // Image moves slowly right (0 to 60px)
                             transition: 'transform 0.1s linear' // Smooth out steps slightly
                           }}
                         >
                            {/* Actual Image: Handles Hover Scale */}
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
            ))}

            {/* Closing Card */}
            <div className="min-w-[400px] md:min-w-[600px] flex items-center justify-center bg-lime-400 h-[60vh] p-12">
               <div className="text-center">
                 <h2 className="text-6xl italic mb-6 text-black" style={{ fontFamily: '"Playfair Display", serif' }}>To Be Continued</h2>
                 <p className="font-sans text-lg max-w-md mx-auto mb-8 text-black">
                   Perjalanan kami belum berakhir. Bergabunglah untuk menulis bab selanjutnya.
                 </p>
                 <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                   Join Litbang
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