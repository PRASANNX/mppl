'use client';

const leftCategories = [
  { id: 1,  name: "BOYS U12",      tagline: "Junior category",  age: "U12",  type: "Boys" },
  { id: 2,  name: "BOYS U14",      tagline: "Junior category",  age: "U14",  type: "Boys" },
  { id: 3,  name: "BOYS U16",      tagline: "Junior category",  age: "U16",  type: "Boys" },
  { id: 4,  name: "BOYS U18",      tagline: "Junior category",  age: "U18",  type: "Boys" },
  { id: 9,  name: "MEN'S SINGLES", tagline: "Open category",    age: "Open", type: "Men"  },
  { id: 11, name: "MEN'S DOUBLES", tagline: "Open category",    age: "Open", type: "Men"  },
  { id: 14, name: "SINGLES 30+",   tagline: "Senior category",  age: "30+",  type: "Men"  },
  { id: 15, name: "DOUBLES 30+",   tagline: "Senior category",  age: "30+",  type: "Men"  },
  { id: 18, name: "SINGLES 40+",   tagline: "Senior category",  age: "40+",  type: "Men"  },
  { id: 20, name: "DOUBLES 40+",   tagline: "Senior category",  age: "40+",  type: "Men"  },
  { id: 19, name: "DOUBLES 50+",   tagline: "Senior category",  age: "50+",  type: "Men"  },
];

const rightCategories = [
  { id: 5,  name: "GIRLS U12",       tagline: "Junior category",       age: "U12",  type: "Girls"  },
  { id: 6,  name: "GIRLS U14",       tagline: "Junior category",       age: "U14",  type: "Girls"  },
  { id: 7,  name: "GIRLS U16",       tagline: "Junior category",       age: "U16",  type: "Girls"  },
  { id: 8,  name: "GIRLS U18",       tagline: "Junior category",       age: "U18",  type: "Girls"  },
  { id: 10, name: "WOMEN'S SINGLES", tagline: "Open category",         age: "Open", type: "Women"  },
  { id: 12, name: "WOMEN'S DOUBLES", tagline: "Open category",         age: "Open", type: "Women"  },
  { id: 13, name: "MIXED DOUBLES",   tagline: "Open mixed doubles",    age: "Open", type: "Mixed"  },
];

function CategoryCard({ cat }: { cat: typeof leftCategories[0] }) {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 border-2 border-neon-green bg-pure-black text-net-white transition-all cursor-pointer group hover:bg-neon-green hover:text-pure-black"
    >
      <div className="flex justify-between items-start mb-12">
        <span className="font-bebas text-5xl leading-none text-net-white group-hover:text-pure-black">
          {cat.name.split(' ')[0]}
          <br />
          {cat.name.split(' ').slice(1).join(' ')}
        </span>
        <span className="font-dm-sans text-xs font-bold px-2 py-1 border border-neon-green rounded uppercase tracking-wider text-neon-green group-hover:border-pure-black group-hover:text-pure-black">
          {cat.age}
        </span>
      </div>
      <div>
        <div className="font-dm-sans text-sm font-bold uppercase tracking-wide mb-1 text-neon-green group-hover:text-pure-black">
          {cat.type}
        </div>
        <div className="font-dm-sans text-sm italic text-neon-green group-hover:text-pure-black">
          {cat.tagline}
        </div>
      </div>
    </a>
  );
}

export default function CategoriesSection() {
  return (
    <section className="bg-deep-court py-24 relative pattern-arcs-tr">
      
      {/* Massive Background Text */}
      <div className="absolute top-0 right-0 p-10 font-bebas text-[clamp(120px,25vw,350px)] leading-[0.75] text-net-white/5 pointer-events-none select-none text-right flex flex-col items-end w-full overflow-hidden z-0">
        <div>15+</div>
        <div>BRACKETS</div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 relative z-10 pattern-content">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Bold Heading Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-center">
            
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
                <span className="block mt-4 text-xs font-bold uppercase tracking-widest text-pure-black/70">
                  Note: One player is allowed to play only one category.
                </span>
              </p>

              <div className="w-full h-1 bg-pure-black mb-8 opacity-20"></div>

              <div className="font-bebas text-4xl text-pure-black">
                8 <span className="text-pure-black/50 mx-2">/</span> 15+ <span className="text-pure-black/50 mx-2">/</span> 4
              </div>
              <div className="font-dm-sans text-xs font-bold uppercase tracking-widest text-pure-black/90 mt-1">
                Teams / Brackets / Cities
              </div>
            </div>

          </div>

          {/* Right: Two explicit columns — Boys/Men LEFT, Girls/Women/Mixed RIGHT */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">

            {/* BOYS / MEN column */}
            <div className="flex flex-col gap-4">
              <div className="font-dm-sans text-xs font-bold uppercase tracking-[4px] text-neon-green/60 mb-2 px-1">
                ♂ Boys &amp; Men
              </div>
              {leftCategories.map((cat) => (
                <CategoryCard key={cat.id} cat={cat} />
              ))}
            </div>

            {/* GIRLS / WOMEN / MIXED column */}
            <div className="flex flex-col gap-4">
              <div className="font-dm-sans text-xs font-bold uppercase tracking-[4px] text-neon-green/60 mb-2 px-1">
                ♀ Girls &amp; Women
              </div>
              {rightCategories.map((cat) => (
                <CategoryCard key={cat.id} cat={cat} />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
