
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, Search, CheckCircle } from "lucide-react";

const ServicesOverviewSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solar Solutions
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
              <CardTitle className="text-2xl text-white">Solar Panel Installations</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Professional solar panel systems for maximum energy generation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Our certified technicians install high-quality solar panels using premium 
                components from trusted manufacturers. Every installation is designed to 
                maximize energy production and withstand Cape Town's climate conditions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Tier 1 solar panels</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Premium inverters</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">25-year warranties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Professional installation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-green-500/30 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 p-4 bg-green-500/20 rounded-2xl border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                <Battery className="h-12 w-12 text-green-400" />
              </div>
              <CardTitle className="text-2xl text-white">Battery Storage Systems</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Store excess energy for use during load shedding and at night
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Our battery storage solutions provide backup power during outages and 
                allow you to use stored solar energy when the sun isn't shining. 
                Perfect for load shedding protection and energy independence.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Lithium-ion batteries</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Automatic backup switching</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Smart energy management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">10+ year lifespan</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-6 p-4 bg-purple-500/20 rounded-2xl border border-purple-500/30 group-hover:bg-purple-500/30 transition-colors">
                <Search className="h-12 w-12 text-purple-400" />
              </div>
              <CardTitle className="text-2xl text-white">Energy Audits</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Comprehensive assessments to optimize your energy usage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Our detailed energy audits analyze your current electricity usage 
                patterns to design the most efficient and cost-effective solar 
                solution for your specific needs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Consumption analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Solar potential assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">ROI calculations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">Custom recommendations</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
