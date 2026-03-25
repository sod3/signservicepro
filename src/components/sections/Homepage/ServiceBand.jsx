import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';

export function ServiceBand() {
  const ref = useFadeUp();

  return (
    <section style={{
      padding: "24px 0 0", // Top padding gives space above the green box
      position: "relative",
    }}>
      <style>{`
        /* --- Service Band Inner Green Box --- */
        .service-band-inner {
          background: ${C.green};
          border-radius: 40px;
          padding: 80px 60px; /* Adjust padding for content alignment */
          position: "relative",
          max-width: 1200px;
          margin: 0 auto;
        }

        /* --- Content Container --- */
        .service-content {
          max-width: 600px; /* Adjust as needed */
        }

        /* --- Image Positioned Absolutely --- */
        .service-band-image {
          position: absolute;
          bottom: 0;
          right: 20px; /* Adjust as needed */
          z-index: 10;
        }

        /* --- Button Styling --- */
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

        /* --- Responsive Styles --- */
        @media (max-width: 1024px) {
          .service-band-inner {
            padding: 60px 40px;
          }

          .service-content {
            max-width: 500px;
          }

          .service-band-image img {
            max-width: 320px; /* Reduce image size for smaller screens */
          }
        }

        @media (max-width: 767px) {
          .service-band-inner {
            padding: 40px 24px 340px; /* Add bottom padding to prevent overlap with the content */
            text-align: center;
          }

          .service-band-image {
            right: 0;
            left: 0;
            margin: 0 auto;
            display: flex;
            justify-content: center;
          }

          .service-band-image img {
            max-width: 100%; /* Image is full width of content or slightly smaller */
          }
        }
      `}</style>

      {/* --- Section Background Elements --- */}
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

        {/* --- Team Image (Positioned Absolute) --- */}
        <div className="service-band-image">
          <img 
            src="/teamphoto.png" // Pointing to public folder
            alt="Smiling service team member with arms crossed" 
            style={{ display: "block", maxWidth: "320px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}