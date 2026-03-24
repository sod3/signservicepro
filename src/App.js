import { useEffect } from "react";
import { globalCSS } from "./styles/globalStyles";
import { Navbar } from "./components/layout/Navbar";
import { FooterBillboard } from "./components/layout/FooterBillboard";
import { HeroSection } from "./components/sections/HeroSection";
import { WhyPartnerSection } from "./components/sections/WhyPartnerSection";
import { WhoWeServeSection } from "./components/sections/WhoWeServeSection";
import { AboutSection } from "./components/sections/AboutSection";
import { PartnersSection } from "./components/sections/PartnersSection";
import { PressSection } from "./components/sections/PressSection";
import { ServiceBand } from "./components/sections/ServiceBand";
import { QuoteSection } from "./components/sections/QuoteSection";

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
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyPartnerSection />
        <WhoWeServeSection />
        <AboutSection />
        <PartnersSection />
        <PressSection />
        <ServiceBand />
        <QuoteSection />
        <FooterBillboard />
      </main>
    </>
  );
}