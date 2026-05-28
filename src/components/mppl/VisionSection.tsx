'use client';

import MPPLLogo from './MPPLLogo';

export default function VisionSection() {
  return (
    <section className="bg-league-black min-h-[80vh] flex flex-col items-center justify-center py-32 px-6 lg:px-16 text-center relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-neon-green blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Massive Headline */}
        <h2 className="font-bebas text-[clamp(64px,10vw,140px)] text-net-white leading-[0.85] mb-12 tracking-tight">
          MP KA COURT.<br />
          <span className="text-neon-green">INDIA KI NAZAR.</span>
        </h2>

        {/* Vision Statement */}
        <p className="font-dm-sans text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl font-light">
          We are building more than a league.<br />
          We are building a culture. A community. A movement.
        </p>
        
        <p className="font-dm-sans text-xl md:text-2xl text-white/80 leading-relaxed mb-16 max-w-2xl font-light">
          Where sport is not a privilege.<br />
          Where the court belongs to everyone.<br />
          Where MP writes its name in Indian sports history.
        </p>

        {/* Hindi Tagline */}
        <p className="font-hind text-3xl md:text-4xl font-bold text-neon-green mb-20 drop-shadow-[0_0_15px_rgba(202,255,0,0.5)]">
          दिल से खेलो। MP से खेलो।
        </p>

        {/* Logo */}
        <div className="w-[180px] opacity-80 mix-blend-screen">
          <MPPLLogo variant="light" height={64} />
        </div>

      </div>
    </section>
  );
}
