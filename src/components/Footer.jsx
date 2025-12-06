import React from 'react';

import { footerData } from '../assets/isi-konten';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 py-20 px-6">
      <div className="w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12 max-w-screen-2xl mx-auto">
         <div><div className="text-4xl font-black uppercase text-white mb-4">{footerData.brand.split('.')[0]}<span className="text-lime-400">.</span>{footerData.brand.split('.')[1]}</div><p className="text-neutral-400 max-w-xs">{footerData.desc}</p></div>
         <div className="flex gap-12">
           <div><h4 className="text-lime-400 font-bold uppercase mb-4 tracking-widest">Sitemap</h4><ul className="space-y-2 text-neutral-300">{footerData.sitemap.map((item, i) => <li key={i}><a href={item.href} className="hover:text-white">{item.label}</a></li>)}</ul></div>
           <div><h4 className="text-lime-400 font-bold uppercase mb-4 tracking-widest">Connect</h4><ul className="space-y-2 text-neutral-300">{footerData.connect.map((item, i) => <li key={i}><a href={item.href} className="hover:text-white">{item.label}</a></li>)}</ul></div>
         </div>
      </div>
      <div className="w-full px-6 md:px-12 mt-20 pt-8 border-t border-neutral-900 flex justify-between items-center text-xs text-neutral-600 font-mono uppercase max-w-screen-2xl mx-auto"><span>{footerData.copyright}</span><span>{footerData.credit}</span></div>
    </footer>
  );
};

export default Footer;
