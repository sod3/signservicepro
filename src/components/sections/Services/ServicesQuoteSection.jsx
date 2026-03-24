import { useState } from "react";
import {C} from "../../../styles/designTokens";
import {useFadeUp} from "../../../hooks/useFadeUp";
import { PhoneIcon } from "../../ui/Icons";

/* ─── Form fields for the Services page quote form ───────────────────────────── */
const formFields = [
  { label: "Full Name",    name: "name",    ph: "Your full name",   type: "text"  },
  { label: "Phone Number", name: "phone",   ph: "Your phone number",type: "tel"   },
  { label: "Email",        name: "email",   ph: "Your email address",type: "email" },
  { label: "Message",      name: "message", ph: "Tell us about your project...", type: "textarea" },
];

/* ─── Services Quote Section ─────────────────────────────────────────────────── */
function ServicesQuoteSection() {
  const ref  = useFadeUp();
  const [form, setForm] = useState(
    Object.fromEntries(formFields.map(f => [f.name, ""]))
  );

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => alert("Quote request submitted!");

  return (
    <section id="quote" style={{ background: C.cream, padding: "80px 0 100px" }}>
      <style>{`
        .sq-layout {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media(max-width:1024px){
          .sq-layout { grid-template-columns: 1fr; gap: 40px; }
        }

        /* Services page textarea */
        .sq-textarea {
          width: 100%;
          background: rgba(255,255,255,.12);
          border: 1.5px solid rgba(255,255,255,.25);
          border-radius: 6px;
          padding: 11px 14px;
          color: ${C.white};
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          resize: vertical;
          min-height: 120px;
          transition: border-color .2s;
          outline: none;
        }
        .sq-textarea::placeholder { color: rgba(255,255,255,.45); }
        .sq-textarea:focus        { border-color: ${C.green}; }
      `}</style>

      <div className="sq-layout fade-up" ref={ref}>

        {/* ── Left: logo + tagline + cities + avatars ─────────────── */}
        <div>
          {/* Logo block */}
          <div style={{
            display: "inline-flex", alignItems: "baseline", gap: 6,
            background: C.navy, borderRadius: 8, padding: "10px 18px",
            marginBottom: 28,
          }}>
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 22, color: C.white,
            }}>
              Si<span style={{ color: C.green }}>G</span>N
            </span>
            <div>
              <div style={{
                fontSize: 10, fontWeight: 700, color: C.green,
                letterSpacing: 1.5, textTransform: "uppercase",
              }}>SERVICE</div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: 22, color: C.white, lineHeight: 1,
              }}>PRO</div>
              <div style={{
                fontSize: 7, fontWeight: 600, color: C.green,
                letterSpacing: 1.2, textTransform: "uppercase", marginTop: 2,
              }}>Building Signs That Build Brands</div>
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "clamp(40px,5vw,60px)",
            color: C.navy, lineHeight: 1.05, marginBottom: 20,
          }}>
            Building Signs that<br />Build Brands
          </h2>

          <p style={{ fontSize: 14, color: C.textGray, marginBottom: 24, lineHeight: 1.65 }}>
            Troy • Piqua • Sidney • Lima • Springfield • Englewood •<br />
            Beavercreek • Tipp City • Vandalia • Centerville • Huber Heights
          </p>

          {/* Avatar stack + star rating */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            <div style={{ display: "flex" }}>
              {[0,1,2,3,4].map(i => (
                <div key={i} style={{
                  width: 40, height: 40, borderRadius: "50%",
                  border: "2.5px solid white",
                  background: `hsl(${i * 40 + 180}, 30%, 55%)`,
                  marginLeft: i > 0 ? -12 : 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 12, fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(0,0,0,.12)",
                }}>
                  {/* Replace with <img> avatars */}
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 3 }}>
              {[0,1,2,3,4].map(i => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#quote" className="btn btn-green">Get a Quote</a>
            <a href="tel:+1234567890" className="btn btn-navy">
              <PhoneIcon /> Call Us Now
            </a>
          </div>
        </div>

        {/* ── Right: free estimate form ────────────────────────────── */}
        <div style={{
          background: C.navy, borderRadius: 16,
          padding: "36px 32px",
          boxShadow: "0 20px 60px rgba(13,27,46,.18)",
        }}>
          <h3 style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 400, fontSize: 22,
            color: C.white, textAlign: "center",
            marginBottom: 28,
          }}>
            Get Your <span style={{ color: C.green, fontWeight: 700 }}>Free<br />Estimate Today!</span>
          </h3>

          {formFields.map(field => (
            <div key={field.name} style={{ marginBottom: 14 }}>
              <label style={{
                display: "block", fontSize: 12, fontWeight: 600,
                color: "rgba(255,255,255,.65)", marginBottom: 5,
                letterSpacing: ".06em",
              }}>
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.ph}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="sq-textarea"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.ph}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="quote-input"
                />
              )}
            </div>
          ))}

          <button
            className="btn btn-green"
            style={{ width: "100%", justifyContent: "center", marginTop: 8, fontSize: 13 }}
            onClick={handleSubmit}
          >
            Get a Quote
          </button>
        </div>

      </div>
    </section>
  );
}

export default ServicesQuoteSection;
