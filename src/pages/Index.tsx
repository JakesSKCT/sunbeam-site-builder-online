
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import HowSolarWorksSection from "@/components/sections/HowSolarWorksSection";
import InverterTypesSection from "@/components/sections/InverterTypesSection";
import ElectricityCrisisSection from "@/components/sections/ElectricityCrisisSection";
import CapeTownSolarAdvantages from "@/components/sections/CapeTownSolarAdvantages";
import Portfolio from "@/components/Portfolio";
import Packages from "@/components/Packages";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <HeroSection />
      <FAQSection />
      <HowSolarWorksSection />
      <InverterTypesSection />
      <ElectricityCrisisSection />
      <CapeTownSolarAdvantages />
      <Packages />
      <Portfolio />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
