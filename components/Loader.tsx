import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Radial Gradient for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black"></div>
      
      <div className="relative flex flex-col items-center z-10">
        {/* Logo Container with Power-up Pulse Effect */}
        <div className="relative mb-8 animate-[enter_0.4s_cubic-bezier(0.34,1.56,0.64,1)_forwards]">
            {/* Exploding ring behind */}
           <div className="absolute inset-0 bg-titan-gold rounded-full blur-2xl opacity-0 animate-[pulseRing_1s_ease-out_forwards]"></div>
           
           <img 
            src="https://github.com/Myraval1/titanshouseassets/raw/0c6ec7f1989e62f1ff71ba6a9cf6310fd529ba4a/nobglogo.png" 
            alt="Loading Titans House" 
            className="w-32 md:w-40 relative z-10"
          />
        </div>

        {/* Text with Glitch/Shake Effect */}
        <div className="flex flex-col items-center mb-10 scale-110">
          <span className="text-5xl font-heading font-bold text-white tracking-widest leading-none mb-1 animate-[glitch_2s_infinite]">TITANS</span>
          <span className="text-sm font-heading font-bold text-titan-gold tracking-[0.8em] leading-none uppercase shadow-black drop-shadow-lg">HOUSE</span>
        </div>

        {/* Hyper Fast Loading Bar - Synced to 2s total load time (1.8s animation) */}
        <div className="w-56 h-1 bg-zinc-800 relative overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-titan-gold via-yellow-200 to-titan-gold shadow-[0_0_20px_rgba(251,191,36,0.9)] animate-[rocketLoad_1.8s_ease-in-out_forwards] w-full origin-left transform scale-x-0"></div>
        </div>
      </div>

      <style>{`
        @keyframes rocketLoad {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.5); }
          80% { transform: scaleX(0.9); }
          100% { transform: scaleX(1); }
        }
        @keyframes enter {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulseRing {
            0% { transform: scale(0.8); opacity: 0.8; }
            100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes glitch {
            0% { transform: translate(0); }
            2% { transform: translate(-2px, 2px); }
            4% { transform: translate(-2px, -2px); }
            6% { transform: translate(2px, 2px); }
            8% { transform: translate(2px, -2px); }
            10% { transform: translate(0); }
            100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};