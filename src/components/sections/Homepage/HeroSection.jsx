import { C } from '../../../styles/designTokens';
import { TickerBar } from '../../ui/TickerBar';
import { EmergencyIcon } from '../../ui/Icons';

export function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh",
      background: `radial-gradient(ellipse at 55% 35%, #1a3d6b 0%, #0e1e38 40%, #050e1a 100%)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 110,
      paddingBottom: 120, // Increased to give room for the slant
      position: "relative",
      overflow: "hidden",
      /* This creates the steep angle at the bottom (Right side higher than Left) */
      clipPath: "polygon(0 0, 100% 0, 100% 98%, 0 100%)",
      WebkitClipPath: "polygon(0 0, 100% 0, 100% 97%, 0 100%)",
    }}>
      <style>{`
        /* Stars */
        .hero-stars {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(1px 1px at 8% 12%, rgba(255,255,255,.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 18% 28%, rgba(255,255,255,.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 32% 8%, rgba(255,255,255,.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 18%, rgba(255,255,255,.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 62% 10%, rgba(255,255,255,.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 74% 22%, rgba(255,255,255,.35) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 88% 14%, rgba(255,255,255,.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 38%, rgba(255,255,255,.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 55%, rgba(255,255,255,.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 68%, rgba(255,255,255,.25) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 28% 78%, rgba(255,255,255,.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 95% 72%, rgba(255,255,255,.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 82%, rgba(255,255,255,.25) 0%, transparent 100%);
          pointer-events: none;
        }

        .billboard-outer {
          position: relative;
          width: min(880px, 92vw);
          z-index: 2;
          margin-bottom: 40px;
        }

        .spotlight-row {
          display: flex;
          justify-content: space-between;
          padding: 0 40px;
          position: relative;
          margin-bottom: -2px;
          align-items: flex-end;
        }

        .spotlight-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .spotlight-arm {
          width: 6px;
          height: 50px;
          background: linear-gradient(to bottom, #6e6e6e, #3a3a3a);
          border-radius: 3px;
          position: relative;
        }

        .spotlight-head {
          width: 36px;
          height: 20px;
          background: linear-gradient(135deg, #7a7a7a 0%, #4a4a4a 50%, #2a2a2a 100%);
          border-radius: 4px 4px 6px 6px;
          position: relative;
          box-shadow: 0 2px 6px rgba(0,0,0,.5);
        }

        .spotlight-glow {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-top: 180px solid rgba(255, 245, 200, 0.07);
          pointer-events: none;
          filter: blur(8px);
        }

        .spotlight-bulb {
          width: 18px;
          height: 10px;
          background: radial-gradient(ellipse, #fff9d0 0%, #ffe88a 40%, rgba(255,220,50,0) 80%);
          border-radius: 50%;
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 16px 8px rgba(255, 220, 50, 0.55), 0 0 40px 20px rgba(255, 200, 50, 0.18);
        }

        .hero-billboard {
          background: linear-gradient(170deg, #f5f5f5 0%, #ffffff 35%, #f0f0f0 100%);
          border-radius: 4px;
          width: 100%;
          padding: 56px 60px 44px;
          text-align: center;
          box-shadow:
            0 0 0 6px #3a3a3a,
            0 0 0 10px #2a2a2a,
            0 30px 80px rgba(0,0,0,.6),
            inset 0 1px 0 rgba(255,255,255,.9);
          position: relative;
          box-sizing: border-box;
        }

        .billboard-supports {
          display: flex;
          gap: 0;
          width: 100%;
          position: relative;
        }
        .billboard-support-bar {
          flex: 1;
          height: 18px;
          background: linear-gradient(to bottom, #555, #333);
          border: 1px solid #222;
        }
        .billboard-support-bar:first-child { border-radius: 0 0 0 3px; }
        .billboard-support-bar:last-child { border-radius: 0 0 3px 0; }

        .billboard-legs {
          display: flex;
          justify-content: space-between;
          padding: 0 100px;
        }
        .billboard-leg {
          width: 8px;
          height: 30px;
          background: linear-gradient(to right, #555, #333);
        }

        .billboard-crossbar {
          height: 14px;
          background: linear-gradient(to bottom, #666, #3a3a3a);
          border-radius: 3px;
          margin: 0 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,.4);
        }

        .billboard-pole {
          width: 28px;
          min-height: 140px;
          background: linear-gradient(to right, #6b4c30 0%, #9a6f48 30%, #7a5535 60%, #4a3020 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
          border-radius: 2px;
          box-shadow: 2px 0 8px rgba(0,0,0,.3);
        }

        .hero-title {
          font-family: 'Ubuntu Sans', 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 900;
          font-size: clamp(36px, 5.5vw, 58px);
          line-height: 1.05;
          color: ${C.navy};
          text-transform: uppercase;
          margin: 0 0 16px;
          letter-spacing: 0.02em;
        }
        .hero-title .green { color: ${C.green}; }

        .hero-subtitle {
          font-family: 'Ubuntu Sans', 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-size: 15px;
          color: ${C.textGray};
          line-height: 1.65;
          max-width: 460px;
          margin: 0 auto 28px;
          font-weight: 400;
        }

        .btn-hero-quote {
          background: ${C.navy};
          color: ${C.white};
          border: none;
          border-radius: 50px;
          padding: 13px 36px;
          font-family: 'Ubuntu Sans', 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background .2s;
        }
        .btn-hero-quote:hover { background: #1a2d47; }

.emergency-badge {
  position: absolute;
  bottom: 130px; /* Adjust based on your billboard height */
  left: 0;
  background: ${C.green};
  /* Only round the right side to match the "taped on" look from the edge */
  border-radius: 0 100px 100px 0; 
  padding: 18px 45px 18px 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  z-index: 10;
  transition: transform 0.3s ease;
}

.emergency-badge:hover {
  transform: translateX(5px);
}

.emergency-badge .icon-wrapper {
  color: ${C.navy}; /* Icon is dark navy in the reference */
  display: flex;
  align-items: center;
}
.emergency-badge p {
  font-family: 'Ubuntu Sans', 'Inter', sans-serif; /* Or your body font */
  font-size: 14px;
  font-weight: 500;
  color: ${C.navy}; /* Text is dark navy, not white, in the image */
  line-height: 1.2;
  margin: 0;
}

.emergency-badge p strong {
  display: block;
  font-weight: 800;
  font-size: 15px;
}

        @media(max-width:767px){
          .hero-billboard { padding: 36px 24px 32px; }
          .emergency-badge { bottom: 80px; left: 8px; }
        }
      `}</style>

      <div className="hero-stars" />

      <div className="billboard-outer">
        <div className="spotlight-row">
          {[0,1,2,3,4].map(i => (
            <div key={i} className="spotlight-unit">
              <div className="spotlight-arm" />
              <div className="spotlight-head">
                <div className="spotlight-bulb" />
              </div>
              <div className="spotlight-glow" />
            </div>
          ))}
        </div>

        <div className="hero-billboard">
          <h1 className="hero-title">
            Installation Services<br />
            For <span className="green">Sign Companies</span>
          </h1>
          <p className="hero-subtitle">
            Professional installation and service for sign companies only.
            Partner with an experienced team that delivers fast turnaround.
          </p>
          <a href="#quote" className="btn-hero-quote">Get a Quote</a>
        </div>

        <div className="billboard-supports">
          {[0,1,2,3,4,5,6,7].map(i => (
            <div key={i} className="billboard-support-bar" />
          ))}
        </div>

        <div className="billboard-legs">
          {[0,1].map(i => <div key={i} className="billboard-leg" />)}
        </div>
        <div className="billboard-crossbar" />
        <div className="billboard-pole" />
      </div>

      <div className="emergency-badge">
        <EmergencyIcon />
        <p>Rapid emergency<br /><strong>response to protect<br />your business visibility</strong></p>
      </div>

      {/* Ticker will now align with the clipped bottom because it's positioned absolute bottom */}
      <TickerBar />
    </section>
  );
}