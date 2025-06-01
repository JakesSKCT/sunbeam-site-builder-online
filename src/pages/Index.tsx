
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import HowSolarWorksSection from "@/components/sections/HowSolarWorksSection";
import CapeTownSolarAdvantages from "@/components/sections/CapeTownSolarAdvantages";
import Portfolio from "@/components/Portfolio";
import Packages from "@/components/Packages";
import InverterTypesSection from "@/components/sections/InverterTypesSection";
import ElectricityCrisisSection from "@/components/sections/ElectricityCrisisSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      <HowSolarWorksSection />
      <CapeTownSolarAdvantages />
      <Portfolio />
      <Packages />
      <InverterTypesSection />
      <ElectricityCrisisSection />
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
