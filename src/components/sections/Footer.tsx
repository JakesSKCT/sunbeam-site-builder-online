
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-blue-900 border-t border-blue-900/50 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/9646ac87-2641-4661-82ae-a9af61a5184b.png" 
              alt="C A Electrical Services" 
              className="h-20 w-auto mx-auto mb-4"
            />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Contact Information */}
          <div className="mb-8 space-y-3 text-gray-300">
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-3 md:space-y-0">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+27 21 001 7720</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>enquiries@caelectrical.co.za</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-3">
              <MapPin className="h-4 w-4 text-red-400" />
              <span className="text-center">Unit N7 Athlone Industrial Park, 10 Mymoena Crescent, Athlone Industria 2, Cape Town, 7764</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2024 C A Electrical. All rights reserved. Powering Cape Town's sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
