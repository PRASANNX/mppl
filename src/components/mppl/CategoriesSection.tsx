'use client';

const categories = [
  {
    id: 1,
    name: "UNDER 12",
    tagline: "Where champions begin.",
    description: "The youngest warriors of MPPL. Where the love for the game is born and futures are decided.",
    age: "Ages 10–12",
    type: "Boys & Girls",
    icon: "⚡",
    neon: "#caff00"
  },
  {
    id: 2,
    name: "UNDER 14",
    tagline: "Two years more. Double the intensity.",
    description: "Rising stars who have tasted competition and want more. The future of MP pickleball.",
    age: "Ages 12–14",
    type: "Boys & Girls",
    icon: "🎯",
    neon: "#FF6000"
  },
  {
    id: 3,
    name: "UNDER 18",
    tagline: "Old enough to compete. Young enough to be fearless.",
    description: "The edge between youth and open competition. High-energy, high-stakes, high-reward.",
    age: "Ages 14–18",
    type: "Boys & Girls",
    icon: "🔥",
    neon: "#caff00"
  },
  {
    id: 4,
    name: "OPEN MEN'S",
    tagline: "No ceiling. No limit.",
    description: "Pure open competition. The most competitive bracket in MPPL. Best men compete here.",
    age: "Ages 18+",
    type: "Men",
    icon: "🏆",
    neon: "#FF6000"
  },
  {
    id: 5,
    name: "OPEN WOMEN'S",
    tagline: "Strength. Speed. Strategy.",
    description: "Women's pickleball at its finest. Open to all ages above 18. Fierce and fearless.",
    age: "Ages 18+",
    type: "Women",
    icon: "⚡",
    neon: "#FF1493"
  },
  {
    id: 6,
    name: "MIXED DOUBLES",
    tagline: "Two players. One court. Zero excuses.",
    description: "The most dynamic format in pickleball. Chemistry wins. Teamwork decides.",
    age: "Open",
    type: "Mixed",
    icon: "🎾",
    neon: "#FFE600"
  },
  {
    id: 7,
    name: "30+ MEN'S",
    tagline: "Experience is the weapon.",
    description: "Thirty years of life. All of it leading to this moment. Wisdom over speed.",
    age: "Ages 30+",
    type: "Men",
    icon: "💪",
    neon: "#caff00"
  },
  {
    id: 8,
    name: "30+ WOMEN'S",
    tagline: "Thirty and fearless.",
    description: "This court knows no age. Experience and elegance define this category.",
    age: "Ages 30+",
    type: "Women",
    icon: "🌟",
    neon: "#FF1493"
  },
  {
    id: 9,
    name: "40+ MEN'S",
    tagline: "Four decades. Still competing.",
    description: "Age is not a barrier. It's a badge of honour. This is where champions prove it.",
    age: "Ages 40+",
    type: "Men",
    icon: "🏅",
    neon: "#FF6000"
  },
  {
    id: 10,
    name: "40+ WOMEN'S",
    tagline: "Age is not a limit. It's an advantage.",
    description: "Four decades of life experience on the court. Unstoppable, unmatched, unforgettable.",
    age: "Ages 40+",
    type: "Women",
    icon: "👑",
    neon: "#FFE600"
  },
  {
    id: 11,
    name: "MORE CATEGORIES",
    tagline: "15+ total. Yours is here.",
    description: "Additional categories being announced soon. Every player has a bracket in MPPL.",
    age: "All Ages",
    type: "All",
    icon: "➕",
    neon: "#caff00",
    comingSoon: true
  }
];

export default function CategoriesSection() {
  return (
    <section style={{
      background: '#0D0B1F',
      padding: '120px 40px',
      position: 'relative'
    }}>
      {/* Background section number */}
      <div style={{
        position: 'absolute',
        right: '-20px',
        top: '40px',
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '300px',
        color: '#caff00',
        opacity: 0.03,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none'
      }}>03</div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '1px', background: '#caff00' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#caff00'
          }}>CATEGORIES</span>
        </div>

        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(48px, 7vw, 80px)',
          color: '#F5F5F5',
          lineHeight: 1,
          marginBottom: '16px'
        }}>15+ CATEGORIES.<br />YOUR SHOT IS HERE.</h2>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '18px',
          color: 'rgba(245,245,245,0.6)',
          marginBottom: '80px',
          maxWidth: '600px'
        }}>
          Whether you're 10 or 60 — beginner or pro —
          there is a category built exactly for you.
          MPPL leaves no player behind.
        </p>

        {/* Category grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {categories.map((cat) => (
            <div key={cat.id} style={{
              background: cat.comingSoon ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${cat.comingSoon ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: '8px',
              padding: '32px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = cat.neon;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${cat.neon}30`;
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = cat.comingSoon ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}>

              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: cat.neon,
                opacity: cat.comingSoon ? 0.3 : 1,
                boxShadow: `0 0 10px ${cat.neon}`
              }} />

              {/* Icon */}
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{cat.icon}</div>

              {/* Category name */}
              <h3 style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '32px',
                color: cat.neon,
                letterSpacing: '1px',
                marginBottom: '8px',
                opacity: cat.comingSoon ? 0.5 : 1
              }}>{cat.name}</h3>

              {/* Tagline */}
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#F5F5F5',
                marginBottom: '12px',
                opacity: cat.comingSoon ? 0.5 : 1
              }}>{cat.tagline}</p>

              {/* Description */}
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: 'rgba(245,245,245,0.6)',
                lineHeight: 1.6,
                marginBottom: '24px',
                opacity: cat.comingSoon ? 0.5 : 1
              }}>{cat.description}</p>

              {/* Badges */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{
                  background: `${cat.neon}15`,
                  border: `1px solid ${cat.neon}40`,
                  color: cat.neon,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  opacity: cat.comingSoon ? 0.5 : 1
                }}>{cat.age}</span>
                <span style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(245,245,245,0.6)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontFamily: 'DM Sans, sans-serif',
                  opacity: cat.comingSoon ? 0.5 : 1
                }}>{cat.type}</span>
                {cat.comingSoon && (
                  <span style={{
                    background: 'rgba(202,255,0,0.1)',
                    border: '1px solid rgba(202,255,0,0.3)',
                    color: '#caff00',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600
                  }}>+ MORE SOON</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
