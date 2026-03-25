import { useState } from "react";
import { C } from "../../../styles/designTokens";
import { useFadeUp } from "../../../hooks/useFadeUp";

/* ─── Service card data ──────────────────────────────────────────────────────── */
// Use your actual image paths from the /public directory here
const installCards = [
  {
    id: "exterior",
    label: "Exterior & Interior Sign Installation",
    desc: "Channel letters, FCOs, panels, monuments, pylons, directional signs, menu boards, vinyl graphics and more. Our crews are trained, certified, and equipped to handle all job sizes.",
    img: "/installation-main.png", 
  },
  {
    id: "led",
    label: "LED Displays & EMCs",
    img: "/led-displays.png",
  },
  {
    id: "special",
    label: "Special Projects",
    img: "/special-projects.png",
  },
];

const maintainCards = [
  {
    id: "lighting",
    label: "Lighting Services",
    img: "/lighting-services.png",
  },
  {
    id: "emergency",
    label: "Emergency Repairs",
    img: "/led-displays.png",
  },
  {
    id: "scheduled",
    label: "Scheduled Maintenance",
    desc: "Routine inspections and cleaning to keep your clients' signage performing at its best. LED displays, channel letters, monument signs, and lighting systems.",
    img: "/scheduled-maintenance.png",
  },
];

/* ─── Single Service Card Component ────────────────────────────────────────── */
function ServiceCard({ card, isMain }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 24,
        overflow: "hidden",
        position: "relative",
        height: "100%", // Ensures it fills the grid cell height
        width: "100%",  // Ensures it fills the grid cell width
        minHeight: "420px", // Forces visibility on large screens
        transition: "transform .3s ease, box-shadow .3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.15)" : "0 4px 12px rgba(0,0,0,0.08)",
        cursor: "pointer",
        background: "#e0e0e0" // Fallback color
      }}
    >
      <img 
        src={card.img} 
        alt={card.label}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      />

      {/* This is the main fix for your contrast issue. 
        A clean, semi-transparent box that separates the text 
        from the complexity of the image detail. 
      */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        // Semi-transparent box background (matches the provided image style)
        backgroundColor: "rgba(0, 0, 0, 0.65)", 
        // Gradient helps blend the image details at the top edge of the text box
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
        padding: isMain ? "32px 24px" : "24px 12px",
        zIndex: 2,
        // This height constraint is helpful to prevent vertical text cards from growing weirdly
        height: isMain ? "auto" : "220px", 
        maxHeight: "60%", // Ensure image remains somewhat visible
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center text vertically within the box
        borderTopLeftRadius: "12px", // Slight top rounding for a softer look
        borderTopRightRadius: "12px",
      }}>
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: isMain ? "26px" : "20px",
          color: "#FFF",
          lineHeight: 1.1,
          margin: 0,
          writingMode: isMain ? "horizontal-tb" : "vertical-rl",
          transform: isMain ? "none" : "rotate(180deg)",
          textAlign: isMain ? "left" : "center",
          alignSelf: isMain ? "flex-start" : "center"
        }}>
          {card.label}
        </h3>
        
        {isMain && (
          <p style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.95)", // High visibility white
            lineHeight: "1.5",
            marginTop: "12px",
            maxWidth: "320px",
            marginBottom: 0,
          }}>
            {card.desc}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Main Section Component ───────────────────────────────────────────────── */
// (This remains the same as previous)
function InstallationServicesSection() {
  const row1Ref = useFadeUp();
  const row2Ref = useFadeUp();

  return (
    <section style={{ background: "#f1f8ed", padding: "120px 0" }}>
      <style>{`
        .svc-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Large Screen Grid Layout */
        .svc-grid {
          display: grid;
          gap: 20px;
          align-items: stretch;
          margin-bottom: 80px;
        }

        .install-grid {
          grid-template-columns: 1.2fr 2fr 0.4fr 0.4fr;
        }

        .maint-grid {
          grid-template-columns: 0.4fr 0.4fr 2fr 1.2fr;
        }

        .svc-header-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .svc-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 64px;
          line-height: 0.9;
          text-transform: uppercase;
          color: #0d2137;
        }

        .svc-title span { color: #0d2137; display: block; }

        /* Responsive Fixes */
        @media(max-width: 1024px) {
          .install-grid, .maint-grid {
            grid-template-columns: 1fr 1fr;
          }
          .svc-header-box { grid-column: 1 / -1; }
          .svc-title { font-size: 48px; margin-bottom: 20px; }
        }

        @media(max-width: 600px) {
          .install-grid, .maint-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="svc-container">
        
        {/* ROW 1 */}
        <div className="svc-grid install-grid" ref={row1Ref}>
          <div className="svc-header-box">
            <h2 className="svc-title">INSTALLATION<br/><span>SERVICES</span></h2>
          </div>
          <ServiceCard card={installCards[0]} isMain={true} />
          <ServiceCard card={installCards[1]} isMain={false} />
          <ServiceCard card={installCards[2]} isMain={false} />
        </div>

        {/* ROW 2 */}
        <div className="svc-grid maint-grid" ref={row2Ref}>
          <ServiceCard card={maintainCards[0]} isMain={false} />
          <ServiceCard card={maintainCards[1]} isMain={false} />
          <ServiceCard card={maintainCards[2]} isMain={true} />
          <div className="svc-header-box" style={{ paddingLeft: "40px" }}>
            <h2 className="svc-title">MAINTENANCE<br/><span>& REPAIR</span></h2>
          </div>
        </div>

      </div>
    </section>
  );
}

export default InstallationServicesSection;