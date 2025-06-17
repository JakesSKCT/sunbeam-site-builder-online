import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "5kW Solar Package",
      price: "R65 999",
      originalPrice: "Incl. VAT",
      image: "/lovable-uploads/fcf2856b-4207-4963-92ec-eacf9b846a22.png",
      features: [
        "Afore 5kVA Single Phase Hybrid Inverter",
        "SVOLT 5kWh Lithium Battery",
        "6 x Suntech Ultra V C72/Vmh 550W Solar Panels",
        "Full Installation & Accessories included",
        "5 Yr Warranty on Battery and Inverter",
        "Includes COC and SSEG Registration"
      ],
      generation: "Generate up to 29 kWh per day (Summer)",
      financing: "Finance available"
    },
    {
      id: 2,
      title: "6kW Solar Package",
      price: "R70 999",
      originalPrice: "Incl. VAT",
      image: "/lovable-uploads/e9e1521c-fc3c-42a1-b04f-e423af9c3377.png",
      features: [
        "Afore 6kVA Single Phase Hybrid Inverter",
        "SVOLT 5kWh Lithium Battery",
        "8 x Suntech Ultra V C72/Vmh 550W Solar Panels",
        "Full Installation & Accessories included",
        "5 Yr Warranty on Battery and Inverter",
        "Includes COC and SSEG Registration"
      ],
      generation: "Generate up to 39 kWh per day (Summer)",
      financing: "Finance available"
    },
    {
      id: 3,
      title: "6kW Premium Package",
      price: "R89 999",
      originalPrice: "Incl. VAT",
      image: "/lovable-uploads/959d5e8e-61b9-485c-a23e-96256acd5843.png",
      features: [
        "Afore 6kVA Single Phase Hybrid Inverter",
        "SVOLT 10 kWh Lithium Battery",
        "12 x Suntech Ultra V C72/Vmh 550W Solar Panels",
        "Full Installation & Accessories included",
        "5 Yr Warranty on Battery and Inverter",
        "Includes COC and SSEG Registration"
      ],
      generation: "Generate up to 59 kWh per day (Summer)",
      financing: "Finance available"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                🔥 Limited Time Offers
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Special Solar Promotions
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Take advantage of our current promotional packages and start saving on your electricity bills today. 
              All packages include professional installation and comprehensive warranties.
            </p>
          </div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.id} className="bg-white/5 backdrop-blur-sm border border-blue-900/50 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white font-bold">
                      {promo.financing}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{promo.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-blue-400">{promo.price}</span>
                      <span className="text-gray-400">{promo.originalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-blue-300 font-semibold text-sm">{promo.generation}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {promo.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/contact" onClick={scrollToTop}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        Get This Package
                      </Button>
                    </Link>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                      <span>Installation in City of Cape Town</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-12 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Important Information</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-900/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Terms & Conditions</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Installation in City of Cape Town</li>
                <li>• Terms & Conditions Apply</li>
                <li>• Excludes any rewiring due to existing non-compliance issues</li>
                <li>• Excludes lighting changes</li>
                <li>• Finance options available on approved credit</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-blue-900/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Contact Information</h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-green-400 mr-2" />
                  <span>081 321 1094</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-blue-400 mr-2" />
                  <span>enquiries@caelectrical.co.za</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-red-400 mr-2 mt-0.5" />
                  <span>Unit N7 Athlone Industrial Park<br />10 Mymoena Crescent<br />Athlone Industria 2, Cape Town</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Saving?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300">
            Contact us today to discuss which promotional package is right for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Get Your Quote
              </Button>
            </Link>
            <a href="https://wa.me/27813211094" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 text-lg font-semibold">
                WhatsApp: 081 321 1094
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotions;
