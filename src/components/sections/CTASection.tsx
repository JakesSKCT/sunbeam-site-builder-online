
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Go Solar?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto font-light">
          Join hundreds of Cape Town residents and businesses who've already made the switch to clean, 
          reliable solar energy. Get your free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg">
              Get Free Quote
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-8 py-4 text-lg">
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
