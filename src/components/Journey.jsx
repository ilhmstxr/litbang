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
      isGroup: true,
      title: "WORKSHOP",
      items: [
        { 
          title: "WORKSHOP I", 
          subtitle: "Dasar Penelitian",
          desc: "Pengenalan metodologi riset dasar.",
          date: "FEB 2024", 
          img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600", 
        },
        { 
          title: "WORKSHOP II", 
          subtitle: "Data Analysis",
          desc: "Teknik pengolahan data statistik.",
          date: "FEB 2024", 
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600", 
        },
        { 
          title: "WORKSHOP III", 
          subtitle: "Public Speaking",
          desc: "Melatih kemampuan presentasi ilmiah.",
          date: "MAR 2024", 
          img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600", 
        },
        { 
          title: "WORKSHOP IV", 
          subtitle: "Scientific Writing",
          desc: "Penulisan jurnal dan karya ilmiah.",
          date: "MAR 2024", 
          img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600", 
        }
      ]
    },
    {
      isGroup: true,
      title: "COMPETITION",
      items: [
        { 
          title: "LOMBA NASIONAL", 
          subtitle: "Persiapan Tim",
          desc: "Brainstorming dan penyusunan proposal.",
          date: "MAY 2024", 
          img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", 
        },
        { 
          title: "FINAL STAGE", 
          subtitle: "Presentasi Final",
          desc: "Pemaparan hasil karya di depan juri.",
          date: "MAY 2024", 
          img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", 
        },
        { 
          title: "AWARDING", 
          subtitle: "Juara Umum",
          desc: "Momen kemenangan tim Litbang.",
          date: "JUN 2024", 
          img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800", 
        }
      ]
    },
    { 
      title: "UPGRADING", 
      subtitle: "Skill Level Up",
      desc: "Evaluasi dan peningkatan kapasitas tim.",
      date: "JUL 2024", 
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", 
      type: "portrait"
    },
    {
      isGroup: true,
      title: "PKM CENTER",
      items: [
        { 
          title: "IDEATION", 
          subtitle: "Pencarian Ide",
          desc: "Menggali masalah dan solusi inovatif.",
          date: "SEP 2024", 
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600", 
        },
        { 
          title: "DRAFTING", 
          subtitle: "Penyusunan Proposal",
          desc: "Menulis bab demi bab dengan teliti.",
          date: "SEP 2024", 
          img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600", 
        },
        { 
          title: "REVIEW", 
          subtitle: "Bedah Proposal",
          desc: "Feedback dari dosen pembimbing.",
          date: "OCT 2024", 
          img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600", 
        },
        { 
          title: "SUBMISSION", 
          subtitle: "Upload Simbelmawa",
          desc: "Langkah terakhir menuju pendanaan.",
          date: "OCT 2024", 
          img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600", 
        }
      ]
    },
    {
      isGroup: true,
      title: "ON DUTY",
      items: Array(8).fill(null).map((_, i) => ({
        title: `KEGIATAN ${i + 1}`,
        subtitle: "Kunjungan Lapangan",
        desc: "Dokumentasi kegiatan riset dan pengabdian.",
        date: "NOV 2024",
        img: `https://images.unsplash.com/photo-${[
          '1531206715517-5c0ba140b2b8', // Field
          '1559027615-cd4628902d4a', // Group
          '1522202176988-66273c2fd55f', // Meeting
          '1552664730-d307ca884978', // Work
          '1543269865-cbf427effbad', // Discussion
          '1517048676732-8382b63e4233', // Team
          '1521737604893-d14cc237f11d', // Office
          '1606857521015-7f9fcf423740'  // Lab
        ][i % 8]}?auto=format&fit=crop&q=80&w=600`,
      }))
    },
    {
      isGroup: true,
      title: "STUDY",
      items: Array(5).fill(null).map((_, i) => ({
        title: `STUDY ${i + 1}`,
        subtitle: "Research Daily",
        desc: "Kegiatan belajar dan diskusi rutin.",
        date: "DEC 2024",
        img: `https://images.unsplash.com/photo-${[
          '1478131143081-80f7f84ca84d', // Library
          '1434030216411-0b793f4b4173', // Writing
          '1501504905252-473c47e087f8', // Coffee
          '1456513080510-7bf3a84b82f8', // Books
          '1497633762265-9d179a990aa6'  // Study
        ][i % 5]}?auto=format&fit=crop&q=80&w=600`,
      }))
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
               <h2 className="text-4xl mb-4 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>The Timeline</h2>
               <p className="text-neutral-400 max-w-sm">
                 Setiap langkah memiliki cerita. Dari inisiasi awal hingga pencapaian akhir, ini adalah galeri kenangan yang kami bangun bersama.
               </p>
               <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest animate-pulse text-lime-400">
                  Scroll Down <ArrowUpRight className="rotate-90" />
               </div>
            </div>

            {/* Loop Items with Group Support */}
            {journeyHighlights.map((item, idx) => {
              if (item.isGroup) {
                return renderBentoGrid(item, idx);
              }
              return renderSingleCard(item, idx);
            })}

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