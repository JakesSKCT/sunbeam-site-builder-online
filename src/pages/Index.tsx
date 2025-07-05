
import Navigation from "@/components/Navigation";
import SolarPageNavigation from "@/components/SolarPageNavigation";
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import HowSolarWorksSection from "@/components/sections/HowSolarWorksSection";
import InverterTypesSection from "@/components/sections/InverterTypesSection";
import ElectricityCrisisSection from "@/components/sections/ElectricityCrisisSection";
import CapeTownSolarAdvantages from "@/components/sections/CapeTownSolarAdvantages";
import LandlordsSection from "@/components/sections/LandlordsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      <SolarPageNavigation />
      
      <div id="hero">
        <HeroSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="how-solar-works">
        <HowSolarWorksSection />
      </div>
      <div id="inverter-types">
        <InverterTypesSection />
      </div>
      <div id="electricity-crisis">
        <ElectricityCrisisSection />
      </div>
      <div id="cape-town-advantages">
        <CapeTownSolarAdvantages />
      </div>
      <div id="landlords">
        <LandlordsSection />
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection />
      </div>
      <div id="cta">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
