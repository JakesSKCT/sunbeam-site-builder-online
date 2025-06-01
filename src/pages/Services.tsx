
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sun, 
  Battery, 
  Search, 
  Home, 
  Building, 
  Wrench,
  CheckCircle,
  Zap
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive solar energy solutions for residential and commercial properties in Cape Town
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Solar Installations */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sun className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Solar Panel Installations</CardTitle>
                <CardDescription>
                  Professional solar panel systems for maximum energy generation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our certified technicians install high-quality solar panels using premium 
                  components from trusted manufacturers. Every installation is designed to 
                  maximize energy production and withstand Cape Town's climate conditions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Tier 1 solar panels</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Premium inverters</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">25-year warranties</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Professional installation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Battery Storage */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Battery className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Battery Storage Systems</CardTitle>
                <CardDescription>
                  Store excess energy for use during load shedding and at night
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our battery storage solutions provide backup power during outages and 
                  allow you to use stored solar energy when the sun isn't shining. 
                  Perfect for load shedding protection and energy independence.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Lithium-ion batteries</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Automatic backup switching</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Smart energy management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">10+ year lifespan</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Energy Audits */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Energy Audits</CardTitle>
                <CardDescription>
                  Comprehensive assessments to optimize your energy usage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our detailed energy audits analyze your current electricity usage 
                  patterns to design the most efficient and cost-effective solar 
                  solution for your specific needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Consumption analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Solar potential assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">ROI calculations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Custom recommendations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Residential & Commercial Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solar solutions for every type of property
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Residential */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Residential Solar</CardTitle>
                <CardDescription>
                  Solar solutions designed for homes and residential properties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Reduce your electricity bills and gain energy independence with 
                  our residential solar installations. Perfect for Cape Town homes 
                  looking to protect against load shedding and rising electricity costs.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Grid-Tied Systems</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Battery className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Backup Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commercial */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Commercial Solar</CardTitle>
                <CardDescription>
                  Large-scale solar installations for businesses and commercial properties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Reduce operational costs and demonstrate environmental responsibility 
                  with commercial solar installations. Ideal for offices, warehouses, 
                  retail spaces, and industrial facilities.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Sun className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Large Arrays</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Wrench className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Maintenance Plans</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete support for your solar investment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Wrench className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Maintenance & Repairs</h3>
              <p className="text-sm text-gray-600">Regular maintenance and prompt repair services</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Search className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">System Monitoring</h3>
              <p className="text-sm text-gray-600">Real-time monitoring and performance optimization</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Warranties</h3>
              <p className="text-sm text-gray-600">Comprehensive warranties on all components</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-sm text-gray-600">Ongoing support and technical assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and personalized quote for your solar project
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">C A Electrical</h3>
            <p className="text-gray-300">Solar Solutions for Cape Town</p>
            <p className="text-gray-400 text-sm mt-4">
              © 2024 C A Electrical. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
