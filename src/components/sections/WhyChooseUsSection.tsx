
import { Award, Zap, Users } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose C A Electrical
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Trusted solar experts serving Cape Town with unmatched quality and reliability
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-blue-100 to-purple-200 rounded-3xl border border-blue-200 w-fit group-hover:scale-110 transition-transform duration-300">
              <Award className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Certified Professionals</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Licensed electricians with specialized solar installation training and industry certifications 
              ensuring safe, compliant installations.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-green-100 to-blue-200 rounded-3xl border border-green-200 w-fit group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Premium Components</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Top-tier solar panels, inverters, and batteries from globally trusted manufacturers 
              with extended warranties and proven performance.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-purple-100 to-pink-200 rounded-3xl border border-purple-200 w-fit group-hover:scale-110 transition-transform duration-300">
              <Users className="h-16 w-16 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Local Excellence</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Cape Town-based team providing personalized service, ongoing support, 
              and rapid maintenance response when you need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
