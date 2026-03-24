import { useState } from "react";
import {C} from "../../../styles/designTokens";
import {useFadeUp} from "../../../hooks/useFadeUp";

/* ─── Service card data ──────────────────────────────────────────────────────── */
const installCards = [
  {
    id: "exterior",
    label: "Exterior & Interior Sign Installation",
    desc:
      "Channel letters, FCOs, panels, monuments, pylons, directional signs, menu boards, vinyl graphics and more. Our crews are trained, certified, and equipped to handle all job sizes.",
    size: "large",   // big featured card
    bg: "linear-gradient(160deg, #3a5a3a 0%, #2a4a2a 60%, #1a2a1a 100%)",
    imgLabel: "[Exterior Sign Installation Photo]",
  },
  {
    id: "led",
    label: "LED Displays & EMCs",
    desc: "Full-service LED & electronic message center installation and programming.",
    size: "tall",
    bg: "linear-gradient(160deg, #1a3a5a 0%, #0d2a48 100%)",
    imgLabel: "[LED Display Photo]",
  },
  {
    id: "special",
    label: "Special Projects",
    desc: "Large-format, high-complexity, and multi-site rollout projects.",
    size: "tall",
    bg: "linear-gradient(160deg, #3a4a5a 0%, #2a3a4a 100%)",
    imgLabel: "[Special Project Photo]",
  },
];

const maintainCards = [
  {
    id: "lighting",
    label: "Lighting Services",
    desc: "Lamp replacements, ballast repairs, transformer upgrades.",
    size: "tall",
    bg: "linear-gradient(160deg, #4a4a3a 0%, #3a3a2a 100%)",
    imgLabel: "[Lighting Services Photo]",
  },
  {
    id: "emergency",
    label: "Emergency Repairs",
    desc: "2-hour emergency response. We're ready when you need us most.",
    size: "tall",
    bg: "linear-gradient(160deg, #1a3a2a 0%, #0a2a18 100%)",
    imgLabel: "[Emergency Repairs Photo]",
  },
  {
    id: "scheduled",
    label: "Scheduled Maintenance",
    desc:
      "Routine inspections and cleaning to keep your clients' signage performing at its best. LED displays, channel letters, monument signs, and lighting systems.",
    size: "large",
    bg: "linear-gradient(160deg, #2a3a4a 0%, #1a2a3a 100%)",
    imgLabel: "[Scheduled Maintenance Photo]",
  },
];

