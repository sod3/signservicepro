import { C } from '../../styles/designTokens';

export function GuaranteeRibbon() {
  const msg = "OUR 1-YEAR PARTS AND LABOR GUARANTEE  •  OUR 1-YEAR PARTS AND LABOR GUARANTEE  •  ";

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: 180, 
      marginTop: 40,
      marginBottom: -100, 
      overflow: "visible",
      zIndex: 1,
    }}>
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ width: "110%", marginLeft: "-5%", height: "100%" }}
      >
        <defs>
          {/* FLIPPED PATH:
            Original: M-100,80 Q360,0   720,80 T1540,80
            Flipped:  M-100,80 Q360,160 720,80 T1540,80 
          */}
          <path
            id="wavePath"
            d="M-100,80 Q360,160 720,80 T1540,80"
          />
        </defs>

        <use
          href="#wavePath"
          fill="transparent"
          stroke={C.navy}
          strokeWidth="45"
        />

        <text
          fill="white"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.1em"
          }}
        >
          <textPath href="#wavePath" startOffset="0%">
            {msg.repeat(6)}
            <animate
              attributeName="startOffset"
              from="0%"
              to="-50%"
              dur="20s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>
    </div>
  );
}