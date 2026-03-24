import {C} from "../../../styles/designTokens";
import {useFadeUp} from "../../../hooks/useFadeUp";

/* ─── Elevate Brand CTA Section ──────────────────────────────────────────────── */
function ElevateBrandSection() {
  const ref = useFadeUp();

  return (
    <section style={{ background: C.cream, padding: "0 0 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}
        className="fade-up" ref={ref}>

        <style>{`
          .elevate-card {
            background: ${C.navy};
            border-radius: 20px;
            display: grid;
            grid-template-columns: 280px 1fr;
            overflow: visible;
            position: relative;
            min-height: 240px;
          }

          /* Left blue accent stripe */
          .elevate-accent {
            position: absolute;
            left: 268px;
            top: 0; bottom: 0;
            width: 4px;
            background: #4488cc;
          }

          /* Person photo area */
          .elevate-person {
            position: relative;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            overflow: visible;
          }
          .elevate-person-img {
            width: 240px;
            height: 300px;
            object-fit: cover;
            border-radius: 12px 12px 0 0;
            margin-bottom: 0;
            /* Replace with real img */
            background: linear-gradient(135deg, #3a9a5a 0%, #1a6a3a 100%);
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }

          /* Right text area */
          .elevate-text {
            padding: 48px 48px 48px 36px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .elevate-heading {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 900;
            font-size: clamp(28px, 3.5vw, 44px);
            text-transform: uppercase;
            color: ${C.white};
            line-height: 1.05;
            margin-bottom: 16px;
          }
          .elevate-heading span { color: ${C.green}; }

          .elevate-sub {
            font-size: 14px;
            color: rgba(255,255,255,.72);
            line-height: 1.65;
            max-width: 420px;
            margin-bottom: 28px;
          }

          .elevate-btn {
            display: inline-block;
            border: 1.5px solid ${C.white};
            color: ${C.white};
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 700;
            font-size: 11px;
            letter-spacing: .14em;
            text-transform: uppercase;
            padding: 12px 24px;
            border-radius: 4px;
            text-decoration: none;
            transition: background .2s, color .2s, transform .2s;
            align-self: flex-start;
          }
          .elevate-btn:hover {
            background: ${C.white};
            color: ${C.navy};
            transform: translateY(-2px);
          }

          @media(max-width:767px){
            .elevate-card {
              grid-template-columns: 1fr;
            }
            .elevate-person { height: 200px; overflow: hidden; }
            .elevate-person-img { width: 100%; height: 200px; border-radius: 0; }
            .elevate-text { padding: 32px 24px; }
            .elevate-accent { display: none; }
          }
        `}</style>

        <div className="elevate-card">
          {/* Blue accent stripe */}
          <div className="elevate-accent" />

          {/* Person photo */}
          <div className="elevate-person">
            {/* Replace <div> with <img src="team-member-green.png" alt="Sign Service Pro Team" /> */}
            <div className="elevate-person-img">
              <span style={{
                color: "rgba(255,255,255,.4)", fontSize: 11,
                fontWeight: 600, paddingBottom: 20, textAlign: "center",
              }}>
                [Team Photo — green shirt]
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="elevate-text">
            <h2 className="elevate-heading">
              Ready to <span>Elevate<br />Your Brand</span><br />Presence?
            </h2>
            <p className="elevate-sub">
              Contact us today for professional sign installation, maintenance,
              and repair services tailored to your needs.
            </p>
            <a href="#quote" className="elevate-btn">
              Upgrade Your Signs!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElevateBrandSection;
