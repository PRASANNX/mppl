'use client';

import MPPLLogo from './MPPLLogo';

const leagueLinks = ['Schedule', 'Teams', 'Format', 'Results'];
const involvedLinks = ['Register', 'Partner', 'Sponsor', 'Volunteer'];
const connectLinks = ['Instagram', 'Twitter', 'YouTube', 'Email'];

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
          {/* Column 1: League */}
          <div>
            <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-net-white mb-4">
              LEAGUE
            </h4>
            <ul className="flex flex-col gap-3">
              {leagueLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-dm-sans text-sm text-net-white/50 hover:text-neon-green transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Get Involved */}
          <div>
            <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-net-white mb-4">
              GET INVOLVED
            </h4>
            <ul className="flex flex-col gap-3">
              {involvedLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-dm-sans text-sm text-net-white/50 hover:text-neon-green transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-net-white mb-4">
              CONNECT
            </h4>
            <ul className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-dm-sans text-sm text-net-white/50 hover:text-neon-green transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
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
