import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://ca-electrical.co.za/wp-content/uploads/2023/11/CA-Electrical-Logo-removebg-preview.png" 
                alt="CA Electrical Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/") 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/about") 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/services") 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/contact") 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
