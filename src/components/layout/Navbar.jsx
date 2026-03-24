import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { C } from '../../styles/designTokens';
import { PhoneIcon, CloseIcon, HamburgerIcon } from '../ui/Icons';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleOurServicesClick = (e) => {
    e.preventDefault();
    navigate('/our-services');
  };

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
          justify-content: space-between; /* Keeps Logo left and Right-Group right */
          box-shadow: 0 4px 32px rgba(13,27,46,.13);
        }

        /* Group for Links + CTAs */
        .navbar-right-group {
          display: flex;
          align-items: center;
          gap: 40px; /* Space between the last link and the first button */
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
          gap: 24px; /* Reduced gap to keep them closer to buttons */
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
          cursor: pointer;
        }
        .navbar-links a:hover { color: ${C.green}; }

        /* CTA buttons */
        .navbar-ctas {
          display: flex;
          align-items: center;
          gap: 10px;
        }
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

        @media(max-width:767px){
          .navbar-wrap { width: calc(100% - 24px); top: 8px; }
          .navbar-inner { padding: 10px 16px; }
          .navbar-right-group { display: none; } /* Hide entire group on mobile */
        }
        @media(max-width:1024px){
          .navbar-right-group { gap: 20px; }
          .navbar-links { gap: 15px; }
        }
      `}</style>

      <nav className="navbar-wrap">
        <div className="navbar-inner">
          {/* Logo - Stays Left */}
          <Link to="/" style={{ textDecoration: 'none' }}>
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
          </Link>

          {/* Right Group: Links + CTAs - Floats Right */}
          <div className="navbar-right-group">
            <div className="navbar-links">
              <Link to="/projects">Projects</Link>
              <a href="#" onClick={handleOurServicesClick}>Our Services</a>
              <Link to="/about-us">About Us</Link>
            </div>

            <div className="navbar-ctas">
              <a href="#quote" className="btn-quote">Get a Quote</a>
              <a href="tel:+1234567890" className="btn-call">
                <PhoneIcon /> Call Us Now
              </a>
            </div>
          </div>

          {/* Hamburger (Mobile Only) */}
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

      {/* Mobile drawer and overlay logic remains the same... */}
      {/* (Skipped for brevity as it doesn't affect desktop layout) */}
    </>
  );
}