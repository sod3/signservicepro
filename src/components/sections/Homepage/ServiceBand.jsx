import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';

export function ServiceBand() {
  const ref = useFadeUp();

  return (
    <section style={{
      padding: "24px 0 0", 
      position: "relative",
    }}>
      <style>{`
        .service-band-inner {
          background: ${C.green};
          border-radius: 40px;
          padding: 80px 60px;
          position: relative; /* Fixed: was a string in your original code */
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-content {
          max-width: 600px;
        }

        .service-band-image {
          position: absolute;
          bottom: 0;
          right: 20px;
          z-index: 10;
        }

        .btn-upgrade {
          background: ${C.white};
          color: ${C.green};
          font-weight: 800;
          padding: 12px 24px;
          border-radius: 30px;
          text-decoration: none;
          display: inline-block;
          font-size: 13px;
          text-transform: uppercase;
          transition: background 0.3s ease;
        }

        .btn-upgrade:hover {
          background: rgba(255, 255, 255, 0.85);
        }

        @media (max-width: 1024px) {
          .service-band-inner {
            padding: 60px 40px;
          }
          .service-content {
            max-width: 500px;
          }
          .service-band-image img {
            max-width: 280px !important;
          }
        }

        @media (max-width: 767px) {
          .service-band-inner {
            padding: 40px 24px 0; /* Remove massive bottom padding */
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .service-content {
            max-width: 100%;
            margin-bottom: 40px; /* Space between text and image */
          }

          .service-band-image {
            position: relative; /* Switch from absolute to relative to prevent overlap */
            right: auto;
            bottom: 0;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .service-band-image img {
            max-width: 260px !important; /* Controlled size so it doesn't look huge */
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="service-band-inner fade-up" ref={ref}>
        <div className="service-content">
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 42px)",
            textTransform: "uppercase",
            color: C.white,
            lineHeight: 1,
            marginBottom: 24,
            letterSpacing: "-0.01em",
          }}>
            Service and Maintenance<br />for Local Businesses
          </h2>
          <p style={{
            fontSize: 13,
            color: "rgba(255,255,255,.9)",
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 32,
            opacity: 0.9,
          }}>
            Transform your business's presence with our expert sign installation and maintenance
            services. Our high-quality materials ensure lasting durability. Discover how our sign
            installation services can light up your success.
          </p>
          <a href="#quote" className="btn-upgrade">
            Upgrade Your Signs!
          </a>
        </div>

        <div className="service-band-image">
          <img 
            src="/teamphoto.png"
            alt="Smiling service team member" 
            style={{ display: "block", maxWidth: "320px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}