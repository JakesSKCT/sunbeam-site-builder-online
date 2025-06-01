
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Zap, Battery, Shield } from "lucide-react";

const InverterTypesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inverter & Installation Types
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the right inverter technology for your Cape Town property
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-foreground">String Inverters</CardTitle>
              <CardDescription className="text-muted-foreground">Cost-effective solution for most installations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Traditional and reliable, string inverters connect multiple solar panels in series. 
                Perfect for roofs with consistent sun exposure and minimal shading.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Most economical option</li>
                <li>• Easy maintenance</li>
                <li>• Proven technology</li>
                <li>• Ideal for unshaded roofs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <Sun className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-foreground">Microinverters</CardTitle>
              <CardDescription className="text-muted-foreground">Maximum efficiency for complex roof layouts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Individual inverters for each panel optimize performance even with partial shading. 
                Ideal for Cape Town's varied roof orientations and shade conditions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Panel-level optimization</li>
                <li>• Better shade tolerance</li>
                <li>• Enhanced monitoring</li>
                <li>• Flexible installation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <Battery className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-foreground">Hybrid Inverters</CardTitle>
              <CardDescription className="text-muted-foreground">All-in-one solar and battery solution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Combines solar and battery management in one unit. Essential for load shedding 
                protection and energy independence in Cape Town.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Battery-ready design</li>
                <li>• Load shedding backup</li>
                <li>• Smart energy management</li>
                <li>• Future expandable</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-card border-border">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-foreground">Off-Grid Systems</CardTitle>
              <CardDescription className="text-muted-foreground">Complete energy independence solution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Fully independent systems with large battery banks for remote locations 
                or complete grid independence. Perfect for farms and remote Cape Town properties.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complete grid independence</li>
                <li>• Large battery storage</li>
                <li>• Backup generator ready</li>
                <li>• Remote monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InverterTypesSection;
