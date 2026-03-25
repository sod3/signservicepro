import { C } from "../../../styles/designTokens";
import { useFadeUp } from "../../../hooks/useFadeUp";
import { GuaranteeRibbon } from "../../ui/GuaranteeRibbon";

/* ─── Floating bubble data matched to your screenshot ───────────────────────────── */
const bubbles = [
  {
    text: "End-to-end solutions: from foundations to final illumination",
    position: { top: "10%", left: "5%" },
    maxWidth: 200,
  },
  {
    text: "Rapid emergency response to protect your business visibility",
    position: { top: "5%", right: "5%" },
    maxWidth: 200,
  },
  {
    text: "Expertise across traditional signage and advanced LED systems",
    position: { bottom: "25%", right: "5%" },
    maxWidth: 200,
  },
  {
    text: "Certified and trained crews for all job sizes",
    position: { bottom: "10%", left: "5%" },
    maxWidth: 180,
  },
];

function WhyChooseUsSection() {
  const ref = useFadeUp();

  return (
    <section style={{ background: "#f1f8ed", padding: "50px 0", marginTop: "-180px", overflow: "hidden", position: "relative" }}>
      <GuaranteeRibbon />

      <div 
        style={{ maxWidth: 1200, margin: "80px auto 0", position: "relative", height: "600px" }} 
        className="fade-up" 
        ref={ref}
      >
        <style>{`
          .wcu-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          /* The Garden Background Window */
          .wcu-garden-bg {
            position: absolute;
            width: 70%;
            height: 80%;
            background: url('/footerbackground.png') center/cover no-repeat;
            border-radius: 30px;
            z-index: 1;
            /* Optional: slight blur to match the original feel */
            filter: brightness(1.05); 
          }

          /* Your full billboard image (Man + Text + Board) */
          .wcu-main-billboard {
            position: relative;
            width: 90%;
            max-width: 950px;
            z-index: 2;
            display: block;
          }

          /* Floating Bubbles */
          .wcu-bubble {
            position: absolute;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
            padding: 15px 20px;
            border-radius: 15px;
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            font-weight: 500;
            color: #333;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            z-index: 3;
            line-height: 1.4;
          }

          @media (max-width: 991px) {
            .wcu-container { height: auto; flex-direction: column; }
            .wcu-garden-bg { width: 95%; height: 300px; position: relative; margin-bottom: -150px; }
            .wcu-bubble { position: relative !important; top: auto !important; left: auto !important; right: auto !important; bottom: auto !important; margin: 10px auto; width: 90%; }
          }
        `}</style>

        <div className="wcu-container">
          {/* 1. The Garden Image in the background */}
          <div className="wcu-garden-bg" />

          {/* 2. The Full Billboard (WhyChoose.png) */}
          <img 
            src="/whychoose.png" 
            alt="Why Choose Us" 
            className="wcu-main-billboard" 
          />

          {/* 3. The Bubbles on top */}
          {bubbles.map((b, i) => (
            <div 
              key={i} 
              className="wcu-bubble" 
              style={{ ...b.position, maxWidth: b.maxWidth }}
            >
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;