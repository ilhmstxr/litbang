import React from 'react';
import { Download, Share2 } from 'lucide-react';

const InstagramStory = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative flex flex-col md:flex-row gap-8 items-center">
          
          {/* Close Button Mobile */}
          <button onClick={onClose} className="absolute -top-12 right-0 md:hidden text-white font-bold uppercase">Close</button>

          {/* Canvas Preview (Phone Aspect Ratio 9:16) */}
          <div className="w-[320px] h-[568px] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-neutral-800">
               {/* Background */}
               <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-60 grayscale" alt="Background" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
               </div>
               
               {/* Content Overlay */}
               <div className="absolute inset-0 p-8 flex flex-col justify-between">
                   {/* Top: Brand */}
                   <div className="flex justify-between items-center">
                       <div className="text-white font-black italic text-xl">LITBANG.</div>
                       <div className="px-2 py-1 bg-white/20 backdrop-blur rounded text-[10px] text-white font-bold uppercase">Recruitment</div>
                   </div>

                   {/* Center: Title */}
                   <div className="text-center">
                       <h2 className="text-5xl font-black text-white italic leading-[0.8] mb-2 drop-shadow-lg">
                           JOIN<br/>THE<br/><span className="text-primary">SQUAD</span>
                       </h2>
                       <div className="inline-block mt-4 px-4 py-2 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full">
                           Open Recruitment 2025
                       </div>
                   </div>

                   {/* Bottom: Info */}
                   <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center">
                       <p className="text-white text-sm font-bold mb-1">We are looking for you!</p>
                       <p className="text-neutral-400 text-xs">Swipe up to register</p>
                   </div>
               </div>
          </div>

          {/* Controls */}
          <div className="text-white max-w-xs">
              <h2 className="text-3xl font-bold mb-4">Story Template</h2>
              <p className="text-neutral-400 mb-8">Gunakan template ini untuk promosi di Instagram Story. Screenshot atau download aset ini.</p>
              
              <div className="space-y-4">
                  <button className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
                      <Download size={20} /> Download Asset
                  </button>
                  <button onClick={onClose} className="w-full bg-neutral-800 text-white py-3 rounded-xl font-bold hover:bg-neutral-700 transition-colors">
                      Close Preview
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default InstagramStory;
