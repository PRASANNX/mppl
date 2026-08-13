'use client';

import { useState } from 'react';

type Category = {
  id: number;
  name: string;
  tagline: string;
  age: string;
  type: string;
};

// --- JUNIOR CATEGORIES (8 Total) ---
const juniorCategoriesLeft: Category[] = [
  { id: 1, name: "BOYS U12", tagline: "Junior category", age: "U12", type: "Boys" },
  { id: 2, name: "BOYS U14", tagline: "Junior category", age: "U14", type: "Boys" },
  { id: 3, name: "BOYS U16", tagline: "Junior category", age: "U16", type: "Boys" },
  { id: 4, name: "BOYS U18", tagline: "Junior category", age: "U18", type: "Boys" },
];

const juniorCategoriesRight: Category[] = [
  { id: 5, name: "GIRLS U12", tagline: "Junior category", age: "U12", type: "Girls" },
  { id: 6, name: "GIRLS U14", tagline: "Junior category", age: "U14", type: "Girls" },
  { id: 7, name: "GIRLS U16", tagline: "Junior category", age: "U16", type: "Girls" },
  { id: 8, name: "GIRLS U18", tagline: "Junior category", age: "U18", type: "Girls" },
];

// --- OPEN CATEGORIES (5 Total) ---
const openCategoriesLeft: Category[] = [
  { id: 9,  name: "MEN'S SINGLES", tagline: "Open category", age: "Open", type: "Men" },
  { id: 11, name: "MEN'S DOUBLES", tagline: "Open category", age: "Open", type: "Men" },
];

const openCategoriesRight: Category[] = [
  { id: 10, name: "WOMEN'S SINGLES", tagline: "Open category",      age: "Open", type: "Women" },
  { id: 12, name: "WOMEN'S DOUBLES", tagline: "Open category",      age: "Open", type: "Women" },
  { id: 13, name: "MIXED DOUBLES",   tagline: "Open mixed doubles", age: "Open", type: "Mixed" },
];

// --- SENIOR CATEGORIES (6 Total: 30+, 40+, 50+) ---
const seniorCategoriesLeft: Category[] = [
  { id: 14, name: "SINGLES 30+", tagline: "Senior category", age: "30+", type: "Men" },
  { id: 18, name: "SINGLES 40+", tagline: "Senior category", age: "40+", type: "Men" },
  { id: 19, name: "DOUBLES 50+", tagline: "Senior category", age: "50+", type: "Men" },
];

const seniorCategoriesRight: Category[] = [
  { id: 16, name: "SINGLES 30+", tagline: "Senior category", age: "30+", type: "Women" },
  { id: 15, name: "DOUBLES 30+", tagline: "Senior category", age: "30+", type: "Men" },
  { id: 20, name: "DOUBLES 40+", tagline: "Senior category", age: "40+", type: "Men" },
];

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 border-2 border-neon-green bg-pure-black text-net-white transition-all cursor-pointer group hover:bg-neon-green hover:text-pure-black"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="font-bebas text-4xl leading-none text-net-white group-hover:text-pure-black">
          {cat.name.split(' ')[0]}
          <br />
          {cat.name.split(' ').slice(1).join(' ')}
        </span>
        <span className="font-dm-sans text-xs font-bold px-2 py-1 border border-neon-green rounded uppercase tracking-wider text-neon-green group-hover:border-pure-black group-hover:text-pure-black">
          {cat.age}
        </span>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="font-dm-sans text-xs font-bold uppercase tracking-wide mb-0.5 text-neon-green group-hover:text-pure-black">
            {cat.type}
          </div>
          <div className="font-dm-sans text-xs italic text-neon-green/80 group-hover:text-pure-black/80">
            {cat.tagline}
          </div>
        </div>
        <span className="font-dm-sans text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-neon-green/10 text-neon-green rounded group-hover:bg-pure-black group-hover:text-neon-green transition-colors">
          Register →
        </span>
      </div>
    </a>
  );
}

