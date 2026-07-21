'use client';

export default function QualifyingSection() {
  return (
    <section id="schedule" className="pattern-sawtooth-orange" style={{
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

      <div className="pattern-content" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          position: 'relative',
          marginBottom: '80px'
        }}>
          {/* Connector line (hidden on smaller screens) */}
          <div style={{
            position: 'absolute',
            top: '32px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'rgba(0,0,0,0.2)',
            zIndex: 0
          }} className="hidden md:block" />

          {[
            {
              num: '01',
              title: 'QUALIFYING ROUNDS',
              desc: '4 legs across Indore, Bhopal, Jabalpur & Gwalior. Winner & Runner-up of each category qualify.'
            },
            {
              num: '02',
              title: 'PLAYER AUCTIONS',
              desc: '48 total qualified players enter the MPPL auction pool. 8 franchises. One draft.'
            },
            {
              num: '03',
              title: 'LEAGUE MATCHES',
              desc: '8 franchise squads. 15+ categories. Intense league championship matches.'
            },
            {
              num: '04',
              title: 'GRAND FINALS',
              desc: 'One court. One champion. ₹18 Lakhs prize pool. One franchise takes the crown.'
            }
          ].map((step, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '0 10px',
              position: 'relative',
              zIndex: 1
            }}>
              {/* Circle */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#080808',
                color: '#FF6000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '24px',
                fontWeight: 'bold',
                border: '3px solid #080808'
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

        {/* Schedule Grid */}
        <div style={{ marginTop: '80px', marginBottom: '80px' }}>
          <h3 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '44px',
            color: '#080808',
            marginBottom: '40px',
            textAlign: 'center',
            letterSpacing: '1px'
          }}>QUALIFYING SCHEDULE</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Leg 1: Indore */}
            <div style={{
              background: '#080808',
              border: '3px solid #080808',
              padding: '28px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '10px 10px 0px rgba(0,0,0,0.15)'
            }}>
              <div>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  background: '#FF6000',
                  color: '#080808',
                  padding: '4px 10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>LEG 1 — INDORE</span>
                <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', marginTop: '20px', marginBottom: '6px', color: '#FF6000' }}>INDORE</h4>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>Aug 21, 22, 23</p>
                
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', marginBottom: '16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 'bold', color: '#FF6000', marginBottom: '4px' }}>Surya Pickleball Academy</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.4' }}>
                    1427, Kanadia Main Rd, Alok Nagar, Indore, MP 452016
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: '#FF6000', fontWeight: 'bold' }}>
                ★ 5.0 Google Review
              </div>
            </div>

            {/* Leg 2: Bhopal */}
            <div style={{
              background: 'transparent',
              border: '3px dashed #080808',
              padding: '28px',
              color: '#080808',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  background: 'rgba(0,0,0,0.1)',
                  color: '#080808',
                  padding: '4px 10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>LEG 2 — BHOPAL</span>
                <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', marginTop: '20px', marginBottom: '6px', color: '#080808' }}>BHOPAL</h4>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#080808', marginBottom: '16px' }}>To Be Announced</p>
              </div>
              <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(0,0,0,0.5)', fontWeight: 'bold' }}>
                COMING SOON
              </div>
            </div>

            {/* Leg 3: Jabalpur */}
            <div style={{
              background: 'transparent',
              border: '3px dashed #080808',
              padding: '28px',
              color: '#080808',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  background: 'rgba(0,0,0,0.1)',
                  color: '#080808',
                  padding: '4px 10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>LEG 3 — JABALPUR</span>
                <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', marginTop: '20px', marginBottom: '6px', color: '#080808' }}>JABALPUR</h4>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#080808', marginBottom: '16px' }}>To Be Announced</p>
              </div>
              <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(0,0,0,0.5)', fontWeight: 'bold' }}>
                COMING SOON
              </div>
            </div>

            {/* Leg 4: Gwalior */}
            <div style={{
              background: 'transparent',
              border: '3px dashed #080808',
              padding: '28px',
              color: '#080808',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  background: 'rgba(0,0,0,0.1)',
                  color: '#080808',
                  padding: '4px 10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>LEG 4 — GWALIOR</span>
                <h4 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '36px', marginTop: '20px', marginBottom: '6px', color: '#080808' }}>GWALIOR</h4>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#080808', marginBottom: '16px' }}>To Be Announced</p>
              </div>
              <div style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(0,0,0,0.5)', fontWeight: 'bold' }}>
                COMING SOON
              </div>
            </div>

          </div>
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
            }}>ROUNDS STARTING 2026</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: 'rgba(0,0,0,0.6)'
            }}>First qualifying date Indore (Aug 21-23) announced. Register now.</div>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdk_8gc2OUA3sY-QJO_PjPnK98PIC9xzeYEFQRwNyxDDpiHbg/viewform" target="_blank" rel="noopener noreferrer" style={{
            background: '#080808',
            color: '#FF6000',
            padding: '14px 28px',
            borderRadius: '4px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '18px',
            letterSpacing: '1px',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>REGISTER NOW →</a>
        </div>
      </div>
    </section>
  );
}
