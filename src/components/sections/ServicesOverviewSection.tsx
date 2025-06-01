
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, Search } from "lucide-react";

const ServicesOverviewSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solar Solutions
          </h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            From residential rooftops to commercial installations, we provide comprehensive 
            solar energy solutions across Cape Town
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 p-4 bg-blue-500/20 rounded-2xl border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors">
                <Sun className="h-12 w-12 text-blue-400" />
              </div>
              <CardTitle className="text-2xl text-white">Solar Installations</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Professional solar panel installations for homes and businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                High-quality solar panels and inverters installed by certified professionals 
                with comprehensive warranties you can trust for decades.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-green-500/30 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 p-4 bg-green-500/20 rounded-2xl border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                <Battery className="h-12 w-12 text-green-400" />
              </div>
              <CardTitle className="text-2xl text-white">Battery Storage</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Store excess energy for use during load shedding and at night
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Advanced battery systems that provide reliable backup power and maximize 
                your solar investment with intelligent energy management.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 p-4 bg-purple-500/20 rounded-2xl border border-purple-500/30 group-hover:bg-purple-500/30 transition-colors">
                <Search className="h-12 w-12 text-purple-400" />
              </div>
              <CardTitle className="text-2xl text-white">Energy Audits</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Comprehensive energy assessments to optimize your power usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Detailed analysis of your energy consumption patterns to design 
                the most efficient and cost-effective solar solution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
