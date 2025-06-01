
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-32" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Solar Power Solutions
            <span className="block text-yellow-400">for Cape Town</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light">
            Professional solar installations, battery storage, and energy solutions for residential and commercial properties. 
            Beat load shedding and rising electricity costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-8 py-4 text-lg">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
