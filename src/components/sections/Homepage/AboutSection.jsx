import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';
import { PhoneIcon } from '../../ui/Icons';

export function AboutSection() {
  const ref = useFadeUp();

  return (
    <section style={{ background: C.navy, padding: "80px 0 0", overflow: "hidden" }}>
      <style>{`
        .about-layout {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 60px;
          align-items: end;
        }
        @media(max-width:1024px){
          .about-layout { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="about-layout fade-up" ref={ref}>
        {/* Person photo */}
        <div style={{ position: "relative" }}>
          <div style={{
            width: "100%", maxWidth: 320,
            height: 420, borderRadius: "140px 140px 0 0",
            background: "linear-gradient(135deg, #3a6a8a 0%, #1a4060 100%)",
            overflow: "hidden",
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,.4)"
          }}>
            <div style={{
              color: "rgba(255,255,255,.5)", fontSize: 14,
              fontWeight: 600, paddingBottom: 40, letterSpacing: ".05em"
            }}>[Team Member Photo]</div>
          </div>
        </div>

        {/* Content */}
        <div style={{ paddingBottom: 60 }}>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "clamp(48px,7vw,80px)",
            textTransform: "uppercase", color: C.white,
            lineHeight: 1.0, marginBottom: 28
          }}>About Us</h2>
          <p style={{
            fontSize: 15, color: "rgba(255,255,255,.75)",
            lineHeight: 1.75, maxWidth: 520, marginBottom: 32
          }}>
            Since 2010, Sign Service Pro has been the trusted installation partner for sign companies
            across the Dayton region. We're locally owned, field-experienced, and focused on one mission:
            Delivering high-quality installations that help your signs and your clients look their best.
            We do not design or fabricate signs. We specialize exclusively in installation and service for sign companies.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="#quote" className="btn btn-green">Get a Quote</a>
            <a href="tel:+1234567890" className="btn btn-outline-white">
              <PhoneIcon /> Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Service area map */}
      <div style={{
        marginTop: 60,
        height: 380,
        background: "linear-gradient(135deg, #c8d8e8 0%, #a8b8c8 100%)",
        position: "relative", overflow: "hidden"
      }}>
        {/* Map placeholder */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#5a6a7a", fontSize: 14, fontWeight: 600
        }}>
          [Service Area Map — Ohio Region]
        </div>
        {/* Green circle overlay */}
        <div style={{
          position: "absolute",
          top: "50%", left: "55%",
          transform: "translate(-50%,-50%)",
          width: 260, height: 260,
          borderRadius: "50%",
          background: "rgba(122,193,66,.22)",
          border: "2px solid rgba(122,193,66,.5)",
        }} />
        {/* Tooltip */}
        <div style={{
          position: "absolute", bottom: 40, right: 60,
          background: C.white, borderRadius: 6, padding: "10px 16px",
          fontSize: 13, color: C.textDark, fontWeight: 500,
          boxShadow: "0 4px 16px rgba(0,0,0,.12)"
        }}>
          Additional travel available depending on project requirements.
        </div>
      </div>
    </section>
  );
}