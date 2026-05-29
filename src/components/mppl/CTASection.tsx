'use client';

export default function CTASection() {
  return (
    <section className="bg-neon-green min-h-[70vh] py-32 px-6 lg:px-16 relative overflow-hidden pattern-sawtooth-dark flex items-center" id="register">
      
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h2 className="font-bebas text-[clamp(150px,30vw,400px)] text-pure-black/[0.04] leading-[0.75] m-0 p-0 tracking-tighter whitespace-nowrap">
          REGISTER
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 pattern-content text-center">
        
        <div className="flex flex-col items-center">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[4px] bg-pure-black"></div>
            <span className="font-dm-sans text-sm font-black uppercase tracking-[4px] text-pure-black">
              Take Action
            </span>
            <div className="w-12 h-[4px] bg-pure-black"></div>
          </div>
          
          <h2 className="font-bebas text-[clamp(80px,15vw,200px)] text-pure-black leading-[0.85] uppercase tracking-tighter mb-8">
            READY TO<br />
            <span style={{ WebkitTextStroke: '3px #080808', color: 'transparent', textShadow: '6px 6px 0px rgba(0,0,0,0.1)' }}>
              PLAY?
            </span>
          </h2>
          
          <p className="font-dm-sans text-xl md:text-2xl text-pure-black font-bold leading-relaxed max-w-2xl mb-16">
            Register your interest for MPPL 2026. Open for players, teams, and sponsors. Don't sit on the sidelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#register" className="inline-block text-center bg-pure-black text-neon-green font-bebas text-3xl px-12 py-6 hover:bg-white hover:text-pure-black transition-colors w-full sm:w-auto uppercase tracking-wide shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
              REGISTER AS PLAYER
            </a>
            <a href="#register" className="inline-block text-center bg-pure-black text-neon-green font-bebas text-3xl px-12 py-6 hover:bg-white hover:text-pure-black transition-colors w-full sm:w-auto uppercase tracking-wide shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
              PARTNER WITH US
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
