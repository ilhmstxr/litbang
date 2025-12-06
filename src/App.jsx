import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DNA from './components/DNA';
import Journey from './components/Journey';
import Social from './components/Social';
// import Highlights from './components/Highlights';
import Team from './components/Team';
import Memories from './components/Memories';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import { marqueeData } from './assets/isi-konten';

const App = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [unlockedSections, setUnlockedSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['dna', 'journey', 'social', 'team', 'memories'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setUnlockedSections(prev => {
             if (!prev.includes(entry.target.id)) return [...prev, entry.target.id];
             return prev;
          });
        }
      });
    }, { threshold: 0 });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark min-h-screen text-white relative">
       {/* Background Layer */}
       <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center filter blur-3xl scale-125"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
       </div>

      <div className="relative z-10">
        <Navbar unlockedSections={unlockedSections} />
        <Hero />
      <Marquee text={marqueeData.text} />
      <DNA />
      <Journey />
      <Social />
      {/* <Highlights /> */}
      <Team />
      <Memories />
      <Footer />
      </div>

      {/* Styles */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
        @keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(0%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee2 { animation: marquee2 25s linear infinite; }
        .animate-marquee-reverse { animation: marquee 25s linear infinite reverse; }
        .animate-marquee-reverse2 { animation: marquee2 25s linear infinite reverse; }
      `}</style>
    </div>
  );
};

export default App;