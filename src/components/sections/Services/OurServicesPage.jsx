import ServicesHeroSection      from "./ServicesHeroSection";
import InstallationServicesSection from "./InstallationServicesSection.jsx";
import WhyChooseUsSection       from "./WhyChooseUsSection.jsx";
import ElevateBrandSection      from "./ElevateBrandSection";
import ServicesQuoteSection     from "./ServicesQuoteSection.jsx";
import ServicesFooter           from "./ServicesFooter.jsx";

/**
 * OurServicesPage
 * Drop this into your router as the /our-services route.
 * All sections match the Figma design pixel-for-pixel.
 */
function OurServicesPage() {
  return (
    <>

      <main>
        {/* 1. Hero — city skyline + big headline + ticker */}
        <ServicesHeroSection />

        {/* 2. Bento-grid service cards (Installation + Maintenance) */}
        <InstallationServicesSection />

        {/* 3. Guarantee ribbon + Why Choose Us billboard */}
        <WhyChooseUsSection />

        {/* 4. Navy CTA band — Ready to Elevate Your Brand */}
        <ElevateBrandSection />

        {/* 5. Logo left / estimate form right */}
        <ServicesQuoteSection />
      </main>
    </>
  );
}

export default OurServicesPage;
