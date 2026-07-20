'use client';

export default function FounderSection() {
  return (
    <section className="bg-pure-black min-h-[80vh] py-32 px-6 lg:px-16 relative overflow-hidden pattern-arcs-bl flex items-center">
      
      {/* Massive Quotation Mark */}
      <div className="absolute top-10 left-10 font-bebas text-[clamp(200px,40vw,600px)] text-neon-green/[0.04] leading-none pointer-events-none select-none">
        "
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10 pattern-content">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[2px] bg-neon-green"></div>
              <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-green">
                Founder's Note
              </span>
            </div>
            
            <h2 className="font-bebas text-[clamp(50px,8vw,110px)] text-net-white leading-[0.9] tracking-tighter mb-12">
              "WE DIDN'T START<br />
              A TOURNAMENT.<br />
              <span className="text-neon-green">WE STARTED A REVOLUTION."</span>
            </h2>
            
            <p className="font-dm-sans text-xl text-net-white/80 font-bold leading-relaxed max-w-2xl">
              MPPL was born out of a simple idea: Madhya Pradesh deserves its own premier sporting property. Pickleball is taking over the world, and it's time we put MP on the global map.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center lg:items-center text-center lg:text-center lg:border-l-4 lg:border-r-0 lg:pl-6 lg:pr-0 border-neon-green py-4">
            <div className="w-72 h-72 bg-pure-black border-2 border-neon-green relative p-4 shadow-[20px_20px_0px_rgba(202,255,0,1)] mb-10">
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src="/images/founder.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover block"
                  onError={(e: any) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-neon-green/20 pointer-events-none"></div>
              </div>
            </div>
            <h3 className="font-bebas text-4xl text-net-white tracking-wide mb-1">
              SURYANSH YADAV
            </h3>
            <p className="font-dm-sans text-sm font-bold uppercase tracking-widest text-neon-green">
              Founder, MPPL
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
