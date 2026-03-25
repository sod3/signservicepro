import { useState } from "react";
import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';
import { PhoneIcon, UploadIcon } from '../../ui/Icons';
import { Link } from "react-router-dom";

export function QuoteSection() {
  const ref = useFadeUp();
  const [form, setForm] = useState({
    company: "", contact: "", details: "", services: "", timeline: ""
  });

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section id="quote" style={{ background: C.cream, padding: "100px 24px" }}>
      <style>{`
        .quote-layout {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media(max-width:1024px){
          .quote-layout { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>

      <div className="quote-layout fade-up" ref={ref}>
        {/* Left: tagline + cities */}
        <div>
          {/* Small logo */}
          <div style={{
            display: "inline-flex", alignItems: "baseline", gap: 6,
            marginBottom: 28
          }}>
          <Link>
            <img src="/logo.png" alt="SiGn Service PRO logo" style={{ width: "300px", height: "auto" }} />
          </Link>
          </div>

          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "clamp(40px,5vw,64px)",
            color: C.navy, lineHeight: 1.05, marginBottom: 20
          }}>
            Building Signs that Build Brands
          </h2>

          <p style={{
            fontSize: 14, color: C.textGray, marginBottom: 24,
            lineHeight: 1.65
          }}>
            Troy • Piqua • Sidney • Lima • Springfield • Englewood •
            Beavercreek • Tipp City • Vandalia • Centerville • Huber Heights
          </p>

          {/* Avatar row - UPDATED WITH ICONS */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            <div style={{ display: "flex" }}>
              {["icon", "icon1", "icon2", "icon3", "icon4"].map((iconName, i) => (
                <div key={i} style={{
                  width: 38, height: 38, borderRadius: "50%",
                  border: "2.5px solid white",
                  background: "#eee",
                  marginLeft: i > 0 ? -10 : 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden"
                }}>
                  <img 
                    src={`/icon/${iconName}.png`} 
                    alt={`client-${i}`} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </div>
              ))}
            </div>
            {/* Stars */}
            <div style={{ display: "flex", gap: 2 }}>
              {[0,1,2,3,4].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FCD34D">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#quote" className="btn btn-green">Get a Quote</a>
            <a href="tel:+1234567890" className="btn btn-navy" style={{
              background: "#EFF7E2",
              color: C.textDark,
              border: "2px solid #000",
              borderRadius: 10
            }}>
              <PhoneIcon /> Call Us Now
            </a>
          </div>
        </div>

        {/* Right: form card */}
        <div style={{
          background: C.navy, borderRadius: 16,
          padding: "40px 36px",
          boxShadow: "0 20px 60px rgba(13,27,46,.2)"
        }}>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700, fontSize: 44,
            color: C.white, textAlign: "center",
            marginBottom: 28, letterSpacing: ".02em"
          }}>
            GET A <span style={{ color: C.green }}>QUOTE</span>
          </h3>

          {[
            { label: "Company Name", name: "company", ph: "Your company name" },
            { label: "Contact Information", name: "contact", ph: "Email or phone" },
            { label: "Project Details", name: "details", ph: "Describe your project" },
            { label: "Services Needed", name: "services", ph: "Installation, repair, maintenance..." },
            { label: "Desired Timeline", name: "timeline", ph: "When do you need this done?" },
          ].map(field => (
            <div key={field.name} style={{ marginBottom: 16 }}>
              <label style={{
                display: "block", fontSize: 12, fontWeight: 600,
                color: "rgba(255,255,255,.65)", marginBottom: 6,
                letterSpacing: ".06em"
              }}>{field.label}</label>
              <input
                type="text"
                name={field.name}
                placeholder={field.ph}
                style={{ backgroundColor: "white" }}
                value={form[field.name]}
                onChange={handleChange}
                className="quote-input"
              />
            </div>
          ))}

          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button
              className="btn btn-green"
              style={{ flex: 1, justifyContent: "center", fontSize: 13 }}
              onClick={() => alert("Quote request submitted!")}
            >
              Get a Quote
            </button>
            <button
              className="btn"
              style={{
                background: "#EFF7E2",
                color: C.textDark,
                border: "1.5px solid rgba(255,255,255,.25)",
              }}
            >
              <UploadIcon /> File Upload
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}