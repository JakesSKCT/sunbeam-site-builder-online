
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-4xl font-bold">
              <span className="text-blue-400">C A</span>
              <span className="text-white ml-2">Electrical</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <p className="text-blue-300 text-lg mb-6">Premium Solar Solutions for Cape Town</p>
          <div className="flex justify-center space-x-8 mb-8 text-gray-400">
            <span>Licensed & Certified</span>
            <span>•</span>
            <span>25+ Year Warranties</span>
            <span>•</span>
            <span>Local Support</span>
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
