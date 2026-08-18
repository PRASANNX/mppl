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
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-net-white text-pure-black border-2 border-pure-black font-bebas text-2xl px-10 py-5 hover:bg-pure-black hover:text-neon-green hover:border-pure-black transition-colors w-full sm:w-auto uppercase tracking-wide shadow-[6px_6px_0px_rgba(0,0,0,0.25)]">
              REGISTER AS PLAYER
            </a>
            <a href="https://forms.gle/5WBTzz4bEQmgDpF58" target="_blank" rel="noopener noreferrer" className="inline-block text-center bg-pure-black text-neon-green border-2 border-pure-black font-bebas text-2xl px-10 py-5 hover:bg-net-white hover:text-pure-black hover:border-pure-black transition-colors w-full sm:w-auto uppercase tracking-wide shadow-[6px_6px_0px_rgba(0,0,0,0.25)]">
              FRANCHISE &amp; SPONSOR INTEREST
            </a>
          </div>

          {/* Multi-category info */}
          <div className="bg-pure-black/15 border border-pure-black/20 rounded-lg px-6 py-4 max-w-xl mb-6">
            <p className="font-dm-sans text-sm font-bold text-pure-black leading-relaxed">
              ⚠ Playing in multiple categories?{' '}
              <span className="font-normal">
                You can register in up to 2 categories (max). Each category requires a separate registration form and a separate entry fee payment.
              </span>
            </p>
          </div>

          <a href="https://wa.me/919109109051?text=Hi%21%20I%27m%20interested%20in%20partnering%20with%20MPPL%202026%20as%20a%20sponsor%20or%20franchise%20partner.%20Please%20share%20more%20details.%20%F0%9F%A4%9D" target="_blank" rel="noopener noreferrer" className="font-dm-sans text-xs font-bold uppercase tracking-widest text-pure-black/80 hover:text-pure-black underline">
            Or Chat directly with us on WhatsApp →
          </a>

        </div>
      </div>
    </section>
  );
}
