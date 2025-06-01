
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-blue-900/50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold">
              <span className="text-blue-400">C A</span>
              <span className="text-white ml-2">Electrical</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/about") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/services") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/contact") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow-lg shadow-blue-600/25 border border-blue-500">
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
