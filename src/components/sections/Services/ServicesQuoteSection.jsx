import { useState } from "react";
import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';
import { PhoneIcon, UploadIcon } from '../../ui/Icons';
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const SignProIcon = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #7ed321 0%, #58a74e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(126, 211, 33, 0.4);
  animation: ${pulse} 3s infinite ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 35px;
  
  &::before {
    content: '✦'; 
    color: white;
    font-size: 22px;
  }
`;

function ServicesQuoteSection() {
  const ref = useFadeUp();
  const [form, setForm] = useState({
    company: "", contact: "", details: "", services: "", timeline: ""
  });

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section 
      id="quote" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',   
        backgroundColor: C.cream, 
        padding: "100px 24px 60px 24px" 
      }}
    >
      <style>{`
        #quote::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url('/footerbackground.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(1.2) blur(6px); 
          transform: scale(1.1); 
          z-index: 0;
        }

        .quote-layout {
          position: relative; 
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .quote-input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          outline: none;
        }

        /* IMPROVED VISIBILITY FOR FOOTER TEXT */
        .footer-bottom-text {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 80px auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          color: #ffffff; /* Switched to white for better contrast */
          font-size: 14px;
          font-weight: 500;
          text-shadow: 0px 2px 4px rgba(0,0,0,0.5); /* Shadow for legibility */
          border-top: 1px solid rgba(255,255,255,0.2);
          padding: 24px 10px;
        }

        .footer-bottom-text a {
            text-decoration: none;
            color: inherit;
        }

        /* AI Bubble Styles */
        .ai-chat-container {
            position: absolute;
            bottom: 150px;
            right: 40px;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
        }

        .ai-bubble {
            background: white;
            padding: 10px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            font-weight: 800;
            color: #8CC63F; 
            font-size: 18px;
            position: relative;
        }

        .ai-bubble::after {
            content: '';
            position: absolute;
            bottom: -8px;
            right: 25px;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid white;
        }

        @media(max-width:1024px){
          .quote-layout { grid-template-columns: 1fr; gap: 40px; }
          .footer-bottom-text { justify-content: center; text-align: center; font-size: 12px; }
          .ai-chat-container { right: 20px; bottom: 40px; }
        }
      `}</style>

      <div className="quote-layout fade-up" ref={ref}>
        {/* Left: tagline + cities */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "baseline", gap: 6,
            marginBottom: 28
          }}>
          <Link to="/">
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
            fontSize: 14, color: C.textDark, marginBottom: 24,
            lineHeight: 1.65
          }}>
            Troy • Piqua • Sidney • Lima • Springfield • Englewood •
            Beavercreek • Tipp City • Vandalia • Centerville • Huber Heights
          </p>

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
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px"
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
            fontWeight: 700, fontSize: 40,
            color: C.white, textAlign: "center",
            marginBottom: 28, letterSpacing: ".02em"
          }}>
            GET YOUR <span style={{ color: C.green }}>Free Estimate Today!</span>
          </h3>

          {[
            { label: "Full Name", name: "fullName", ph: "Your full name" },
            { label: "Phone Number", name: "phoneNumber", ph: "Your phone number (123) 456-7890" },
            { label: "Email", name: "email", ph: "Your email address" },
            { label: "Message", name: "message", ph: "Your message", style: { height: 120 } },
          ].map(field => (
            <div key={field.name} style={{ marginBottom: 16 }}>
              <label style={{
                display: "block", fontSize: 12, fontWeight: 600,
                color: "rgba(255,255,255,.65)", marginBottom: 6,
                letterSpacing: ".06em"
              }}>{field.label}</label>
              <textarea
                name={field.name}
                placeholder={field.ph}
                style={{
                  backgroundColor: "white",
                  ...field.style,
                }}
                value={form[field.name]}
                onChange={handleChange}
                className="quote-input"
              />
            </div>
          ))}

          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button
              className="btn btn-green"
              style={{ flex: 1, justifyContent: "center", fontSize: 13, border: "none", cursor: "pointer" }}
              onClick={() => alert("Quote request submitted!")}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER TEXT WITH UPDATED CONTRAST */}
      <div className="footer-bottom-text">
        <div>Privacy Policy | Your Privacy Choices</div>
        <div>© 2025 SIGN SERVICE PRO . All rights Reserved.</div>
        <div>
          <span style={{ color: '#ADFF2F', fontWeight: '700' }}>Web Design</span> By Latin Branding
        </div>
      </div>

      {/* AI CHAT WITH HIGHER CONTRAST */}
      <div className="ai-chat-container">
          <div className="ai-bubble">Talk to our AI</div>
          <SignProIcon />
      </div>
    </section>
  );
}

export default ServicesQuoteSection;