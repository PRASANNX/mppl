'use client';

export default function PrizePoolSection() {
  return (
    <section style={{
      background: '#080808',
      padding: '140px 40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Diagonal light beams */}
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: '-10%',
          left: `${20 + i * 30}%`,
          width: '1px',
          height: '120%',
          background: `linear-gradient(180deg, transparent, rgba(202,255,0,${0.05 + i * 0.03}), transparent)`,
          transform: 'rotate(-20deg)',
        }} />
      ))}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>

        {/* Label */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '40px'
        }}>
          <div style={{ width: '40px', height: '1px', background: '#caff00' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#caff00'
          }}>TOTAL PRIZE POOL — MPPL 2026</span>
          <div style={{ width: '40px', height: '1px', background: '#caff00' }} />
        </div>

        {/* Massive number */}
        <div style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(80px, 15vw, 180px)',
          color: '#F5F5F5',
          lineHeight: 0.9,
          letterSpacing: '-2px',
          textShadow: '0 0 60px rgba(202,255,0,0.2)',
          marginBottom: '32px'
        }}>
          ₹18,00,000+
        </div>

        {/* Sub line */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'rgba(245,245,245,0.6)',
          marginBottom: '60px',
          lineHeight: 1.6
        }}>
          The biggest prize pool in Madhya Pradesh pickleball history.<br />
          Open to every player. Every age. Every level.
        </p>

        {/* Three stat pills */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '🏆', text: 'Largest in MP History' },
            { icon: '🌍', text: 'Open to All Players Worldwide' },
            { icon: '⚡', text: 'Across 15+ Categories' }
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(202,255,0,0.08)',
              border: '1px solid rgba(202,255,0,0.3)',
              borderRadius: '40px',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              color: '#caff00'
            }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Micki 7 style mini stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          marginTop: '80px',
          background: 'rgba(202,255,0,0.1)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          {[
            { num: '10', label: 'TEAMS' },
            { num: '4', label: 'CITIES' },
            { num: '15+', label: 'CATEGORIES' },
            { num: '10–60', label: 'AGE RANGE' }
          ].map((stat, i) => (
            <div key={i} style={{
              background: '#080808',
              padding: '32px 20px',
              textAlign: 'center'
            }}>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '56px',
                color: '#caff00',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(202,255,0,0.4)'
              }}>{stat.num}</div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(245,245,245,0.4)',
                marginTop: '8px'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
