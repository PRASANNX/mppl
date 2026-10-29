'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-neon-green py-32 px-6 lg:px-16 relative overflow-hidden pattern-sawtooth-dark" id="register">
      
      <div className="max-w-[1400px] mx-auto w-full relative z-10 pattern-content text-center">
        
        <div className="flex flex-col items-center">
          
          {/* Label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[4px] bg-pure-black"></div>
            <span className="font-dm-sans text-sm font-black uppercase tracking-[4px] text-pure-black">
              Take Action
            </span>
            <div className="w-12 h-[4px] bg-pure-black"></div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pure-black text-neon-green px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            <span className="font-dm-sans text-xs font-black uppercase tracking-[3px]">Leg 4 Indore · Registrations Live</span>
          </div>

          {/* Main Heading */}
          <h2 className="font-bebas text-[clamp(60px,10vw,140px)] text-pure-black leading-[0.85] uppercase tracking-tighter mb-6">
            REGISTER FOR LEG 4 INDORE
          </h2>

          {/* Divider */}
          <div className="w-24 h-[3px] bg-pure-black/30 mb-8"></div>

          {/* Description */}
          <p className="font-dm-sans text-lg md:text-xl text-pure-black font-bold leading-relaxed max-w-xl mb-12">
            Legs 1, 2 &amp; 3 wrapped up with high-voltage action! Registrations are now LIVE for Leg 4 Indore (21–22 Nov). Secure your bracket and qualify for the ₹18L+ auction draft.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <a
              href="https://forms.gle/sk57cEiq4qqCzKs68"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#080808', color: '#CAFF00', border: '3px solid #080808' }}
              className="inline-block text-center font-bebas text-2xl px-10 py-5 w-full sm:w-auto uppercase tracking-wide shadow-[8px_8px_0px_rgba(0,0,0,0.35)] hover:bg-net-white hover:text-pure-black transition-all"
            >
              REGISTER FOR LEG 4 NOW →
            </a>
            <a
              href="https://forms.gle/5WBTzz4bEQmgDpF58"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'transparent', color: '#080808', border: '2px solid #080808' }}
              className="inline-block text-center font-bebas text-2xl px-8 py-5 w-full sm:w-auto uppercase tracking-wide hover:bg-pure-black hover:text-net-white transition-all"
            >
              OWN A FRANCHISE
            </a>
            <Link
              href="/format"
              style={{ background: '#ffffff', color: '#080808', border: '2px solid #080808' }}
              className="inline-block text-center font-bebas text-2xl px-8 py-5 w-full sm:w-auto uppercase tracking-wide hover:opacity-80 transition-opacity"
            >
              RULES &amp; FORMAT
            </Link>
          </div>

          <a href="https://wa.me/919109109051?text=Hi%21%20I%27m%20interested%20in%20partnering%20with%20MPPL%202026%20as%20a%20sponsor%20or%20franchise%20partner.%20Please%20share%20more%20details.%20%F0%9F%A4%9D" target="_blank" rel="noopener noreferrer" className="font-dm-sans text-xs font-bold uppercase tracking-widest text-pure-black/80 hover:text-pure-black underline">
            Or Chat directly with us on WhatsApp →
          </a>

        </div>
      </div>
    </section>
  );
}