/* ─── Single Service Card ────────────────────────────────────────────────────── */
function ServiceCard({ card, isMain }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        background: card.bg,
        transition: "transform .25s ease, box-shadow .25s ease",
        transform: hovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 20px 48px rgba(13,27,46,.28)"
          : "0 4px 16px rgba(13,27,46,.14)",
        cursor: "pointer",
        /* Height set by grid row */
      }}
    >
      {/* Photo placeholder — replace with <img src="..." /> */}
      <div style={{
        position: "absolute", inset: 0,
        background: card.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "rgba(255,255,255,.25)", fontSize: 12, fontWeight: 600,
        letterSpacing: ".05em", textAlign: "center", padding: 16,
      }}>
        {card.imgLabel}
      </div>

      {/* Dark gradient overlay for text legibility */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.1) 55%, transparent 100%)",
      }} />

      {/* Card text — anchored to bottom */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        padding: isMain ? "28px 24px" : "20px 16px",
        zIndex: 2,
      }}>
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: isMain ? 22 : 16,
          color: C.white,
          lineHeight: 1.2,
          marginBottom: isMain ? 10 : 6,
          textTransform: isMain ? "none" : "none",
          writingMode: isMain ? "horizontal-tb" : "vertical-rl",
          transform: isMain ? "none" : "rotate(180deg)",
          textOrientation: "mixed",
        }}>
          {card.label}
        </h3>
        {isMain && (
          <p style={{
            fontSize: 13, color: "rgba(255,255,255,.82)",
            lineHeight: 1.6, maxWidth: 340,
          }}>
            {card.desc}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Installation Services Section ─────────────────────────────────────────── */
function InstallationServicesSection() {
  const titleRef = useFadeUp();
  const gridRef  = useFadeUp();
  const grid2Ref = useFadeUp();

  return (
    <section style={{ background: C.cream, padding: "100px 0 80px" }}>
      <style>{`
        .svc-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Installation row ─────────────────────── */
        .svc-install-row {
          display: grid;
          grid-template-columns: 260px 1fr 100px 100px;
          grid-template-rows: 380px;
          gap: 12px;
          align-items: start;
          margin-bottom: 60px;
        }
        /* Title column */
        .svc-install-title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 24px;
        }
        /* Large featured card */
        .svc-card-large { grid-column: 2; height: 380px; }
        /* Tall narrow cards */
        .svc-card-tall-1 { grid-column: 3; height: 380px; }
        .svc-card-tall-2 { grid-column: 4; height: 380px; }

        /* ── Maintenance row ──────────────────────── */
        .svc-maint-row {
          display: grid;
          grid-template-columns: 100px 100px 1fr 260px;
          grid-template-rows: 380px;
          gap: 12px;
          align-items: start;
        }
        .svc-card-tall-3 { grid-column: 1; height: 380px; }
        .svc-card-tall-4 { grid-column: 2; height: 380px; }
        .svc-card-large-2 { grid-column: 3; height: 380px; }
        .svc-maint-title {
          grid-column: 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 24px;
        }

        /* Section heading styles */
        .svc-section-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(32px, 4vw, 48px);
          text-transform: uppercase;
          color: ${C.navy};
          line-height: 1.05;
        }
        .svc-section-heading span { display: block; font-weight: 900; }

        /* ── Responsive ───────────────────────────── */
        @media(max-width:1024px){
          .svc-install-row {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .svc-install-title { grid-column: 1 / -1; padding: 0 0 16px; }
          .svc-card-large  { grid-column: 1 / -1; height: 300px; }
          .svc-card-tall-1 { grid-column: 1; height: 240px; }
          .svc-card-tall-2 { grid-column: 2; height: 240px; }

          .svc-maint-row {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .svc-maint-title  { grid-column: 1 / -1; order: -1; padding: 0 0 16px; }
          .svc-card-tall-3  { grid-column: 1; height: 240px; }
          .svc-card-tall-4  { grid-column: 2; height: 240px; }
          .svc-card-large-2 { grid-column: 1 / -1; height: 300px; }
        }

        @media(max-width:767px){
          .svc-install-row,
          .svc-maint-row { grid-template-columns: 1fr; }
          .svc-card-tall-1,
          .svc-card-tall-2,
          .svc-card-tall-3,
          .svc-card-tall-4 { grid-column: 1; height: 180px; }
          .svc-card-large,
          .svc-card-large-2 { grid-column: 1; height: 260px; }
        }
      `}</style>

      <div className="svc-wrapper">

        {/* ── INSTALLATION SERVICES row ──────────────────────────── */}
        <div className="svc-install-row fade-up" ref={gridRef}>

          {/* Section title */}
          <div className="svc-install-title">
            <h2 className="svc-section-heading">
              Installation<br />
              <span>Services</span>
            </h2>
          </div>

          {/* Large card: Exterior & Interior */}
          <div className="svc-card-large">
            <ServiceCard card={installCards[0]} isMain={true} />
          </div>

          {/* Tall card: LED */}
          <div className="svc-card-tall-1">
            <ServiceCard card={installCards[1]} isMain={false} />
          </div>

          {/* Tall card: Special */}
          <div className="svc-card-tall-2">
            <ServiceCard card={installCards[2]} isMain={false} />
          </div>
        </div>

        {/* ── MAINTENANCE & REPAIR row ───────────────────────────── */}
        <div className="svc-maint-row fade-up" ref={grid2Ref}>

          {/* Tall card: Lighting */}
          <div className="svc-card-tall-3">
            <ServiceCard card={maintainCards[0]} isMain={false} />
          </div>

          {/* Tall card: Emergency */}
          <div className="svc-card-tall-4">
            <ServiceCard card={maintainCards[1]} isMain={false} />
          </div>

          {/* Large card: Scheduled Maintenance */}
          <div className="svc-card-large-2">
            <ServiceCard card={maintainCards[2]} isMain={true} />
          </div>

          {/* Section title */}
          <div className="svc-maint-title">
            <h2 className="svc-section-heading">
              Maintenance<br />
              &amp; <span>Repair</span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}

export default InstallationServicesSection;
