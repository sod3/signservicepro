import { C } from '../../styles/designTokens';
import { useFadeUp } from '../../hooks/useFadeUp';

const partnerNames = [
  "Vantage Signs", "SpeedPro Dayton", "Behr Design LLC", "Pattison ID",
  "North American Signs", "Comet Signs", "Characters Inc.", "Everbrite",
  "Signs Unlimited", "Complete Signs", "Persona", "FastSigns"
];

export function PartnersSection() {
  const ref = useFadeUp();
  return (
    <section style={{ background: C.cream, padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }} className="fade-up" ref={ref}>
        <style>{`
          .partner-grid {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 36px 48px;
          }
        `}</style>
        <div className="partner-grid">
          {partnerNames.map((name, i) => (
            <div key={i} style={{
              padding: "8px 16px",
              background: C.white,
              borderRadius: 8,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: 16,
              color: C.navyLight, letterSpacing: ".05em",
              filter: "opacity(.6)",
              transition: "filter .2s, transform .2s",
              cursor: "pointer",
            }}
            onMouseEnter={e => { e.currentTarget.style.filter = "opacity(1)"; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { e.currentTarget.style.filter = "opacity(.6)"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}