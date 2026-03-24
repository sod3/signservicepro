import { useState, useEffect } from "react";
import { C } from '../../styles/designTokens';
import { PhoneIcon, CloseIcon, HamburgerIcon } from '../ui/Icons';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar-wrap {
          position: fixed;
          top: 12px; left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 1100px;
          z-index: 100;
        }
        .navbar-inner {
          background: ${C.white};
          border-radius: 50px;
          padding: 10px 24px 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 32px rgba(13,27,46,.13);
        }
        /* Logo block */
        .logo-box {
          background: ${C.navy};
          border-radius: 6px;
          padding: 5px 11px;
          display: flex;
          align-items: baseline;
          gap: 3px;
          flex-shrink: 0;
        }
        .logo-sign {
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 900;
          font-size: 21px;
          color: ${C.white};
          letter-spacing: 0.5px;
          line-height: 1;
        }
        .logo-sign .g { color: ${C.green}; }
        .logo-service {
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 700;
          font-size: 10px;
          color: ${C.green};
          letter-spacing: 0.5px;
          line-height: 1;
          align-self: flex-start;
          padding-top: 2px;
        }
        .logo-pro-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1;
        }
        .logo-pro {
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 900;
          font-size: 28px;
          color: ${C.navy};
          letter-spacing: 1px;
          line-height: 1;
        }
        .logo-tagline {
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 600;
          font-size: 7.5px;
          color: ${C.green};
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* Nav links */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .navbar-links a {
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${C.navy};
          text-decoration: none;
          transition: color .2s;
        }
        .navbar-links a:hover { color: ${C.green}; }

        /* CTA buttons */
        .btn-quote {
          background: ${C.green};
          color: ${C.white};
          border: none;
          border-radius: 50px;
          padding: 10px 22px;
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: background .2s;
        }
        .btn-quote:hover { background: ${C.greenDark}; }

        .btn-call {
          background: transparent;
          color: ${C.navy};
          border: 2px solid ${C.navy};
          border-radius: 50px;
          padding: 8px 18px;
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          transition: all .2s;
        }
        .btn-call:hover { background: ${C.navy}; color: ${C.white}; }

        .navbar-ctas {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media(max-width:767px){
          .navbar-wrap { width: calc(100% - 24px); top: 8px; }
          .navbar-inner { padding: 10px 16px; }
          .navbar-links { display: none; }
          .navbar-ctas { display: none !important; }
        }
        @media(max-width:1024px){
          .navbar-links { gap: 20px; }
        }
      `}</style>

      <nav className="navbar-wrap">
        <div className="navbar-inner">
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="logo-box">
              <span className="logo-sign">Si<span className="g">G</span>N</span>
              <span className="logo-service">SERVICE</span>
            </div>
            <div className="logo-pro-wrap">
              <span className="logo-pro">PRO</span>
              <span className="logo-tagline">Building Signs That Build Brands</span>
            </div>
          </div>

          {/* Links */}
          <div className="navbar-links">
            {["Projects", "Our Services", "About Us"].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>

          {/* CTAs */}
          <div className="navbar-ctas">
            <a href="#quote" className="btn-quote">Get a Quote</a>
            <a href="tel:+1234567890" className="btn-call">
              <PhoneIcon /> Call Us Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer" }}
            className="show-mobile"
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,.5)",
            zIndex: 199, backdropFilter: "blur(2px)"
          }}
        />
      )}

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer" }}
        >
          <CloseIcon />
        </button>
        {["Projects", "Our Services", "About Us"].map(l => (
          <a key={l} href="#" style={{ color: C.white, fontSize: 18, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href="#quote" className="btn-quote" onClick={() => setMenuOpen(false)}>Get a Quote</a>
        <a href="tel:+1234567890" className="btn-call" style={{ color: C.white, borderColor: C.white }} onClick={() => setMenuOpen(false)}>
          <PhoneIcon /> Call Us Now
        </a>
      </div>
    </>
  );
}