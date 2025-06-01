
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, Search, Wrench } from "lucide-react";

const ServicesOverviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Solar Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From initial consultation to ongoing maintenance, we provide end-to-end solar energy solutions 
            tailored to Cape Town's unique requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-500">
            <CardHeader className="text-center pb-4">
              <Sun className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-xl">Solar Installations</CardTitle>
              <CardDescription className="text-base">
                Professional solar panel systems for homes and businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Custom-designed solar installations using premium panels and inverters, 
                optimized for Cape Town's exceptional solar conditions.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-500">
            <CardHeader className="text-center pb-4">
              <Battery className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-xl">Battery Storage</CardTitle>
              <CardDescription className="text-base">
                Advanced backup power solutions for load shedding protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Lithium-ion battery systems that store excess solar energy and 
                provide seamless backup power during outages.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-500">
            <CardHeader className="text-center pb-4">
              <Search className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-xl">Energy Audits</CardTitle>
              <CardDescription className="text-base">
                Comprehensive assessments to optimize your energy usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Detailed analysis of consumption patterns to design the most 
                efficient and cost-effective solar solution.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-500">
            <CardHeader className="text-center pb-4">
              <Wrench className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-xl">Maintenance</CardTitle>
              <CardDescription className="text-base">
                Professional servicing to ensure optimal system performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Regular maintenance, monitoring, and support services to 
                maximize your solar system's lifespan and efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
