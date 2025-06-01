
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle } from "lucide-react";

const ElectricityCrisisSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cape Town's Energy Crisis
          </h2>
          <p className="text-xl text-muted-foreground">
            Why solar is essential for Cape Town residents and businesses
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Rising Electricity Costs */}
          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-red-400 mb-4" />
              <CardTitle className="text-2xl text-foreground">Rising Electricity Costs</CardTitle>
              <CardDescription className="text-muted-foreground">Eskom tariff increases are outpacing inflation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <h4 className="font-semibold text-red-400 mb-2">Recent Eskom Increases:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 2024: 12.74% average increase</li>
                  <li>• 2023: 18.65% average increase</li>
                  <li>• 2022: 9.61% average increase</li>
                  <li>• 5-year average: ~15% annually</li>
                </ul>
              </div>
              <p className="text-muted-foreground">
                With Eskom's annual tariff increases consistently exceeding inflation, 
                Cape Town households face mounting electricity costs. Solar provides 
                price certainty and long-term savings.
              </p>
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-2">Solar Benefits:</h4>
                <p className="text-sm text-muted-foreground">
                  Lock in your electricity rate for 25+ years and protect 
                  against future Eskom increases.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Load Shedding Impact */}
          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <AlertTriangle className="h-12 w-12 text-orange-400 mb-4" />
              <CardTitle className="text-2xl text-foreground">Load Shedding Impact</CardTitle>
              <CardDescription className="text-muted-foreground">The real cost of power outages in Cape Town</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20">
                <h4 className="font-semibold text-orange-400 mb-2">Business Impact:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lost productivity during outages</li>
                  <li>• Equipment damage from power surges</li>
                  <li>• Spoiled refrigerated goods</li>
                  <li>• Customer dissatisfaction</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <h4 className="font-semibold text-blue-400 mb-2">Household Challenges:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• No lighting or heating</li>
                  <li>• Internet and communication disruption</li>
                  <li>• Food spoilage and waste</li>
                  <li>• Security system failures</li>
                </ul>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-2">Solar Solution:</h4>
                <p className="text-sm text-muted-foreground">
                  Battery backup systems provide uninterrupted power during 
                  load shedding, protecting your lifestyle and business.
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
