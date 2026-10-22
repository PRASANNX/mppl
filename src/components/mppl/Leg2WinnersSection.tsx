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
    image: '/images/leg2-winners/open-men-singles.jpeg',
    winner: 'Shrey Surya Mishra',
    runnerUp: 'Rounak Wadhwani',
  },
  {
    id: '30-plus-men-singles',
    title: '30+ Men Singles',
    accent: '#FF6000',
    image: '/images/leg2-winners/30-plus-men-singles.jpeg',
    winner: 'Bhavesh Gour',
    runnerUp: 'Paras Kadam',
  },
  {
    id: 'open-women-singles',
    title: 'Open Women Singles',
    accent: '#FF1493',
    image: '/images/leg2-winners/open-women-singles.jpeg',
    winner: 'Ishik Minz',
    runnerUp: 'Sanya Motwani',
  },
  {
    id: '30-plus-women-singles',
    title: '30+ Women Singles',
    accent: '#E040FB',
    image: '/images/leg2-winners/30-plus-women-singles.jpeg',
    winner: 'Sanya Motwani',
    runnerUp: 'Devmala Singh',
  },
  {
    id: 'open-mixed-doubles',
    title: 'Open Mix Doubles',
    accent: '#FFE600',
    image: '/images/leg2-winners/open-mixed-doubles.jpeg',
    winner: 'Shrey Surya Mishra & Aditi Matta',
    runnerUp: 'Dr Pallav Dube & Ishika Minz',
  },
  {
    id: '40-plus-men-singles',
    title: '40+ Men Singles',
    accent: '#00E5FF',
    image: '/images/leg2-winners/40-plus-men-singles.jpeg',
    winner: 'Dr. Tanay Shah',
    runnerUp: 'Rahul Malhotra',
  },
  {
    id: '40-plus-men-doubles',
    title: '40+ Men Doubles',
    accent: '#caff00',
    image: '/images/leg2-winners/40-plus-men-doubles.jpeg',
    winner: 'Dr. Tanay Shah & Rahul Malhotra',
    runnerUp: 'Dr Sudip Bhargava & Agraj Bhartiya',
  },
  {
    id: '50-plus-men-doubles',
    title: '50+ Men Doubles',
    accent: '#FF6000',
    image: '/images/leg2-winners/50-plus-men-doubles.jpeg',
    winner: 'Mukesh Soni & Ashish Matta',
    runnerUp: 'Dr Sudip Bhargava & Agraj Bhartiya',
  },
  {
    id: 'u14-boys-singles',
    title: 'U14 Boys Singles',
    accent: '#76FF03',
    image: '/images/leg2-winners/u14-boys-singles.jpeg',
    winner: 'Harsukh Singh Chawla',
    runnerUp: 'Prakhar Raipuria',
  },
  {
    id: 'u16-girls-singles',
    title: 'U16 Girls Singles',
    accent: '#FF1493',
    image: '/images/leg2-winners/u16-girls-singles.jpeg',
    winner: 'Aditi Matta',
    runnerUp: 'Vedika Balani',
  },
  {
    id: 'u18-boys-singles',
    title: 'U18 Boys Singles',
    accent: '#FFE600',
    image: '/images/leg2-winners/u18-boys-singles.jpeg',
    winner: 'Siddharth Nikhoriya',
    runnerUp: 'Vihaan Goel',
  },
];

// Duplicate for seamless infinite scroll
const scrollCards = [...categories, ...categories];

export default function Leg2WinnersSection() {
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
          background: 'linear-gradient(90deg, transparent, #caff00, #FF6000, #FF1493, #00E5FF, transparent)',
        }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] bg-neon-green shadow-glow-green" />
                <span className="font-dm-sans text-xs font-bold uppercase tracking-[5px] text-neon-green">
                  Leg 2 — The Rising Stars
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
                Winners & runners-up who dominated the court in Leg 2.
              </p>
            </div>

            {/* View All Links */}
            <div className="flex flex-col gap-2 self-start md:self-auto">
              <Link
                href="/leg-2-results"
                className="group inline-flex items-center gap-2 font-dm-sans text-sm font-bold uppercase tracking-[3px] text-neon-green hover:text-net-white transition-colors duration-300"
              >
                View Leg 2 Results
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/leg-1-results"
                className="group inline-flex items-center gap-2 font-dm-sans text-[11px] font-bold uppercase tracking-[3px] text-net-white/40 hover:text-neon-orange transition-colors duration-300"
              >
                View Leg 1 Results
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
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
