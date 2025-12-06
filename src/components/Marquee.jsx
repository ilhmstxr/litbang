import React from 'react';

const Marquee = ({ text, direction = 'left' }) => {
  return (
    <div className="overflow-hidden w-full">
      <div className="relative flex overflow-x-hidden bg-secondary py-4 text-black font-black uppercase tracking-tighter transform -skew-y-2 border-y-4 border-black z-20 w-[110%] -ml-[5%]">
        <div className={`animate-marquee whitespace-nowrap py-2 flex gap-8 text-3xl md:text-7xl ${direction === 'right' ? 'animate-marquee-reverse' : ''}`}>
          <span className="mx-4">{text}</span>
          <span className="mx-4 text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>{text}</span>
          <span className="mx-4">{text}</span>
          <span className="mx-4 text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>{text}</span>
        </div>
        <div className={`absolute top-0 animate-marquee2 whitespace-nowrap py-4 flex gap-8 text-3xl md:text-7xl ${direction === 'right' ? 'animate-marquee-reverse2' : ''}`}>
          <span className="mx-4">{text}</span>
          <span className="mx-4 text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>{text}</span>
          <span className="mx-4">{text}</span>
          <span className="mx-4 text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
