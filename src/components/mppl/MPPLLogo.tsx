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

  // The current logo is a full-colour image on a dark background, so it should
  // remain unfiltered in both light and dark contexts.
  const filterStyle = 'none';

  const containerStyle: React.CSSProperties = {
    opacity: watermark ? 0.05 : 1,
    boxShadow: glowStyles[glow],
    borderRadius: glow !== 'none' ? '12px' : undefined,
    mixBlendMode: 'lighten', // Restored to remove black background from the image
  };

  if (height) {
    const width = height;
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
          src="/images/MPPL-new-logo.jpeg"
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
        src="/images/MPPL-new-logo.jpeg"
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
