'use client';

const leaders = [
  {
    name: 'SURYANSH YADAV',
    role: 'Founder & CEO, MPPL',
    image: '/images/founder.jpg',
    borderClass: 'border-neon-green',
    shadowStyle: { boxShadow: '16px 16px 0px rgba(202,255,0,1)' },
    accentClass: 'bg-neon-green',
    textClass: 'text-neon-green',
  },
  {
    name: 'KESHAV PATIDAR',
    role: 'Director, MPPL',
    image: '/images/director.jpg',
    borderClass: 'border-neon-orange',
    shadowStyle: { boxShadow: '16px 16px 0px rgba(255,96,0,1)' },
    accentClass: 'bg-neon-orange',
    textClass: 'text-neon-orange',
  },
  {
    name: 'MUKTA SINGH',
    role: 'Managing Director, MPPL',
    image: '/images/managing-director.jpg',
    borderClass: 'border-neon-green',
    shadowStyle: { boxShadow: '16px 16px 0px rgba(202,255,0,1)' },
    accentClass: 'bg-neon-green',
    textClass: 'text-neon-green',
  },
];

export default function FounderSection() {
  return (
    <section className="bg-pure-black py-32 px-6 lg:px-16 relative overflow-hidden pattern-arcs-bl">

      {/* Massive Quotation Mark */}
      <div className="absolute top-10 left-10 font-bebas text-[clamp(200px,40vw,600px)] text-neon-green/[0.04] leading-none pointer-events-none select-none">
        "
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10 pattern-content">

        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-neon-green"></div>
            <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-green">
              Leadership
            </span>
          </div>
          <h2 className="font-bebas text-[clamp(50px,8vw,110px)] text-net-white leading-[0.9] tracking-tighter">
            THE PEOPLE BEHIND<br />
            <span className="text-neon-green">THE REVOLUTION.</span>
          </h2>
          <p className="font-dm-sans text-xl text-net-white/60 font-bold leading-relaxed max-w-2xl mt-6">
            MPPL was born out of a simple idea: Madhya Pradesh deserves its own premier sporting property. Pickleball is taking over the world, and it&apos;s time we put MP on the global map.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              {/* Photo Card */}
              <div
                className={`bg-pure-black ${leader.borderClass} border-2 relative p-3 mb-8 inline-block transition-transform duration-300 group-hover:-translate-y-2`}
                style={leader.shadowStyle}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="block w-full max-w-[260px] h-[320px] object-cover object-top"
                    onError={(e: any) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-white/5 pointer-events-none transition-opacity duration-300 group-hover:bg-white/10"></div>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="font-bebas text-4xl text-net-white tracking-wide mb-3 leading-tight">
                {leader.name}
              </h3>
              <div className="flex items-center gap-3 justify-center">
                <div className={`w-6 h-[2px] ${leader.accentClass}`}></div>
                <p className={`font-dm-sans text-sm font-bold uppercase tracking-widest ${leader.textClass}`}>
                  {leader.role}
                </p>
                <div className={`w-6 h-[2px] ${leader.accentClass}`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
