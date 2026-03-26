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
      overflow: "hidden", // Changed to hidden to prevent scrollbar issues with scaled backgrounds
      backgroundColor: "#fff"
    }}>
      <style>{`
        .hero-container {
          position: absolute;
          inset: 0;
          clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
          z-index: 0;
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
          z-index: 1;
        }

        /* Centering Wrapper */
        .hero-inner-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          z-index: 2;
          padding: 80px 24px; /* Space for mobile headers */
        }

        .hero-content {
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }

        .hero-top-text {
          font-family: 'Ubuntu Sans', sans-serif;
          font-size: clamp(14px, 2vw, 18px); /* Responsive sizing */
          font-weight: 700;
          color: ${C.navy};
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: clamp(12px, 3vw, 20px);
        }

        .hero-main-title {
          font-family: 'Ubuntu Sans', sans-serif;
          /* Fluid typography: Min 30px, Scales with width, Max 64px */
          font-size: clamp(30px, 6vw, 64px); 
          font-weight: 900;
          color: ${C.navy};
          line-height: 1.1;
          margin-bottom: clamp(20px, 4vw, 35px);
          text-transform: uppercase;
          word-wrap: break-word;
        }

        .hero-tagline {
          display: inline-block;
          background: ${C.navy};
          color: #fff;
          padding: clamp(8px, 2vw, 12px) clamp(16px, 3vw, 32px);
          border-radius: 50px;
          font-size: clamp(10px, 1.5vw, 13px);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.4;
        }

        .ticker-wrapper {
          width: 100%;
          position: relative;
          z-index: 3;
          background: white;
          padding: 20px 0;
        }

        /* Adjustments for smaller screens */
        @media (max-width: 768px) {
          .hero-container {
            clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
          }
        }
      `}</style>

      <div className="hero-container">
        <div className="hero-overlay" />
      </div>

      <div className="hero-inner-wrapper">
        <div className="hero-content">
          <p className="hero-top-text">Complete Sign Solutions - Installation, Maintenance & Repair</p>
          <h1 className="hero-main-title">
            From Channel Letters to LED Displays, Our Certified Crews Deliver Precision, Safety, and Impact.
          </h1>
          <div className="hero-tagline">
            Enhance your visibility today with professional sign services.
          </div>
        </div>
      </div>

      <div className="ticker-wrapper">
        <TickerBar />
      </div>
    </section>
  );
}

export default ServicesHeroSection;