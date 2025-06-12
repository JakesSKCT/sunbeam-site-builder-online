
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import Packages from "@/components/Packages";
import { 
  Home, 
  Building, 
  Wrench,
  Zap,
  Battery,
  Sun,
  CheckCircle,
  Search,
  Users
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Our Solar Solutions Section (now includes detailed content) */}
      <ServicesOverviewSection />

      {/* Packages Section */}
      <Packages />

      {/* Residential vs Commercial */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Residential & Commercial Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored solar solutions for every type of property
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Residential */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-2xl text-white">Residential Solar</CardTitle>
                <CardDescription className="text-gray-300">
                  Solar solutions designed for homes and residential properties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Reduce your electricity bills and gain energy independence with 
                  our residential solar installations. Perfect for Cape Town homes 
                  looking to protect against load shedding and rising electricity costs.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <Zap className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-white">Grid-Tied Systems</p>
                  </div>
                  <div className="text-center p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <Battery className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-white">Backup Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commercial */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <Building className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-2xl text-white">Commercial Solar</CardTitle>
                <CardDescription className="text-gray-300">
                  Large-scale solar installations for businesses and commercial properties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Reduce operational costs and demonstrate environmental responsibility 
                  with commercial solar installations. Ideal for offices, warehouses, 
                  retail spaces, and industrial facilities.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <Sun className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-white">Large Arrays</p>
                  </div>
                  <div className="text-center p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <Wrench className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-white">Maintenance Plans</p>
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
