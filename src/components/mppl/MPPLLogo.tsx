'use client';

import Image from 'next/image';

interface MPPLLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  height?: number; // Optional height in px. If omitted, it will fill the parent container.
  priority?: boolean;
}

export default function MPPLLogo({ variant = 'light', className = '', height, priority = false }: MPPLLogoProps) {
  if (height) {
    const width = Math.round(height * 0.75);
    return (
      <div
        className={`relative overflow-hidden select-none ${className}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <div
          className="absolute top-0 h-full w-[200%] max-w-none"
          style={{
            left: variant === 'light' ? '-100%' : '0%',
          }}
        >
          <Image
            src="/images/mppl-logo-dark.jpeg"
            alt="MPPL Logo"
            width={width * 2}
            height={height}
            className="h-full w-full object-cover"
            priority={priority}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden select-none w-full h-full ${className}`}>
      <div
        className="absolute top-0 h-full w-[200%] max-w-none"
        style={{
          left: variant === 'light' ? '-100%' : '0%',
        }}
      >
        <Image
          src="/images/mppl-logo-dark.jpeg"
          alt="MPPL Logo"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
        />
      </div>
    </div>
  );
}
