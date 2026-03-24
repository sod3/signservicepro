import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';

export function ServiceBand() {
  const ref = useFadeUp();

  return (
    <section style={{
      background: C.green,
      padding: "64px 24px",
      position: "relative", 
      overflow: "hidden",
      borderRadius: "40px",
    }}>
      <style>{`
        .service-band-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 40px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 767px) {
          .service-band-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .service-photo-placeholder {
            max-width: 100%;
            height: 240px !important; /* Slightly shorter on mobile */
          }
        }
      `}</style>

      <div className="service-band-grid fade-up" ref={ref}>
        <div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, 
            fontSize: "clamp(30px, 4vw, 48px)",
            textTransform: "uppercase", 
            color: C.white,
            lineHeight: 1.1, 
            marginBottom: 16
          }}>
            Service and Maintenance<br />for Local Businesses
          </h2>
          <p style={{
            fontSize: 14, 
            color: "rgba(255,255,255,.85)",
            lineHeight: 1.7, 
            maxWidth: 480, 
            marginBottom: 28
          }}>
            Transform your business's presence with our expert sign installation and maintenance
            services. Our high-quality materials ensure lasting durability. Discover how our sign
            installation services can light up your success.
          </p>
          <a href="#quote" className="btn" style={{
            background: C.white, 
            color: C.green,
            fontWeight: 800
          }}>Learn More</a>
        </div>

        {/* Person photo placeholder */}
        <div 
          className="service-photo-placeholder"
          style={{
            height: 280, 
            borderRadius: 16,
            background: "rgba(255,255,255,.15)",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "rgba(255,255,255,.6)", 
            fontSize: 13, 
            fontWeight: 600
          }}
        >
          [Team Photo]
        </div>
      </div>
    </section>
  );
}