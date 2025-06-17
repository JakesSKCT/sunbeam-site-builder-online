
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
              ⚡ Cape Town Solar Specialists
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Power Your Future
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
            Premium Solar Solutions for Cape Town
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto text-gray-400 leading-relaxed">
            Beat load shedding and rising electricity costs with professional solar installations, 
            battery storage, and energy management systems designed for South African conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl shadow-blue-600/25 border border-blue-500">
                Free Assessment
              </Button>
            </Link>
            <Link to="/services" onClick={scrollToTop}>
              <Button size="lg" variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-semibold">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
