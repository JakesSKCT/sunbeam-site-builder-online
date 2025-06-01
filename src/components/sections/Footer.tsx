
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="https://ca-electrical.co.za/wp-content/uploads/2022/05/ca-electrical-logo.png" 
              alt="CA Electrical Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Professional solar solutions for Cape Town homes and businesses. 
              Beat load shedding with reliable, clean energy.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Solar Installations</li>
              <li>Battery Storage</li>
              <li>Energy Audits</li>
              <li>System Maintenance</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Cape Town, South Africa</p>
              <p>Professional Solar Solutions</p>
              <p>Licensed & Certified</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CA Electrical. All rights reserved. Professional solar installations in Cape Town.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
