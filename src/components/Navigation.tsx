
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top on route change
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  
  return (
    <nav className="bg-white backdrop-blur-sm border-b border-gray-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/electrical-services" className="flex items-center" onClick={closeMobileMenu}>
              <img 
                src="/lovable-uploads/d57bf45b-aa76-41d5-8edf-37e9ed13ae0c.png" 
                alt="C A Electrical Services" 
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/electrical-services"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/electrical-services") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Solar
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/about") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/services") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Services
              </Link>
              <Link
                to="/promotions"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/promotions") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Promotions
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/contact") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Desktop Contact Us Button */}
          <div className="hidden md:block">
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow-lg shadow-blue-600/25 border border-blue-500">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/electrical-services"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/electrical-services") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Solar
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/about") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/services") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Services
              </Link>
              <Link
                to="/promotions"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/promotions") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Promotions
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/contact") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link to="/contact" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow-lg shadow-blue-600/25 border border-blue-500">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
