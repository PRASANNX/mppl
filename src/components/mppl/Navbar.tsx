'use client';

import { useState } from 'react';
import Link from 'next/link';
import MPPLLogo from './MPPLLogo';

const navLinks = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Format', href: '/format' },
  { label: 'About', href: '#about' },
  { label: 'Register', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-league-black/90 backdrop-blur-md"
        style={{
          borderBottom: '1px solid rgba(202, 255, 0, 0.15)',
        }}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <Link href="/" className="relative flex-shrink-0 block">
            <MPPLLogo variant="light" height={36} priority />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-dm-sans text-sm font-medium text-net-white/60 transition-colors duration-200 hover:text-neon-green"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary hidden text-sm md:inline-flex">
              Register Now
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
              aria-label="Open menu"
            >
              <span className="block h-[2px] w-5 rounded-full bg-net-white transition-transform" />
              <span className="block h-[2px] w-5 rounded-full bg-net-white transition-opacity" />
              <span className="block h-[2px] w-5 rounded-full bg-net-white transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-league-black">
          {/* Top bar: logo + close */}
          <div className="flex h-[72px] items-center justify-between px-5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block">
              <MPPLLogo variant="light" height={36} />
            </Link>

            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-net-white"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-bebas text-3xl uppercase tracking-wider text-net-white transition-colors hover:text-neon-green"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
