import { useState, useEffect, useRef, forwardRef } from 'react';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';

// --- Sub Components (Moved Outside to prevent re-renders) ---

const Reveal = forwardRef(({ children, className, delay = 0 }, externalRef) => {
  const [isVisible, setVisible] = useState(false);
  const internalRef = useRef();
  
  // Combine refs
  const mergedRef = (node) => {
    internalRef.current = node;
    if (typeof externalRef === 'function') externalRef(node);
    else if (externalRef) externalRef.current = node;
  };

  useEffect(() => {
    const currentRef = internalRef.current;
    if (!currentRef) return;

    let observer;
    
    // Create observer instance
    observer = new IntersectionObserver(([entry]) => {
      // Kartu muncul hanya jika 100% area kartu sudah terlihat (threshold: 1.0)
      if (entry.isIntersecting) {
        // 1. Set visible ke true
        setVisible(true);
        // 2. Hentikan pengamatan setelah terdeteksi
        if (observer) observer.unobserve(currentRef);
      }
    }, { threshold: 1.0 }); 
    
    observer.observe(currentRef);
    
    // Cleanup: hentikan observer saat komponen di-unmount
    return () => {
        if (currentRef && observer) {
            observer.unobserve(currentRef);
            observer.disconnect();
        }
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  // Logika CSS: isVisible mengontrol transformasi dan opasitas
  const visibilityClass = isVisible 
    ? 'translate-y-0 opacity-100' 
    : 'translate-y-24 opacity-0';

  return (
    <div 
      ref={mergedRef} 
      className={`transition-all duration-1000 ease-out transform ${visibilityClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
});
Reveal.displayName = 'Reveal';

// Komponen Sub-Card untuk Section (Internal)
const SubCard = ({ title, date, pos, w, h }) => (
  <div 
    className={`absolute ${pos} ${w} ${h} bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg border-2 border-primary transition-transform duration-300 hover:scale-[1.03] font-sans-clean`}
  >
    <p className="font-bold text-sm md:text-md text-[#1a1a1a] leading-tight mb-1">{title}</p>
    <span className="font-mono text-xs text-neutral-500 flex items-center">
      <Calendar className="h-3 w-3 mr-1" /> {date}
    </span>
  </div>
);

// Komponen Section Card Renderer (Diubah untuk menghindari tumpang tindih)
const SectionCardRenderer = ({ item, config }) => (
  <div className={`relative ${config.w} ${config.h} overflow-hidden shadow-2xl rounded-xl border-4 border-white/50 bg-[#F3F3F1] p-4 group`}>
    
    {/* HEADER CONTAINER (Posisi Tetap di Kiri Atas - Z-index tinggi) */}
    <div className="absolute top-4 left-4 w-1/3 z-30 bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-md border border-neutral-200">
      <h3 className="text-3xl font-serif-display text-primary mb-1 leading-tight">
        {item.title}
      </h3>
      <p className="text-xs font-bold uppercase tracking-tight mb-1 font-sans-clean">{item.subtitle}</p>
      <p className="text-xs text-neutral-600 font-sans-clean">{item.desc}</p>
    </div>
    
    {/* Background marker - Ukuran font dikecilkan agar lebih subtil */}
    <div className="absolute top-0 right-0 p-4 text-7xl md:text-8xl font-black text-primary/10 font-sans-clean z-0">{item.date.split(' ')[0]}</div>

    {/* Sub Cards Container: Menggunakan posisi absolut untuk memposisikan sub-card diluar zona header */}
    <div className="absolute inset-0 p-4 z-10">
      {item.subCards.map((sub, subIdx) => (
        <SubCard key={subIdx} {...sub} />
      ))}
    </div>
  </div>
);

// --- Main Component ---

const Journey = () => {
  // Refs untuk menghitung dimensi dan posisi scroll
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Refs untuk mengukur posisi kartu
  const itemRefs = useRef([]);
  const introRef = useRef(null); 
  const closingRef = useRef(null);
  const [pathD, setPathD] = useState(''); 
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 }); 
  
  // Callback ref function to handle array of refs
  const setItemRef = (el, index) => {
    itemRefs.current[index] = el;
  };


  // KONFIGURASI UNIK UNTUK 10 KARTU (Ukuran & Posisi)
  const cardConfigs = [
    // 0: KICK OFF (Card)
    { w: 'w-[500px] max-w-[80vw]', h: 'aspect-[1/1]', y: 'self-center -translate-y-8 md:-translate-y-16' }, 
    // 1: SERIOUS MODE (Section - Ukuran besar untuk menampung sub-card)
    { w: 'w-[650px] max-w-[90vw]', h: 'aspect-[3/2]', y: 'self-start mt-4 md:mt-12' },
    // 2: PUBLIC EVENT (Card)
    { w: 'w-[400px] max-w-[70vw]', h: 'aspect-[4/3]', y: 'self-end -translate-y-4 md:-translate-y-12' },
    // 3: HEALING (Card)
    { w: 'w-[350px] max-w-[60vw]', h: 'aspect-[3/4]', y: 'self-center translate-y-8 md:translate-y-16' }, 
    // 4: FIELD TRIP (Section - Ukuran super besar)
    { w: 'w-[750px] max-w-[95vw]', h: 'aspect-[16/9]', y: 'self-center' },
    // 5: FOCUS (Section)
    { w: 'w-[550px] max-w-[85vw]', h: 'aspect-[5/4]', y: 'self-end -translate-y-4 md:-translate-y-12' },
    // 6: VICTORY (Card)
    { w: 'w-[700px] max-w-[95vw]', h: 'aspect-[2/1]', y: 'self-start mt-4 md:mt-12' }, // Changed from center translate-y-48 (unsafe)
    // 7: TRANSITION (Card)
    { w: 'w-[480px] max-w-[78vw]', h: 'aspect-[3/2]', y: 'self-center' },
    // 8: MILESTONE (Card)
    { w: 'w-[380px] max-w-[65vw]', h: 'aspect-[4/5]', y: 'self-end -translate-y-8 md:-translate-y-16' },
    // 9: HANG OUT (Card)
    { w: 'w-[650px] max-w-[92vw]', h: 'aspect-video', y: 'self-center translate-y-8 md:translate-y-12' },
  ];

  // Data Highlights (diperluas dan diubah menjadi Section)
  const journeyHighlights = [
    { title: "KICK OFF", subtitle: "First Gathering", desc: "Permulaan perjalanan kami di Villa Kaliurang.", date: "JAN 2024", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", type: 'card' },
    { 
      title: "SERIOUS MODE", 
      subtitle: "Rapat Kerja I & Internal Workshop", 
      desc: "Menyusun strategi satu tahun ke depan, diikuti workshop. Detail di sub-card.", 
      date: "FEB 2024", 
      type: 'section', 
      subCards: [
        { title: "Vision Deck Review", date: "Feb 5", w: 'w-1/3', h: 'h-1/3', pos: 'top-1/4 right-4' }, 
        { title: "Budget Planning", date: "Feb 15", w: 'w-2/5', h: 'h-1/2', pos: 'bottom-1/4 right-1/4' } 
      ]
    },
    { title: "PUBLIC EVENT", subtitle: "Webinar Nasional", desc: "Berbagi ilmu lewat Zoom Meeting.", date: "APR 2024", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=600", type: 'card' },
    { title: "HEALING", subtitle: "Team Bonding", desc: "Melepas penat di Pantai Selatan.", date: "JUN 2024", img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800", type: 'card' },
    { 
      title: "FIELD TRIP", 
      subtitle: "Kunjungan Riset & Dokumentasi", 
      desc: "Terjun langsung ke Desa Binaan untuk riset mendalam. Detail di sub-card.", 
      date: "AUG 2024", 
      type: 'section',
      subCards: [
        { title: "Interview 1 (Data Capture)", date: "Aug 10", w: 'w-1/4', h: 'h-1/4', pos: 'top-1/4 right-4' }, 
        { title: "Documentation Archive", date: "Aug 12", w: 'w-1/2', h: 'h-1/3', pos: 'bottom-10 left-4' }, 
        { title: "Community Talk & Feedback", date: "Aug 15", w: 'w-1/3', h: 'h-1/4', pos: 'top-1/3 left-1/4' } 
      ]
    },
    { 
      title: "FOCUS", 
      subtitle: "Proposal Camp Intensif", 
      desc: "Karantina ide di Perpus Pusat untuk finalisasi proposal. Detail di sub-card.", 
      date: "SEP 2024", 
      type: 'section',
      subCards: [
        { title: "Drafting & Brainstorming", date: "Sep 1-7", w: 'w-1/3', h: 'h-1/4', pos: 'top-1/4 right-4' }, 
        { title: "Final Revision & Submission", date: "Sep 15", w: 'w-1/2', h: 'h-1/3', pos: 'bottom-10 left-1/3' } 
      ]
    },
    { title: "VICTORY", subtitle: "Award Night", desc: "Malam apresiasi di Main Hall.", date: "DEC 2024", img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800", type: 'card' },
    { title: "TRANSITION", subtitle: "Restructuring Phase", desc: "Membentuk tim inti untuk proyek baru Q1 2025.", date: "JAN 2025", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", type: 'card' },
    { title: "MILESTONE", subtitle: "Data Deployment", desc: "Peluncuran beta internal sistem pengolahan data.", date: "FEB 2025", img: "https://images.unsplash.com/photo-1549490349-8643362c3b8d?auto=format&fit=crop&q=80&w=600", type: 'card' },
    { title: "HANG OUT", subtitle: "CFO's Treat", desc: "Makan malam bersama tim di restoran Jepang.", date: "MAR 2025", img: "https://images.unsplash.com/photo-1517248135460-4c814b2d3550?auto=format&fit=crop&q=80&w=800", type: 'card' },
  ];

  // Logic Scroll Horizontal
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const start = sectionTop;
      const end = sectionTop + sectionHeight - windowHeight;

      let percent = (scrollY - start) / (end - start);
      percent = Math.max(0, Math.min(1, percent));

      setProgress(percent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update SVG Path logic
  useEffect(() => {
     const updatePath = () => {
         if (!introRef.current || !closingRef.current || itemRefs.current.length === 0) return;
         if (!trackRef.current) return;

         // Helper to get coordinates
         const getPoint = (el, side = 'left') => {
             const trackRect = trackRef.current.getBoundingClientRect();
             const rect = el.getBoundingClientRect();
             
             // Calculate relative position based on visual rect (includes transforms)
             let x = rect.left - trackRect.left;
             let y = rect.top - trackRect.top + (rect.height / 2);

             // Adjustment for Intro (Center point connection? Or Right side?)
             if (side === 'right') {
                x += rect.width;
             }
             
             return { x, y };
         };

         const points = [];
         
         // 1. Start Point (Intro)
         points.push(getPoint(introRef.current, 'right'));

         // 2. Journey Points
         journeyHighlights.forEach((_, idx) => {
             const el = itemRefs.current[idx];
             if (el) points.push(getPoint(el, 'left'));
         });

         // 3. End Point (Closing)
         points.push(getPoint(closingRef.current, 'left'));

         // Generate Path String (Segmented Curves)
         if (points.length < 2) return;

         let d = '';
         
         // Helper to draw curve from p1 to p2 (Only returns the C command)
         const drawCurve = (p1, p2) => {
             const cp1X = p1.x + (p2.x - p1.x) * 0.5;
             const cp1Y = p1.y;
             const cp2X = p1.x + (p2.x - p1.x) * 0.5;
             const cp2Y = p2.y;
             return `C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${p2.x} ${p2.y}`;
         };

         // 1. Intro -> First Item
         // Start at Intro Right
         let currentSource = getPoint(introRef.current, 'right');
         d = `M ${currentSource.x} ${currentSource.y}`;

         journeyHighlights.forEach((_, idx) => {
             const el = itemRefs.current[idx];
             if (!el) return;

             // Curve to Left Dot
             const targetLeft = getPoint(el, 'left');
             d += ' ' + drawCurve(currentSource, targetLeft);

             // Draw Line THROUGH the card to Right Edge
             // This ensures the line exits at the correct vertical center relative to the card
             const targetRight = getPoint(el, 'right');
             d += ` L ${targetRight.x} ${targetRight.y}`;

             // Update source for next segment
             currentSource = targetRight;
         });

         // Last Item -> Closing
         const closingTarget = getPoint(closingRef.current, 'left');
         d += ' ' + drawCurve(currentSource, closingTarget);

         setPathD(d);
         
         // Update SVG dimensions to match track scrollWidth/Height
         setSvgDimensions({
            width: trackRef.current.scrollWidth,
            height: trackRef.current.scrollHeight
         });
     };

     // Run initially and on resize
     updatePath();
     // Timeout to ensure layout is settled (esp fonts/images)
     setTimeout(updatePath, 100);
     setTimeout(updatePath, 500);

     window.addEventListener('resize', updatePath);
     return () => window.removeEventListener('resize', updatePath);
  }, []);

  // Hitung total translasi track (Scroll horizontal container)
  const getTranslateX = () => {
    if (!trackRef.current) return 0;
    const trackWidth = trackRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const maxTranslate = trackWidth - windowWidth + 100; // +100 untuk padding akhir
    return -(progress * maxTranslate);
  };
  
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef(null);

  // Measure path length when pathD changes
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathD, svgDimensions]); // Update when path or dimensions change

  return (
    // Base font diubah menjadi font-sans-clean
    <div id="journey" className="min-h-screen bg-transparent text-white font-sans-clean selection:bg-primary selection:text-white">
      
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,900;1,400&family=Inter:wght@300;400;600;700&display=swap');
        .font-serif-display { font-family: 'Playfair Display', serif; }
        .font-sans-clean { font-family: 'Inter', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      {/* HEADER SECTION (Static) */}
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-black/10 pb-8 mb-12">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] font-serif-display">
              Our <br/> <span className="italic font-light">Journey</span>
            </h1>
            <div className="mt-8 md:mt-0 text-right">
              <span className="block font-bold text-xs tracking-[0.2em] uppercase mb-2 font-sans-clean">Since 2024</span>
              <p className="max-w-xs text-sm text-neutral-500 leading-relaxed font-sans-clean">
                Geser ke bawah untuk menyusuri jejak langkah kami sepanjang tahun ini.
              </p>
            </div>
          </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION */}
      {/* Container ini dibuat sangat tinggi (400vh) untuk memberikan ruang scroll */}
      <div ref={sectionRef} className="relative h-[400vh]"> 
        
        {/* Sticky Wrapper - items-start dan padding vertikal untuk staggering */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center pt-24 pb-24 bg-transparent">
          
          {/* TRACK SIMPLIFICATION: Garis lurus sederhana (dipertahankan sebagai flow visual) */}
          {/* Horizontal Track - Mengandung Kartu dan Line SVG */}
          <div 
            ref={trackRef}
            className="flex items-center gap-12 md:gap-24 px-12 md:px-24 will-change-transform relative h-full"
            style={{ transform: `translateX(${getTranslateX()}px)` }}
          >
             {/* TRACK SIMPLIFICATION: Garis lurus sederhana (dipertahankan sebagai flow visual) */}
             <svg 
              className="absolute top-0 left-0 pointer-events-none z-0"
              style={{ 
                overflow: 'visible',
                width: svgDimensions.width,
                height: svgDimensions.height
              }}
             >
               {/* Gradient Definition */}
               <defs>
                 <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                   <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                   <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                 </linearGradient>
                 {/* Mask untuk animasi menggambar garis sesuai scroll */}
                 <mask id="draw-mask">
                    <path 
                      d={pathD} 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="5" 
                      strokeDasharray={pathLength}
                      strokeDashoffset={pathLength - (pathLength * progress)}
                      strokeLinecap="round"
                    />
                 </mask>
               </defs>

               {/* Group yang di-masking agar muncul pelan-pelan */}
               <g mask="url(#draw-mask)">
                  {/* Main Path (yang digunakan juga untuk mengukur panjang) */}
                  <path 
                    ref={pathRef}
                    d={pathD} 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth="3"
                    strokeOpacity="0.4"
                  />
                  {/* Animated Dashed Path Overlay */}
                  <path 
                    d={pathD} 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth="3"
                    strokeDasharray="10 10"
                    className="animate-pulse" 
                  />
               </g>
             </svg>
            
            
            {/* Intro Text Card (TIDAK ADA ANIMASI) */}
            <div 
              ref={introRef} 
              className="min-w-[300px] md:min-w-[400px] flex flex-col justify-center relative z-20 self-center"
            >
               {/* Dot penghubung awal */}
               <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-dark shadow-xl z-30"></div>
               
               <h2 className="text-4xl font-serif-display mb-4">The Timeline</h2>
               <p className="text-neutral-500 max-w-sm font-sans-clean">
                 Setiap langkah memiliki cerita. Dari inisiasi awal hingga pencapaian akhir, ini adalah galeri kenangan yang kami bangun bersama.
               </p>
               <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest animate-pulse font-sans-clean">
                 Scroll Down <ArrowUpRight className="rotate-90" />
               </div>
            </div>

            {/* Loop Items */}
            {journeyHighlights.map((item, idx) => {
              const config = cardConfigs[idx] || cardConfigs[0]; // Fallback
              const isSection = item.type === 'section';

              return (
                // WRAPPER STATIC untuk Ref Line yang akurat
                // Layout classes dipindah kesini agar posisi ref tidak berubah saat animasi card bergerak
                <div 
                   key={idx}
                   ref={el => setItemRef(el, idx)} 
                   className={`relative group flex-shrink-0 z-20 ${config.w} ${config.y}`}
                >
                    <Reveal className="w-full h-full">
                      <div 
                        className={`
                            flex flex-col gap-6
                            transform transition-transform duration-700 ease-out
                        `}
                      >
                          
                          {/* DOT PENGHUBUNG - Lebih besar dan berwarna merah */}
                          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-dark shadow-xl z-30"></div>

                          {/* --- CARD CONTENT --- */}

                          {isSection ? (
                            // Render Section Card
                            <SectionCardRenderer item={item} config={config} />
                          ) : (
                            // Render Regular Card
                            <>
                              {/* Image Container + PARALLAX EFFECT */}
                              <div className="relative overflow-hidden shadow-2xl rounded-xl border-4 border-white/50">
                                <div className={`
                                    w-full overflow-hidden relative
                                    ${config.h} {/* Menerapkan rasio aspek yang unik dari config */}
                                `}>
                                    {/* Parallax Wrapper: Bergerak pelan ke kanan berdasarkan progress scroll */}
                                    <div 
                                      className="absolute top-0 left-0 h-full w-[120%] -ml-[10%]"
                                      style={{ 
                                        transform: `translateX(${progress * 60}px)`, 
                                        transition: 'transform 0.1s linear'
                                      }}
                                    >
                                      {/* Actual Image: Handles Hover Scale */}
                                      <img 
                                          src={item.img} 
                                          alt={item.title} 
                                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                                          onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src="https://placehold.co/800x600/1a1a1a/F3F3F1?text=Image+Placeholder";
                                          }}
                                      />
                                    </div>
                                </div>
                                
                                {/* Floating Badge - Ikon Calendar berwarna merah dan teks putih */}
                                <div className="absolute top-0 left-0 bg-black/80 text-white px-4 py-2 font-sans-clean text-xs font-bold uppercase backdrop-blur-md z-10 rounded-br-lg"> 
                                  <Calendar className="inline h-3 w-3 mr-2 text-primary" /> {item.date}
                                </div>
                              </div>
                            </>
                          )}


                          {/* Text Content (sama untuk Card & Section) */}
                          <div className={`flex justify-between items-start border-l-4 pl-6 pt-4 
                              ${isSection ? 'border-primary' : 'border-neutral-300'}`}
                          >
                              <div>
                                <h3 className="text-4xl md:text-6xl font-serif-display mb-2 group-hover:text-neutral-500 transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-lg font-bold uppercase tracking-tight mb-1 font-sans-clean">{item.subtitle}</p>
                                <p className="text-sm text-neutral-500 max-w-xs font-sans-clean">{item.desc}</p>
                              </div>
                              <div className="hidden md:block">
                                 <span className="text-6xl font-black text-black/5 font-sans-clean">
                                   0{idx + 1}
                                 </span>
                              </div>
                          </div>

                      </div>
                    </Reveal>
                </div>
              );
            })}

            {/* Closing Card (TIDAK ADA ANIMASI) */}
            <div ref={closingRef} className="min-w-[400px] md:min-w-[600px] flex items-center justify-center bg-primary h-[60vh] p-12 relative z-20 rounded-xl shadow-2xl self-center">
               {/* DOT PENGHUBUNG AKHIR - Lebih besar dan berwarna merah */}
               <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-dark shadow-xl z-30"></div>
               
               <div className="text-center text-white">
                 <h2 className="text-6xl font-serif-display italic mb-6">To Be Continued</h2>
                 <p className="font-sans-clean text-lg max-w-md mx-auto mb-8">
                    Perjalanan kami belum berakhir. Bergabunglah untuk menulis bab selanjutnya.
                 </p>
                 <button className="bg-white text-[#B91C1C] px-8 py-4 font-bold uppercase tracking-widest rounded-full shadow-lg hover:bg-neutral-200 transition-all font-sans-clean">
                    Join Litbang
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Simple (Visible after horizontal scroll ends) */}
      <div className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-8xl font-serif-display opacity-20 mb-8">2025</h2>
        <p className="font-mono text-xs text-neutral-400 font-sans-clean">
          LITBANG DEPARTMENT PROFILE © 2024
        </p>
      </div>

    </div>
  );
};

export default Journey;