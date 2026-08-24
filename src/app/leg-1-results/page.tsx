'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/mppl/Navbar';
import Footer from '@/components/mppl/Footer';
import { Trophy, Medal, ChevronDown } from 'lucide-react';

const categories = [
  {
    id: 'open-men-singles',
    title: 'Open Men Singles',
    accentColor: '#caff00',
    glowClass: 'glow-green',
    image: '/images/leg1-winners/open-men-singles.jpeg',
    winner: 'Raghav Kadam',
    runnerUp: 'Atharv Tare',
  },
  {
    id: '30-plus-men-singles',
    title: '30+ Men Singles',
    accentColor: '#FF6000',
    glowClass: 'glow-orange',
    image: '/images/leg1-winners/30-plus-men-singles.jpeg',
    winner: 'Madhav Patidar',
    runnerUp: 'Chirag Sharma',
  },
  {
    id: 'women-doubles',
    title: 'Women Doubles',
    accentColor: '#FF1493',
    glowClass: 'glow-pink',
    image: '/images/leg1-winners/women-doubles.jpeg',
    winner: 'Harpreet & Jahanvi',
    runnerUp: 'Ashriyaa Singh & Shreya',
  },
  {
    id: 'mixed-doubles',
    title: 'Mixed Doubles',
    accentColor: '#FFE600',
    glowClass: 'glow-yellow',
    image: '/images/leg1-winners/mixed-doubles.jpeg',
    winner: 'Nakshatra & Darshana',
    runnerUp: 'Kaushal & Khusbhoo',
  },
  {
    id: '40-plus-doubles',
    title: '40+ Doubles',
    accentColor: '#caff00',
    glowClass: 'glow-green',
    image: '/images/leg1-winners/40-plus-doubles.jpeg',
    winner: 'Umesh Jha & Neeraj',
    runnerUp: 'Dr. Sanjay & Vivek Rawat',
  },
  {
    id: '50-plus-doubles',
    title: '50+ Doubles',
    accentColor: '#FF6000',
    glowClass: 'glow-orange',
    image: '/images/leg1-winners/50-plus-doubles.jpeg',
    winner: 'Pawan Lahoti & Rahul Makhija',
    runnerUp: 'Manish Jain & Manish Jaiswal',
  },
];

