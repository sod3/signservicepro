import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';
import { GuaranteeRibbon } from '../../ui/GuaranteeRibbon'

export function WhoWeServeSection() {
  const ref = useFadeUp();

  return (
    <section style={{ background: C.cream, paddingBottom: 80, position: "relative", overflow: "hidden"}}>
      <GuaranteeRibbon />
      
      {/* Isometric illustration placeholder */}
      <div style={{
        maxWidth: 800, margin: "0 auto 0", padding: "0 24px",
        display: "flex", justifyContent: "center",
        position: "relative", 
        zIndex: 2 
      }}>
        <div style={{
          width: "100%", maxWidth: 700, height: 300,
          borderRadius: 16,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: ".05em"
        }}>
          <img src="/Construction.png" alt="Isometric Construction Scene Illustration" />
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "60px auto 0", padding: "0 24px" }} className="fade-up" ref={ref}>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900, fontSize: "clamp(36px,5vw,56px)",
          textTransform: "uppercase", color: C.navy,
          textAlign: "center", marginBottom: 60
        }}>
          Who <span style={{ color: C.navy, fontStyle: "italic" }}>We Serve</span>
        </h2>

        <style>{`
          .serve-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
          .serve-card {
            display: flex;
            gap: 24px;
            align-items: flex-start;
          }
          @media(max-width:767px){
            .serve-grid { grid-template-columns: 1fr; gap: 40px; }
            .serve-card { flex-direction: column; }
          }
        `}</style>

        <div className="serve-grid">
          {[
            {
              title: "Independent Sign Shops",
              desc: "Need installation capabilities without hiring your own crew? We install under your brand, helping you offer full-service solutions without extra overhead. You design and fabricate. We handle the installation.",
              // Replaced text with the <img> tag
              img: <img src="/sign1.png" alt="Sign Shop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
              imgBg: "linear-gradient(135deg, #8ab0c8 0%, #5a8090 100%)"
            },
            {
              title: "Regional & National Sign Companies",
              desc: "Looking for a reliable installation partner in the mid-Ohio region? We service a 2-hour radius around our shop including Dayton, Springfield, Cincinnati, Columbus, Toledo, Lima, and eastern Indiana. Multi-site rollouts, service programs, and maintenance partnerships are welcome.",
              img: <img src="/city.png" alt="Sign Shop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
              imgBg: "linear-gradient(135deg, #7a9680 0%, #4a6650 100%)"
            }
          ].map((s, i) => (
            <div key={i} className="serve-card">
              <div style={{
                flex: "0 0 160px", width: 160, height: 140,
                borderRadius: 12, overflow: "hidden",
                boxShadow: "0 8px 24px rgba(13,27,46,.12)"
              }}>
                <div style={{
                  width: "100%", height: "100%",
                  background: s.imgBg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 11, fontWeight: 600, textAlign: "center"
                }}>
                  {s.img}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800, fontSize: 20,
                  color: C.navy, textTransform: "uppercase",
                  marginBottom: 10, lineHeight: 1.2
                }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: C.textGray, lineHeight: 1.65 }}>{s.desc}</p>
                <div style={{
                  width: 40, height: 3,
                  background: C.green, borderRadius: 2, marginTop: 16
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}