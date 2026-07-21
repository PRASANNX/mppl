'use client';

import Link from 'next/link';
import MPPLLogo from './MPPLLogo';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-deep-court flex items-center pt-24 pb-32 px-6 lg:px-16 pattern-arcs-bold">
      
      {/* ── Background Effects ── */}
      <div
        className="pointer-events-none absolute inset-0 animate-glow-pulse"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-0 h-[140%] w-[2px] origin-top -translate-x-1/2 -rotate-[15deg]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(202, 255, 0, 0.15) 30%, rgba(202, 255, 0, 0.25) 50%, rgba(202, 255, 0, 0.15) 70%, transparent 100%)',
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(202, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(202, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Background Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0">
        <MPPLLogo variant="light" watermark />
      </div>

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pattern-content">
        
        {/* Left Sidebar (Desktop Only) */}
        <div className="hidden lg:flex flex-col justify-between col-span-2 border-l border-neon-green/20 pl-6 h-full min-h-[60vh] py-10">
          <div>
            <ul className="space-y-6 font-dm-sans text-xs font-bold uppercase tracking-[3px] text-net-white/90">
              <li className="text-neon-green flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                Season 2026
              </li>
              <li className="hover:text-neon-green transition-colors cursor-pointer"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform" target="_blank" rel="noopener noreferrer" className="block w-full">Register</a></li>
              <li className="hover:text-neon-green transition-colors cursor-pointer"><a href="#teams" className="block w-full">Teams</a></li>
              <li className="hover:text-neon-green transition-colors cursor-pointer"><a href="#about" className="block w-full">About</a></li>
            </ul>
          </div>
          <div className="font-bebas text-net-white/20 text-6xl tracking-widest -rotate-90 origin-bottom-left absolute bottom-10 -left-6 whitespace-nowrap">
            MADHYA PRADESH
          </div>
        </div>

        {/* Center/Main Content */}
        <div className="col-span-1 lg:col-span-10 flex flex-col justify-center relative">
          
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-neon-green"></div>
            <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-green">
              The Premier Pickleball League
            </span>
          </div>

          {/* Massive Typography Headline */}
          <div className="relative">
            {/* Background offset text */}
            <h1 className="absolute top-4 left-4 font-bebas text-[clamp(80px,12vw,180px)] text-transparent leading-[0.85] tracking-tight pointer-events-none select-none z-0" style={{ WebkitTextStroke: '2px rgba(202, 255, 0, 0.1)' }}>
              MPPL<br />2026
            </h1>
            
            {/* Foreground text */}
            <h1 className="relative font-bebas text-[clamp(80px,12vw,180px)] text-net-white leading-[0.85] tracking-tight z-10 mb-6 uppercase">
              The <span className="text-neon-green">League</span><br />
              Is Here.
            </h1>
          </div>

          {/* Subheading & Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 max-w-4xl relative z-10">
            <div>
              <p className="font-dm-sans text-lg text-net-white/70 leading-relaxed">
                India's most serious regional pickleball league. This isn't a hobby tournament — this is MPPL. Built for everyone from beginners to pros.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4 text-lg">
                  Register Now
                </a>
                <a href="https://www.instagram.com/reel/Daxu8b2oRaw/" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 text-lg">
                  Watch Teaser
                </a>
              </div>
            </div>

            {/* Quick Stats Block matching reference style */}
            <div className="flex flex-col justify-center border-l-2 border-neon-orange/30 pl-8">
              <div className="mb-6">
                <div className="font-bebas text-5xl md:text-7xl text-neon-orange leading-none">₹18L+</div>
                <div className="font-dm-sans text-xs font-bold uppercase tracking-[3px] text-net-white/90 mt-1">Prize Pool</div>
              </div>
              <div>
                <div className="font-bebas text-5xl md:text-7xl text-neon-orange leading-none">8</div>
                <div className="font-dm-sans text-xs font-bold uppercase tracking-[3px] text-net-white/90 mt-1">Franchise Teams</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
