'use client';

export default function SponsorsSection() {
  return (
    <section className="bg-neon-green py-32 px-6 lg:px-16 relative overflow-hidden pattern-sawtooth-dark text-pure-black">
      <div className="max-w-[1400px] mx-auto pattern-content">
        
        {/* Massive Typographic Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[4px] bg-pure-black"></div>
            <span className="font-dm-sans text-sm font-black uppercase tracking-[4px] text-pure-black">
              Partners & Sponsors
            </span>
          </div>
          <h2 className="font-bebas text-[clamp(60px,12vw,160px)] leading-[0.8] uppercase tracking-tighter text-pure-black">
            BRANDS THAT<br />
            <span className="text-pure-black" style={{ WebkitTextStroke: '3px #080808', color: 'transparent', textShadow: '6px 6px 0px rgba(0,0,0,0.1)' }}>
              BACK THE GAME.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Info & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <p className="font-dm-sans text-xl font-bold mb-8 max-w-sm text-pure-black">
                Join the revolution. Partner with India's most serious regional pickleball league.
              </p>
              <div className="w-full h-1 bg-pure-black/20 mb-8"></div>
              <p className="font-dm-sans text-sm font-bold uppercase tracking-widest text-pure-black/70 mb-2">
                Contact for sponsorships
              </p>
              <a href="mailto:partners@mppl.in" className="font-bebas text-4xl text-pure-black hover:opacity-50 transition-opacity">
                PARTNERS@MPPL.IN
              </a>
            </div>
            
            <a href="mailto:partners@mppl.in" className="inline-block text-center bg-net-white text-pure-black border-2 border-pure-black font-bebas text-3xl px-8 py-6 hover:bg-pure-black hover:text-neon-green hover:border-neon-green transition-colors w-full mt-12 lg:mt-0 shadow-[10px_10px_0px_rgba(0,0,0,0.3)]">
              BECOME A SPONSOR →
            </a>
          </div>

          {/* Right: Sponsor Grid Blocks */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Title Sponsor Block */}
            <div className="bg-pure-black p-10 flex flex-col justify-between min-h-[300px] group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-bl-[100px] -z-0"></div>
              <h3 className="font-dm-sans text-xs font-bold uppercase tracking-[4px] text-neon-green relative z-10 mb-8">
                Title Sponsor
              </h3>
              <div className="font-bebas text-[clamp(40px,8vw,100px)] text-net-white/20 group-hover:text-neon-green leading-[0.85] transition-colors relative z-10">
                YOUR BRAND<br />HERE
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Official Partners Block */}
              <a href="https://www.franklinpickleball.in" target="_blank" rel="noopener noreferrer" className="border-4 border-pure-black flex flex-col justify-between min-h-[250px] hover:bg-pure-black group transition-colors relative overflow-hidden">
                <h3 className="font-dm-sans text-xs font-bold uppercase tracking-[4px] text-pure-black group-hover:text-neon-green absolute top-6 left-6 z-10 transition-colors">
                  Official Partners
                </h3>
                <div className="w-full h-full relative">
                  <img
                    src="/franklin-logo.jpeg"
                    alt="Franklin Pickleball"
                    className="w-full h-full object-cover mix-blend-multiply group-hover:opacity-0 transition-opacity"
                  />
                  {/* Show white version on dark hover */}
                  <img
                    src="/franklin-logo.jpeg"
                    alt="Franklin Pickleball"
                    className="w-full h-full object-cover absolute inset-0 invert opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>

              {/* Associate Sponsors Block */}
              <div className="border-4 border-pure-black p-8 flex flex-col justify-between min-h-[250px]">
                <h3 className="font-dm-sans text-xs font-bold uppercase tracking-[4px] text-pure-black mb-8">
                  Associate Sponsors
                </h3>
                <div className="font-bebas text-5xl text-pure-black/40 leading-[0.9]">
                  ANNOUNCING<br />SOON
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
