'use client';

export default function SocialMediaSection() {
  return (
    <section className="bg-[#050505] py-24 px-6 lg:px-16 border-t border-white/5 pattern-sawtooth">
      <div className="max-w-6xl mx-auto pattern-content">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-[clamp(40px,6vw,72px)] text-net-white leading-none mb-2 tracking-wide">
            JOIN THE CONVERSATION.
          </h2>
          <a href="#" className="font-dm-sans text-xl font-bold text-neon-green hover:text-white transition-colors">
            @MPPLOfficial
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {[
            { name: 'Instagram', followers: '10K+', icon: '📸' },
            { name: 'YouTube', followers: '5K+', icon: '🎥' },
            { name: 'X / Twitter', followers: '2K+', icon: '🐦' }
          ].map((social) => (
            <a key={social.name} href="#" className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-3 group-hover:border-neon-green group-hover:bg-neon-green/10 transition-all duration-300">
                {social.icon}
              </div>
              <span className="font-dm-sans text-sm font-bold text-white group-hover:text-neon-green transition-colors">
                {social.name}
              </span>
              <span className="font-dm-sans text-xs text-white/40 mt-1 uppercase tracking-widest">
                {social.followers} Followers
              </span>
            </a>
          ))}
        </div>

        {/* Instagram Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-white/5 relative group cursor-pointer overflow-hidden rounded">
              <div className="absolute inset-0 bg-league-black flex items-center justify-center">
                <span className="text-4xl opacity-20">🖼️</span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-neon-green/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                <span className="text-3xl text-league-black">📸</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hashtags */}
        <div className="text-center">
          <div className="font-bebas text-[clamp(24px,4vw,48px)] text-neon-green tracking-wider flex flex-wrap justify-center gap-4 md:gap-8">
            <span>#MPPL2026</span>
            <span className="text-white/20">·</span>
            <span>#MPPickleball</span>
            <span className="text-white/20">·</span>
            <span>#MPKaGame</span>
          </div>
        </div>

      </div>
    </section>
  );
}
