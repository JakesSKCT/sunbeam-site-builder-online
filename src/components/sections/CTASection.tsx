
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Beat Load Shedding & Rising Costs
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get a free consultation and quote to protect your Cape Town property from Eskom's challenges
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Protected Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
