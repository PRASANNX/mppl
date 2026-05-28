'use client';

export default function FounderSection() {
  return (
    <section style={{
      background: '#080808',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background large quote mark */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '40px',
        fontSize: '400px',
        fontFamily: 'Georgia, serif',
        color: '#caff00',
        opacity: 0.04,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none'
      }}>"</div>

      {/* Section label */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '60px'
      }}>
        <div style={{ width: '40px', height: '1px', background: '#caff00' }} />
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#caff00'
        }}>FOUNDER'S NOTE</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* LEFT — Quote */}
        <div>
          <blockquote style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontStyle: 'italic',
            color: 'rgba(245,245,245,0.9)',
            lineHeight: 1.7,
            marginBottom: '48px',
            borderLeft: '3px solid #caff00',
            paddingLeft: '32px'
          }}>
            "I grew up watching sport belong to a certain kind of person.
            The right school. The right family. The right connections.
            Pickleball gave me a different vision.
            <br /><br />
            A sport where a 10-year-old and a 60-year-old
            can compete in the same league.
            Where a beginner's first serve matters
            as much as a champion's winning shot.
            <br /><br />
            MPPL is not just a league.
            It is my answer to every player
            who was told the court wasn't for them.
            <br /><br />
            The court is for everyone.
            That's not a tagline. That's the rule."
          </blockquote>

          {/* Founder attribution */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Founder photo placeholder */}
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #caff00 0%, #0D0B1F 100%)',
              border: '2px solid #caff00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontFamily: 'Bebas Neue, sans-serif',
              color: '#080808',
              boxShadow: '0 0 20px rgba(202,255,0,0.3)'
            }}>SS</div>
            <div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '22px',
                color: '#F5F5F5',
                letterSpacing: '1px'
              }}>SURYAN SHAYADAV</div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: '#caff00',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>Founder, MPPL</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Founder photo placeholder */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center'
        }}>
          {/* Placeholder image box */}
          <div style={{
            width: '100%',
            maxWidth: '420px',
            aspectRatio: '3/4',
            background: 'linear-gradient(135deg, #0D0B1F 0%, #1a1a2e 100%)',
            border: '1px solid rgba(202,255,0,0.2)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Diagonal neon line decoration */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: '#caff00',
              boxShadow: '0 0 20px #caff00'
            }} />
            <div style={{ fontSize: '48px' }}>📸</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: 'rgba(245,245,245,0.4)',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>Founder Photo</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: 'rgba(245,245,245,0.25)',
            }}>Replace with actual photo</div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            right: '-20px',
            background: '#caff00',
            color: '#080808',
            padding: '12px 20px',
            borderRadius: '8px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '18px',
            letterSpacing: '1px',
            boxShadow: '0 0 30px rgba(202,255,0,0.4)'
          }}>MPPL FOUNDER</div>
        </div>
      </div>
    </section>
  );
}
