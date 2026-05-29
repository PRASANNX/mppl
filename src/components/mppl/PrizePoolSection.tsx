'use client';

import { Trophy, Zap, Coins, Star } from 'lucide-react';

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

          {/* Right: Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-net-white/10 border border-net-white/10 p-px">
            
            {[
              { label: 'Pro Categories', val: 'Massive Payouts', icon: <Trophy size={48} /> },
              { label: 'Amateur Brackets', val: 'Cash & Gear', icon: <Zap size={48} /> },
              { label: 'Franchise Bonus', val: 'Team Rewards', icon: <Coins size={48} /> },
              { label: 'MVP Award', val: 'Special Prize', icon: <Star size={48} /> }
            ].map((item, i) => (
              <div key={i} className="bg-pure-black p-10 flex flex-col justify-between min-h-[250px] group hover:bg-neon-green transition-colors cursor-pointer">
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bebas text-3xl text-net-white group-hover:text-pure-black mb-2 tracking-wide">
                    {item.val}
                  </h3>
                  <p className="font-dm-sans text-xs font-bold uppercase tracking-widest text-net-white/40 group-hover:text-pure-black/60">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
            
          </div>

        </div>
      </div>
    </section>
  );
}
