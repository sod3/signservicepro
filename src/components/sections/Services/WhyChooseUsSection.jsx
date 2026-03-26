import { C } from "../../../styles/designTokens";
import { useFadeUp } from "../../../hooks/useFadeUp";
import { GuaranteeRibbon } from "../../ui/GuaranteeRibbon";

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
    <section className="wcu-section">
      <GuaranteeRibbon />

      <div className="wcu-outer-wrapper fade-up" ref={ref}>
        <style>{`
          .wcu-section {
            background: #f1f8ed;
            padding: 100px 0 50px 0;
            margin-top: -200px;
            overflow: hidden;
            position: relative;
          }

          .wcu-outer-wrapper {
            max-width: 1200px;
            margin: 80px auto 0;
            position: relative;
            min-height: 600px;
          }

          .wcu-container {
            position: relative;
            width: 100%;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .wcu-garden-bg {
            position: absolute;
            width: 70%;
            height: 85%; /* Increased height slightly */
            background: url('/footerbackground.png') center/cover no-repeat;
            border-radius: 30px;
            z-index: 1;
            filter: brightness(1.05); 
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .wcu-main-billboard {
            position: relative;
            width: 90%;
            max-width: 850px;
            z-index: 2;
            display: block;
            height: auto;
            /* Move image up so it stays within the background */
            margin-top: -40px; 
          }

          .wcu-bubble {
            position: absolute;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            padding: 15px 20px;
            border-radius: 15px;
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #0d2137;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            z-index: 3;
            line-height: 1.4;
            border: 1px solid rgba(255,255,255,0.3);
          }

          /* Tablet & Mobile Responsiveness */
          @media (max-width: 991px) {
            .wcu-section { margin-top: -200px; padding-top: 60px; }
            .wcu-outer-wrapper { min-height: auto; margin-top: 40px; }
            .wcu-container { height: auto; flex-direction: column; padding: 0 20px; }

            .wcu-garden-bg { 
              width: 100%; 
              height: 320px; 
              position: absolute; 
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              border-radius: 20px;
            }

            .wcu-main-billboard { 
              width: 100%; 
              margin-top: 20px; /* Adjusted for mobile */
              margin-bottom: 30px; 
            }

            .wcu-bubble-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
              width: 100%;
              position: relative;
              z-index: 4;
              margin-top: 10px;
            }

            .wcu-bubble { 
              position: relative !important; 
              top: auto !important; 
              left: auto !important; 
              right: auto !important; 
              bottom: auto !important; 
              max-width: 100% !important; 
              margin: 0;
              text-align: center;
              font-size: 13px;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 60px;
            }
          }

          @media (max-width: 600px) {
            .wcu-bubble-grid { grid-template-columns: 1fr; }
            .wcu-garden-bg { height: 240px; }
            .wcu-main-billboard { margin-top: 10px; }
          }
        `}</style>

        <div className="wcu-container">
          <div className="wcu-garden-bg" />

          <img 
            src="/whychoose.png" 
            alt="Why Choose Us" 
            className="wcu-main-billboard" 
          />

          <div className="wcu-bubble-grid">
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
      </div>
    </section>
  );
}

export default WhyChooseUsSection;