import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

import { musicData } from '../assets/isi-konten';

const tracks = musicData;

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(true); // Default minimized
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(new Audio(tracks[0].url));

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    // Cleanup audio on unmount
    const audio = audioRef.current;
    
    // Handle track ending
    const handleEnded = () => {
        handleNext();
    };

    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Handle Play/Pause
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed):", e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]); // Re-run when track changes

  // Handle Volume
  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Handle Track Change
  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    audioRef.current.src = tracks[(currentTrackIndex + 1) % tracks.length].url;
    if (isPlaying) audioRef.current.play();
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    audioRef.current.src = tracks[(currentTrackIndex - 1 + tracks.length) % tracks.length].url;
    if (isPlaying) audioRef.current.play();
  };

  const toggleFunction = () => {
      setIsPlaying(!isPlaying);
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out font-sans-clean
        ${isMinimized ? 'w-16 h-16 rounded-full' : 'w-80 h-auto rounded-3xl'}
        bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden
    `}>
      
      {/* Minimized View */}
      {isMinimized && (
        <button 
            onClick={() => setIsMinimized(false)}
            className="w-full h-full flex items-center justify-center group relative cursor-pointer"
        >
            <div className={`absolute inset-0 bg-primary/20 rounded-full animate-pulse ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            <Music size={24} className={`text-white transition-transform duration-700 ${isPlaying ? 'animate-spin-slow' : ''}`} />
        </button>
      )}

      {/* Maximized View */}
      {!isMinimized && (
        <div className="p-6 relative">
             {/* Header Controls */}
             <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    Now Playing
                 </div>
                 <button onClick={() => setIsMinimized(true)} className="text-neutral-400 hover:text-white">
                    <Minimize2 size={16} />
                 </button>
             </div>

             {/* Album Art & Info */}
             <div className="flex gap-4 items-center mb-6">
                 <div className={`w-16 h-16 rounded-xl overflow-hidden shadow-lg border border-white/10 ${isPlaying ? 'animate-pulse' : ''}`}>
                    <img src={currentTrack.cover} alt="Cover" className="w-full h-full object-cover" />
                 </div>
                 <div className="overflow-hidden">
                     <h3 className="text-white font-bold text-lg truncate leading-tight">{currentTrack.title}</h3>
                     <p className="text-neutral-400 text-sm truncate">{currentTrack.artist}</p>
                 </div>
             </div>

             {/* Controls */}
             <div className="flex flex-col gap-4">
                 {/* Progress Bar (Visual Only for now) */}
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3 animate-pulse"></div>
                 </div>

                 <div className="flex justify-between items-center">
                     <button onClick={handlePrev} className="text-neutral-400 hover:text-white transition-colors">
                        <SkipBack size={20} />
                     </button>
                     
                     <button 
                        onClick={toggleFunction}
                        className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/20"
                    >
                        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                     </button>

                     <button onClick={handleNext} className="text-neutral-400 hover:text-white transition-colors">
                        <SkipForward size={20} />
                     </button>
                 </div>
             </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
