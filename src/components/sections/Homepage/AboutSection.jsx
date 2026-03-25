import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';
import { PhoneIcon } from '../../ui/Icons';

export function AboutSection() {
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
        .btn-green {
          background-color: #91C355;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 14px;
        }
        .btn-outline-white {
          border: 1px solid white;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 14px;
        }

        /* Responsive Fixes */
        @media(max-width: 800px) {
          .about-layout { 
            grid-template-columns: 1fr; 
            text-align: center;
            padding-top: 100px; /* Space for the floating head */
          }
          .person-container { 
            margin: 0 auto;
            max-width: 320px; /* Limits photo size on mobile */
          }
          .person-photo {
            margin-top: -120px !important; /* Pulls head up on mobile specifically */
          }
          .about-content {
            padding: 40px 0 !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .about-btns {
            justify-content: center;
          }
          .map-tooltip {
            right: 20px !important;
            left: 20px !important;
            bottom: 20px !important;
            text-align: center;
          }
        }
      `}</style>

      <div className="about-layout fade-up" ref={ref}>
        {/* Person photo container */}
        <div className="person-container" style={{ position: "relative", zIndex: 2 }}>
          <img 
            src="/photo_team.png" 
            alt="Team Member" 
            className="person-photo"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              marginTop: "-100px", 
            }}
          />
        </div>

        {/* Content */}
        <div className="about-content" style={{ padding: "60px 0" }}>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, 
            fontSize: "clamp(60px, 8vw, 100px)",
            textTransform: "uppercase", 
            color: "#F0F5E9",
            lineHeight: 0.9, 
            marginBottom: 20
          }}>ABOUT US</h2>
          
          <p style={{
            fontSize: 16, 
            color: "white",
            lineHeight: 1.6, 
            maxWidth: 550, 
            marginBottom: 32,
            fontWeight: 400
          }}>
            Since 2010, Sign Service Pro has been the trusted installation partner for sign companies
            across the Dayton region. We're locally owned, field-experienced, and focused on one mission:
            Delivering high-quality installations that help your signs and your clients look their best.
            <br /><br />
            We do not design or fabricate signs. We specialize exclusively in installation and service for sign companies.
          </p>

          <div className="about-btns" style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
            <a href="#quote" className="btn-green">GET A QUOTE</a>
            <a href="tel:+1234567890" className="btn-outline-white">
              <PhoneIcon /> CALL US NOW
            </a>
          </div>
        </div>
      </div>

      {/* Service area map container */}
      <div style={{
        marginTop: 60,
        height: 380,
        background: "linear-gradient(135deg, #c8d8e8 0%, #a8b8c8 100%)",
        position: "relative", 
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", 
          inset: 0,
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center"
        }}>
          <img 
            src="/map.png" 
            alt="Service Area Map Ohio Region" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.8 
            }} 
          />
        </div>

        {/* Green circle overlay */}
        <div style={{
          position: "absolute",
          top: "50%", 
          left: "50%", // Centered for better mobile visibility
          transform: "translate(-50%,-50%)",
          width: 260, 
          height: 260,
          borderRadius: "50%",
          background: "rgba(122,193,66,.22)",
          border: "2px solid rgba(122,193,66,.5)",
          zIndex: 1
        }} />

        {/* Tooltip */}
        <div className="map-tooltip" style={{
          position: "absolute", 
          bottom: 40, 
          right: 60,
          background: "white", 
          borderRadius: 6, 
          padding: "10px 16px",
          fontSize: 13, 
          color: "#333", 
          fontWeight: 500,
          boxShadow: "0 4px 16px rgba(0,0,0,.12)",
          zIndex: 2
        }}>
          Additional travel available depending on project requirements.
        </div>
      </div>
    </section>
  );
}