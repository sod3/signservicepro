import { C } from '../../styles/designTokens';
import { AIIcon } from '../ui/Icons';

export function FooterBillboard() {
  return (
    <section style={{
      background: `linear-gradient(to bottom, #c8c8b0 0%, #a8a890 100%)`,
      position: "relative", overflow: "hidden",
      minHeight: 420, display: "flex", alignItems: "flex-end"
    }}>
      {/* Sky gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, #e8c870 0%, #c87820 40%, #804010 70%, #2a1808 100%)",
        opacity: .45
      }} />

      {/* Billboard */}
      <div style={{
        position: "absolute", top: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: "min(760px,85vw)",
        background: C.cream, borderRadius: 8,
        padding: "36px 48px",
        display: "flex", alignItems: "center", gap: 40,
        boxShadow: "0 20px 60px rgba(0,0,0,.3)"
      }}>
        {/* Content */}
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "clamp(24px,3vw,38px)",
            textTransform: "uppercase", color: C.navy,
            lineHeight: 1.1, marginBottom: 8
          }}>
            Exterior & Interior<br />
            <strong>Sign Installation</strong>
          </h3>
          <p style={{
            fontSize: 11, fontWeight: 700,
            color: C.textGray, letterSpacing: ".1em",
            textTransform: "uppercase"
          }}>
            Delivering high-quality installations that help your<br />
            signs and your clients look their best.
          </p>
        </div>
        {/* Person */}
        <div style={{
          flex: "0 0 160px", height: 200,
          borderRadius: 8,
          background: "linear-gradient(135deg, #6a9a6a 0%, #3a6a3a 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "rgba(255,255,255,.6)", fontSize: 11, fontWeight: 600
        }}>[Person Photo]</div>
      </div>

      {/* AI Chat bubble */}
      <div style={{
        position: "absolute", bottom: 60, right: 40,
        display: "flex", alignItems: "center", gap: 12, zIndex: 5
      }}>
        <div style={{
          background: C.white, borderRadius: 20,
          padding: "8px 16px", fontSize: 13, fontWeight: 600,
          color: C.navy, boxShadow: "0 4px 16px rgba(0,0,0,.15)"
        }}>Talk to our AI</div>
        <div style={{
          width: 52, height: 52, borderRadius: "50%",
          background: `linear-gradient(135deg, ${C.green} 0%, ${C.greenDark} 100%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(122,193,66,.4)",
          cursor: "pointer"
        }}>
          <AIIcon />
        </div>
      </div>

      {/* Footer bar */}
      <div style={{
        position: "relative", zIndex: 2, width: "100%",
        background: "rgba(0,0,0,.7)", padding: "18px 40px",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: 12
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
    </section>
  );
}