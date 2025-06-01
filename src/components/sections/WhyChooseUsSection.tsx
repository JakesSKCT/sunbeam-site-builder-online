
import { Award, Zap, Users, Clock } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose CA Electrical
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted solar partner in Cape Town, delivering quality installations and exceptional service since day one
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Award className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Certified Professionals</h3>
            <p className="text-gray-600">
              Licensed electricians with specialized solar installation training and industry certifications
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Zap className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Premium Components</h3>
            <p className="text-gray-600">
              High-quality solar panels, inverters, and batteries from trusted international manufacturers
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Local Expertise</h3>
            <p className="text-gray-600">
              Cape Town-based team with deep understanding of local conditions and regulations
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Clock className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Ongoing Support</h3>
            <p className="text-gray-600">
              Comprehensive warranties and maintenance services to protect your solar investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
