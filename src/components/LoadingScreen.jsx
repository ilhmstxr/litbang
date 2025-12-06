import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onFinish, 1000); // Give time for exit animation
          }, 500);
          return 100;
        }
        // Random increment for realistic feel
        const jump = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (isFinished) return null; // Unmount after animation

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col justify-between bg-black text-white p-8 md:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${count === 100 ? '-translate-y-full' : 'translate-y-0'}`}>
      
      {/* Top Text */}
      <div className="flex justify-between items-start">
         <h1 className="text-xl md:text-3xl font-bold uppercase tracking-widest">
            Litbang<span className="text-primary">.</span>
         </h1>
         <div className="text-right text-xs md:text-sm font-mono text-neutral-500">
            <p>EST. 2025</p>
            <p>JAKARTA, ID</p>
         </div>
      </div>

      {/* Center Counter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <div className="text-[20vw] font-black leading-none tracking-tighter tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800">
             {count}%
          </div>
      </div>

      {/* Bottom Text */}
      <div className="flex justify-between items-end overflow-hidden">
         <div className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none animate-pulse">
            Research & <br /> Development
         </div>
         <div className="hidden md:block w-1/3 bg-neutral-800 h-[1px] mb-4">
             <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${count}%` }}></div>
         </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
