import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Zap, Globe, MousePointer2, ChevronDown, Camera, Upload, Plus, Clock, Coffee, FileText, Music, MapPin, Calendar, Heart } from 'lucide-react';

// --- Custom Components ---

// 1. Marquee (Teks Berjalan)
const Marquee = ({ text, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-x-hidden bg-lime-400 py-4 text-black font-black uppercase tracking-tighter transform -skew-y-2 border-y-4 border-black z-20">
      <div className={`animate-marquee whitespace-nowrap py-2 flex gap-8 text-5xl md:text-7xl ${direction === 'right' ? 'animate-marquee-reverse' : ''}`}>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>{text}</span>
      </div>
      <div className={`absolute top-0 animate-marquee2 whitespace-nowrap py-4 flex gap-8 text-5xl md:text-7xl ${direction === 'right' ? 'animate-marquee-reverse2' : ''}`}>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>{text}</span>
      </div>
    </div>
  );
};

// 2. Reveal Card (Scroll Animation)
const RevealCard = ({ children, className }) => {
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
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${className}`}>
      {children}
    </div>
  );
};

// 3. Photo Fan Deck (Layout Kartu Menumpuk ala Lando Norris)
const PhotoDeck = () => {
  const cards = [
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", rotate: '-rotate-12', z: 'z-10', translate: '-translate-x-24 md:-translate-x-48', label: "TEAM" },
    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600", rotate: '-rotate-6', z: 'z-20', translate: '-translate-x-12 md:-translate-x-24', label: "MEETING" },
    { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600", rotate: 'rotate-0', z: 'z-30', translate: 'translate-x-0', label: "HANGOUT", main: true },
    { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600", rotate: 'rotate-6', z: 'z-20', translate: 'translate-x-12 md:translate-x-24', label: "LAUGH" },
    { type: 'upload' }, // Special card for upload
  ];

  return (
    <div className="relative h-[500px] flex items-center justify-center py-20 overflow-hidden group">
       {cards.map((card, idx) => {
         if (card.type === 'upload') {
           return (
            <div key={idx} className={`absolute w-48 h-64 md:w-64 md:h-80 bg-lime-400 rounded-3xl border-4 border-black shadow-2xl transition-all duration-500 transform rotate-12 translate-x-24 md:translate-x-48 hover:scale-110 hover:-translate-y-4 hover:rotate-0 z-10 cursor-pointer flex flex-col items-center justify-center group/upload`}>
                <div className="bg-black text-white p-4 rounded-full mb-2 group-hover/upload:scale-110 transition-transform">
                  <Plus size={32} />
                </div>
                <span className="font-black text-black uppercase text-xl">Add Yours</span>
                <span className="text-xs font-mono font-bold mt-1">Join the frame</span>
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

// --- Main App ---

const App = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Scroll Listener for Parallax
  useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cursor Follower
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Data Highlights (Lebih Banyak untuk Vertical Scroll)
  const journeyHighlights = [
    {
      title: "First Gathering",
      date: "Jan 2024",
      loc: "Villa Kaliurang",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
      rotate: "rotate-3",
      tag: "Kick Off"
    },
    {
      title: "Rapat Kerja I",
      date: "Feb 2024",
      loc: "Co-Working Space",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
      rotate: "-rotate-2",
      tag: "Serious Mode"
    },
    {
      title: "Webinar Nasional",
      date: "Apr 2024",
      loc: "Zoom Meeting",
      img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=600",
      rotate: "rotate-6",
      tag: "Public Event"
    },
    {
      title: "Team Bonding",
      date: "Jun 2024",
      loc: "Pantai Selatan",
      img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=600",
      rotate: "-rotate-3",
      tag: "Healing"
    },
     {
      title: "Kunjungan Riset",
      date: "Aug 2024",
      loc: "Desa Binaan",
      img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600",
      rotate: "rotate-2",
      tag: "Field Trip"
    },
    {
      title: "Proposal Camp",
      date: "Sep 2024",
      loc: "Perpus Pusat",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      rotate: "rotate-4",
      tag: "Focus"
    },
    {
      title: "Award Night",
      date: "Dec 2024",
      loc: "Main Hall",
      img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=600",
      rotate: "-rotate-1",
      tag: "Victory"
    }
  ];

  // Membagi data menjadi 2 kolom untuk efek parallax
  const leftColumn = journeyHighlights.filter((_, i) => i % 2 === 0);
  const rightColumn = journeyHighlights.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-lime-400 selection:text-black overflow-x-hidden cursor-none">
      
      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 bg-lime-400 rounded-full pointer-events-none mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="text-3xl font-black tracking-tighter uppercase italic">
          LITBANG<span className="text-lime-400 not-italic">.</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
          {['Journey', 'Social', 'Highlights', 'Memories'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-lime-400 transition-colors">{item}</a>
          ))}
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-lime-400 transition-colors uppercase text-sm flex items-center gap-2">
          <Camera size={16} /> Join Us
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex flex-col justify-end pb-20 px-6">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920" 
             alt="Research Background" 
             className="w-full h-full object-cover opacity-30 grayscale mix-blend-screen"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full z-10">
          <RevealCard>
            <span className="inline-block px-4 py-2 rounded-full border border-lime-400 text-lime-400 font-mono text-sm mb-6 animate-pulse">
              ● EST. 2024
            </span>
            <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter uppercase mb-4 text-white drop-shadow-2xl">
              RESEARCH <br />
              <span className="text-transparent stroke-white stroke-2 italic" style={{ WebkitTextStroke: '2px #a3e635' }}>& DEV</span> <br />
              JOURNEY
            </h1>
          </RevealCard>
          
          <RevealCard className="flex flex-col md:flex-row justify-between items-end mt-8 border-t border-neutral-800 pt-8">
            <p className="text-neutral-300 text-xl font-medium max-w-lg">
              Sebuah arsip visual perjalanan kami. Dari brainstorming larut malam hingga selebrasi keberhasilan.
            </p>
            <div className="animate-bounce mt-8 md:mt-0 p-4 rounded-full border border-lime-400 text-lime-400">
               <ChevronDown size={32} />
            </div>
          </RevealCard>
        </div>
      </header>

      <div className="my-10 rotate-1">
        <Marquee text="WORKSHOP • PKM • BELAJAR • INOVASI • " />
      </div>

      {/* JOURNEY TRILOGY SECTION */}
      <section id="journey" className="px-6 py-20 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-neutral-800">
               THE TRILOGY
             </h2>
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white -mt-10 md:-mt-16 ml-10 md:ml-20 relative z-10">
               OF <span className="text-lime-400 underline decoration-4 decoration-white underline-offset-8">ACTION</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1: Workshop */}
            <div className="md:col-span-8 relative group cursor-pointer">
              <RevealCard className="h-full">
                <div className="h-[500px] rounded-3xl relative overflow-hidden border border-neutral-800 group-hover:border-lime-400 transition-all duration-500">
                   <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Workshop" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                   <div className="absolute bottom-0 left-0 p-8 md:p-12">
                     <span className="bg-lime-400 text-black px-3 py-1 rounded font-bold text-xs uppercase tracking-wider mb-4 inline-block">Chapter 01</span>
                     <h3 className="text-5xl md:text-7xl font-bold uppercase mb-2 text-white">Workshop</h3>
                     <p className="text-neutral-300 text-lg max-w-md">Menempa skill dasar. Dari data cleaning hingga penulisan jurnal.</p>
                   </div>
                   <div className="absolute top-8 right-8 bg-black/50 backdrop-blur p-4 rounded-full border border-white/20">
                     <Zap className="text-lime-400" size={32} />
                   </div>
                </div>
              </RevealCard>
            </div>

            {/* Card 2: PKM */}
            <div className="md:col-span-4 relative group cursor-pointer">
              <RevealCard className="h-full">
                 <div className="h-[500px] rounded-3xl relative overflow-hidden border border-neutral-800 group-hover:border-lime-400 transition-all duration-500">
                   <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="PKM" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                   <div className="absolute bottom-0 left-0 p-8">
                     <span className="bg-white text-black px-3 py-1 rounded font-bold text-xs uppercase tracking-wider mb-4 inline-block">Chapter 02</span>
                     <h3 className="text-5xl font-bold uppercase mb-2">Aksi PKM</h3>
                     <p className="text-neutral-300 text-sm">Kompetisi & Inovasi.</p>
                   </div>
                 </div>
              </RevealCard>
            </div>

            {/* Card 3: Belajar */}
            <div className="md:col-span-12 relative group mt-6 cursor-pointer">
              <RevealCard>
                <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-neutral-800 hover:border-lime-400 transition-colors flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 z-10">
                      <span className="text-lime-400 font-mono mb-2 block tracking-widest">CHAPTER 03</span>
                      <h3 className="text-6xl md:text-8xl font-bold uppercase mb-4 leading-none">Aksi <br/> Belajar</h3>
                      <p className="text-neutral-400 text-xl max-w-2xl">Sharing session tanpa batas. Membahas fenomena dari sudut pandang sains dan tawa.</p>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Belajar" />
                  </div>
                </div>
              </RevealCard>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section id="social" className="py-24 bg-white text-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <RevealCard>
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 text-center">
               On <span className="text-lime-500 italic">Socials</span>
             </h2>
          </RevealCard>

          <div className="grid md:grid-cols-2 gap-12">
             {/* Mockup 1: Edulit */}
             <RevealCard className="flex flex-col items-center">
               <div className="relative w-full max-w-sm aspect-[4/5] bg-black rounded-[3rem] p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                  <div className="w-full h-full bg-neutral-800 rounded-[2.5rem] overflow-hidden relative group">
                     <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-80" alt="Edulit Post" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-center text-white">
                           <Instagram size={48} className="mx-auto mb-2" />
                           <h3 className="font-bold text-2xl">@edulit.riset</h3>
                           <p className="text-sm">Follow for insights</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 text-center">
                  <h3 className="text-4xl font-bold uppercase">Edulit</h3>
                  <p className="font-mono text-neutral-500">Educational Literacy</p>
               </div>
             </RevealCard>

             {/* Mockup 2: Tema */}
             <RevealCard className="flex flex-col items-center mt-12 md:mt-0">
               <div className="relative w-full max-w-sm aspect-[4/5] bg-black rounded-[3rem] p-4 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                  <div className="w-full h-full bg-lime-400 rounded-[2.5rem] overflow-hidden relative group flex items-center justify-center">
                     <h2 className="text-6xl font-black text-black">TEMA</h2>
                     <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-center text-white">
                           <Instagram size={48} className="mx-auto mb-2" />
                           <h3 className="font-bold text-2xl">@tema.mhs</h3>
                           <p className="text-sm">Student Facilitator</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 text-center">
                  <h3 className="text-4xl font-bold uppercase">Tema</h3>
                  <p className="font-mono text-neutral-500">Teman Mahasiswa</p>
               </div>
             </RevealCard>
          </div>
        </div>
      </section>

      {/* REVISED SECTION: "OUR JOURNEY" (VERTICAL PARALLAX GRID) */}
      <section id="highlights" className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400 rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <RevealCard>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 border-b border-neutral-800 pb-8">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Our <br/> <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '2px #a3e635' }}>Journey</span>
              </h2>
              <div className="flex flex-col items-end">
                <p className="text-lime-400 font-mono text-xl mb-2">2024 REWIND</p>
                <p className="text-neutral-400 max-w-xs text-right text-sm">
                  Sorotan kegiatan dan momen krusial yang membentuk departemen kami tahun ini.
                </p>
              </div>
            </div>
          </RevealCard>

          {/* VERTICAL PARALLAX GRID CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative">
             
             {/* Left Column (Slower / Standard Scroll) */}
             <div className="space-y-12 md:space-y-24 pt-0 md:pt-12">
               {leftColumn.map((item, idx) => (
                 <RevealCard key={`left-${idx}`} className="w-full group">
                    <div className={`relative bg-neutral-800 p-4 pb-12 rounded-sm shadow-xl transform ${item.rotate} transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:z-10 border border-neutral-700 hover:border-lime-400`}>
                      {/* Tape Effect */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-lime-400/80 transform -rotate-1 opacity-80 z-20"></div>

                      <div className="aspect-[4/5] overflow-hidden mb-4 bg-black relative">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute top-2 right-2 bg-black/70 text-lime-400 text-xs font-bold px-2 py-1 uppercase tracking-widest border border-lime-400/30">
                          {item.tag}
                        </div>
                      </div>

                      <div className="px-2">
                        <h3 className="text-3xl font-black uppercase text-white mb-2 font-mono leading-none">{item.title}</h3>
                        <div className="flex justify-between items-center text-xs text-neutral-400 font-mono border-t border-neutral-700 pt-3 mt-2">
                          <div className="flex items-center gap-1"><Calendar size={12} /> {item.date}</div>
                          <div className="flex items-center gap-1"><MapPin size={12} /> {item.loc}</div>
                        </div>
                      </div>
                    </div>
                 </RevealCard>
               ))}
             </div>

             {/* Right Column (Parallax Speed - Faster) */}
             <div 
               className="space-y-12 md:space-y-24" 
               style={{ 
                 transform: `translateY(${scrollY * -0.1}px)`, // Parallax Effect
                 transition: 'transform 0.1s ease-out'
               }}
             >
                {/* Spacer awal agar layout staggered (zig-zag) */}
                <div className="hidden md:block h-32"></div>

                {rightColumn.map((item, idx) => (
                 <RevealCard key={`right-${idx}`} className="w-full group">
                    <div className={`relative bg-neutral-800 p-4 pb-12 rounded-sm shadow-xl transform ${item.rotate} transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:z-10 border border-neutral-700 hover:border-lime-400`}>
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-lime-400/80 transform rotate-2 opacity-80 z-20"></div>

                      <div className="aspect-[4/5] overflow-hidden mb-4 bg-black relative">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute top-2 right-2 bg-black/70 text-lime-400 text-xs font-bold px-2 py-1 uppercase tracking-widest border border-lime-400/30">
                          {item.tag}
                        </div>
                      </div>

                      <div className="px-2">
                        <h3 className="text-3xl font-black uppercase text-white mb-2 font-mono leading-none">{item.title}</h3>
                        <div className="flex justify-between items-center text-xs text-neutral-400 font-mono border-t border-neutral-700 pt-3 mt-2">
                          <div className="flex items-center gap-1"><Calendar size={12} /> {item.date}</div>
                          <div className="flex items-center gap-1"><MapPin size={12} /> {item.loc}</div>
                        </div>
                      </div>
                    </div>
                 </RevealCard>
               ))}
             </div>

          </div>
        </div>
      </section>

      {/* MEMORIES SECTION */}
      <section id="memories" className="py-32 px-6 bg-neutral-950 overflow-hidden relative">
        <div className="absolute top-10 left-0 w-full text-center pointer-events-none select-none">
           <span className="text-[15vw] font-black text-neutral-900 uppercase leading-none opacity-50">UNFILTERED</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
           <RevealCard>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">CAPTURE THE MOMENT</h2>
             <p className="text-neutral-400 mb-12">Geser, lihat, dan tambahkan kenanganmu sendiri.</p>
           </RevealCard>

           <PhotoDeck />
           
           <div className="mt-12">
             <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-black text-xl uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-lg shadow-lime-400/20">
               <Upload size={24} />
               Setor Foto Kamu
             </button>
             <p className="text-neutral-500 mt-4 text-sm font-mono">
               *Foto akan dikurasi sebelum ditampilkan di website.
             </p>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-20 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
           <div>
             <div className="text-4xl font-black uppercase text-white mb-4">
               Litbang<span className="text-lime-400">.</span>Dev
             </div>
             <p className="text-neutral-400 max-w-xs">
               Departemen Penelitian dan Pengembangan. Mengubah ide menjadi inovasi, mengubah teman menjadi keluarga.
             </p>
           </div>
           
           <div className="flex gap-12">
             <div>
               <h4 className="text-lime-400 font-bold uppercase mb-4 tracking-widest">Sitemap</h4>
               <ul className="space-y-2 text-neutral-300">
                 <li><a href="#journey" className="hover:text-white">Journey</a></li>
                 <li><a href="#social" className="hover:text-white">Social</a></li>
                 <li><a href="#highlights" className="hover:text-white">Highlights</a></li>
                 <li><a href="#memories" className="hover:text-white">Memories</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-lime-400 font-bold uppercase mb-4 tracking-widest">Connect</h4>
               <ul className="space-y-2 text-neutral-300">
                 <li><a href="#" className="hover:text-white">Instagram</a></li>
                 <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                 <li><a href="#" className="hover:text-white">Email</a></li>
               </ul>
             </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-600 font-mono uppercase">
           <span>© 2024 LITBANG DEPARTMENT</span>
           <span>DESIGNED WITH PASSION</span>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 25s linear infinite reverse;
        }
        .animate-marquee-reverse2 {
          animation: marquee2 25s linear infinite reverse;
        }
      `}</style>
    </div>
  );
};

export default App;