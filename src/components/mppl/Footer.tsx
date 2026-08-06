'use client';

import MPPLLogo from './MPPLLogo';
import Link from 'next/link';

const leagueLinks = [
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Format', href: '/format' },
  { label: 'Rules & Regulations', href: '/rules' }
];

const involvedLinks = [
  { label: 'Register', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform' },
  { label: 'Partner / Sponsor', href: 'https://wa.me/919754544265' }
];

const connectLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/mpplleague?igsh=MWd5MDMweHdmbnZ1dg==' },
  { label: 'WhatsApp', href: 'https://wa.me/919754544265' }
];

const helplineNumbers = [
  { number: '9109109051' },
  { number: '9109109052' },
  { number: '9109109053' }
];

export default function Footer() {
  return (
    <footer
      className="w-full py-16 px-6 lg:px-16"
      style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(202, 255, 0, 0.2)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start gap-4">
            <MPPLLogo variant="light" height={40} />
            <p className="font-dm-sans italic text-net-white/50 text-sm max-w-[200px]">
              India&apos;s Heart. The Court&apos;s Soul.
            </p>
          </div>
          {/* Column 2: League */}
          <div>
            <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-net-white mb-4">
              LEAGUE
            </h4>
            <ul className="flex flex-col gap-3">
              {leagueLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-dm-sans text-sm text-net-white/50 hover:text-neon-green transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-net-white mb-4">
              GET INVOLVED
            </h4>
            <ul className="flex flex-col gap-3">
              {involvedLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dm-sans text-sm text-net-white/50 hover:text-neon-green transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-net-white mb-4">
              CONNECT
            </h4>
            <ul className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dm-sans text-sm text-net-white/50 hover:text-neon-green transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="font-montserrat font-bold text-[10px] tracking-widest uppercase text-net-white/70 mb-3">
                HELPLINE
              </h5>
              <ul className="flex flex-col gap-2">
                {helplineNumbers.map((item) => (
                  <li key={item.number}>
                    <a
                      href={`tel:${item.number}`}
                      className="font-dm-sans text-sm text-net-white/50 hover:text-neon-green transition"
                    >
                      {item.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-dm-sans text-xs text-net-white/30">
            © 2026 MPPL. All rights reserved.
          </span>
          <span className="font-dm-sans text-xs text-neon-green/40">
            #MPPL2026 · #MPPickleball
          </span>
        </div>
      </div>
    </footer>
  );
}
