import React from 'react';
import RevealCard from './RevealCard';
import TeamCard from './TeamCard';

import { teamData, teamStaticData } from '../assets/isi-konten';

const Team = () => {
  // Data moved to src/assets/isi-konten.js

  return (
    <section id="team" className="py-24 bg-neutral-950">
      <div className="w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
        <RevealCard>
          <div className="text-center mb-16">
            <span className="text-primary font-mono tracking-widest text-sm mb-2 block">{teamStaticData.label}</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              {teamStaticData.title.prefix} <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '2px white' }}>{teamStaticData.title.highlight}</span>
            </h2>
          </div>
        </RevealCard>

        <div className="flex flex-col gap-6">
          {/* Baris 1: Pimpinan (3 Orang - Kepala, Wakil, Sekretaris) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealCard className="h-full"><TeamCard {...teamData[0]} /></RevealCard>
            <RevealCard className="h-full"><TeamCard {...teamData[1]} /></RevealCard>
            <RevealCard className="h-full"><TeamCard {...teamData[2]} /></RevealCard>
          </div>

          {/* Baris 2: Anggota (4 Orang) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RevealCard className="h-full"><TeamCard {...teamData[3]} /></RevealCard>
            <RevealCard className="h-full"><TeamCard {...teamData[4]} /></RevealCard>
            <RevealCard className="h-full"><TeamCard {...teamData[5]} /></RevealCard>
            <RevealCard className="h-full"><TeamCard {...teamData[6]} /></RevealCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
