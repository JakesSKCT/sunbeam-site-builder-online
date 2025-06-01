
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Battery, Search } from "lucide-react";

const ServicesOverviewSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential rooftops to commercial installations, we provide comprehensive solar energy solutions across Cape Town
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <Sun className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-foreground">Solar Installations</CardTitle>
              <CardDescription className="text-muted-foreground">
                Professional solar panel installations for homes and businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                High-quality solar panels and inverters installed by certified professionals with warranties you can trust.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <Battery className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-foreground">Battery Storage</CardTitle>
              <CardDescription className="text-muted-foreground">
                Store excess energy for use during load shedding and at night
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Advanced battery systems that provide backup power and maximize your solar investment.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <Search className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-foreground">Energy Audits</CardTitle>
              <CardDescription className="text-muted-foreground">
                Comprehensive energy assessments to optimize your power usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
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
