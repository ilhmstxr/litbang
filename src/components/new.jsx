  {/* JOURNEY SECTION */}
      <section id="journey" className="px-6 py-20 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-neutral-800">THE TRILOGY</h2>
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white -mt-10 md:-mt-16 ml-10 md:ml-20 relative z-10">OF <span className="text-secondary underline decoration-4 decoration-white underline-offset-8">ACTION</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Cards (Workshop, PKM, Belajar) - Same as before */}
            <div className="md:col-span-8 relative group cursor-pointer">
              <RevealCard className="h-full">
                <div className="h-[500px] rounded-3xl relative overflow-hidden border border-neutral-800 group-hover:border-secondary transition-all duration-500">
                   <LogoPlaceholder />
                   <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Workshop" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                   <div className="absolute bottom-0 left-0 p-8 md:p-12">
                     <span className="bg-secondary text-black px-3 py-1 rounded font-bold text-xs uppercase tracking-wider mb-4 inline-block">Chapter 01</span>
                     <h3 className="text-5xl md:text-7xl font-bold uppercase mb-2 text-white">Workshop</h3>
                     <p className="text-neutral-300 text-lg max-w-md">Menempa skill dasar. Dari data cleaning hingga penulisan jurnal.</p>
                   </div>
                   <div className="absolute top-28 right-8 opacity-20 group-hover:opacity-100 transition-opacity"><Zap className="text-secondary" size={64} /></div>
                </div>
              </RevealCard>
            </div>
            <div className="md:col-span-4 relative group cursor-pointer">
              <RevealCard className="h-full">
                 <div className="h-[500px] rounded-3xl relative overflow-hidden border border-neutral-800 group-hover:border-secondary transition-all duration-500">
                   <LogoPlaceholder />
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
            <div className="md:col-span-12 relative group mt-6 cursor-pointer">
              <RevealCard>
                <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-neutral-800 hover:border-secondary transition-colors flex flex-col md:flex-row gap-8 items-center">
                  <LogoPlaceholder />
                  <div className="flex-1 z-10">
                      <span className="text-secondary font-mono mb-2 block tracking-widest">CHAPTER 03</span>
                      <h3 className="text-6xl md:text-8xl font-bold uppercase mb-4 leading-none">Aksi <br/> Belajar</h3>
                      <p className="text-neutral-400 text-xl max-w-2xl">Sharing session tanpa batas. Membahas fenomena dari sudut pandang sains dan tawa.</p>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden relative"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Belajar" /></div>
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
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 text-center">On <span className="text-secondary italic">Socials</span></h2>
          </RevealCard>
          <div className="grid md:grid-cols-2 gap-12">
             <RevealCard className="flex flex-col items-center">
               <div className="relative w-full max-w-sm aspect-[4/5] bg-black rounded-[3rem] p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                  <div className="w-full h-full bg-neutral-800 rounded-[2.5rem] overflow-hidden relative group">
                     <LogoPlaceholder />
                     <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-80" alt="Edulit Post" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-center text-white"><Instagram size={48} className="mx-auto mb-2" /><h3 className="font-bold text-2xl">@edulit.riset</h3></div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 text-center"><h3 className="text-4xl font-bold uppercase">Edulit</h3><p className="font-mono text-neutral-500">Educational Literacy</p></div>
             </RevealCard>
             <RevealCard className="flex flex-col items-center mt-12 md:mt-0">
               <div className="relative w-full max-w-sm aspect-[4/5] bg-black rounded-[3rem] p-4 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                  <div className="w-full h-full bg-secondary rounded-[2.5rem] overflow-hidden relative group flex items-center justify-center">
                     <LogoPlaceholder />
                     <h2 className="text-6xl font-black text-black">TEMA</h2>
                     <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-center text-white"><Instagram size={48} className="mx-auto mb-2" /><h3 className="font-bold text-2xl">@tema.mhs</h3></div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 text-center"><h3 className="text-4xl font-bold uppercase">Tema</h3><p className="font-mono text-neutral-500">Teman Mahasiswa</p></div>
             </RevealCard>
          </div>
        </div>
      </section>