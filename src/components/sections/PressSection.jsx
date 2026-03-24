import { C } from '../../styles/designTokens';
import { useFadeUp } from '../../hooks/useFadeUp';

export function PressSection() {
  const ref = useFadeUp();
  return (
    <section style={{ background: C.cream, padding: "40px 0 80px" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto", padding: "0 24px",
        display: "grid", gridTemplateColumns: "1fr auto",
        gap: 60, alignItems: "center"
      }} className="fade-up" ref={ref}>
        <style>{`
          .press-layout {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 60px;
            align-items: center;
          }
          @media(max-width:767px){
            .press-layout { grid-template-columns: 1fr; }
          }
        `}</style>
        <div>
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "clamp(22px,3vw,32px)",
            fontWeight: 400, color: C.textDark,
            lineHeight: 1.45, maxWidth: 460
          }}>
            We are honored to be featured on the cover of{" "}
            <strong>Signs of the Times</strong>, a renowned industry publication, this November.
          </p>
          <a href="#" className="btn btn-outline-green" style={{ marginTop: 28 }}>
            Ver Mas
          </a>
        </div>
        {/* Magazine mock */}
        <div style={{ display: "flex", gap: -10 }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              width: 130, height: 170,
              background: `linear-gradient(135deg, #2060a0 0%, #104080 100%)`,
              borderRadius: 4,
              transform: `rotate(${i === 0 ? -8 : 0}deg) translateX(${i === 0 ? 20 : 0}px)`,
              boxShadow: "0 8px 24px rgba(0,0,0,.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(255,255,255,.7)", fontSize: 11, fontWeight: 700,
              textAlign: "center", padding: 12
            }}>
              Signs of the Times Magazine
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}