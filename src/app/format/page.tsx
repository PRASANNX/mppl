'use client';

import Navbar from "@/components/mppl/Navbar";
import Footer from "@/components/mppl/Footer";
import Link from "next/link";
import { Trophy, Award, Gavel, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function FormatPage() {
  return (
    <div className="bg-deep-court min-h-screen text-net-white flex flex-col w-full overflow-hidden">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-16 relative">
        
        {/* Background Decorative Typography */}
        <div className="absolute top-20 right-0 font-bebas text-[clamp(150px,30vw,400px)] text-net-white/[0.03] leading-none pointer-events-none select-none text-right overflow-hidden z-0">
          FORMAT
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-neon-orange"></div>
              <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-orange">
                Official Guide
              </span>
            </div>

            <h1 className="font-bebas text-[clamp(60px,10vw,140px)] leading-[0.85] text-net-white uppercase tracking-tight mb-8">
              MPPL TOURNAMENT <br />
              <span className="text-neon-orange">FORMAT &amp; RULES</span>
            </h1>

            <p className="font-dm-sans text-xl md:text-2xl text-net-white/80 font-bold max-w-3xl leading-relaxed">
              The Madhya Pradesh Premier League (MPPL) is a premier franchise-based pickleball tournament designed to identify, nurture, and promote the finest talent from across the state.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Franchise-Based", desc: "Professional league model with 8 dedicated franchise squads." },
              { title: "4 Legs", desc: "Competitive qualifying legs across MP to select top contenders." },
              { title: "Virtual Auction", desc: "192 qualified players enter the official draft auction pool." },
              { title: "₹18 Lakhs+ Pool", desc: "Substantial cash prizes for both players and franchise owners." },
            ].map((item, index) => (
              <div key={index} className="bg-pure-black border-2 border-neon-orange/40 p-6 flex flex-col justify-between hover:border-neon-orange transition-all">
                <div className="font-bebas text-3xl text-neon-orange mb-2">0{index + 1}</div>
                <div>
                  <h3 className="font-bebas text-2xl text-net-white mb-2">{item.title}</h3>
                  <p className="font-dm-sans text-sm text-net-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 1: Qualifying Legs */}
          <div className="bg-pure-black border-2 border-neon-green p-8 md:p-12 mb-16 shadow-[16px_16px_0px_rgba(202,255,0,0.15)]">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-neon-green" size={28} />
              <h2 className="font-bebas text-4xl text-net-white tracking-wide">1. QUALIFYING LEGS</h2>
            </div>
            
            <p className="font-dm-sans text-base md:text-lg text-net-white/80 mb-8 leading-relaxed">
              MPPL will host four qualifying legs across key hubs in Madhya Pradesh. Each qualifying leg will feature fierce matches where players battle for a coveted spot in the official MPPL Player Auction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { leg: "Leg 1", city: "Indore", detail: "Aug 21, 22, 23 — Surya Pickleball Academy" },
                { leg: "Leg 2", city: "Bhopal", detail: "Sept 2026 — House of Dink" },
                { leg: "Leg 3", city: "Jabalpur", detail: "Dates TBA — Venue Announcement Soon" },
                { leg: "Leg 4", city: "Indore", detail: "Dates TBA — Venue Announcement Soon" },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#161616] p-5 border border-neon-green/30">
                  <div className="font-dm-sans text-xs font-bold text-neon-green uppercase tracking-widest mb-1">{item.leg}</div>
                  <div className="font-bebas text-3xl text-net-white mb-2">{item.city}</div>
                  <div className="font-dm-sans text-xs text-net-white/60">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Leg-I Match Format */}
          <div className="bg-pure-black border-2 border-neon-orange p-8 md:p-12 mb-16 shadow-[16px_16px_0px_rgba(255,96,0,0.15)]">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-neon-orange" size={28} />
              <h2 className="font-bebas text-4xl text-net-white tracking-wide">2. MATCH FORMAT — LEG-I</h2>
            </div>

            <p className="font-dm-sans text-base md:text-lg text-net-white/80 mb-8 leading-relaxed">
              To ensure a fast-paced, competitive, and spectator-friendly tournament, MPPL Leg-I will use the following match formats:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#161616] p-6 border-t-4 border-neon-green">
                <div className="font-dm-sans text-xs font-bold text-neon-green uppercase tracking-widest mb-2">League Stage</div>
                <h3 className="font-bebas text-3xl text-net-white mb-4">RALLY POINT · 15</h3>
                <ul className="space-y-2 font-dm-sans text-sm text-net-white/75">
                  <li>• Every rally won earns one point, regardless of which team is serving.</li>
                  <li>• Each match is one game to 15 points.</li>
                  <li>• At 14–14, the next point wins the game.</li>
                </ul>
              </div>

              <div className="bg-[#161616] p-6 border-t-4 border-neon-orange">
                <div className="font-dm-sans text-xs font-bold text-neon-orange uppercase tracking-widest mb-2">Semi-Finals</div>
                <h3 className="font-bebas text-3xl text-net-white mb-4">SERVICE POINT · 15</h3>
                <ul className="space-y-2 font-dm-sans text-sm text-net-white/75">
                  <li>• Both semi-final matches use the Traditional Service Point Scoring System.</li>
                  <li>• Each match is one game to 15 points.</li>
                  <li>• At 14–14, a team must win by 2 points.</li>
                </ul>
              </div>

              <div className="bg-[#161616] p-6 border-t-4 border-neon-green">
                <div className="font-dm-sans text-xs font-bold text-neon-green uppercase tracking-widest mb-2">Championship Final</div>
                <h3 className="font-bebas text-3xl text-net-white mb-4">BEST OF THREE · 11</h3>
                <ul className="space-y-2 font-dm-sans text-sm text-net-white/75">
                  <li>• Each game is played to 11 points.</li>
                  <li>• A team must win by 2 points; at 10–10, play continues until a 2-point lead.</li>
                  <li>• The first team to win two games is crowned MPPL Champion.</li>
                </ul>
              </div>
            </div>

            <div className="bg-neon-orange/10 border border-neon-orange p-5 rounded">
              <p className="font-dm-sans text-sm text-net-white/90 leading-relaxed">
                <strong className="text-neon-orange">Tournament Philosophy:</strong> This progressive format delivers quick league-stage matches, rewards consistency and tactical play in the knockout rounds, and creates a thrilling championship final while maintaining competitive fairness.
              </p>
            </div>
          </div>

          {/* Section 3: Player Qualification */}
          <div className="bg-pure-black border-2 border-neon-orange p-8 md:p-12 mb-16 shadow-[16px_16px_0px_rgba(255,96,0,0.15)]">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-neon-orange" size={28} />
              <h2 className="font-bebas text-4xl text-net-white tracking-wide">3. PLAYER QUALIFICATION SYSTEM</h2>
            </div>

            <p className="font-dm-sans text-base md:text-lg text-net-white/80 mb-8 leading-relaxed">
              At the conclusion of each qualifying leg, high performers directly punch their ticket to the main event draft pool:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#161616] p-6 border-l-4 border-yellow-400">
                <div className="font-bebas text-2xl text-yellow-400 mb-2">🥇 WINNER (CHAMPION)</div>
                <p className="font-dm-sans text-sm text-net-white/80">
                  The winner of each category automatically qualifies for the official MPPL Player Auction.
                </p>
              </div>

              <div className="bg-[#161616] p-6 border-l-4 border-slate-300">
                <div className="font-bebas text-2xl text-slate-300 mb-2">🥈 RUNNER-UP</div>
                <p className="font-dm-sans text-sm text-net-white/80">
                  The runner-up of each category also secures direct qualification into the auction draft.
                </p>
              </div>
            </div>

            <div className="bg-neon-orange/10 border border-neon-orange p-4 rounded flex items-start gap-3">
              <CheckCircle2 className="text-neon-orange shrink-0 mt-1" size={20} />
              <p className="font-dm-sans text-sm text-net-white/90">
                <strong className="text-neon-orange">Total Draft Pool:</strong> A total of <strong>192 qualified players</strong> (Winners and Runners-up across all legs) will enter the auction after all four qualifying legs conclude.
              </p>
            </div>
          </div>

          {/* Section 4: Player Auction */}
          <div className="bg-pure-black border-2 border-neon-green p-8 md:p-12 mb-16 shadow-[16px_16px_0px_rgba(202,255,0,0.15)]">
            <div className="flex items-center gap-3 mb-6">
              <Gavel className="text-neon-green" size={28} />
              <h2 className="font-bebas text-4xl text-net-white tracking-wide">4. MPPL PLAYER AUCTION</h2>
            </div>

            <ul className="space-y-4 font-dm-sans text-base text-net-white/80 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-green mt-2.5 shrink-0"></div>
                <span><strong>Draft Pool:</strong> Once all four qualifying legs have concluded, an official MPPL Player Auction ceremony will take place.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-green mt-2.5 shrink-0"></div>
                <span><strong>Auction Purse:</strong> Participating franchises will receive a virtual currency auction budget to construct their roster.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-green mt-2.5 shrink-0"></div>
                <span><strong>Competitive Bidding:</strong> Franchises will bid strategically for the 192 qualified players to build balanced squads.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-neon-green mt-2.5 shrink-0"></div>
                <span><strong>Championship Play:</strong> These 8 official franchise teams will battle in the MPPL Championship.</span>
              </li>
            </ul>
          </div>

          {/* Section 5: Total Prize Pool */}
          <div className="bg-pure-black border-2 border-neon-orange p-8 md:p-12 mb-16 shadow-[16px_16px_0px_rgba(255,96,0,0.15)]">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-neon-orange" size={28} />
              <h2 className="font-bebas text-4xl text-net-white tracking-wide">5. TOTAL PRIZE POOL</h2>
            </div>

            <div className="bg-[#161616] border border-neon-orange p-10 md:p-16 text-center">
              <div className="font-bebas text-[clamp(80px,14vw,160px)] leading-none text-neon-orange">₹18L+</div>
              <div className="font-dm-sans text-sm md:text-base font-bold uppercase tracking-[4px] text-net-white/70 mt-4">Total Prize Pool</div>
            </div>
          </div>

          {/* Section 6: MPPL Vision */}
          <div className="bg-neon-orange text-pure-black p-8 md:p-12 mb-16 border-4 border-pure-black shadow-[16px_16px_0px_rgba(0,0,0,0.5)]">
            <h2 className="font-bebas text-4xl mb-4 uppercase tracking-wide">THE MPPL VISION</h2>
            <blockquote className="font-dm-sans text-xl md:text-2xl font-bold leading-relaxed italic">
              "To create Madhya Pradesh's premier franchise league by providing talented players with a professional platform while offering franchises, sponsors, and partners a unique opportunity to invest in the future of sports."
            </blockquote>
          </div>

          {/* CTA Footer Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-pure-black p-8 border-2 border-neon-green">
            <div>
              <h3 className="font-bebas text-3xl text-net-white mb-1">GET INVOLVED WITH MPPL</h3>
              <p className="font-dm-sans text-sm text-net-white/70">Register as a player or apply for franchise ownership &amp; brand sponsorship.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <a
                href="https://forms.gle/5WBTzz4bEQmgDpF58"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-neon-green text-neon-green hover:bg-neon-green hover:text-pure-black px-6 py-4 text-base font-bold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Franchise &amp; Sponsor Interest
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-4 text-base inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Register Now <ArrowRight size={20} />
              </a>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
