import { C } from '../../../styles/designTokens';
import { TickerBar } from '../../ui/TickerBar';

function ServicesHeroSection() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "visible",
      padding: "100px 20px 0 20px",
      textAlign: "center",
      backgroundColor: "#fff" // Add white background to section
    }}>
      <style>{`
        .hero-container {
          position: absolute;
          inset: 0;
          clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
          z-index: 0; /* Changed from -1 to 0 */
          overflow: hidden;
        }

        .hero-container::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url('/footerbackground.png');
          background-size: cover;
          background-position: center;
          filter: blur(4px) brightness(1.2);
          transform: scale(1.1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(14, 30, 56, 0.1); 
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          margin-bottom: 100px;
        }

        .hero-top-text {
          font-family: 'Ubuntu Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: ${C.navy};
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .hero-main-title {
          font-family: 'Ubuntu Sans', sans-serif;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 900;
          color: ${C.navy};
          line-height: 1.1;
          margin-bottom: 30px;
          text-transform: uppercase;
        }

        .hero-tagline {
          display: inline-block;
          background: ${C.navy};
          color: #fff;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ticker-wrapper {
          width: 100%;
          position: relative;
          z-index: 3;
          background: white;
          margin-top: auto;
          padding: 20px 0;
        }
      `}</style>

      <div className="hero-container">
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-top-text">Complete Sign Solutions - Installation, Maintenance & Repair</p>
        <h1 className="hero-main-title">
          From Channel Letters to LED Displays, Our Certified Crews Deliver Precision, Safety, and Impact.
        </h1>
        <div className="hero-tagline">
          Enhance your visibility today with professional sign services.
        </div>
      </div>

      <div className="ticker-wrapper">
        <TickerBar />
      </div>
    </section>
  );
}

export default ServicesHeroSection;