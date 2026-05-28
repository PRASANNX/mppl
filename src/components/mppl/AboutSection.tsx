'use client';

export default function AboutSection() {
  return (
    <section style={{
      background: '#0D0B1F',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background section number — Micki 7 style */}
      <div style={{
        position: 'absolute',
        left: '-20px',
        top: '40px',
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '300px',
        color: '#caff00',
        opacity: 0.03,
        lineHeight: 1,
        pointerEvents: 'none'
      }}>01</div>

      {/* Side label — Micki 7 style */}
      <div style={{
        position: 'absolute',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '11px',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        color: 'rgba(202,255,0,0.4)',
        transformOrigin: 'center'
      }}>MADHYA PRADESH PICKLEBALL LEAGUE</div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '100px',
        alignItems: 'center'
      }}>

        {/* LEFT */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '1px', background: '#FF6000' }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#FF6000'
            }}>ABOUT THE LEAGUE</span>
          </div>

          <h2 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(48px, 6vw, 72px)',
            color: '#F5F5F5',
            lineHeight: 1.0,
            marginBottom: '32px'
          }}>
            THE FIRST<br />
            OF ITS KIND.<br />
            <span style={{ color: '#caff00' }}>IN THE WORLD.</span>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '17px',
            color: 'rgba(245,245,245,0.75)',
            lineHeight: 1.8,
            marginBottom: '24px'
          }}>
            The Madhya Pradesh Pickleball League is the first league
            in the world designed to welcome everyone — from a
            10-year-old discovering the sport for the first time,
            to a 60-year-old playing the game of their life.
          </p>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '17px',
            color: 'rgba(245,245,245,0.75)',
            lineHeight: 1.8,
            marginBottom: '40px'
          }}>
            Beginner or pro. Young or seasoned.
            This is the de-privatisation of competitive sport.
            A struggle killer. A dream enabler.
            MP's court. India's spotlight.
          </p>

          {/* Hindi tagline */}
          <p style={{
            fontFamily: 'Hind, sans-serif',
            fontSize: '22px',
            fontWeight: 700,
            color: '#FF6000',
            textShadow: '0 0 20px rgba(255,96,0,0.3)',
            marginBottom: '48px'
          }}>दिल से खेलो। MP से खेलो।</p>

          {/* Key points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              '🏓 First-ever open-age pickleball league in the world',
              '👶 Ages 10 to 60 — everyone competes',
              '🏆 ₹18 Lac+ prize pool — biggest in MP history',
              '🗺️ 4 qualifying rounds across Madhya Pradesh'
            ].map((point, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                color: 'rgba(245,245,245,0.8)',
                lineHeight: 1.5
              }}>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Visual placeholder */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            aspectRatio: '4/5',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(202,255,0,0.15)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '3px',
              background: '#caff00',
              boxShadow: '0 0 20px #caff00'
            }} />
            <div style={{ fontSize: '64px' }}>🏓</div>
            <div style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '24px',
              color: '#caff00',
              letterSpacing: '2px'
            }}>ACTION PHOTO</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              color: 'rgba(245,245,245,0.3)',
              letterSpacing: '2px'
            }}>Replace with player action shot</div>
          </div>

          {/* Floating stat card — Move app style */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-30px',
            background: '#080808',
            border: '1px solid rgba(202,255,0,0.3)',
            borderRadius: '12px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(202,255,0,0.15)',
              border: '1px solid rgba(202,255,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px'
            }}>🌍</div>
            <div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '20px',
                color: '#caff00',
                lineHeight: 1
              }}>WORLD FIRST</div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                color: 'rgba(245,245,245,0.5)'
              }}>Open-age league</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
