
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://ca-electrical.co.za/wp-content/uploads/2022/05/ca-electrical-logo.png" 
                alt="CA Electrical Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/") 
                    ? "bg-yellow-100 text-yellow-800" 
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/about") 
                    ? "bg-yellow-100 text-yellow-800" 
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/services") 
                    ? "bg-yellow-100 text-yellow-800" 
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive("/contact") 
                    ? "bg-yellow-100 text-yellow-800" 
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
