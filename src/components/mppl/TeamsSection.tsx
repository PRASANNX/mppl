'use client';

const teams = Array.from({ length: 10 }, (_, i) => i + 1);

export default function TeamsSection() {
  return (
    <section className="bg-league-black py-24 px-6 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-[1px] bg-neon-green shadow-glow-green" />
          <span className="font-dm-sans text-xs font-semibold tracking-[4px] uppercase text-neon-green">
            THE FRANCHISES
          </span>
        </div>

        {/* Heading & Sub */}
        <h2 className="font-bebas text-[clamp(48px,7vw,80px)] text-net-white leading-[1] mb-4">
          10 TEAMS.<br />ONE CROWN.
        </h2>
        <p className="font-dm-sans text-lg text-net-white/60 max-w-lg mb-16">
          Franchises and team names announcing soon.<br />
          Player auctions after qualifying rounds.
        </p>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {teams.map((num) => (
            <div
              key={num}
              className="relative bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col justify-end aspect-[4/5] overflow-hidden group cursor-pointer transition-all duration-300 hover:border-neon-green/50 hover:-translate-y-1"
            >
              {/* Massive background number */}
              <div className="absolute -top-10 -right-4 font-bebas text-[180px] leading-none text-neon-green opacity-10 select-none group-hover:opacity-20 transition-opacity duration-300">
                {num.toString().padStart(2, '0')}
              </div>
              
              <div className="relative z-10">
                <span className="inline-block bg-neon-green/10 border border-neon-green/30 text-neon-green text-[10px] font-dm-sans font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-3">
                  COMING SOON
                </span>
                <h3 className="font-bebas text-2xl text-white tracking-wide">
                  TEAM {num.toString().padStart(2, '0')}
                </h3>
                <p className="font-dm-sans text-sm text-white/40 mt-1 uppercase tracking-wider">
                  City TBA
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Auction Info Strip */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-bebas text-3xl text-white mb-2 tracking-wide">PLAYER AUCTIONS</h3>
            <p className="font-dm-sans text-white/60 max-w-2xl leading-relaxed">
              After qualifying rounds — top players enter the MPPL Player Auction. 
              10 franchises. One draft. Zero limits. Every player has a price.
            </p>
          </div>
          <div className="shrink-0">
            <button className="bg-neon-green text-league-black font-bebas text-xl px-8 py-4 rounded hover:bg-white transition-colors duration-300 tracking-wide">
              AUCTION DETAILS →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
