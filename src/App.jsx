import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DNA from './components/DNA';
import Journey from './components/Journey';
import Social from './components/Social';
import Highlights from './components/Highlights';
import Team from './components/Team';
import Memories from './components/Memories';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

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
    const sections = ['dna', 'journey', 'social', 'highlights', 'team', 'memories'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setUnlockedSections(prev => {
             if (!prev.includes(entry.target.id)) return [...prev, entry.target.id];
             return prev;
          });
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar unlockedSections={unlockedSections} />
      <Hero />
      <Marquee text="LITBANG 2024 • RESEARCH & DEVELOPMENT •" />
      <DNA />
      <Journey />
      <Social />
      <Highlights />
      <Team />
      <Memories />
      <Footer />

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