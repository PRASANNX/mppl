'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Medal, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'open-men-singles',
    title: 'Open Men Singles',
    accent: '#caff00',
    image: '/images/leg1-winners/open-men-singles.jpeg',
    winner: 'Raghav Kadam',
    runnerUp: 'Atharv Tare',
  },
  {
    id: '30-plus-men-singles',
    title: '30+ Men Singles',
    accent: '#FF6000',
    image: '/images/leg1-winners/30-plus-men-singles.jpeg',
    winner: 'Madhav Patidar',
    runnerUp: 'Chirag Sharma',
  },
  {
    id: 'women-doubles',
    title: 'Women Doubles',
    accent: '#FF1493',
    image: '/images/leg1-winners/women-doubles.jpeg',
    winner: 'Harpreet & Jahanvi',
    runnerUp: 'Ashriyaa Singh & Shreya',
  },
  {
    id: 'mixed-doubles',
    title: 'Mixed Doubles',
    accent: '#FFE600',
    image: '/images/leg1-winners/mixed-doubles.jpeg',
    winner: 'Nakshatra & Darshana',
    runnerUp: 'Kaushal & Khusbhoo',
  },
  {
    id: '40-plus-doubles',
    title: '40+ Doubles',
    accent: '#caff00',
    image: '/images/leg1-winners/40-plus-doubles.jpeg',
    winner: 'Umesh Jha & Neeraj',
    runnerUp: 'Dr. Sanjay & Vivek Rawat',
  },
  {
    id: '50-plus-doubles',
    title: '50+ Doubles',
    accent: '#FF6000',
    image: '/images/leg1-winners/50-plus-doubles.jpeg',
    winner: 'Pawan Lahoti & Rahul Makhija',
    runnerUp: 'Manish Jain & Manish Jaiswal',
  },
];

// Duplicate for seamless infinite scroll
const scrollCards = [...categories, ...categories];

export default function Leg1WinnersSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animRef = useRef<number>(0);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.6; // px per frame

    const animate = () => {
      if (!isPaused) {
        scrollPosRef.current += speed;
        // Reset position when we've scrolled past the first set
        const halfWidth = track.scrollWidth / 2;
        if (scrollPosRef.current >= halfWidth) {
          scrollPosRef.current = 0;
        }
        track.style.transform = `translateX(-${scrollPosRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-pure-black">
      {/* Diagonal stripe accent — sporty feel */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 40px,
            rgba(202,255,0,1) 40px,
            rgba(202,255,0,1) 42px,
            transparent 42px,
            transparent 80px
          )`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #caff00, #FF6000, #FF1493, transparent)',
        }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] bg-neon-orange shadow-glow-orange" />
                <span className="font-dm-sans text-xs font-bold uppercase tracking-[5px] text-neon-orange">
                  Leg 1 — The Auction Stars
                </span>
              </div>
              <h2 className="font-bebas text-[clamp(42px,7vw,80px)] leading-[0.9] text-net-white uppercase tracking-tight">
                Our{' '}
                <span
                  className="relative inline-block"
                  style={{
                    color: '#caff00',
                    textShadow: '0 0 30px rgba(202,255,0,0.25)',
                  }}
                >
                  Champions
                </span>
              </h2>
              <p className="font-dm-sans text-base text-net-white/50 mt-3 max-w-md">
                Winners & runners-up who lit up the court in Leg 1.
              </p>
            </div>

            {/* View All Link */}
            <Link
              href="/leg-1-results"
              className="group inline-flex items-center gap-2 font-dm-sans text-sm font-bold uppercase tracking-[3px] text-neon-green hover:text-net-white transition-colors duration-300 self-start md:self-auto"
            >
              View All Results
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* ── Sliding Cards Track ── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleMouseLeave();
          }}
        >
          <div
            ref={trackRef}
            className="flex gap-5 md:gap-7 will-change-transform"
            style={{ width: 'max-content', paddingLeft: '20px', paddingRight: '20px' }}
          >
            {scrollCards.map((cat, idx) => {
              const uniqueId = `${cat.id}-${idx}`;
              const isHovered = hoveredCard === uniqueId;
              const rotateX = isHovered ? -mousePos.y * 8 : 0;
              const rotateY = isHovered ? mousePos.x * 8 : 0;

              return (
                <div
                  key={uniqueId}
                  className="flex-shrink-0 w-[300px] md:w-[340px]"
                  style={{ perspective: '800px' }}
                >
                  <div
                    className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
                    style={{
                      transform: isHovered
                        ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
                        : 'rotateX(0deg) rotateY(0deg) scale(1)',
                      transformStyle: 'preserve-3d',
                      border: `2px solid ${isHovered ? cat.accent : 'rgba(255,255,255,0.06)'}`,
                      boxShadow: isHovered
                        ? `0 0 40px ${cat.accent}30, 0 25px 60px rgba(0,0,0,0.6), inset 0 0 60px ${cat.accent}08`
                        : '0 4px 20px rgba(0,0,0,0.3)',
                    }}
                    onMouseMove={(e) => handleMouseMove(e, uniqueId)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Accent top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] z-30 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${cat.accent}, transparent)`,
                        opacity: isHovered ? 1 : 0.4,
                      }}
                    />

                    {/* Shine effect on hover */}
                    <div
                      className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500"
                      style={{
                        background: isHovered
                          ? `radial-gradient(circle at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, ${cat.accent}15 0%, transparent 60%)`
                          : 'none',
                        opacity: isHovered ? 1 : 0,
                      }}
                    />

                    {/* Image */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-cover transition-transform duration-700"
                        style={{
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                        sizes="340px"
                      />
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 z-10"
                        style={{
                          background:
                            'linear-gradient(0deg, rgba(8,8,8,1) 0%, rgba(8,8,8,0.7) 35%, rgba(8,8,8,0.1) 55%, transparent 70%)',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                      {/* Category badge */}
                      <div
                        className="inline-block font-dm-sans text-[10px] font-bold uppercase tracking-[3px] px-3 py-1 rounded-full mb-3 transition-all duration-300"
                        style={{
                          background: `${cat.accent}15`,
                          color: cat.accent,
                          border: `1px solid ${cat.accent}40`,
                          boxShadow: isHovered ? `0 0 15px ${cat.accent}25` : 'none',
                        }}
                      >
                        {cat.title}
                      </div>

                      {/* Winner */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <Trophy
                          size={14}
                          style={{ color: cat.accent, flexShrink: 0 }}
                        />
                        <div>
                          <div
                            className="font-dm-sans text-[9px] font-bold uppercase tracking-[2px]"
                            style={{ color: cat.accent }}
                          >
                            Winner
                          </div>
                          <div className="font-bebas text-lg text-net-white tracking-wide leading-tight">
                            {cat.winner}
                          </div>
                        </div>
                      </div>

                      {/* Runner-up */}
                      <div className="flex items-center gap-2.5">
                        <Medal
                          size={14}
                          className="text-net-white/40 flex-shrink-0"
                        />
                        <div>
                          <div className="font-dm-sans text-[9px] font-bold uppercase tracking-[2px] text-net-white/35">
                            Runner Up
                          </div>
                          <div className="font-bebas text-base text-net-white/60 tracking-wide leading-tight">
                            {cat.runnerUp}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-pure-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-pure-black to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #FF6000, #caff00, transparent)',
        }}
      />
    </section>
  );
}
