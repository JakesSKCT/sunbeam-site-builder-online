
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/33b96118-cff3-4bf0-8672-470463a987bb.png" 
              alt="C A Electrical Services" 
              className="h-16 w-auto mx-auto mb-4"
            />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <p className="text-blue-300 text-lg mb-8">Premium Solar Solutions for Cape Town</p>
          
          {/* Contact Information */}
          <div className="mb-8 space-y-3 text-gray-300">
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-3 md:space-y-0">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-400">📞</span>
                <span>+27 21 001 7720</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-400">✉️</span>
                <span>enquiries@caelectrical.co.za</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-3">
              <span className="text-blue-400">📍</span>
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
