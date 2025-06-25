
import Navigation from "@/components/Navigation";
import CompanyHeader from "@/components/profile/CompanyHeader";
import ContactInfo from "@/components/profile/ContactInfo";
import CompanyOverview from "@/components/profile/CompanyOverview";
import ServicesSection from "@/components/profile/ServicesSection";
import MarketSpecialization from "@/components/profile/MarketSpecialization";
import CertificationsSection from "@/components/profile/CertificationsSection";
import KeyDifferentiators from "@/components/profile/KeyDifferentiators";
import RecentProjects from "@/components/profile/RecentProjects";
import PrintInstructions from "@/components/profile/PrintInstructions";

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Hide navigation when printing */}
      <div className="print:hidden">
        <Navigation />
      </div>
      
      {/* Print-optimized content */}
      <div className="max-w-4xl mx-auto px-4 py-8 print:px-0 print:py-4">
        
        <CompanyHeader />
        <ContactInfo />
        <CompanyOverview />
        <ServicesSection />
        <MarketSpecialization />
        <CertificationsSection />
        <KeyDifferentiators />
        <RecentProjects />

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t print:border-t-2">
          <p className="text-gray-600 text-sm">
            © 2024 C A Electrical Services. Powering Cape Town's sustainable future.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Generated on {new Date().toLocaleDateString('en-ZA')}
          </p>
        </div>
      </div>

      <PrintInstructions />
    </div>
  );
};

export default CompanyProfile;
