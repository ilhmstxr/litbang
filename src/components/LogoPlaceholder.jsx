import React from 'react';
import { Hexagon } from 'lucide-react';

const LogoPlaceholder = () => (
  <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center group/logo hover:bg-lime-400 hover:border-black hover:text-black transition-all duration-300 shadow-lg">
    <Hexagon size={20} className="text-white group-hover/logo:text-black transition-colors" />
  </div>
);

export default LogoPlaceholder;
