import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';

export function PressSection() {
  const ref = useFadeUp();
  return (
    <section style={{ background: C.cream, padding: "80px 0" }}>
      <style>{`
        .press-layout {
          max-width: 1000px;
          margin: 0 auto; 
          padding: 0 24px;
          display: grid; 
          grid-template-columns: 1fr 1.1fr; 
          gap: 30px; 
          align-items: center;
        }

        @media(max-width:767px){
          .press-layout { 
            grid-template-columns: 1fr; 
            text-align: center;
            gap: 32px;
            padding: 0 16px;
          }
          
          /* Moves the image above the text on mobile */
          .press-image-container {
            order: -1; 
            width: 90% !important; /* Increase this if you want it even bigger */
            margin: 0 auto;
          }

          .press-text-container p {
            max-width: 100% !important;
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="fade-up press-layout" ref={ref}>
        {/* Text Content */}
        <div className="press-text-container">
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "clamp(24px, 3.5vw, 36px)", 
            fontWeight: 400, 
            color: C.textDark,
            lineHeight: 1.35, 
            maxWidth: 440 
          }}>
            We are honored to be featured on the cover of{" "}
            <strong style={{ fontWeight: 700 }}>Signs of the Times</strong>, a renowned industry publication, this November.
          </p>
          <a 
            href="#" 
            className="btn btn-outline-green" 
            style={{ 
              marginTop: 28,
              display: "inline-block" 
            }}
          >
            Ver Mas
          </a>
        </div>

        {/* Magazine Image - Responsive Class Added */}
        <div className="press-image-container" style={{ width: "100%", maxWidth: 600 }}>
          <img 
            src="/signsoftimes.png" 
            alt="Signs of the Times Magazine" 
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))"
            }}
          />
        </div>

      </div>
    </section>
  );
}