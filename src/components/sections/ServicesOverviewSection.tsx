
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, Search } from "lucide-react";

const ServicesOverviewSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential rooftops to commercial installations, we provide comprehensive solar energy solutions across Cape Town
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Sun className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Solar Installations</CardTitle>
              <CardDescription>
                Professional solar panel installations for homes and businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                High-quality solar panels and inverters installed by certified professionals with warranties you can trust.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Battery className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Battery Storage</CardTitle>
              <CardDescription>
                Store excess energy for use during load shedding and at night
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Advanced battery systems that provide backup power and maximize your solar investment.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Search className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Energy Audits</CardTitle>
              <CardDescription>
                Comprehensive energy assessments to optimize your power usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Detailed analysis of your energy consumption to design the most efficient solar solution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
