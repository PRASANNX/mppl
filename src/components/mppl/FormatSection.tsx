'use client';

import Link from 'next/link';
import { MapPin, Gavel, Swords, Crown, Trophy, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FormatSection() {
  return (
    <section id="format" className="bg-neon-orange py-32 px-6 lg:px-16 relative overflow-hidden pattern-sawtooth-dark text-pure-black">

      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none z-0 overflow-hidden">
        <h2 className="font-bebas text-[clamp(200px,40vw,600px)] text-pure-black/[0.04] leading-[0.75] m-0 p-0 tracking-tighter whitespace-nowrap text-center">
          THE FORMAT
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 pattern-content text-center">

        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-pure-black/40"></div>
            <span className="font-dm-sans text-xs font-bold uppercase tracking-[4px] text-pure-black/60">How It Works</span>
            <div className="w-10 h-[2px] bg-pure-black/40"></div>
          </div>
          <h2 className="font-bebas text-[clamp(60px,10vw,140px)] leading-[0.8] uppercase tracking-tighter">
            4 ROUNDS.<br />
            4 CITIES.<br />
            <span className="text-pure-black" style={{ WebkitTextStroke: '3px #080808', color: 'transparent', textShadow: '6px 6px 0px rgba(0,0,0,0.1)' }}>
              ONE DESTINATION.
            </span>
          </h2>
        </div>

        {/* Journey Timeline */}
        <div className="relative mt-16 mb-24 max-w-6xl mx-auto">
          <div className="absolute top-12 left-0 w-full h-[2px] bg-pure-black/20 hidden md:block z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {[
              { num: '01', title: 'QUALIFYING ROUNDS', desc: '4 legs across Indore, Bhopal, Jabalpur & Indore. Winner & Runner-up of each category qualify.', icon: <MapPin size={24} className="text-neon-orange" /> },
              { num: '02', title: 'PLAYER AUCTIONS', desc: '48 total qualified players enter the MPPL auction pool. 8 franchises. One draft.', icon: <Gavel size={24} className="text-net-white" /> },
              { num: '03', title: 'LEAGUE MATCHES', desc: '8 franchise squads. 15+ categories. Intense league championship matches.', icon: <Swords size={24} className="text-net-white" /> },
              { num: '04', title: 'GRAND FINALS', desc: 'One court. One champion. ₹18 Lakhs prize pool. One franchise takes the crown.', icon: <Crown size={24} className="text-neon-green" /> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative group">
                <div className="w-24 h-24 rounded-full bg-pure-black border-4 border-neon-orange flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="font-dm-sans text-xs font-bold text-pure-black/60 tracking-[4px] mb-2">{step.num}</div>
                <h3 className="font-bebas text-3xl md:text-4xl mb-4 tracking-wide leading-none">{step.title}</h3>
                <p className="font-dm-sans text-sm md:text-base font-bold opacity-80 leading-relaxed max-w-[250px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Inline Brief Overview Cards ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">

          {/* Qualification Card */}
          <div className="bg-pure-black text-net-white p-8 border-2 border-pure-black shadow-[8px_8px_0px_rgba(0,0,0,0.4)] flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Award className="text-neon-orange shrink-0" size={26} />
              <h3 className="font-bebas text-2xl tracking-wide">QUALIFICATION SYSTEM</h3>
            </div>
            <p className="font-dm-sans text-sm text-net-white/70 leading-relaxed">
              Players compete at each qualifying leg. The <strong className="text-neon-orange">Winner</strong> and <strong className="text-neon-orange">Runner-Up</strong> of every category at every leg automatically earn their spot in the auction draft pool.
            </p>
            <div className="flex flex-col gap-2 mt-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-neon-green shrink-0" />
                <span className="font-dm-sans text-xs text-net-white/80">4 qualifying legs × multiple categories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-neon-green shrink-0" />
                <span className="font-dm-sans text-xs text-net-white/80">48 total players in the draft pool</span>
              </div>
            </div>
          </div>

          {/* Auction Card */}
          <div className="bg-pure-black text-net-white p-8 border-2 border-pure-black shadow-[8px_8px_0px_rgba(0,0,0,0.4)] flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Gavel className="text-neon-green shrink-0" size={26} />
              <h3 className="font-bebas text-2xl tracking-wide">VIRTUAL PLAYER AUCTION</h3>
            </div>
            <p className="font-dm-sans text-sm text-net-white/70 leading-relaxed">
              After all 4 legs conclude, an official <strong className="text-neon-green">MPPL Player Auction</strong> takes place. 8 franchises bid with a virtual currency purse to build their balanced championship squad.
            </p>
            <div className="flex flex-col gap-2 mt-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-neon-green shrink-0" />
                <span className="font-dm-sans text-xs text-net-white/80">8 franchise squads formed via auction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-neon-green shrink-0" />
                <span className="font-dm-sans text-xs text-net-white/80">Strategic bidding for top talent</span>
              </div>
            </div>
          </div>

          {/* Prize Pool Card */}
          <div className="bg-pure-black text-net-white p-8 border-2 border-pure-black shadow-[8px_8px_0px_rgba(0,0,0,0.4)] flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Trophy className="text-yellow-400 shrink-0" size={26} />
              <h3 className="font-bebas text-2xl tracking-wide">₹18 LAKHS+ PRIZE POOL</h3>
            </div>
            <div className="flex flex-col gap-2 font-dm-sans text-sm mt-1">
              <div className="flex items-center justify-between py-2 border-b border-net-white/10">
                <span className="text-yellow-400 font-bold">🥇 Champions</span>
                <span className="text-neon-orange font-bold">₹10.00 Lakhs</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-net-white/10">
                <span className="text-slate-300 font-bold">🥈 Runners-up</span>
                <span className="text-neon-orange font-bold">₹6.00 Lakhs</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-amber-600 font-bold">🥉 Third Place</span>
                <span className="text-neon-orange font-bold">₹2.00 Lakhs</span>
              </div>
            </div>
            <p className="font-dm-sans text-xs text-net-white/50 mt-auto">Split between franchise & players. Full breakdown on the format page.</p>
          </div>

        </div>

        {/* Read More CTA */}
        <div className="mt-4 max-w-5xl mx-auto bg-neon-orange/80 border-4 border-pure-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-left backdrop-blur-sm gap-6">
          <div>
            <h3 className="font-bebas text-4xl md:text-5xl tracking-wide mb-2">WANT THE FULL PICTURE?</h3>
            <p className="font-dm-sans font-bold text-pure-black/80">Detailed rules, qualification breakdown, auction mechanics & complete prize distribution.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/format"
              className="inline-flex items-center gap-2 text-center bg-pure-black text-neon-orange font-bebas text-2xl px-8 py-4 hover:bg-net-white hover:text-pure-black transition-colors shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
            >
              READ MORE <ArrowRight size={22} />
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-net-white text-pure-black border-2 border-pure-black font-bebas text-2xl px-8 py-4 hover:bg-pure-black hover:text-neon-orange transition-colors shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
            >
              REGISTER NOW →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
