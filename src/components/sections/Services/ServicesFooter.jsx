import {C} from "../../../styles/designTokens";
import { AIIcon } from "../../ui/Icons";

/* ─── Services Footer ────────────────────────────────────────────────────────── */
function ServicesFooter() {
  return (
    <footer style={{
      position: "relative",
      overflow: "hidden",
      minHeight: 280,
      display: "flex",
      alignItems: "flex-end",
    }}>
      {/* Dusk city skyline background — replace div with <img src="city-bg.jpg" /> */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, #d8c090 0%, #c09060 30%, #806040 60%, #402010 100%)",
        filter: "blur(0px)",
        zIndex: 0,
      }} />
      {/* Slight darkening veil */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(10,15,10,.28)",
        zIndex: 1,
      }} />

      {/* AI Chat bubble */}
      <div style={{
        position: "absolute", bottom: 70, right: 40,
        display: "flex", alignItems: "center", gap: 10,
        zIndex: 5,
      }}>
        <div style={{
          background: C.white, borderRadius: 20,
          padding: "8px 16px", fontSize: 13, fontWeight: 600,
          color: C.navy, boxShadow: "0 4px 16px rgba(0,0,0,.15)",
        }}>
          Talk to our AI
        </div>
        <button style={{
          width: 52, height: 52, borderRadius: "50%",
          background: `linear-gradient(135deg, ${C.green} 0%, ${C.greenDark} 100%)`,
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(122,193,66,.4)",
          transition: "transform .2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
          aria-label="Talk to our AI"
        >
          <AIIcon />
        </button>
      </div>

      {/* Footer bar */}
      <div style={{
        position: "relative", zIndex: 2, width: "100%",
        background: "rgba(0,0,0,.55)", padding: "18px 40px",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: 12,
      }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
          {" | "}
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Your Privacy Choices</a>
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>
          © 2025 SIGN SERVICE PRO. All rights Reserved.
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>
          Web Design{" "}
          <span style={{ color: C.green }}>By Latin Branding</span>
        </div>
      </div>
    </footer>
  );
}

export default ServicesFooter;
