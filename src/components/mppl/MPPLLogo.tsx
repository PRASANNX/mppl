'use client';

import Image from 'next/image';

interface MPPLLogoProps {
  variant?: 'light' | 'dark'; // 'light' means the logo should appear light (e.g. white text for dark bg). 'dark' means black text.
  className?: string;
  height?: number;
  priority?: boolean;
  /** Use as a watermark/pattern element with very low opacity */
  watermark?: boolean;
  /** Glow color around logo */
  glow?: 'green' | 'orange' | 'none';
}

export default function MPPLLogo({
  variant = 'light',
  className = '',
  height,
  priority = false,
  watermark = false,
  glow = 'none',
}: MPPLLogoProps) {
  const glowStyles: Record<string, string> = {
    green: '0 0 60px rgba(202, 255, 0, 0.3), 0 0 120px rgba(202, 255, 0, 0.1)',
    orange: '0 0 60px rgba(255, 96, 0, 0.3), 0 0 120px rgba(255, 96, 0, 0.1)',
    none: 'none',
  };

  // If the source image is black text on transparent, we invert it for the 'light' variant
  const filterStyle = variant === 'light' 
    ? 'invert(1) brightness(2)' // Makes black text white and pops
    : 'none';

  const containerStyle: React.CSSProperties = {
    opacity: watermark ? 0.05 : 1,
    boxShadow: glowStyles[glow],
    borderRadius: glow !== 'none' ? '12px' : undefined,
    mixBlendMode: 'lighten', // Restored to remove black background from the image
  };

  if (height) {
    const width = Math.round(height * 0.75); // Approximate aspect ratio
    return (
      <div
        className={`relative select-none ${className}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          ...containerStyle,
        }}
      >
        <Image
          src="/images/logo-transparent.png"
          alt="MPPL Logo"
          fill
          className="object-contain"
          style={{ filter: filterStyle }}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative select-none w-full h-full ${className}`}
      style={containerStyle}
    >
      <Image
        src="/images/logo-transparent.png"
        alt="MPPL Logo"
        fill
        className="object-contain"
        style={{ filter: filterStyle }}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}
