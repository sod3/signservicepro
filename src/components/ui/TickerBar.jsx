import { C } from '../../styles/designTokens';

export function TickerBar() {
  const text = "PROFESSIONAL SIGN INSTALLATION & MAINTENANCE IN DAYTON, OH";
  const items = Array(8).fill(text);
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: C.navy, overflow: "hidden",
      padding: "14px 0", borderTop: `3px solid ${C.green}`
    }}>
      <div className="ticker-inner" style={{ display: "flex", width: "max-content", gap: 0 }}>
        {items.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800, fontSize: 15,
            color: i % 2 === 0 ? C.white : C.green,
            letterSpacing: ".12em", textTransform: "uppercase",
            padding: "0 40px", whiteSpace: "nowrap"
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}