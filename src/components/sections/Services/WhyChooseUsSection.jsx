import {C} from "../../../styles/designTokens";
import {useFadeUp} from "../../../hooks/useFadeUp";

/* ─── Floating speech bubble data ───────────────────────────────────────────── */
const bubbles = [
  {
    text: "End-to-end solutions: from foundations to final illumination",
    position: { top: "18%", left: "2%" },
    maxWidth: 190,
  },
  {
    text: "Rapid emergency response to protect your business visibility",
    position: { top: "18%", right: "2%" },
    maxWidth: 190,
  },
  {
    text: "Expertise across traditional signage and advanced LED systems",
    position: { bottom: "28%", right: "2%" },
    maxWidth: 190,
  },
  {
    text: "Certified and trained crews for all job sizes",
    position: { bottom: "12%", left: "2%" },
    maxWidth: 170,
  },
];

/* ─── Guarantee Ribbon (reused from homepage style) ─────────────────────────── */
function GuaranteeRibbon() {
  const msg   = "OUR 1-YEAR PARTS AND LABOR GUARANTEE  •  ";
  const items = Array(10).fill(msg);
  return (
    <div style={{ overflow: "hidden", height: 56, position: "relative", marginBottom: 0 }}>
      <div style={{
        position: "absolute", inset: 0,
        background: C.navy,
        transform: "rotate(-2deg) scaleX(1.1)",
        display: "flex", alignItems: "center", overflow: "hidden",
      }}>
        <div className="ribbon-inner" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {items.map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: 16,
              color: i % 2 === 0 ? C.white : C.green,
              letterSpacing: ".15em", padding: "0 20px",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Why Choose Us Section ──────────────────────────────────────────────────── */
function WhyChooseUsSection() {
  const ref = useFadeUp();

  return (
    <section style={{ background: C.cream, padding: "0 0 80px" }}>

      {/* Guarantee ribbon at the top */}
      <GuaranteeRibbon />

      <div style={{
        maxWidth: 900, margin: "80px auto 0", padding: "0 24px",
        position: "relative",
      }} className="fade-up" ref={ref}>

        <style>{`
          /* Billboard container */
          .wcu-billboard-wrap {
            position: relative;
            padding: 20px 200px;
          }

          /* The billboard board itself */
          .wcu-billboard {
            background: linear-gradient(160deg, #f0f0ec 0%, #ffffff 50%, #e8e8e4 100%);
            border-radius: 10px;
            padding: 52px 48px;
            display: flex;
            align-items: center;
            gap: 32px;
            box-shadow:
              0 24px 64px rgba(13,27,46,.18),
              inset 0 1px 0 rgba(255,255,255,.9);
            position: relative;
          }

          /* Spotlight rigs above billboard */
          .wcu-lights {
            display: flex;
            justify-content: space-around;
            padding: 0 80px;
            position: relative;
          }
          .wcu-light-arm {
            width: 2px;
            height: 40px;
            background: #888;
            position: relative;
          }
          .wcu-light-arm::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 18px; height: 10px;
            background: linear-gradient(to bottom, #aaa, #666);
            border-radius: 3px;
            box-shadow: 0 0 10px 3px rgba(255,220,50,.4);
          }

          /* Billboard pole */
          .wcu-pole {
            width: 14px;
            height: 160px;
            background: linear-gradient(to right, #999, #666);
            margin: 0 auto;
          }

          /* Billboard bottom trim */
          .wcu-trim {
            height: 16px;
            background: linear-gradient(to bottom, #888, #555);
            margin: 0 -4px;
            border-radius: 0 0 3px 3px;
          }

          /* Headline on billboard */
          .wcu-headline {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 800;
            font-size: clamp(36px, 5vw, 56px);
            color: ${C.navy};
            line-height: 1.0;
            flex: 1;
          }
          .wcu-headline::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: ${C.green};
            border-radius: 2px;
            margin-top: 12px;
          }

          /* Person photo on billboard */
          .wcu-person {
            flex: 0 0 160px;
            height: 220px;
            border-radius: 6px;
            background: linear-gradient(135deg, #3a6a8a 0%, #1a4060 100%);
            display: flex;
            align-items: flex-end;
            justify-content: center;
            overflow: visible;
            position: relative;
          }

          /* Speech bubble */
          .wcu-bubble {
            position: absolute;
            background: ${C.white};
            border-radius: 12px;
            padding: 12px 16px;
            font-size: 13px;
            color: ${C.textDark};
            line-height: 1.45;
            box-shadow: 0 4px 16px rgba(13,27,46,.12);
            font-family: 'Barlow', sans-serif;
            font-weight: 400;
          }
          .wcu-bubble::before {
            content: '';
            position: absolute;
            width: 10px; height: 10px;
            background: ${C.white};
          }

          /* Responsive */
          @media(max-width:767px){
            .wcu-billboard-wrap { padding: 20px 0; }
            .wcu-billboard { flex-direction: column; padding: 32px 24px; }
            .wcu-person { flex: 0 0 120px; width: 100%; }
            .wcu-headline { font-size: 36px; }
          }
        `}</style>

        {/* Floating speech bubbles */}
        <div style={{ position: "relative" }}>
          <div className="wcu-billboard-wrap">

            {/* Spotlights */}
            <div className="wcu-lights">
              {[0,1,2,3].map(i => (
                <div key={i} className="wcu-light-arm" />
              ))}
            </div>

            {/* Billboard panel */}
            <div className="wcu-billboard">
              {/* Person photo — replace div with <img src="person.png" /> */}
              <div className="wcu-person">
                <div style={{
                  color: "rgba(255,255,255,.4)", fontSize: 11,
                  fontWeight: 600, paddingBottom: 16, textAlign: "center",
                }}>
                  [Team Member Photo]
                </div>
              </div>

              {/* Why Choose Us headline */}
              <h2 className="wcu-headline">
                Why<br />Choose Us
              </h2>
            </div>

            {/* Bottom trim */}
            <div className="wcu-trim" />

            {/* Pole */}
            <div className="wcu-pole" />

            {/* Floating bubbles */}
            {bubbles.map((b, i) => (
              <div key={i} className="wcu-bubble" style={{
                ...b.position,
                maxWidth: b.maxWidth,
              }}>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
