'use client';

export default function SponsorsSection() {
  return (
    <section className="bg-league-black py-24 px-6 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading & Sub */}
        <h2 className="font-bebas text-[clamp(40px,6vw,72px)] text-net-white leading-none mb-4 tracking-wide">
          BRANDS THAT BACK THE GAME.
        </h2>
        <p className="font-dm-sans text-lg text-net-white/60 max-w-xl mx-auto mb-16">
          All partners and sponsors announcing soon.
        </p>

        {/* Tier 1 - Title Sponsor */}
        <div className="mb-12">
          <h3 className="font-dm-sans text-xs font-bold uppercase tracking-widest text-neon-green mb-6">
            TITLE SPONSOR
          </h3>
          <div className="mx-auto w-full max-w-lg aspect-[21/9] border-2 border-neon-green/40 bg-neon-green/5 rounded-xl flex items-center justify-center group hover:border-neon-green hover:bg-neon-green/10 transition-colors cursor-pointer shadow-[0_0_30px_rgba(202,255,0,0.1)]">
            <span className="font-bebas text-3xl md:text-4xl text-neon-green/60 tracking-wide group-hover:text-neon-green">
              YOUR BRAND HERE
            </span>
          </div>
        </div>

        {/* Tier 2 - Official Partners */}
        <div className="mb-12">
          <h3 className="font-dm-sans text-xs font-bold uppercase tracking-widest text-net-white/50 mb-6">
            OFFICIAL PARTNERS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video border border-white/20 bg-white/5 rounded-lg flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer">
                <span className="font-dm-sans text-sm font-semibold tracking-widest text-white/30 uppercase">
                  PARTNER {i}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3 - Associate Sponsors */}
        <div className="mb-16">
          <h3 className="font-dm-sans text-xs font-bold uppercase tracking-widest text-net-white/40 mb-6">
            ASSOCIATE SPONSORS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-video border border-white/10 bg-white/[0.02] rounded flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer">
                <span className="font-dm-sans text-xs font-semibold tracking-widest text-white/20 uppercase">
                  SPONSOR {i}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <button className="border-2 border-neon-green text-neon-green font-bebas text-2xl px-10 py-3 rounded hover:bg-neon-green hover:text-league-black transition-colors tracking-wider shadow-[0_0_20px_rgba(202,255,0,0.2)]">
            BECOME A SPONSOR →
          </button>
          <a href="mailto:partners@mppl.in" className="font-dm-sans text-sm text-net-white/60 hover:text-neon-green transition-colors">
            partners@mppl.in
          </a>
        </div>

      </div>
    </section>
  );
}
