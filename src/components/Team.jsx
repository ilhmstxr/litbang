import React from 'react';
import RevealCard from './RevealCard';
import TeamCard from './TeamCard';

const Team = () => {
  const teamData = [
    { role: "The Captain", title: "Kepala Departemen", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600", traits: ["Si Paling Asbun", "Si Paling Ngide", "Si Paling Yapping", "Si Paling Idealis"], quote: "Gasskan aja dulu, urusan teknis pikir nanti." },
    { role: "The Anchor", title: "Wakil Kepala", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600", traits: ["Si Paling Tenang", "Pencari Kedamaian", "Penyeimbang Tim", "Realistis Sejati"], quote: "Bentar, kita hitung dulu budget-nya cukup nggak." },
    { role: "The Scribe", title: "Sekretaris Dept", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600", traits: ["PJ Edulit", "Si Paling Ngegas", "Perfeksionis Catatan", "Si Paling Greget"], quote: "Absen diisi dulu ya, Gaes. Deadline jam 12!" },
    { role: "Specialist", title: "Anggota 1", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600", traits: ["PJ Workshop", "Tech Savvy", "Ambis Lomba", "Ensiklopedia Berjalan"], quote: "Udah daftar lomba ini belum? Hadiahnya gede!" },
    { role: "Specialist", title: "Anggota 2", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600", traits: ["PJ PKM", "Si Paling Cool", "Minim Ngomong", "Tukang Carry Tim"], quote: "..." },
    { role: "Specialist", title: "Anggota 3", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600", traits: ["PJ Aksi Belajar", "Si Paling Sibuk", "Kerja Mulu", "Susah Ketemu"], quote: "Meeting jam berapa? Gue ada call lagi abis ini." },
    { role: "Specialist", title: "Anggota 4", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600", traits: ["PJ Tema", "Si Paling Kepo", "Gudang Saran", "Aktif Bertanya"], quote: "Eh kenapa gitu? Terus kalo gini gimana?" },
  ];

  return (
    <section id="team" className="py-24 bg-neutral-950">
      <div className="w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
        <RevealCard>
          <div className="text-center mb-16">
            <span className="text-lime-400 font-mono tracking-widest text-sm mb-2 block">MEET THE SQUAD</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              The <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '2px white' }}>Alchemists</span>
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