export default function CategoriesSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'juniors' | 'open' | 'seniors'>('all');

  return (
    <section className="bg-deep-court py-24 relative pattern-arcs-tr">
      
      {/* Background Text */}
      <div className="absolute top-0 right-0 p-10 font-bebas text-[clamp(120px,25vw,350px)] leading-[0.75] text-net-white/5 pointer-events-none select-none text-right flex flex-col items-end w-full overflow-hidden z-0">
        <div>19</div>
        <div>BRACKETS</div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 relative z-10 pattern-content">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Bold Heading Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-center">
            
            <div className="bg-neon-orange p-10 lg:p-14 border-l-8 border-pure-black shadow-[20px_20px_0px_rgba(202,255,0,1)] relative group">
              <div className="absolute -top-6 -left-6 bg-pure-black text-neon-green font-bebas text-4xl px-4 py-2 border-2 border-neon-green rotate-[-5deg] group-hover:rotate-0 transition-transform">
                CATEGORIES
              </div>
              
              <h2 className="font-bebas text-pure-black text-[clamp(55px,9vw,110px)] leading-[0.85] uppercase tracking-tighter mb-8">
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
                8 <span className="text-pure-black/50 mx-2">/</span> 19 <span className="text-pure-black/50 mx-2">/</span> 4
              </div>
              <div className="font-dm-sans text-xs font-bold uppercase tracking-widest text-pure-black/90 mt-1">
                Teams / Brackets / Cities
              </div>
            </div>

          </div>

          {/* Right: Systematic Category Display with Filter Tabs */}
          <div className="lg:col-span-7 flex flex-col gap-10">

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-pure-black/80 border border-neon-green/30 rounded-xl backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'all'
                    ? 'bg-neon-green text-pure-black shadow-[0_0_15px_rgba(202,255,0,0.4)]'
                    : 'text-net-white/70 hover:text-net-white hover:bg-white/5'
                }`}
              >
                All (19)
              </button>
              <button
                onClick={() => setActiveTab('juniors')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'juniors'
                    ? 'bg-neon-green text-pure-black shadow-[0_0_15px_rgba(202,255,0,0.4)]'
                    : 'text-net-white/70 hover:text-net-white hover:bg-white/5'
                }`}
              >
                ⚡ Juniors (8)
              </button>
              <button
                onClick={() => setActiveTab('open')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'open'
                    ? 'bg-neon-green text-pure-black shadow-[0_0_15px_rgba(202,255,0,0.4)]'
                    : 'text-net-white/70 hover:text-net-white hover:bg-white/5'
                }`}
              >
                🔥 Open (5)
              </button>
              <button
                onClick={() => setActiveTab('seniors')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === 'seniors'
                    ? 'bg-neon-green text-pure-black shadow-[0_0_15px_rgba(202,255,0,0.4)]'
                    : 'text-net-white/70 hover:text-net-white hover:bg-white/5'
                }`}
              >
                🏆 Seniors (6)
              </button>
            </div>

            {/* --- JUNIORS SECTION --- */}
            {(activeTab === 'all' || activeTab === 'juniors') && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-neon-green/30 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">⚡</span>
                    <h3 className="font-bebas text-2xl tracking-wider text-neon-green">
                      JUNIOR BRACKETS <span className="font-dm-sans text-xs font-bold text-net-white/50 lowercase font-normal ml-2">(u12 – u18)</span>
                    </h3>
                  </div>
                  <span className="font-dm-sans text-[11px] font-bold px-2 py-0.5 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded uppercase tracking-wider">
                    8 Categories
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="font-dm-sans text-[11px] font-bold uppercase tracking-[3px] text-neon-green/60 px-1">
                      ♂ Boys
                    </div>
                    {juniorCategoriesLeft.map((cat) => (
                      <CategoryCard key={cat.id} cat={cat} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="font-dm-sans text-[11px] font-bold uppercase tracking-[3px] text-neon-green/60 px-1">
                      ♀ Girls
                    </div>
                    {juniorCategoriesRight.map((cat) => (
                      <CategoryCard key={cat.id} cat={cat} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* --- OPEN DIVISION SECTION --- */}
            {(activeTab === 'all' || activeTab === 'open') && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-neon-green/30 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🔥</span>
                    <h3 className="font-bebas text-2xl tracking-wider text-neon-green">
                      OPEN DIVISION <span className="font-dm-sans text-xs font-bold text-net-white/50 lowercase font-normal ml-2">(all ages)</span>
                    </h3>
                  </div>
                  <span className="font-dm-sans text-[11px] font-bold px-2 py-0.5 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded uppercase tracking-wider">
                    5 Categories
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="font-dm-sans text-[11px] font-bold uppercase tracking-[3px] text-neon-green/60 px-1">
                      ♂ Men's Open
                    </div>
                    {openCategoriesLeft.map((cat) => (
                      <CategoryCard key={cat.id} cat={cat} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="font-dm-sans text-[11px] font-bold uppercase tracking-[3px] text-neon-green/60 px-1">
                      ♀ Women's &amp; Mixed Open
                    </div>
                    {openCategoriesRight.map((cat) => (
                      <CategoryCard key={cat.id} cat={cat} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* --- SENIORS SECTION --- */}
            {(activeTab === 'all' || activeTab === 'seniors') && (
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-neon-green/30 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🏆</span>
                    <h3 className="font-bebas text-2xl tracking-wider text-neon-green">
                      SENIOR BRACKETS <span className="font-dm-sans text-xs font-bold text-net-white/50 lowercase font-normal ml-2">(30+ / 40+ / 50+)</span>
                    </h3>
                  </div>
                  <span className="font-dm-sans text-[11px] font-bold px-2 py-0.5 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded uppercase tracking-wider">
                    6 Categories
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="font-dm-sans text-[11px] font-bold uppercase tracking-[3px] text-neon-green/60 px-1">
                      Men's Seniors
                    </div>
                    {seniorCategoriesLeft.map((cat) => (
                      <CategoryCard key={cat.id} cat={cat} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="font-dm-sans text-[11px] font-bold uppercase tracking-[3px] text-neon-green/60 px-1">
                      Women's &amp; Senior Doubles
                    </div>
                    {seniorCategoriesRight.map((cat) => (
                      <CategoryCard key={cat.id} cat={cat} />
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
