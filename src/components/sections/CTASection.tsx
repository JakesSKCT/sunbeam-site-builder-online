
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-40 h-40 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute bottom-16 right-32 w-28 h-28 border border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <span className="inline-block px-6 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
            ⚡ Ready to Go Solar?
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Beat Load Shedding & Rising Costs
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Get a comprehensive consultation and personalized quote to protect your Cape Town 
          property from Eskom's ongoing challenges and secure your energy future.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact" onClick={scrollToTop}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl shadow-blue-600/25 border border-blue-500">
              Get Protected Today
            </Button>
          </Link>
          <Link to="/services" onClick={scrollToTop}>
            <Button size="lg" variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-semibold">
              View Our Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
