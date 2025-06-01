
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CloudSun } from "lucide-react";

const CapeTownSolarAdvantages = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Cape Town is Perfect for Solar
          </h2>
          <p className="text-xl text-muted-foreground">
            Cape Town's unique location and climate make it one of the world's best cities for solar energy
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Location & Climate Advantages */}
          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <MapPin className="h-12 w-12 text-yellow-400 mb-4" />
              <CardTitle className="text-2xl text-foreground">Optimal Location & Climate</CardTitle>
              <CardDescription className="text-muted-foreground">Perfect conditions for maximum solar generation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                <h4 className="font-semibold text-yellow-400 mb-2">Geographic Advantages:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Latitude 33°S - ideal for year-round solar exposure</li>
                  <li>• Mediterranean climate with minimal cloud cover</li>
                  <li>• 3,100+ hours of sunshine annually</li>
                  <li>• Clear, dry air enhances solar panel efficiency</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <h4 className="font-semibold text-blue-400 mb-2">Seasonal Benefits:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Summer: Peak generation during high demand</li>
                  <li>• Winter: Mild temperatures optimize panel performance</li>
                  <li>• Low humidity reduces panel degradation</li>
                  <li>• Consistent daily generation patterns</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Generation Performance */}
          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <CloudSun className="h-12 w-12 text-orange-400 mb-4" />
              <CardTitle className="text-2xl text-foreground">Exceptional Solar Irradiance</CardTitle>
              <CardDescription className="text-muted-foreground">Among the world's highest solar generation potential</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20">
                <h4 className="font-semibold text-orange-400 mb-2">Daily Solar Irradiance:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Average: 4.5-5.5 kWh/m²/day</li>
                  <li>• Summer peak: Up to 7.0 kWh/m²/day</li>
                  <li>• Winter minimum: 2.5-3.5 kWh/m²/day</li>
                  <li>• Rivals Australia and southwestern USA</li>
                </ul>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-2">Real-World Performance:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 1kW system generates ~1,600 kWh annually</li>
                  <li>• ROI typically 4-6 years in Cape Town</li>
                  <li>• Panels operate 20-30% more efficiently than Europe</li>
                  <li>• Excellent performance even on cloudy days</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-400 mb-2">Peak Sun Hours:</h4>
                <p className="text-sm text-muted-foreground">
                  Cape Town receives 4.5-6 peak sun hours daily, meaning a 5kW system 
                  can generate 25-30 kWh on average days - enough to power most homes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CapeTownSolarAdvantages;
