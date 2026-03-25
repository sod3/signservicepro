import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';

function ElevateBrandSection() {
  const ref = useFadeUp();

  return (
    /* We remove overflow: hidden from here so the head can stick out */
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
        .btn-white {
          background-color: #F0F5E9;
          color: #001A33; /* Dark navy text for the button */
          padding: 12px 28px;
          border-radius: 50px; /* Rounded pill shape like image */
          text-decoration: none;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 13px;
          display: inline-block;
          letter-spacing: 0.5px;
        }
        @media(max-width:800px){
          .about-layout { 
            grid-template-columns: 1fr; 
            text-align: center;
          }
          .person-container { margin-top: 0; }
        }
      `}</style>

      <div className="about-layout fade-up" ref={ref}>
        {/* Person photo container */}
        <div className="person-container" style={{ position: "relative", zIndex: 2 }}>
          <img 
            src="/photo_team.png" 
            alt="Team Member" 
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              /* This negative margin pulls the head up out of the navy box */
              marginTop: "-100px", 
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "60px 0" }}>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, 
            fontSize: "clamp(40px, 6vw, 65px)", /* Adjusted size to match layout better */
            textTransform: "uppercase", 
            color: "#F0F5E9", 
            lineHeight: 1.1, 
            marginBottom: 25
          }}>
            READY TO <span style={{ color: "#7AC142" }}>ELEVATE</span><br />
            <span style={{ color: "#7AC142" }}>YOUR BRAND</span><br />
            PRESENCE?
          </h2>
          
          <p style={{
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

          <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
            <a href="#quote" className="btn-white">UPGRADE YOUR SIGNS!</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElevateBrandSection;