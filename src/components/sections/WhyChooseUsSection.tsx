
import { Award, Zap, Users } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose C A Electrical
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted solar experts serving Cape Town with quality and reliability
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Award className="h-16 w-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Certified Professionals</h3>
            <p className="text-muted-foreground">
              Licensed electricians with specialized solar installation training and certifications
            </p>
          </div>
          
          <div className="text-center">
            <Zap className="h-16 w-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Quality Components</h3>
            <p className="text-muted-foreground">
              Premium solar panels, inverters, and batteries from trusted manufacturers
            </p>
          </div>
          
          <div className="text-center">
            <Users className="h-16 w-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Local Service</h3>
            <p className="text-muted-foreground">
              Cape Town-based team providing ongoing support and maintenance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
