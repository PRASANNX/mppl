'use client';

export default function VisionSection() {
  return (
    <section className="bg-pure-black min-h-screen py-32 relative overflow-hidden pattern-arcs-bold flex items-center">
      
      {/* Massive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-neon-green/5 rounded-full blur-[150px] pointer-events-none -z-0"></div>

      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10 pattern-content">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Massive Typography Block */}
          <div className="relative">
            {/* Outline Text */}
            <h2 className="absolute -top-10 -left-10 font-bebas text-[clamp(100px,15vw,220px)] leading-[0.8] text-transparent select-none pointer-events-none" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.05)' }}>
              NOT A<br />TOURNAMENT
            </h2>
            
            <h2 className="font-bebas text-[clamp(80px,12vw,180px)] text-net-white leading-[0.85] tracking-tighter relative z-10">
              NOT A<br />
              <span className="text-pure-black" style={{ WebkitTextStroke: '3px #caff00', color: 'transparent', textShadow: '6px 6px 0px rgba(0,0,0,0.2)' }}>
                TOURNAMENT.
              </span>
            </h2>
            
            <div className="mt-8 ml-0 lg:ml-24">
              <h2 className="font-bebas text-[clamp(80px,12vw,180px)] text-neon-green leading-[0.85] tracking-tighter">
                A LEAGUE.
              </h2>
            </div>
          </div>

          {/* Right: Content Block */}
          <div className="flex flex-col border-l-4 border-neon-green pl-8 lg:pl-12 py-4">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-net-white/50">
                The Vision
              </span>
            </div>
            
            <p className="font-dm-sans text-xl md:text-2xl text-net-white font-bold leading-relaxed mb-8 max-w-xl">
              MPPL is India's first structured pickleball league in Madhya Pradesh. Built for everyone — from 10-year-old beginners to 60-year-old pros.
            </p>
            
            <p className="font-dm-sans text-lg text-net-white/60 leading-relaxed mb-12 max-w-xl">
              This isn't a one-day event. It's a season. It's about establishing a legacy, creating heroes, and bringing the fastest-growing sport in the world to the heart of India.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-bebas text-5xl text-neon-green mb-2">04</div>
                <div className="font-dm-sans text-sm font-bold uppercase tracking-widest text-net-white/50">Qualifying<br/>Cities</div>
              </div>
              <div>
                <div className="font-bebas text-5xl text-neon-green mb-2">10</div>
                <div className="font-dm-sans text-sm font-bold uppercase tracking-widest text-net-white/50">Pro<br/>Franchises</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
