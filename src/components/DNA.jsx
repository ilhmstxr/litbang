import React from 'react';
import { Heart, Lightbulb, Globe } from 'lucide-react';
import RevealCard from './RevealCard';

const DNA = () => {
  return (
    <section id="dna" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Visual Noise/Doodles Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#a3e635 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="w-full px-6 md:px-12 relative z-10 max-w-screen-2xl mx-auto">
        <RevealCard>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
              Rumah Kecil <br/> <span className="text-lime-400 italic font-serif lowercase">mimpi besar</span>
            </h2>
            <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
              Lebih dari sekadar divisi. Ini adalah ekosistem tempat kami tumbuh, gagal, belajar, dan tertawa bersama.
            </p>
          </div>
        </RevealCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sticky Note 1 */}
          <RevealCard className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-[#feff9c] text-black p-8 shadow-2xl relative h-full min-h-[300px] flex flex-col font-mono">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur transform -rotate-2"></div>
              <div className="mb-4">
                <Heart size={40} className="text-red-500 fill-current" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase border-b-2 border-black pb-2">Tempat Mengeluh</h3>
              <p className="text-lg leading-relaxed flex-grow">
                "Di sini, mengeluh itu valid. Lelah riset? Sambat aja. Dari keluhan, kita tahu apa yang harus diperbaiki."
              </p>
              <span className="text-xs font-bold mt-4 opacity-60">#SafeSpace</span>
            </div>
          </RevealCard>

          {/* Sticky Note 2 */}
          <RevealCard className="transform -rotate-1 hover:rotate-0 transition-transform duration-300 md:-mt-8">
            <div className="bg-[#ff9cda] text-black p-8 shadow-2xl relative h-full min-h-[300px] flex flex-col font-mono">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur transform rotate-1"></div>
              <div className="mb-4">
                <Lightbulb size={40} className="text-yellow-200 fill-current" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase border-b-2 border-black pb-2">Asbun = Inovasi</h3>
              <p className="text-lg leading-relaxed flex-grow">
                "Jangan takut salah. Ide terliar seringkali berawal dari celetukan 'asal bunyi' saat makan mie ayam."
              </p>
              <span className="text-xs font-bold mt-4 opacity-60">#CreativeChaos</span>
            </div>
          </RevealCard>

          {/* Sticky Note 3 */}
          <RevealCard className="transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="bg-[#9cfffa] text-black p-8 shadow-2xl relative h-full min-h-[300px] flex flex-col font-mono">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur transform -rotate-1"></div>
              <div className="mb-4">
                <Globe size={40} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase border-b-2 border-black pb-2">Tumbuh Bersama</h3>
              <p className="text-lg leading-relaxed flex-grow">
                "Tidak ada yang jago sendirian. Kita kumpulan orang awam yang mau belajar. Satu naik, semua naik."
              </p>
              <span className="text-xs font-bold mt-4 opacity-60">#GrowthMindset</span>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
};

export default DNA;
