'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    // Add hover listeners for all links, buttons, and items with pointer cursor
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .cursor-pointer'
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial attachment
    addHoverListeners();

    // Re-attach listeners periodically to capture dynamically rendered elements
    const interval = setInterval(addHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
    };
  }, [isTouchDevice]);

  if (isTouchDevice || hidden) return null;

  return (
    <>
      {/* Inner solid dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-green rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.05s linear',
          transform: `translate3d(-50%, -50%, 0) scale(${clicked ? 0.8 : 1})`,
        }}
      />
      
      {/* Outer trailing circle */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference border border-neon-green"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '48px' : '24px',
          height: linkHovered ? '48px' : '24px',
          backgroundColor: linkHovered ? 'rgba(202, 255, 0, 0.2)' : 'transparent',
          borderColor: linkHovered ? '#caff00' : '#caff00',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out, transform 0.08s ease-out',
          transform: `translate3d(-50%, -50%, 0) scale(${clicked ? 0.9 : 1})`,
        }}
      />
    </>
  );
}
