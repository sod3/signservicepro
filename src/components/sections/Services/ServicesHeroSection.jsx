import {C} from "../../../styles/designTokens";

/* ─── Services Ticker Bar ────────────────────────────────────────────────────── */
function ServicesTickerBar() {
  const text  = "PROFESSIONAL SIGN INSTALLATION & MAINTENANCE IN DAYTON, OH";
  const items = Array(8).fill(text);
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: C.navy, overflow: "hidden",
      padding: "14px 0", borderTop: `3px solid ${C.green}`,
      zIndex: 5,
    }}>
      <div className="ticker-inner" style={{ display: "flex", width: "max-content" }}>
        {items.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800, fontSize: 15,
            color: i % 2 === 0 ? C.white : C.green,
            letterSpacing: ".12em", textTransform: "uppercase",
            padding: "0 40px", whiteSpace: "nowrap",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Services Hero Section ──────────────────────────────────────────────────── */
function ServicesHeroSection() {
  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 100,
      paddingBottom: 80,
    }}>
      <style>{`
        /* Blurred city skyline background */
        .services-hero-bg {
          position: absolute;
          inset: 0;
          /* Gradient simulating dusk sky — replace with <img> for real photo */
          background:
            linear-gradient(
              to bottom,
              #d8e8f0 0%,
              #c8d8e8 20%,
              #e8d0b8 55%,
              #c8a870 75%,
              #6a8860 100%
            );
          filter: blur(0px);
          z-index: 0;
        }
        /* City silhouette overlay */
        .services-hero-city {
          position: absolute;
          bottom: 60px; left: 0; right: 0;
          height: 260px;
          background:
            linear-gradient(to top, rgba(60,80,50,.55) 0%, transparent 100%);
          z-index: 1;
        }
        /* Light overlay for text legibility */
        .services-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(220,230,235,.45);
          z-index: 2;
        }

        /* Content */
        .services-hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 800px;
          padding: 0 24px;
        }

        .services-hero-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(12px, 1.5vw, 14px);
          letter-spacing: .18em;
          text-transform: uppercase;
          color: ${C.navy};
          margin-bottom: 18px;
          display: block;
        }

        .services-hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(40px, 7vw, 76px);
          line-height: 1.0;
          color: ${C.navy};
          text-transform: uppercase;
          margin-bottom: 32px;
        }

        .services-hero-cta {
          display: inline-block;
          background: ${C.navy};
          color: ${C.white};
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: .16em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 4px;
          text-decoration: none;
          transition: background .2s, transform .2s;
        }
        .services-hero-cta:hover {
          background: ${C.navyLight};
          transform: translateY(-2px);
        }

        @media(max-width:767px){
          .services-hero-title { font-size: clamp(32px, 8vw, 48px); }
        }
      `}</style>

      {/* Background layers */}
      <div className="services-hero-bg" />
      <div className="services-hero-city" />
      <div className="services-hero-overlay" />

      {/* Text content */}
      <div className="services-hero-content">
        <span className="services-hero-eyebrow">
          Complete Sign Solutions – Installation, Maintenance &amp; Repair
        </span>
        <h1 className="services-hero-title">
          From Channel Letters to LED<br />
          Displays, Our Certified Crews<br />
          Deliver Precision, Safety, and<br />
          Impact.
        </h1>
        <a href="#quote" className="services-hero-cta">
          Enhance Your Visibility Today With Professional Sign Services.
        </a>
      </div>

      {/* Ticker */}
      <ServicesTickerBar />
    </section>
  );
}

export default ServicesHeroSection;
