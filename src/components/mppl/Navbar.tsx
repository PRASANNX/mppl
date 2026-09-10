'use client';

import { useState } from 'react';
import Link from 'next/link';
import MPPLLogo from './MPPLLogo';

type NavLink = {
  label: string;
  href?: string;
  target?: string;
  children?: { label: string; href: string; target?: string }[];
};

const navLinks: NavLink[] = [
  {
    label: 'Tournament',
    children: [
      { label: 'Format', href: '/format' },
      { label: 'Rules', href: '/rules' },
      { label: 'Schedule', href: '/#schedule' },
      { label: 'Leg 1 Results', href: '/leg-1-results' },
    ],
  },
  { label: 'Media Coverage', href: '/media-coverage' },
  { label: 'About', href: '/#about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

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
              <li key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <button className="font-dm-sans py-6 text-sm font-medium text-net-white/70 transition-colors duration-200 group-hover:text-neon-green flex items-center gap-1">
                      {link.label}
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 w-48 rounded-md bg-[#161616] border border-neon-green/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <ul className="py-2">
                        {link.children.map(child => (
                          <li key={child.label}>
                            {child.target ? (
                              <a 
                                href={child.href} 
                                target={child.target} 
                                rel="noopener noreferrer" 
                                className="block px-4 py-2 font-dm-sans text-sm text-net-white/70 hover:bg-neon-green/10 hover:text-neon-green transition-colors"
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link 
                                href={child.href} 
                                className="block px-4 py-2 font-dm-sans text-sm text-net-white/70 hover:bg-neon-green/10 hover:text-neon-green transition-colors"
                              >
                                {child.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : link.target ? (
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
                    href={link.href!}
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
              href="https://forms.gle/ReM6crNPXirR3px4A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden text-sm md:inline-flex"
            >
              Register for Leg 2
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
        <div className="fixed inset-0 z-[60] flex flex-col bg-league-black overflow-y-auto">
          {/* Top bar: logo + close */}
          <div className="flex h-[72px] items-center justify-between px-5 shrink-0">
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
          <div className="flex flex-1 flex-col items-center py-10 px-5 gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="w-full flex flex-col items-center">
                {link.children ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(link.label)}
                      className="font-bebas text-3xl uppercase tracking-wider text-net-white flex items-center gap-2 mb-2 transition-colors hover:text-neon-green"
                    >
                      {link.label}
                      <svg className={`w-5 h-5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="flex flex-col items-center gap-4 py-4 w-full bg-[#161616]/50 rounded-lg border border-neon-green/10">
                        {link.children.map(child => (
                          child.target ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target={child.target}
                              rel="noopener noreferrer"
                              onClick={() => setMobileOpen(false)}
                              className="font-bebas text-2xl uppercase tracking-wider text-net-white/80 transition-colors hover:text-neon-green"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="font-bebas text-2xl uppercase tracking-wider text-net-white/80 transition-colors hover:text-neon-green"
                            >
                              {child.label}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : link.target ? (
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
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className="font-bebas text-3xl uppercase tracking-wider text-net-white transition-colors hover:text-neon-green"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="w-full h-px bg-net-white/10 my-4"></div>

            <a
              href="https://forms.gle/5WBTzz4bEQmgDpF58"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center font-bebas text-xl px-8 py-4 bg-neon-green/10 text-neon-green border border-neon-green hover:bg-neon-green hover:text-pure-black transition-colors rounded uppercase tracking-wider"
            >
              Franchise &amp; Sponsor Interest
            </a>

            <a
              href="https://forms.gle/ReM6crNPXirR3px4A"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center mt-2"
            >
              Register for Leg 2
            </a>
          </div>
        </div>
      )}
    </>
  );
}
