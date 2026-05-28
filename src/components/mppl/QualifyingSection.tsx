'use client';

export default function QualifyingSection() {
  return (
    <section style={{
      background: '#FF6000',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background text */}
      <div style={{
        position: 'absolute',
        right: '-40px',
        bottom: '-60px',
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '400px',
        color: 'rgba(0,0,0,0.08)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none'
      }}>4</div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '40px', height: '1px', background: '#080808' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#080808'
          }}>LEAGUE FORMAT</span>
        </div>

        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(48px, 7vw, 80px)',
          color: '#080808',
          lineHeight: 1,
          marginBottom: '80px'
        }}>
          4 ROUNDS.<br />
          4 CITIES.<br />
          ONE DESTINATION.
        </h2>

        {/* 4 steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative'
        }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '32px',
            left: '12.5%',
            right: '12.5%',
            height: '2px',
            background: 'rgba(0,0,0,0.2)',
            zIndex: 0
          }} />

          {[
            {
              num: '01',
              title: 'QUALIFYING ROUNDS',
              desc: '4 rounds across 4 cities in Madhya Pradesh. Every player gets their shot.',
              icon: '📍'
            },
            {
              num: '02',
              title: 'PLAYER AUCTIONS',
              desc: 'Top qualifiers enter the MPPL auction. 10 franchises. One draft. Zero limits.',
              icon: '🔨'
            },
            {
              num: '03',
              title: 'LEAGUE MATCHES',
              desc: '10 teams. 15+ categories. Full-scale league competition across MP.',
              icon: '⚔️'
            },
            {
              num: '04',
              title: 'GRAND FINALS',
              desc: 'One city. One court. ₹18 Lac+ on the line. One team takes the crown.',
              icon: '👑'
            }
          ].map((step, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '0 20px',
              position: 'relative',
              zIndex: 1
            }}>
              {/* Circle */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#080808',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '24px',
                border: '3px solid #080808'
              }}>{step.icon}</div>

              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '14px',
                color: 'rgba(0,0,0,0.4)',
                letterSpacing: '2px',
                marginBottom: '8px'
              }}>{step.num}</div>

              <h3 style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '24px',
                color: '#080808',
                marginBottom: '12px',
                letterSpacing: '0.5px'
              }}>{step.title}</h3>

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: 'rgba(0,0,0,0.7)',
                lineHeight: 1.6
              }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Announcement strip */}
        <div style={{
          marginTop: '80px',
          background: 'rgba(0,0,0,0.15)',
          borderRadius: '8px',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '28px',
              color: '#080808'
            }}>ROUNDS STARTING JUNE 2026</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: 'rgba(0,0,0,0.6)'
            }}>First qualifying date announcing soon. Stay tuned.</div>
          </div>
          <div style={{
            background: '#080808',
            color: '#FF6000',
            padding: '14px 28px',
            borderRadius: '4px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '18px',
            letterSpacing: '1px',
            cursor: 'pointer'
          }}>REGISTER INTEREST →</div>
        </div>
      </div>
    </section>
  );
}
