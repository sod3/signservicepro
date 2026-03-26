import { C } from '../../styles/designTokens';

export function GuaranteeRibbon() {
  const msg = "OUR 1-YEAR PARTS AND LABOR GUARANTEE  •  OUR 1-YEAR PARTS AND LABOR GUARANTEE  •  ";

  return (
    <div className="ribbon-wrapper" style={{
      position: "relative",
      width: "100%",
      height: 180, 
      marginTop: 40,
      marginBottom: -100, 
      overflow: "visible",
      zIndex: 1,
    }}>
      <style>{`
        /* Default stroke and font for large screens */
        .ribbon-path {
          stroke-width: 45;
        }
        .ribbon-text {
          font-size: 22px;
        }

        @media (max-width: 768px) {
          .ribbon-wrapper {
            height: 120px !important; /* Shorter height for mobile */
            margin-top: 20px !important;
            margin-bottom: -60px !important;
          }
          .ribbon-path {
            stroke-width: 60; /* Slightly thicker relative to viewbox for better visibility */
          }
          .ribbon-text {
            font-size: 32px !important; /* Larger font relative to the smaller viewbox */
          }
        }

        @media (max-width: 480px) {
          .ribbon-path {
            stroke-width: 80; /* Bold enough to be seen on tiny screens */
          }
          .ribbon-text {
            font-size: 40px !important;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ width: "110%", marginLeft: "-5%", height: "100%" }}
      >
        <defs>
          <path
            id="wavePath"
            d="M-100,80 Q360,160 720,80 T1540,80"
          />
        </defs>

        <use
          href="#wavePath"
          fill="transparent"
          stroke={C.navy}
          className="ribbon-path"
        />

        <text
          fill="white"
          className="ribbon-text"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
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