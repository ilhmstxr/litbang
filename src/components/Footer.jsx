import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 py-20 px-6">
      <div className="w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12 max-w-screen-2xl mx-auto">
         <div><div className="text-4xl font-black uppercase text-white mb-4">Litbang<span className="text-lime-400">.</span>Dev</div><p className="text-neutral-400 max-w-xs">Departemen Penelitian dan Pengembangan. Mengubah ide menjadi inovasi, mengubah teman menjadi keluarga.</p></div>
         <div className="flex gap-12">
           <div><h4 className="text-lime-400 font-bold uppercase mb-4 tracking-widest">Sitemap</h4><ul className="space-y-2 text-neutral-300"><li><a href="#journey" className="hover:text-white">Journey</a></li><li><a href="#social" className="hover:text-white">Social</a></li><li><a href="#highlights" className="hover:text-white">Highlights</a></li><li><a href="#team" className="hover:text-white">Team</a></li><li><a href="#memories" className="hover:text-white">Memories</a></li></ul></div>
           <div><h4 className="text-lime-400 font-bold uppercase mb-4 tracking-widest">Connect</h4><ul className="space-y-2 text-neutral-300"><li><a href="#" className="hover:text-white">Instagram</a></li><li><a href="#" className="hover:text-white">LinkedIn</a></li><li><a href="#" className="hover:text-white">Email</a></li></ul></div>
         </div>
      </div>
      <div className="w-full px-6 md:px-12 mt-20 pt-8 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-600 font-mono uppercase max-w-screen-2xl mx-auto"><span>© 2024 LITBANG DEPARTMENT</span><span>DESIGNED WITH PASSION</span></div>
    </footer>
  );
};

export default Footer;
