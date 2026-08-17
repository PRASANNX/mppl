'use client';

import { useState } from 'react';
import Link from 'next/link';
import MPPLLogo from './MPPLLogo';

const navLinks = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Format', href: '/format' },
  { label: 'Rules', href: '/rules' },
  { label: 'About', href: '#about' },
  { label: 'Franchise & Sponsors', href: 'https://forms.gle/5WBTzz4bEQmgDpF58', target: '_blank' },
  { label: 'Player Registration', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform', target: '_blank' },
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
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.target ? (
                  <a
                    href={link.href}
                    target={link.target}
                    rel="noopener noreferrer"
                    className="font-dm-sans text-sm font-medium text-net-white/70 transition-colors duration-200 hover:text-neon-green"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="font-dm-sans text-sm font-medium text-net-white/70 transition-colors duration-200 hover:text-neon-green"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right: CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://forms.gle/5WBTzz4bEQmgDpF58"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex text-xs font-bold uppercase tracking-wider text-neon-green border border-neon-green/40 hover:border-neon-green px-4 py-2 rounded transition-colors"
            >
              Own a Franchise
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden text-sm md:inline-flex"
            >
              Register Now
            </a>

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
          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {navLinks.map((link) => (
              link.target ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="font-bebas text-3xl uppercase tracking-wider text-net-white transition-colors hover:text-neon-green"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-bebas text-3xl uppercase tracking-wider text-net-white transition-colors hover:text-neon-green"
                >
                  {link.label}
                </Link>
              )
            ))}

            <a
              href="https://forms.gle/5WBTzz4bEQmgDpF58"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-center font-bebas text-xl px-8 py-3 bg-neon-green/10 text-neon-green border border-neon-green hover:bg-neon-green hover:text-pure-black transition-colors rounded uppercase tracking-wider"
            >
              Franchise &amp; Sponsor Interest
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
