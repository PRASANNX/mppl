'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '18L+', label: 'Prize Pool', prefix: '₹' },
  { value: '8', label: 'Teams', prefix: '' },
  { value: '15+', label: 'Categories', prefix: '' },
  { value: '4', label: 'Cities', prefix: '' },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-neon-green w-full py-16 lg:py-24 pattern-sawtooth-dark text-pure-black border-y-8 border-pure-black relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pattern-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 divide-x-0 lg:divide-x-4 divide-pure-black/20">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center px-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-bebas text-[clamp(60px,10vw,120px)] text-pure-black leading-[0.85] tracking-tighter hover:scale-110 transition-transform origin-center cursor-default">
                {stat.prefix}{stat.value}
              </div>
              <div className="font-dm-sans text-sm md:text-base font-black uppercase tracking-[4px] mt-4 opacity-100 text-pure-black">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
