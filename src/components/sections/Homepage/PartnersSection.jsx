import { C } from '../../../styles/designTokens';
import { useFadeUp } from '../../../hooks/useFadeUp';

// Replace string names with objects containing the logo path and alt text
const partners = [
  { name: "Vantage Signs", logo: "/logo/logo.png" },
  { name: "SpeedPro Dayton", logo: "/logo/logo1.png" },
  { name: "Behr Design LLC", logo: "/logo/logo2.png" },
  { name: "Pattison ID", logo: "/logo/logo3.png" },
  { name: "North American Signs", logo: "/logo/logo4.png" },
  { name: "Comet Signs", logo: "/logo/logo5.png" },
  { name: "Characters Inc.", logo: "/logo/logo6.png" },
  { name: "Everbrite", logo: "/logo/logo7.png" },
  { name: "Signs Unlimited", logo: "/logo/logo8.png" },
  { name: "Complete Signs", logo: "/logo/logo9.png" },
  { name: "Persona", logo: "/logo/logo10.png" },
  { name: "FastSigns", logo: "/logo/logo11.png" }
];

export function PartnersSection() {
  const ref = useFadeUp();

  return (
    <section style={{ background: C.cream, padding: "80px 0" }}>
      <div 
        style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }} 
        className="fade-up" 
        ref={ref}
      >
        <style>{`
          .partner-grid {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 40px 60px;
          }
          .partner-logo {
            max-width: 120px;
            max-height: 60px;
            object-fit: contain;
            /* Keeps original colors and full visibility */
            filter: none; 
            transition: transform 0.3s ease;
            cursor: pointer;
          }
          .partner-logo:hover {
            /* Only the scale effect on hover */
            transform: scale(1.08);
          }
        `}</style>

        <div className="partner-grid">
          {partners.map((partner, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}