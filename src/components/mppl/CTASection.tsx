'use client';

export default function CTASection() {
  return (
    <section className="bg-neon-green py-32 px-6 lg:px-16 relative overflow-hidden pattern-sawtooth-dark" id="register">
      
      <div className="max-w-[1400px] mx-auto w-full relative z-10 pattern-content text-center">
        
        <div className="flex flex-col items-center">
          
          {/* Label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[4px] bg-pure-black"></div>
            <span className="font-dm-sans text-sm font-black uppercase tracking-[4px] text-pure-black">
              Take Action
            </span>
            <div className="w-12 h-[4px] bg-pure-black"></div>
          </div>

          {/* Main Heading */}
          <h2 className="font-bebas text-[clamp(80px,14vw,180px)] text-pure-black leading-[0.85] uppercase tracking-tighter mb-6">
            READY TO PLAY?
          </h2>

          {/* Divider */}
          <div className="w-24 h-[3px] bg-pure-black/30 mb-8"></div>

          {/* Description */}
          <p className="font-dm-sans text-lg md:text-xl text-pure-black font-bold leading-relaxed max-w-xl mb-12">
            Register your interest for MPPL 2026. Open for players, teams, and sponsors. Don't sit on the sidelines.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#register" className="inline-block text-center bg-net-white text-pure-black border-2 border-pure-black font-bebas text-2xl px-12 py-5 hover:bg-pure-black hover:text-neon-green hover:border-pure-black transition-colors w-full sm:w-auto uppercase tracking-wide shadow-[6px_6px_0px_rgba(0,0,0,0.25)]">
              REGISTER AS PLAYER
            </a>
            <a href="#register" className="inline-block text-center bg-net-white text-pure-black border-2 border-pure-black font-bebas text-2xl px-12 py-5 hover:bg-pure-black hover:text-neon-green hover:border-pure-black transition-colors w-full sm:w-auto uppercase tracking-wide shadow-[6px_6px_0px_rgba(0,0,0,0.25)]">
              PARTNER WITH US
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
