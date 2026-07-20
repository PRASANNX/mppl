import MPPLLogo from './MPPLLogo';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#111111] min-h-screen py-32 px-6 lg:px-16 relative overflow-hidden pattern-arcs-br-orange flex items-center">
      
      {/* Massive Background Typography */}
      <div className="absolute top-0 right-0 p-10 font-bebas text-[clamp(150px,30vw,400px)] leading-[0.75] text-net-white/[0.03] pointer-events-none select-none text-right flex flex-col items-end w-full overflow-hidden">
        <div>THIS IS</div>
        <div>MPPL</div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 pattern-content">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Huge Text */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-neon-orange"></div>
              <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-orange">
                About The League
              </span>
            </div>
            
            <h2 className="font-bebas text-[clamp(60px,10vw,140px)] text-net-white leading-[0.85] uppercase tracking-tighter mb-8">
              A NEW ERA<br />
              <span className="text-neon-orange" style={{ WebkitTextStroke: '3px #FF6000', color: 'transparent', textShadow: '6px 6px 0px rgba(0,0,0,0.2)' }}>
                FOR MP.
              </span>
            </h2>
            
            <p className="font-dm-sans text-xl md:text-2xl text-net-white/80 font-bold leading-relaxed max-w-2xl mb-8">
              Bringing the fastest-growing sport in the world to the heart of India. 
              MPPL is a structured, professional pickleball league designed to elevate the game.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-net-white/10 border border-net-white/10 p-px mt-16 max-w-3xl">
              {[
                { val: '10-60', label: 'Age Group' },
                { val: '4', label: 'Qualifiers' },
                { val: '8', label: 'Pro Teams' },
                { val: '1', label: 'Crown' }
              ].map((stat, i) => (
                <div key={i} className="bg-[#111111] p-6 text-center hover:bg-neon-orange group transition-colors cursor-pointer">
                  <div className="font-bebas text-4xl text-net-white group-hover:text-pure-black mb-1">{stat.val}</div>
                  <div className="font-dm-sans text-[10px] font-bold uppercase tracking-widest text-net-white/40 group-hover:text-pure-black/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image / Visual */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/5] bg-pure-black border-2 border-neon-orange relative p-8 flex flex-col justify-between shadow-[20px_20px_0px_rgba(255,96,0,1)] overflow-hidden">
              <div className="font-bebas text-8xl text-neon-orange/20 leading-none z-10">2026</div>
              
              {/* Big background watermark logo covering the placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-12 z-0 opacity-15 pointer-events-none">
                <MPPLLogo variant="light" />
              </div>
              
              <div className="font-bebas text-5xl text-net-white leading-[0.9] z-10">
                "IT'S TIME<br />TO PLAY<br />FOR REAL."
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
