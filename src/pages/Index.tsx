
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Sun, Zap, Battery, Search, Award, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solar Power Solutions for Cape Town
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional solar installations, battery storage, and energy audits for residential and commercial properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solar Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential rooftops to commercial installations, we provide comprehensive solar energy solutions across Cape Town
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sun className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Solar Installations</CardTitle>
                <CardDescription>
                  Professional solar panel installations for homes and businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  High-quality solar panels and inverters installed by certified professionals with warranties you can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Battery className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Battery Storage</CardTitle>
                <CardDescription>
                  Store excess energy for use during load shedding and at night
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced battery systems that provide backup power and maximize your solar investment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Energy Audits</CardTitle>
                <CardDescription>
                  Comprehensive energy assessments to optimize your power usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Detailed analysis of your energy consumption to design the most efficient solar solution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose C A Electrical
            </h2>
            <p className="text-xl text-gray-600">
              Trusted solar experts serving Cape Town with quality and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Professionals</h3>
              <p className="text-gray-600">
                Licensed electricians with specialized solar installation training and certifications
              </p>
            </div>
            
            <div className="text-center">
              <Zap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Components</h3>
              <p className="text-gray-600">
                Premium solar panels, inverters, and batteries from trusted manufacturers
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Service</h3>
              <p className="text-gray-600">
                Cape Town-based team providing ongoing support and maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your solar installation project
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us Today
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

export default Index;
