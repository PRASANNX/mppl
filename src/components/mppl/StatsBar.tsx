'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: '₹18,00,000+', prefix: '₹', numericValue: 1800000, suffix: '+', label: 'Prize Pool' },
  { value: '10', numericValue: 10, label: 'Teams' },
  { value: '15+', numericValue: 15, suffix: '+', label: 'Categories' },
  { value: '4', numericValue: 4, label: 'Qualifying Rounds' },
  { value: '200+', numericValue: 200, suffix: '+', label: 'Players' },
  { value: '10-60', numericValue: 60, prefix: 'Ages 10-', label: 'Age Range' },
];

function useCountUp(end: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatDisplay({ stat, isVisible, index }: { stat: StatItem; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.numericValue ?? 0, 1800, isVisible);

  return (
    <div
      className={`flex flex-col items-center justify-center px-6 py-4 lg:py-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <span className="font-bebas text-[42px] leading-none text-league-black tracking-tight">
        {stat.numericValue !== undefined ? (
          <>
            {stat.prefix ?? ''}
            {count}
            {stat.suffix ?? ''}
          </>
        ) : (
          stat.value
        )}
      </span>
      <span className="font-dm-sans text-[11px] font-semibold tracking-[3px] uppercase text-black/65 mt-1">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-neon-green w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-black/15">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="py-6 lg:py-8 border-b md:border-b-0 border-black/15 last:border-b-0"
            >
              <StatDisplay stat={stat} isVisible={isVisible} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
