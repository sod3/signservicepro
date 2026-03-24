import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { globalCSS } from "./styles/globalStyles";
import { Navbar } from "./components/layout/Navbar";
import { FooterBillboard } from "./components/layout/FooterBillboard";
import { HeroSection } from "./components/sections/Homepage/HeroSection";
import { WhyPartnerSection } from "./components/sections/Homepage/WhyPartnerSection";
import { WhoWeServeSection } from "./components/sections/Homepage/WhoWeServeSection";
import { AboutSection } from "./components/sections/Homepage/AboutSection";
import { PartnersSection } from "./components/sections/Homepage/PartnersSection";
import { PressSection } from "./components/sections/Homepage/PressSection";
import { ServiceBand } from "./components/sections/Homepage/ServiceBand";
import { QuoteSection } from "./components/sections/Homepage/QuoteSection";
import OurServicesPage from "./components/sections/Services/OurServicesPage";
import { C } from './styles/designTokens';

function HomePage() {
  return (
    <main>
      <div style={{ backgroundColor: C.cream}}>
        <HeroSection />
      </div>
      <WhyPartnerSection />
      <WhoWeServeSection />
      <AboutSection />
      <PartnersSection />
      <PressSection />
      <div style={{ backgroundColor: C.cream, paddingLeft: "50px", paddingRight: "50px" }}>
        <ServiceBand />
      </div>
      <QuoteSection />
      <FooterBillboard />
    </main>
  );
}

export default function App() {
  // Inject global styles once
  useEffect(() => {
    const tag = document.createElement("style");
    tag.id = "ssp-global";
    tag.textContent = globalCSS;
    if (!document.getElementById("ssp-global")) document.head.appendChild(tag);
    return () => { const el = document.getElementById("ssp-global"); if (el) el.remove(); };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        {/* Add other routes as needed */}
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/about-us" element={<div>About Us Page</div>} />
      </Routes>
    </Router>
  );
}