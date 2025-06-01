
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sun, Battery, Zap, Home, Building2, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Essential Home",
      type: "Residential",
      icon: <Home className="h-8 w-8" />,
      price: "From R85,000",
      systemSize: "5kW",
      batteryCapacity: "5kWh",
      monthlyGeneration: "650 kWh",
      description: "Perfect starter package for small to medium homes, covering essential appliances during load shedding.",
      features: [
        "8 x 630W Tier 1 solar panels",
        "5kW hybrid inverter",
        "5kWh lithium battery",
        "Smart monitoring system",
        "10-year installation warranty",
        "25-year panel warranty",
        "Professional installation included",
        "COC certification"
      ],
      idealFor: "2-3 bedroom homes with moderate electricity usage",
      coverage: "Lights, TV, Wi-Fi, fridge, and small appliances",
      color: "bg-blue-600",
      popular: false
    },
    {
      id: 2,
      name: "Complete Home",
      type: "Residential",
      icon: <Sun className="h-8 w-8" />,
      price: "From R145,000",
      systemSize: "8kW",
      batteryCapacity: "10kWh",
      monthlyGeneration: "1,040 kWh",
      description: "Our most popular package providing comprehensive energy coverage for typical Cape Town homes.",
      features: [
        "13 x 630W Tier 1 solar panels",
        "8kW hybrid inverter",
        "10kWh lithium battery bank",
        "Smart energy management",
        "15-year installation warranty",
        "25-year panel warranty",
        "Remote monitoring & support",
        "Grid-tie capability",
        "Professional installation"
      ],
      idealFor: "3-4 bedroom homes with standard electricity usage",
      coverage: "Full home coverage including geysers, pool pumps, and all appliances",
      color: "bg-green-600",
      popular: true
    },
    {
      id: 3,
      name: "Premium Estate",
      type: "Residential/Commercial",
      icon: <Building2 className="h-8 w-8" />,
      price: "From R245,000",
      systemSize: "15kW",
      batteryCapacity: "20kWh",
      monthlyGeneration: "1,950 kWh",
      description: "High-end solution for large homes, estates, or small commercial properties with high energy demands.",
      features: [
        "24 x 630W Tier 1 solar panels",
        "15kW three-phase hybrid inverter",
        "20kWh lithium battery system",
        "Advanced energy management",
        "20-year installation warranty",
        "25-year panel warranty",
        "24/7 monitoring & support",
        "Grid-tie with export capability",
        "Professional project management",
        "Custom system design"
      ],
      idealFor: "Large homes, estates, or small businesses",
      coverage: "Complete energy independence with excess capacity for growth",
      color: "bg-purple-600",
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solar Packages for Cape Town
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed solar packages, tailored for different energy needs and budgets
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`relative hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${pkg.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {pkg.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-700">
                  {pkg.price}
                </CardDescription>
                <Badge variant="outline" className="w-fit mx-auto">
                  {pkg.type}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-center">
                  {pkg.description}
                </p>
                
                {/* System Specs */}
                <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="text-center">
                    <Zap className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <p className="text-sm font-medium">{pkg.systemSize}</p>
                    <p className="text-xs text-gray-500">System Size</p>
                  </div>
                  <div className="text-center">
                    <Battery className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <p className="text-sm font-medium">{pkg.batteryCapacity}</p>
                    <p className="text-xs text-gray-500">Battery</p>
                  </div>
                  <div className="text-center">
                    <Sun className="h-5 w-5 text-yellow-600 mx-auto mb-1" />
                    <p className="text-sm font-medium">{pkg.monthlyGeneration}</p>
                    <p className="text-xs text-gray-500">Monthly Gen.</p>
                  </div>
                </div>
                
                {/* Ideal For */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Ideal For:</h4>
                  <p className="text-sm text-blue-700 mb-2">{pkg.idealFor}</p>
                  <p className="text-xs text-blue-600">{pkg.coverage}</p>
                </div>
                
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <div className="space-y-2">
                    {pkg.features.slice(0, 5).map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 5 && (
                      <p className="text-xs text-gray-500 ml-6">
                        + {pkg.features.length - 5} more features included
                      </p>
                    )}
                  </div>
                </div>
                
                <Link to="/contact" className="block">
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                    size="lg"
                  >
                    Get Quote for {pkg.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Custom Solutions Available
            </h3>
            <p className="text-yellow-700 mb-4">
              Need something different? We design custom solar solutions tailored to your specific energy needs, 
              roof layout, and budget. All packages include professional installation, warranties, and ongoing support.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-100">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
