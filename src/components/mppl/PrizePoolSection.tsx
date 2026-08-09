'use client';

import { Trophy } from 'lucide-react';

export default function PrizePoolSection() {
  return (
    <section className="bg-pure-black min-h-screen py-32 relative overflow-hidden pattern-sawtooth flex items-center">
      
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 pattern-content">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Massive Prize Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[2px] bg-neon-green"></div>
              <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-green">
                The Stakes
              </span>
            </div>
            
            <div className="relative">
              <h2 className="font-bebas text-[clamp(120px,20vw,250px)] text-neon-green leading-[0.8] tracking-tighter m-0">
                ₹18L+
              </h2>
              <div className="font-bebas text-5xl md:text-7xl text-net-white mt-4 tracking-wider">
                PRIZE POOL
              </div>
            </div>
            
            <p className="font-dm-sans text-xl md:text-2xl text-net-white/60 font-bold leading-relaxed mt-12 max-w-lg">
              The highest stakes in regional pickleball history. Play for the glory. Play for the crown.
            </p>
          </div>

          {/* Right: Total Prize Pool */}
          <div className="bg-pure-black border-2 border-neon-green p-10 md:p-16 min-h-[360px] flex flex-col justify-center items-center text-center group hover:bg-neon-green transition-colors">
            <Trophy size={64} className="text-neon-green group-hover:text-pure-black mb-8 transition-colors" />
            <h3 className="font-bebas text-6xl md:text-8xl text-net-white group-hover:text-pure-black tracking-wide transition-colors">
              ₹18L+
            </h3>
            <p className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-net-white/60 group-hover:text-pure-black/70 transition-colors">
              Total Prize Pool
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
