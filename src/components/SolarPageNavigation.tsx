
import { useState, useEffect } from "react";

const SolarPageNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "faq", label: "FAQ" },
    { id: "how-solar-works", label: "How Solar Works" },
    { id: "inverter-types", label: "Inverter Types" },
    { id: "electricity-crisis", label: "Electricity Crisis" },
    { id: "cape-town-advantages", label: "Cape Town Benefits" },
    { id: "landlords", label: "For Landlords" },
    { id: "why-choose-us", label: "Why Choose Us" },
    { id: "cta", label: "Get Started" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-24 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SolarPageNavigation;
