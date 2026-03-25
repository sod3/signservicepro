import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';
import { CheckIcon, StarIcon, BoltIcon, HQIcon } from '../../ui/Icons';

const features = [
  {
    icon: <CheckIcon />,
    title: "Quick Turnaround & Timely Response",
    desc: "We understand the deadlines sign companies face. Our team responds to service and repair requests within 48 hours and can mobilize for emergency situations within 2 hours."
  },
  {
    icon: <StarIcon />,
    title: "Expert Installation Team",
    desc: "Your signs deserve to be installed correctly the first time. Our experienced installers use bucket trucks, crane trucks, scissor lifts, skid steers, forklifts, and more to complete every job safely, efficiently, and to your standards."
  },
  {
    icon: <BoltIcon />,
    title: "Rapid Quotes",
    desc: "Send us your project specs and receive a comprehensive quote within 48 hours or less. Helping you keep your workflow moving."
  },
  {
    icon: <HQIcon />,
    title: "Quality & Warranty",
    desc: "We stand behind our workmanship. Permanent signage includes a 1-year parts and labor warranty, with extended warranties available for LED displays."
  },
];

export function WhyPartnerSection() {
  const ref1 = useFadeUp();
  const ref2 = useFadeUp();

  return (
    <section className="wp-section">
      <style>{`
        .wp-section {
          background: ${C.cream};
          padding: 100px 0 0;
        }
        .wp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .wp-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 48px;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        /* Mobile & Tablet Adjustments */
        @media(max-width: 1024px) {
          .wp-layout { 
            grid-template-columns: 1fr; 
            gap: 32px;
          }
        }

        @media(max-width: 767px) {
          .wp-section {
            padding: 60px 0 40px !important;
          }
          .wp-grid { 
            grid-template-columns: 1fr; 
          }
          .wp-header {
            margin-bottom: 40px !important;
            padding: 0 20px;
          }
          .feat-card {
            text-align: center;
            padding: 10px 0;
          }
        }
      `}</style>

      <div className="wp-header fade-up" style={{ textAlign: "center", marginBottom: 64 }} ref={ref1}>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900, fontSize: "clamp(36px,5vw,56px)",
          textTransform: "uppercase", color: C.navy, lineHeight: 1.05
        }}>
          Why <strong style={{ color: C.navy }}>Partner</strong><br />With Us
        </h2>
      </div>

      <div className="wp-layout fade-up" ref={ref2}>
        <div style={{ position: "relative", height: 420 }}>
          <div style={{
            position: "absolute", top: 0, left: 60, right: 0,
            height: 240, borderRadius: 12, overflow: "hidden",
            boxShadow: "0 12px 32px rgba(13,27,46,.18)"
          }}>
            <div style={{
              width: "100%", height: "100%",
              background: "linear-gradient(135deg, #b0c4d8 0%, #7a96b0 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 13, fontWeight: 600
            }}>
              <img src="/image.png" alt="Bucket Truck Photo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div style={{
            position: "absolute", bottom: 80, left: -40, width: 220, height: 200,
            borderRadius: 12, overflow: "hidden",
            boxShadow: "0 12px 32px rgba(13,27,46,.18)"
          }}>
            <div style={{
              width: "100%", height: "100%",
              background: "linear-gradient(135deg, #7a96b0 0%, #4a6680 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 13, fontWeight: 600
            }}>
              <img src="/image2.png" alt="Bucket Truck Photo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="wp-grid">
          {features.map((f, i) => (
            <div key={i} className="feat-card">
              <div style={{ marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800, fontSize: 22,
                color: C.navy, marginBottom: 10, lineHeight: 1.15
              }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: C.textGray, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}