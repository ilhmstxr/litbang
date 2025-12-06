import React from 'react';
import { ChevronDown } from 'lucide-react';
import RevealCard from './RevealCard';

import { heroData } from '../assets/isi-konten';

const Hero = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Retain a small delay to start animation after mount
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col justify-end pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920" alt="Research" className="w-full h-full object-cover opacity-30 grayscale mix-blend-screen" />
         <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
      </div>

      <div className="w-full px-6 md:px-12 z-10 max-w-screen-2xl mx-auto">
        <RevealCard>
          <span className={`inline-block px-4 py-2 rounded-full border border-primary text-primary font-mono text-sm mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            ● {heroData.est}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.8] font-black tracking-tighter uppercase mb-4 text-white drop-shadow-2xl break-words">
            <span className={`block transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                {heroData.title.line1}
            </span>
            <span className={`block text-transparent stroke-white stroke-2 italic transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'}`} style={{ WebkitTextStroke: '2px #3B82F6' }}>
                {heroData.title.line2}
            </span>
            <span className={`block transition-all duration-1000 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                {heroData.title.line3}
            </span>
          </h1>
        </RevealCard>
        
        <RevealCard className="flex flex-col md:flex-row justify-between items-end mt-8 border-t border-neutral-800 pt-8">
          <p className={`text-neutral-300 text-xl font-medium max-w-lg transition-all duration-1000 delay-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {heroData.subtitle}
          </p>
          <div className={`mt-8 md:mt-0 p-4 rounded-full border border-primary text-primary transition-all duration-1000 delay-[1200ms] ${isLoaded ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-0'}`}>
             <ChevronDown size={32} />
          </div>
        </RevealCard>
      </div>
    </header>
  );
};

export default Hero;
