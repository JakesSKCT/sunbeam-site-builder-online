
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle } from "lucide-react";

const ElectricityCrisisSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cape Town's Energy Crisis
          </h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            Why solar is essential for Cape Town residents and businesses
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Rising Electricity Costs */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300">
            <CardHeader className="pb-6">
              <TrendingUp className="h-16 w-16 text-red-400 mb-6" />
              <CardTitle className="text-3xl text-white">Rising Electricity Costs</CardTitle>
              <CardDescription className="text-gray-400 text-lg">Eskom tariff increases are outpacing inflation dramatically</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
                <img 
                  src="/lovable-uploads/bbec21a2-ebb1-4e2c-bfd8-b0f9df810833.png" 
                  alt="Graph showing Eskom tariff increases vs inflation from 1987-2023, with Eskom tariffs rising 653% compared to inflation's 129%" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-6 rounded-xl border border-red-500/30">
                <h4 className="font-semibold text-red-300 mb-4 text-lg">Dramatic Cost Increases:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">▶</span>
                    2007-2022: Eskom tariffs increased 653%
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">▶</span>
                    Same period: Inflation only increased 129%
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">▶</span>
                    Tariffs rising 5x faster than general inflation
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-400 mr-3">▶</span>
                    Trend continues with double-digit annual increases
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 leading-relaxed">
                As shown in the graph above, Eskom's tariff increases have dramatically 
                outpaced inflation since the 2008 electricity crisis. This trend shows 
                no signs of slowing, making solar an essential hedge against rising costs.
              </p>
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-xl border border-green-500/30">
                <h4 className="font-semibold text-green-300 mb-3 text-lg">Solar Benefits:</h4>
                <p className="text-gray-300">
                  Lock in your electricity rate for 25+ years and protect 
                  against future Eskom increases while gaining energy independence.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Load Shedding Impact */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
            <CardHeader className="pb-6">
              <AlertTriangle className="h-16 w-16 text-orange-400 mb-6" />
              <CardTitle className="text-3xl text-white">Energy Independence</CardTitle>
              <CardDescription className="text-gray-400 text-lg">The real cost of load shedding in Cape Town</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-xl border border-orange-500/30">
                <h4 className="font-semibold text-orange-300 mb-4 text-lg">Business Impact:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange-400 mr-3">▶</span>
                    Lost productivity during outages
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-400 mr-3">▶</span>
                    Equipment damage from power surges
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-400 mr-3">▶</span>
                    Spoiled refrigerated goods
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-400 mr-3">▶</span>
                    Customer dissatisfaction
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-500/30">
                <h4 className="font-semibold text-blue-300 mb-4 text-lg">Household Challenges:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3">▶</span>
                    No lighting or heating
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3">▶</span>
                    Internet and communication disruption
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3">▶</span>
                    Food spoilage and waste
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3">▶</span>
                    Security system failures
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-xl border border-green-500/30">
                <h4 className="font-semibold text-green-300 mb-3 text-lg">Solar Solution:</h4>
                <p className="text-gray-300">
                  Battery backup systems provide uninterrupted power during 
                  load shedding, protecting your lifestyle and business continuity.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ElectricityCrisisSection;
