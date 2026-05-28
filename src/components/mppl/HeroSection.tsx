'use client';

import Link from 'next/link';
import MPPLLogo from './MPPLLogo';

const stats = [
  { value: '₹18L+', label: 'Prize Pool' },
  { value: '10', label: 'Teams' },
  { value: '15+', label: 'Categories' },
  { value: '4', label: 'Cities' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-deep-court flex items-center pt-24 pb-32 px-6 lg:px-16">
      {/* ── Micki 7 Background Elements ── */}
      <div className="absolute left-[-20px] top-[40px] bg-number">01</div>
      <div className="absolute right-[20px] top-[50%] side-label hidden lg:block">MADHYA PRADESH PICKLEBALL LEAGUE</div>
      
      {/* ── Background Effects ── */}

      {/* Diagonal neon beam */}
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

      {/* Court grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(202, 255, 0, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(202, 255, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Section label */}
          <span className="section-label">MADHYA PRADESH · INDIA · 2026</span>

          {/* Headline */}
          <h1 className="font-bebas text-net-white leading-[0.95]">
            THE{' '}
            <span className="neon-text-green animate-neon-flicker">LEAGUE</span>
            <br />
            IS HERE.
          </h1>

          {/* Hindi tagline */}
          <p className="hindi text-xl lg:text-2xl">
            MP का अपना Pickleball League।
          </p>

          {/* Body */}
          <p className="font-dm-sans max-w-lg text-net-white/75">
            India&apos;s most serious regional pickleball league. 10 teams. 4
            cities. One crown. This isn&apos;t a hobby tournament — this is MPPL.
          </p>

          {/* CTAs */}
          <div className="mt-2 flex flex-wrap gap-4">
            <Link href="#register" className="btn-primary">
              Register Now
            </Link>
            <Link href="#register" className="btn-secondary">
              Watch Teaser ▶
            </Link>
          </div>
        </div>

        {/* Right Column — Logo & Floating Cards */}
        <div className="hidden lg:flex lg:items-center lg:justify-center relative">
          
          {/* Move App Style Floating Pills */}
          <div className="absolute -top-10 -right-10 z-20 floating-pill bg-white text-pure-black border-white/20 animate-float">
            🏆 ₹18L+ Prize Pool
          </div>
          <div className="absolute -bottom-10 -left-10 z-20 floating-pill bg-pure-black text-neon-green border-neon-green/30 animate-float-delayed shadow-[0_0_20px_rgba(202,255,0,0.2)]">
            📅 June 2026
          </div>
          <div className="absolute top-1/2 -right-16 z-20 floating-pill bg-neon-green text-pure-black border-neon-green animate-float">
            👥 Ages 10–60
          </div>
          <div className="relative w-[280px] h-[373px] xl:w-[330px] xl:h-[440px] rounded-lg overflow-hidden animate-glow-pulse shadow-glow-green">
            <MPPLLogo variant="light" priority />
            {/* Extra ambient glow ring */}
            <div
              className="pointer-events-none absolute -inset-8 rounded-full animate-glow-pulse"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
