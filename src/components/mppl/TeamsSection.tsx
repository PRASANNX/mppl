'use client';

const teams = Array.from({ length: 8 }, (_, i) => i + 1);

export default function TeamsSection() {
  return (
    <section id="teams" className="bg-[#111111] min-h-screen py-32 px-6 lg:px-16 relative overflow-hidden pattern-arcs-tr">
      
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h2 className="font-bebas text-[clamp(150px,30vw,400px)] text-net-white/[0.03] leading-[0.75] m-0 p-0 tracking-tighter whitespace-nowrap">
          EIGHT TEAMS
        </h2>
        <h2 className="font-bebas text-[clamp(150px,30vw,400px)] text-neon-green/[0.03] leading-[0.75] m-0 p-0 tracking-tighter whitespace-nowrap">
          ONE CROWN
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 pattern-content flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-neon-green"></div>
              <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-green">
                The Franchises
              </span>
            </div>
            <h2 className="font-bebas text-[clamp(60px,10vw,140px)] text-net-white leading-[0.85] uppercase tracking-tighter">
              8 TEAMS.<br />
              <span className="text-neon-green">ONE CROWN.</span>
            </h2>
          </div>
          
          <div className="md:text-right max-w-sm">
            <p className="font-dm-sans text-lg text-net-white/60 mb-6">
              Franchises and team names announcing soon. Player auctions to follow qualifying rounds.
            </p>
            <a href="#register" className="inline-block text-center bg-pure-black text-neon-green border-2 border-neon-green font-bebas text-2xl px-8 py-3 hover:bg-neon-green hover:text-pure-black transition-colors w-full md:w-auto uppercase tracking-wide">
              GET AUCTION ALERTS
            </a>
          </div>
        </div>

        {/* Typographic Teams Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-px bg-net-white/10 border border-net-white/10 p-px">
          {teams.map((num) => (
            <div
              key={num}
              className="bg-[#111111] aspect-[4/5] p-6 flex flex-col justify-between group hover:bg-neon-green transition-colors cursor-pointer relative overflow-hidden"
            >
              {/* Massive Team Number inside card */}
              <div className="absolute -bottom-6 -right-4 font-bebas text-[140px] text-net-white/5 leading-none group-hover:text-pure-black/10 transition-colors">
                {num.toString().padStart(2, '0')}
              </div>
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-dm-sans text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-net-white/20 text-net-white/50 group-hover:border-pure-black/20 group-hover:text-pure-black/50 rounded-full">
                  TBA
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-bebas text-4xl text-net-white group-hover:text-pure-black mb-1">
                  TEAM {num.toString().padStart(2, '0')}
                </h3>
                <div className="w-8 h-[2px] bg-neon-green group-hover:bg-pure-black mb-2 transition-colors"></div>
                <p className="font-dm-sans text-xs font-bold tracking-widest text-net-white/40 group-hover:text-pure-black/60 uppercase">
                  City Announcing Soon
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
