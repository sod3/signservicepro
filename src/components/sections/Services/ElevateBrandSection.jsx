import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';

function ElevateBrandSection() {
  const ref = useFadeUp();

  return (
    <section style={{ background: C.navy, padding: "0", position: "relative" }}>
      <style>{`
        .about-layout {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 40px;
          align-items: center;
        }

        .person-img {
          width: 100%;
          height: auto;
          display: block;
          margin-top: -100px; /* Pulls head up on desktop */
        }

        .content-container {
          padding: 60px 0;
        }

        .btn-white {
          background-color: #F0F5E9;
          color: #001A33;
          padding: 12px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 13px;
          display: inline-block;
          letter-spacing: 0.5px;
          transition: transform 0.2s ease;
        }

        .btn-white:hover {
          transform: scale(1.05);
        }

        @media(max-width: 850px) {
          .about-layout { 
            grid-template-columns: 1fr; 
            text-align: center;
            padding-bottom: 40px;
          }

          .person-container {
            max-width: 320px; /* Prevents the photo from being massive on mobile */
            margin: 0 auto;
            order: 1; /* Keeps person at the top if stacking */
          }

          .person-img {
            margin-top: -60px; /* Slightly less aggressive pull-up for mobile */
          }

          .content-container {
            padding: 20px 0 60px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-p {
            margin: 0 auto 32px auto !important;
          }

          .btn-wrapper {
            justify-content: center;
          }
        }
      `}</style>

      <div className="about-layout fade-up" ref={ref}>
        {/* Person photo container */}
        <div className="person-container" style={{ position: "relative", zIndex: 2 }}>
          <img 
            src="/photo_team.png" 
            alt="Team Member" 
            className="person-img"
          />
        </div>

        {/* Content */}
        <div className="content-container">
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, 
            fontSize: "clamp(36px, 8vw, 65px)", 
            textTransform: "uppercase", 
            color: "#F0F5E9", 
            lineHeight: 1.1, 
            marginBottom: 25
          }}>
            READY TO <span style={{ color: "#7AC142" }}>ELEVATE</span><br />
            <span style={{ color: "#7AC142" }}>YOUR BRAND</span><br />
            PRESENCE?
          </h2>
          
          <p className="hero-p" style={{
            fontSize: 15, 
            color: "white",
            lineHeight: 1.5, 
            maxWidth: 500, 
            marginBottom: 32,
            fontWeight: 400
          }}>
            Contact us today for professional sign installation, maintenance, and repair services 
            tailored to your needs.
          </p>

          <div className="btn-wrapper" style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
            <a href="#quote" className="btn-white">UPGRADE YOUR SIGNS!</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElevateBrandSection;