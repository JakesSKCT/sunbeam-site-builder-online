
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  
  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-blue-900/50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <img 
                src="/lovable-uploads/9646ac87-2641-4661-82ae-a9af61a5184b.png" 
                alt="C A Electrical Services" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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
                to="/promotions"
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive("/promotions") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                }`}
              >
                Promotions
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
          
          {/* Desktop Get Quote Button */}
          <div className="hidden md:block">
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow-lg shadow-blue-600/25 border border-blue-500">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-blue-900/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/about") 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" 
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
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
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
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
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
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
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                }`}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link to="/contact" onClick={() => { closeMobileMenu(); scrollToTop(); }}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow-lg shadow-blue-600/25 border border-blue-500">
                    Get Quote
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
