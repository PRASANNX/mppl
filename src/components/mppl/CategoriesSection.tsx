'use client';

const categories = [
  { id: 1, name: "UNDER 12", tagline: "Where champions begin.", age: "10-12", type: "B/G" },
  { id: 2, name: "UNDER 14", tagline: "Double the intensity.", age: "12-14", type: "B/G" },
  { id: 3, name: "UNDER 18", tagline: "High stakes.", age: "14-18", type: "B/G" },
  { id: 4, name: "OPEN MEN", tagline: "No limit.", age: "18+", type: "Men" },
  { id: 5, name: "OPEN WOMEN", tagline: "Strength. Speed.", age: "18+", type: "Women" },
  { id: 6, name: "MIXED", tagline: "Chemistry wins.", age: "Open", type: "Mixed" },
  { id: 7, name: "30+ MEN", tagline: "Wisdom over speed.", age: "30+", type: "Men" },
  { id: 8, name: "30+ WOMEN", tagline: "Thirty and fearless.", age: "30+", type: "Women" },
  { id: 9, name: "40+ MEN", tagline: "Still competing.", age: "40+", type: "Men" },
  { id: 10, name: "40+ WOMEN", tagline: "Age is an advantage.", age: "40+", type: "Women" },
];

export default function CategoriesSection() {
  return (
    <section className="bg-deep-court min-h-screen py-24 relative overflow-hidden pattern-arcs-tr flex items-center">
      
      {/* Massive Background Text */}
      <div className="absolute top-0 right-0 p-10 font-bebas text-[clamp(120px,25vw,350px)] leading-[0.75] text-net-white/5 pointer-events-none select-none text-right flex flex-col items-end w-full overflow-hidden">
        <div>15+</div>
        <div>BRACKETS</div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 relative z-10 pattern-content">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Bold Heading Box */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="bg-neon-orange p-10 lg:p-16 border-l-8 border-pure-black shadow-[20px_20px_0px_rgba(202,255,0,1)] relative group">
              <div className="absolute -top-6 -left-6 bg-pure-black text-neon-green font-bebas text-4xl px-4 py-2 border-2 border-neon-green rotate-[-5deg] group-hover:rotate-0 transition-transform">
                CATEGORIES
              </div>
              
              <h2 className="font-bebas text-pure-black text-[clamp(60px,10vw,120px)] leading-[0.85] uppercase tracking-tighter mb-8">
                Your<br />Shot<br />Is Here.
              </h2>
              
              <p className="font-dm-sans text-pure-black/80 font-bold text-lg md:text-xl mb-8 max-w-sm">
                Whether you're 10 or 60 — beginner or pro — there is a bracket built exactly for you. 
                MPPL leaves no player behind.
              </p>

              <div className="w-full h-1 bg-pure-black mb-8 opacity-20"></div>

              <div className="font-bebas text-4xl text-pure-black">
                10 <span className="text-pure-black/50 mx-2">/</span> 15+ <span className="text-pure-black/50 mx-2">/</span> 4
              </div>
              <div className="font-dm-sans text-xs font-bold uppercase tracking-widest text-pure-black/90 mt-1">
                Teams / Brackets / Cities
              </div>
            </div>

          </div>

          {/* Right: Brutalist Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max h-fit my-auto">
            {categories.map((cat, i) => (
              <div 
                key={cat.id} 
                className={`p-6 border-2 transition-all cursor-pointer group ${
                  i % 3 === 0 
                    ? 'bg-neon-green border-neon-green text-pure-black hover:bg-pure-black hover:text-neon-green' 
                    : i % 3 === 1
                      ? 'bg-transparent border-net-white/20 text-net-white hover:border-neon-orange hover:bg-neon-orange/10'
                      : 'bg-pure-black border-pure-black text-net-white hover:border-neon-green'
                }`}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className={`font-bebas text-5xl leading-none ${i % 3 === 0 ? 'group-hover:text-neon-green' : ''}`}>
                    {cat.name.split(' ')[0]}
                    <br />
                    {cat.name.split(' ').slice(1).join(' ')}
                  </span>
                  <span className="font-dm-sans text-xs font-bold px-2 py-1 border border-current rounded uppercase tracking-wider">
                    {cat.age}
                  </span>
                </div>
                
                <div>
                  <div className="font-dm-sans text-sm font-bold uppercase tracking-wide mb-1 opacity-100 text-current">
                    {cat.type}
                  </div>
                  <div className="font-dm-sans text-sm italic opacity-100 text-current">
                    {cat.tagline}
                  </div>
                </div>
              </div>
            ))}
            
            {/* "More Soon" Block */}
            <div className="p-6 border-2 border-dashed border-net-white/20 flex flex-col items-center justify-center text-center min-h-[200px] hover:border-neon-green hover:bg-neon-green/5 transition-all cursor-pointer group">
              <span className="font-bebas text-5xl text-net-white/30 group-hover:text-neon-green transition-colors">+</span>
              <span className="font-dm-sans text-xs font-bold uppercase tracking-widest text-net-white/30 group-hover:text-neon-green transition-colors mt-4">
                More categories<br/>announcing soon
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