export default function Leg1ResultsPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <div className="bg-deep-court min-h-screen text-net-white flex flex-col w-full overflow-hidden">
      <Navbar />

      <main className="flex-1 pt-28 md:pt-32 pb-24 relative">
        {/* Background Decorative Typography */}
        <div className="absolute top-16 right-0 font-bebas text-[clamp(120px,25vw,350px)] text-net-white/[0.02] leading-none pointer-events-none select-none text-right overflow-hidden z-0 whitespace-nowrap">
          CHAMPIONS
        </div>
        <div className="absolute bottom-32 left-0 font-bebas text-[clamp(100px,20vw,300px)] text-net-white/[0.02] leading-none pointer-events-none select-none overflow-hidden z-0 whitespace-nowrap">
          LEG 1
        </div>

        <div className="max-w-[1300px] mx-auto px-5 lg:px-10 relative z-10">
          {/* ── Hero Header ── */}
          <div className="mb-16 md:mb-24">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-neon-green shadow-glow-green" />
              <span className="font-dm-sans text-xs font-bold uppercase tracking-[5px] text-neon-green">
                The Auction Stars
              </span>
            </div>

            {/* Title */}
            <h1 className="font-bebas text-[clamp(52px,9vw,130px)] leading-[0.85] text-net-white uppercase tracking-tight mb-6">
              LEG 1{' '}
              <span
                className="relative inline-block"
                style={{
                  color: '#caff00',
                  textShadow: '0 0 40px rgba(202,255,0,0.3)',
                }}
              >
                RESULTS
                <span
                  className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #caff00, #FF6000)',
                    boxShadow: '0 0 20px rgba(202,255,0,0.4)',
                  }}
                />
              </span>
            </h1>

            <p className="font-dm-sans text-lg md:text-xl text-net-white/70 max-w-2xl leading-relaxed">
              Celebrating the champions and runners-up of MPPL Leg 1 — The Auction Stars. Where champions are made.
            </p>

            {/* Scroll indicator */}
            <div className="mt-10 flex items-center gap-3 text-net-white/30 animate-bounce">
              <ChevronDown size={20} />
              <span className="font-dm-sans text-xs uppercase tracking-[3px]">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* ── Category Results Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                className="group relative"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: 'slide-up 0.6s ease forwards',
                  opacity: 0,
                }}
              >
                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500"
                  style={{
                    border: `1px solid ${cat.accentColor}22`,
                    background: 'linear-gradient(145deg, rgba(13,11,31,0.95), rgba(8,8,8,0.98))',
                  }}
                  onClick={() =>
                    setExpandedCard(expandedCard === cat.id ? null : cat.id)
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${cat.accentColor}66`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${cat.accentColor}15, 0 20px 60px rgba(0,0,0,0.5)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${cat.accentColor}22`;
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Category Number Tag */}
                  <div
                    className="absolute top-4 right-4 z-20 font-bebas text-5xl leading-none opacity-10"
                    style={{ color: cat.accentColor }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Image Section */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={`${cat.title} - Winner & Runner Up`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background: `linear-gradient(0deg, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 40%, transparent 60%)`,
                      }}
                    />
                    {/* Accent line top */}
                    <div
                      className="absolute top-0 left-0 w-full h-[3px] z-20"
                      style={{
                        background: `linear-gradient(90deg, ${cat.accentColor}, transparent)`,
                      }}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-6">
                    {/* Category Title */}
                    <h3
                      className="font-bebas text-2xl md:text-3xl tracking-wide uppercase mb-4"
                      style={{ color: cat.accentColor }}
                    >
                      {cat.title}
                    </h3>

                    {/* Winner & Runner-up */}
                    <div className="space-y-3">
                      {/* Winner */}
                      <div
                        className="flex items-center gap-3 rounded-md px-4 py-3 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${cat.accentColor}18, ${cat.accentColor}08)`,
                          border: `1px solid ${cat.accentColor}30`,
                        }}
                      >
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                          style={{
                            background: `${cat.accentColor}20`,
                            boxShadow: `0 0 12px ${cat.accentColor}30`,
                          }}
                        >
                          <Trophy
                            size={16}
                            style={{ color: cat.accentColor }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="font-dm-sans text-[10px] font-bold uppercase tracking-[3px]"
                            style={{ color: cat.accentColor }}
                          >
                            Winner
                          </div>
                          <div className="font-bebas text-lg md:text-xl text-net-white tracking-wide truncate">
                            {cat.winner}
                          </div>
                        </div>
                      </div>

                      {/* Runner-up */}
                      <div className="flex items-center gap-3 rounded-md px-4 py-3 bg-white/[0.04] border border-white/[0.08] transition-all duration-300 hover:border-white/20">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 bg-white/10">
                          <Medal size={16} className="text-net-white/60" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-dm-sans text-[10px] font-bold uppercase tracking-[3px] text-net-white/40">
                            Runner Up
                          </div>
                          <div className="font-bebas text-lg md:text-xl text-net-white/80 tracking-wide truncate">
                            {cat.runnerUp}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA Banner ── */}
          <div
            className="mt-16 md:mt-24 relative overflow-hidden rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #caff00, #a8d600)',
            }}
          >
            {/* Sawtooth pattern on neon bg */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `repeating-linear-gradient(
                  -55deg,
                  transparent 0px,
                  transparent 28px,
                  rgba(0,0,0,0.04) 28px,
                  rgba(0,0,0,0.08) 32px,
                  transparent 32px,
                  transparent 60px
                )`,
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12">
              <div>
                <h2 className="font-bebas text-4xl md:text-5xl text-pure-black tracking-wide uppercase">
                  Where Champions Are Made
                </h2>
                <p className="font-dm-sans text-sm md:text-base text-black/70 mt-2 max-w-lg">
                  MPPL Leg 1 — The Auction Stars concluded with fierce competition and unforgettable moments on the court.
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-pure-black text-neon-green font-montserrat font-extrabold text-sm uppercase tracking-wider rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(202,255,0,0.4)]"
              >
                Register for Leg 2
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
