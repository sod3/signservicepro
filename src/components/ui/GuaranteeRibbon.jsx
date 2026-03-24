import { C } from '../../styles/designTokens';

export function GuaranteeRibbon() {
  const msg = "OUR 1-YEAR PARTS AND LABOR GUARANTEE  •  ";
  const items = Array(10).fill(msg);
  return (
    <div style={{
      overflow: "hidden", marginTop: 60,
      height: 56, position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: C.navy,
        transform: "rotate(-2deg) scaleX(1.1)",
        display: "flex", alignItems: "center",
        overflow: "hidden",
      }}>
        <div className="ribbon-inner" style={{ display: "flex", whiteSpace: "nowrap", gap: 0 }}>
          {items.map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: 16,
              color: i % 2 === 0 ? C.white : C.green,
              letterSpacing: ".15em", padding: "0 20px"
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}