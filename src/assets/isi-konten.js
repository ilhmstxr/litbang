export const journeyData = [
  {
    title: "KICK OFF",
    subtitle: "First Gathering",
    desc: "Permulaan perjalanan kami di Villa Kaliurang.",
    date: "JAN 2025",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    type: "landscape",
  },
  {
    isGroup: true,
    title: "WORKSHOP",
    items: [
      {
        title: "WORKSHOP I",
        subtitle: "Dasar Penelitian",
        desc: "Pengenalan metodologi riset dasar.",
        date: "FEB 2025",
        img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
      },
      {
        title: "WORKSHOP II",
        subtitle: "Data Analysis",
        desc: "Teknik pengolahan data statistik.",
        date: "FEB 2025",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      },
      {
        title: "WORKSHOP III",
        subtitle: "Public Speaking",
        desc: "Melatih kemampuan presentasi ilmiah.",
        date: "MAR 2025",
        img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600",
      },
      {
        title: "WORKSHOP IV",
        subtitle: "Scientific Writing",
        desc: "Penulisan jurnal dan karya ilmiah.",
        date: "MAR 2025",
        img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    isGroup: true,
    title: "COMPETITION",
    items: [
      {
        title: "LOMBA NASIONAL",
        subtitle: "Persiapan Tim",
        desc: "Brainstorming dan penyusunan proposal.",
        date: "MAY 2025",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      },
      {
        title: "FINAL STAGE",
        subtitle: "Presentasi Final",
        desc: "Pemaparan hasil karya di depan juri.",
        date: "MAY 2025",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      },
      {
        title: "AWARDING",
        subtitle: "Juara Umum",
        desc: "Momen kemenangan tim Litbang.",
        date: "JUN 2025",
        img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    title: "UPGRADING",
    subtitle: "Skill Level Up",
    desc: "Evaluasi dan peningkatan kapasitas tim.",
    date: "JUL 2025",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    type: "portrait",
  },
  {
    isGroup: true,
    title: "PKM CENTER",
    items: [
      {
        title: "IDEATION",
        subtitle: "Pencarian Ide",
        desc: "Menggali masalah dan solusi inovatif.",
        date: "SEP 2025",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
      },
      {
        title: "DRAFTING",
        subtitle: "Penyusunan Proposal",
        desc: "Menulis bab demi bab dengan teliti.",
        date: "SEP 2025",
        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      },
      {
        title: "REVIEW",
        subtitle: "Bedah Proposal",
        desc: "Feedback dari dosen pembimbing.",
        date: "OCT 2025",
        img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600",
      },
      {
        title: "SUBMISSION",
        subtitle: "Upload Simbelmawa",
        desc: "Langkah terakhir menuju pendanaan.",
        date: "OCT 2025",
        img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    isGroup: true,
    title: "ON DUTY",
    items: Array(8)
      .fill(null)
      .map((_, i) => ({
        title: `KEGIATAN ${i + 1}`,
        subtitle: "Kunjungan Lapangan",
        desc: "Dokumentasi kegiatan riset dan pengabdian.",
        date: "NOV 2025",
        img: `https://images.unsplash.com/photo-${
          [
            "1531206715517-5c0ba140b2b8", // Field
            "1559027615-cd4628902d4a", // Group
            "1522202176988-66273c2fd55f", // Meeting
            "1552664730-d307ca884978", // Work
            "1543269865-cbf427effbad", // Discussion
            "1517048676732-8382b63e4233", // Team
            "1521737604893-d14cc237f11d", // Office
            "1606857521015-7f9fcf423740", // Lab
          ][i % 8]
        }?auto=format&fit=crop&q=80&w=600`,
      })),
  },
  {
    isGroup: true,
    title: "STUDY",
    items: Array(5)
      .fill(null)
      .map((_, i) => ({
        title: `STUDY ${i + 1}`,
        subtitle: "Research Daily",
        desc: "Kegiatan belajar dan diskusi rutin.",
        date: "DEC 2025",
        img: `https://images.unsplash.com/photo-${
          [
            "1478131143081-80f7f84ca84d", // Library
            "1434030216411-0b793f4b4173", // Writing
            "1501504905252-473c47e087f8", // Coffee
            "1456513080510-7bf3a84b82f8", // Books
            "1497633762265-9d179a990aa6", // Study
          ][i % 5]
        }?auto=format&fit=crop&q=80&w=600`,
      })),
  },
];

export const teamData = [
  {
    role: "The Captain",
    title: "Kepala Departemen",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    traits: [
      "Si Paling Asbun",
      "Si Paling Ngide",
      "Si Paling Yapping",
      "Si Paling Idealis",
    ],
    quote: "Gasskan aja dulu, urusan teknis pikir nanti.",
    instagram: "https://instagram.com",
  },
  {
    role: "The Anchor",
    title: "Wakil Kepala",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600",
    traits: [
      "Si Paling Tenang",
      "Pencari Kedamaian",
      "Penyeimbang Tim",
      "Realistis Sejati",
    ],
    quote: "Bentar, kita hitung dulu budget-nya cukup nggak.",
    instagram: "https://instagram.com",
  },
  {
    role: "The Scribe",
    title: "Sekretaris Dept",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    traits: [
      "PJ Edulit",
      "Si Paling Ngegas",
      "Perfeksionis Catatan",
      "Si Paling Greget",
    ],
    quote: "Absen diisi dulu ya, Gaes. Deadline jam 12!",
    instagram: "https://instagram.com",
  },
  {
    role: "Specialist",
    title: "Anggota 1",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    traits: [
      "PJ Workshop",
      "Tech Savvy",
      "Ambis Lomba",
      "Ensiklopedia Berjalan",
    ],
    quote: "Udah daftar lomba ini belum? Hadiahnya gede!",
    instagram: "https://instagram.com",
  },
  {
    role: "Specialist",
    title: "Anggota 2",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    traits: ["PJ PKM", "Si Paling Cool", "Minim Ngomong", "Tukang Carry Tim"],
    quote: "...",
    instagram: "https://instagram.com",
  },
  {
    role: "Specialist",
    title: "Anggota 3",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
    traits: [
      "PJ Aksi Belajar",
      "Si Paling Sibuk",
      "Kerja Mulu",
      "Susah Ketemu",
    ],
    quote: "Meeting jam berapa? Gue ada call lagi abis ini.",
    instagram: "https://instagram.com",
  },
  {
    role: "Specialist",
    title: "Anggota 4",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
    traits: ["PJ Tema", "Si Paling Kepo", "Gudang Saran", "Aktif Bertanya"],
    quote: "Eh kenapa gitu? Terus kalo gini gimana?",
    instagram: "https://instagram.com",
  },
];

export const highlightsData = [
  {
    title: "First Gathering",
    date: "Jan 2025",
    loc: "Villa Kaliurang",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
    rotate: "rotate-3",
    tag: "Kick Off",
  },
  {
    title: "Rapat Kerja I",
    date: "Feb 2025",
    loc: "Co-Working Space",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    rotate: "-rotate-2",
    tag: "Serious Mode",
  },
  {
    title: "Webinar Nasional",
    date: "Apr 2025",
    loc: "Zoom Meeting",
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=600",
    rotate: "rotate-6",
    tag: "Public Event",
  },
  {
    title: "Team Bonding",
    date: "Jun 2025",
    loc: "Pantai Selatan",
    img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=600",
    rotate: "-rotate-3",
    tag: "Healing",
  },
  {
    title: "Kunjungan Riset",
    date: "Aug 2025",
    loc: "Desa Binaan",
    img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600",
    rotate: "rotate-2",
    tag: "Field Trip",
  },
  {
    title: "Proposal Camp",
    date: "Sep 2025",
    loc: "Perpus Pusat",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    rotate: "rotate-4",
    tag: "Focus",
  },
  {
    title: "Award Night",
    date: "Dec 2025",
    loc: "Main Hall",
    img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=600",
    rotate: "-rotate-1",
    tag: "Victory",
  },
];

// --- Navbar Component Data ---
export const navbarData = [
  { id: "dna", label: "DNA" },
  { id: "journey", label: "The Timeline" },
  { id: "social", label: "Our Product" },
  { id: "team", label: "Team" },
];

// --- Hero Component Data ---
export const heroData = {
  est: "EST. 2025",
  title: {
    line1: "RESEARCH",
    line2: "& DEV",
    line3: "JOURNEY",
  },
  subtitle:
    "Sebuah arsip visual perjalanan kami. Dari brainstorming larut malam hingga selebrasi keberhasilan.",
};

// --- DNA Component Data ---
export const dnaData = {
  header: {
    title: "Rumah Kecil",
    highlight: "mimpi besar",
    desc: "Lebih dari sekadar divisi. Ini adalah ekosistem tempat kami tumbuh, gagal, belajar, dan tertawa bersama.",
  },
  items: [
    {
      title: "Tempat Mengeluh",
      desc: '"Di sini, mengeluh itu valid. Lelah riset? Sambat aja. Dari keluhan, kita tahu apa yang harus diperbaiki."',
      tag: "#SafeSpace",
      color: "bg-[#feff9c]",
      rotate: "rotate-2",
      icon: "Heart",
    },
    {
      title: "Asbun = Inovasi",
      desc: "\"Jangan takut salah. Ide terliar seringkali berawal dari celetukan 'asal bunyi' saat makan mie ayam.\"",
      tag: "#CreativeChaos",
      color: "bg-[#ff9cda]",
      rotate: "-rotate-1",
      icon: "Lightbulb",
    },
    {
      title: "Tumbuh Bersama",
      desc: '"Tidak ada yang jago sendirian. Kita kumpulan orang awam yang mau belajar. Satu naik, semua naik."',
      tag: "#GrowthMindset",
      color: "bg-[#9cfffa]",
      rotate: "rotate-3",
      icon: "Globe",
    },
  ],
};

// --- Product Component Data (Previously Social) ---
export const socialData = {
  header: {
    title: "Our",
    highlight: "Products",
  },
  items: [
    {
      name: "Workshop",
      handle: "Skill Development",
      desc: "Pelatihan hard-skill dan soft-skill untuk mahasiswa eksternal dan internal.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      rotate: "rotate-2",
      isTheme: false,
    },
    {
      name: "PKM",
      handle: "Research Center",
      desc: "Pusat pendampingan dan pengembangan Program Kreativitas Mahasiswa.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      rotate: "-rotate-1",
      isTheme: false,
    },
    {
      name: "Aksi Belajar",
      handle: "Social Movement",
      desc: "Gerakan mengajar dan berbagi inspirasi ke sekolah-sekolah di pelosok.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
      rotate: "rotate-3",
      isTheme: false,
    },
    {
      name: "Edulit",
      handle: "Digital Content",
      desc: "Konten edukasi literasi visual yang dikemas ringan dan informatif.",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
      rotate: "-rotate-2",
      isTheme: false,
    },
    {
      name: "Tema",
      handle: "Community Hub",
      desc: "Teman Mahasiswa: Wadah diskusi dan aspirasi seputar kehidupan kampus.",
      img: "",
      rotate: "rotate-1",
      isTheme: true, // Special branding for TEMA
    },
  ],
};

// --- Memories Component Data ---
export const memoriesData = {
  bgText: "UNFILTERED",
  title: "CAPTURE THE MOMENT",
  desc: "Geser, lihat, dan tambahkan kenanganmu sendiri.",
};

// --- Footer Component Data ---
export const footerData = {
  brand: "Litbang.Dev",
  desc: "Departemen Penelitian dan Pengembangan. Mengubah ide menjadi inovasi, mengubah teman menjadi keluarga.",
  sitemap: [
    { label: "Journey", href: "#journey" },
    { label: "Social", href: "#social" },
    { label: "Highlights", href: "#highlights" },
    { label: "Team", href: "#team" },
    { label: "Memories", href: "#memories" },
  ],
  connect: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "#" },
  ],
  copyright: "© 2025 LITBANG DEPARTMENT",
  credit: "DESIGNED WITH PASSION",
};

// --- PhotoDeck Component Data ---
export const photoDeckData = {
  cards: [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      rotate: "-rotate-12",
      z: "z-10",
      translate: "-translate-x-24 md:-translate-x-48",
      label: "TEAM",
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600",
      rotate: "-rotate-6",
      z: "z-20",
      translate: "-translate-x-12 md:-translate-x-24",
      label: "MEETING",
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
      rotate: "rotate-0",
      z: "z-30",
      translate: "translate-x-0",
      label: "HANGOUT",
      main: true,
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600",
      rotate: "rotate-6",
      z: "z-20",
      translate: "translate-x-12 md:translate-x-24",
      label: "LAUGH",
    },
    { type: "upload" },
  ],
  upload: {
    label: "Add Yours",
    sublabel: "Join the frame",
  },
};

// --- Journey Component Static Data ---
export const journeyStaticData = {
  title: "The Timeline",
  desc: "Setiap langkah memiliki cerita. Dari inisiasi awal hingga pencapaian akhir, ini adalah galeri kenangan yang kami bangun bersama.",
  scrollLabel: "Scroll Down",
  closing: {
    title: "To Be Continued",
    desc: "Perjalanan kami belum berakhir. Bergabunglah untuk menulis bab selanjutnya.",
    button: "Join Litbang",
  },
};

// --- Music Component Data ---
export const musicData = [
  {
    title: "Dreaming of You",
    artist: "LITBANG Vibes",
    duration: "3:45",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=200",
  },
  {
    title: "Coding Night",
    artist: "Dev Team",
    duration: "4:20",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=200",
  },
  {
    title: "Focus Flow",
    artist: "Brainwave",
    duration: "2:50",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=200",
  },
];

// --- Team Component Static Data ---
export const teamStaticData = {
  label: "MEET THE SQUAD",
  title: {
    prefix: "The",
    highlight: "Alchemists",
  },
};

// --- Highlights Component Static Data ---
export const highlightsStaticData = {
  title: {
    prefix: "Our",
    highlight: "Journey",
  },
  rewind: "2024 REWIND",
  desc: "Sorotan kegiatan dan momen krusial yang membentuk departemen kami tahun ini.",
};

// --- Marquee Data ---
export const marqueeData = {
  text: "LITBANG 2025 • RESEARCH & DEVELOPMENT •",
};
