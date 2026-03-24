import { C } from '../../styles/designTokens';

export function TickerBar() {
  const text = "PROFESSIONAL SIGN INSTALLATION & MAINTENANCE IN DAYTON, OH";
  const items = Array(12).fill(text);

  return (
    <div style={{
      position: "absolute", 
      bottom: "-1px", // Lowered slightly to account for the tilt
      left: "-2%", 
      right: "-2%",
      background: C.navy, 
      overflow: "hidden",
      padding: "22px 0", 
      // borderTop: `4px solid ${C.green}`,
      zIndex: 5,
      // This creates the "steep" slant from right to left
      transform: "rotate(-1.5deg)", 
      transformOrigin: "center",
      width: "105vw" 
    }}>
      <style>{`
        @keyframes ticker-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-inner {
          display: flex;
          width: max-content;
          animation: ticker-slide 80s linear infinite;
        }
        /* Counter-rotate the text slightly if you want it to stay perfectly upright 
           otherwise the letters will tilt with the bar (usually looks better tilted) */
      `}</style>
      
      <div className="ticker-inner">
        {items.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800, 
            fontSize: 16,
            color: i % 2 === 0 ? C.white : C.green,
            letterSpacing: ".12em", 
            textTransform: "uppercase",
            padding: "0 40px", 
            whiteSpace: "nowrap"
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}