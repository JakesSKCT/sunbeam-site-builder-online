
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import HowSolarWorksSection from "@/components/sections/HowSolarWorksSection";
import InverterTypesSection from "@/components/sections/InverterTypesSection";
import ElectricityCrisisSection from "@/components/sections/ElectricityCrisisSection";
import CapeTownSolarAdvantages from "@/components/sections/CapeTownSolarAdvantages";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      
      <HeroSection />
      <FAQSection />
      <HowSolarWorksSection />
      <InverterTypesSection />
      <ElectricityCrisisSection />
      <CapeTownSolarAdvantages />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
