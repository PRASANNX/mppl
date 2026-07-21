'use client';

import { MapPin, Gavel, Swords, Crown } from 'lucide-react';

export default function FormatSection() {
  return (
    <section className="bg-neon-orange py-32 px-6 lg:px-16 relative overflow-hidden pattern-sawtooth-dark text-pure-black">
      
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none z-0 overflow-hidden">
        <h2 className="font-bebas text-[clamp(200px,40vw,600px)] text-pure-black/[0.04] leading-[0.75] m-0 p-0 tracking-tighter whitespace-nowrap text-center">
          THE FORMAT
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 pattern-content text-center">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-center">
          <h2 className="font-bebas text-[clamp(60px,10vw,140px)] leading-[0.8] uppercase tracking-tighter">
            4 ROUNDS.<br />
            4 CITIES.<br />
            <span className="text-pure-black" style={{ WebkitTextStroke: '3px #080808', color: 'transparent', textShadow: '6px 6px 0px rgba(0,0,0,0.1)' }}>
              ONE DESTINATION.
            </span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative mt-32 mb-16 max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-[2px] bg-pure-black/20 hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            
            {[
              { num: '01', title: 'QUALIFYING ROUNDS', desc: '4 legs across Indore, Bhopal, Jabalpur & Gwalior. Winner & Runner-up of each category qualify.', icon: <MapPin size={24} className="text-neon-orange" /> },
              { num: '02', title: 'PLAYER AUCTIONS', desc: '48 total qualified players enter the MPPL auction pool. 8 franchises. One draft.', icon: <Gavel size={24} className="text-net-white" /> },
              { num: '03', title: 'LEAGUE MATCHES', desc: '8 franchise squads. 15+ categories. Intense league championship matches.', icon: <Swords size={24} className="text-net-white" /> },
              { num: '04', title: 'GRAND FINALS', desc: 'One court. One champion. ₹18 Lakhs prize pool. One franchise takes the crown.', icon: <Crown size={24} className="text-neon-green" /> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative group">
                {/* Circular Icon */}
                <div className="w-24 h-24 rounded-full bg-pure-black border-4 border-neon-orange flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                
                {/* Step Number */}
                <div className="font-dm-sans text-xs font-bold text-pure-black/60 tracking-[4px] mb-2">
                  {step.num}
                </div>
                
                {/* Title */}
                <h3 className="font-bebas text-3xl md:text-4xl mb-4 tracking-wide leading-none">{step.title}</h3>
                
                {/* Description */}
                <p className="font-dm-sans text-sm md:text-base font-bold opacity-80 leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
        
        {/* Registration CTA Block */}
        <div className="mt-24 max-w-5xl mx-auto bg-neon-orange/80 border-4 border-pure-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-left backdrop-blur-sm">
          <div>
            <h3 className="font-bebas text-4xl md:text-5xl tracking-wide mb-2">ROUNDS STARTING 2026</h3>
            <p className="font-dm-sans font-bold text-pure-black/80">First qualifying date announcing soon. Stay tuned.</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-pure-black text-neon-orange font-bebas text-2xl px-10 py-4 hover:bg-white hover:text-pure-black transition-colors mt-8 md:mt-0 shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
            REGISTER INTEREST →
          </a>
        </div>

      </div>
    </section>
  );
}
