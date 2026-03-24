import { C } from '../../styles/designTokens';
import { TickerBar } from '../ui/TickerBar';
import { EmergencyIcon } from '../ui/Icons';

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
      paddingBottom: 60,
      position: "relative",
      overflow: "hidden",
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

        /* Billboard outer container */
        .billboard-outer {
          position: relative;
          width: min(880px, 92vw);
          z-index: 2;
        }

        /* Spotlight assembly row above billboard */
        .spotlight-row {
          display: flex;
          justify-content: space-between;
          padding: 0 40px;
          position: relative;
          margin-bottom: -2px;
          align-items: flex-end;
        }

        /* Each spotlight unit = arm + light head */
        .spotlight-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        /* Mounting arm - angled metal arm from top */
        .spotlight-arm {
          width: 6px;
          height: 50px;
          background: linear-gradient(to bottom, #6e6e6e, #3a3a3a);
          border-radius: 3px;
          position: relative;
        }

        /* The light fixture head */
        .spotlight-head {
          width: 36px;
          height: 20px;
          background: linear-gradient(135deg, #7a7a7a 0%, #4a4a4a 50%, #2a2a2a 100%);
          border-radius: 4px 4px 6px 6px;
          position: relative;
          box-shadow: 0 2px 6px rgba(0,0,0,.5);
        }

        /* Glow cone from each light pointing down onto billboard */
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

        /* The bulb glow dot under the fixture */
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

        /* Billboard panel */
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

        /* Bottom horizontal support bars */
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

        /* Support legs connecting panel to crossbar */
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

        /* Crossbar */
        .billboard-crossbar {
          height: 14px;
          background: linear-gradient(to bottom, #666, #3a3a3a);
          border-radius: 3px;
          margin: 0 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,.4);
        }

        /* Pole */
        .billboard-pole {
          width: 28px;
          min-height: 180px;
          background: linear-gradient(to right, #6b4c30 0%, #9a6f48 30%, #7a5535 60%, #4a3020 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
          border-radius: 2px;
          box-shadow: 2px 0 8px rgba(0,0,0,.3);
        }

        /* Hero text */
        .hero-title {
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
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
          font-size: 15px;
          color: ${C.textGray};
          line-height: 1.65;
          max-width: 460px;
          margin: 0 auto 28px;
          font-weight: 400;
        }

        /* Get a Quote button inside billboard */
        .btn-hero-quote {
          background: ${C.navy};
          color: ${C.white};
          border: none;
          border-radius: 50px;
          padding: 13px 36px;
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
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

        /* Emergency badge */
        .emergency-badge {
          position: absolute;
          bottom: 80px;
          left: -10px;
          background: ${C.green};
          border-radius: 50px;
          padding: 14px 20px 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 240px;
          box-shadow: 0 8px 28px rgba(122,193,66,.4);
          z-index: 10;
        }
        .emergency-badge svg { flex-shrink: 0; }
        .emergency-badge p {
          font-size: 12px;
          font-weight: 400;
          color: ${C.white};
          line-height: 1.35;
          margin: 0;
        }
        .emergency-badge p strong { font-weight: 800; }

        @media(max-width:767px){
          .hero-billboard { padding: 36px 24px 32px; }
          .spotlight-row { padding: 0 20px; }
          .billboard-pole { min-height: 100px; }
          .billboard-legs { padding: 0 40px; }
          .emergency-badge { bottom: 30px; left: 8px; padding: 10px 14px; max-width: 200px; }
        }
      `}</style>

      <div className="hero-stars" />

      {/* Full billboard assembly */}
      <div className="billboard-outer">

        {/* Spotlights row */}
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

        {/* Billboard panel */}
        <div className="hero-billboard">
          <h1 className="hero-title">
            Installation Services<br />
            For <span className="green">Sign Companies</span>
          </h1>
          <p className="hero-subtitle">
            Professional installation and service for sign companies only.
            Partner with an experienced team that delivers fast turnaround,
            quick quotes, and high-quality installs so your signs shine.
          </p>
          <a href="#quote" className="btn-hero-quote">Get a Quote</a>
        </div>

        {/* Support bars below panel */}
        <div className="billboard-supports">
          {[0,1,2,3,4,5,6,7].map(i => (
            <div key={i} className="billboard-support-bar" />
          ))}
        </div>

        {/* Legs to crossbar */}
        <div className="billboard-legs">
          {[0,1].map(i => <div key={i} className="billboard-leg" />)}
        </div>

        {/* Crossbar */}
        <div className="billboard-crossbar" />

        {/* Pole */}
        <div className="billboard-pole" />
      </div>

      {/* Emergency badge */}
      <div className="emergency-badge">
        <EmergencyIcon />
        <p>
          Rapid emergency<br />
          <strong>response to protect<br />your business visibility</strong>
        </p>
      </div>

      {/* Ticker */}
      <TickerBar />
    </section>
  );
}