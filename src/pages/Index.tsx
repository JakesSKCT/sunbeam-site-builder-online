
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SolarFlowDiagram from "@/components/SolarFlowDiagram";
import { Sun, Zap, Battery, Search, Award, Users, TrendingUp, AlertTriangle, Shield } from "lucide-react";

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

      {/* How Solar Works Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Solar Energy Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the flow of energy in your solar power system
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">1. Solar Generation</h3>
                <p className="text-gray-600">
                  Solar panels convert sunlight into DC electricity throughout the day, with peak production during midday hours.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-green-600 mb-2">2. Battery Storage</h3>
                <p className="text-gray-600">
                  Excess energy is stored in batteries for use during load shedding, at night, or when solar production is low.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">3. Home Consumption</h3>
                <p className="text-gray-600">
                  Your home uses solar energy first, then battery power, ensuring maximum utilization of clean energy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-orange-600 mb-2">4. Grid Interaction</h3>
                <p className="text-gray-600">
                  The Eskom grid acts as backup when needed, and excess energy can be fed back where permitted.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <SolarFlowDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Inverter Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inverter & Installation Types
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right inverter technology for your Cape Town property
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>String Inverters</CardTitle>
                <CardDescription>Cost-effective solution for most installations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Traditional and reliable, string inverters connect multiple solar panels in series. 
                  Perfect for roofs with consistent sun exposure and minimal shading.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Most economical option</li>
                  <li>• Easy maintenance</li>
                  <li>• Proven technology</li>
                  <li>• Ideal for unshaded roofs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sun className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Microinverters</CardTitle>
                <CardDescription>Maximum efficiency for complex roof layouts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Individual inverters for each panel optimize performance even with partial shading. 
                  Ideal for Cape Town's varied roof orientations and shade conditions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Panel-level optimization</li>
                  <li>• Better shade tolerance</li>
                  <li>• Enhanced monitoring</li>
                  <li>• Flexible installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Battery className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Hybrid Inverters</CardTitle>
                <CardDescription>All-in-one solar and battery solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Combines solar and battery management in one unit. Essential for load shedding 
                  protection and energy independence in Cape Town.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Battery-ready design</li>
                  <li>• Load shedding backup</li>
                  <li>• Smart energy management</li>
                  <li>• Future expandable</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Electricity Costs & Load Shedding */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cape Town's Energy Crisis
            </h2>
            <p className="text-xl text-gray-600">
              Why solar is essential for Cape Town residents and businesses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Rising Electricity Costs */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-2xl">Rising Electricity Costs</CardTitle>
                <CardDescription>Eskom tariff increases are outpacing inflation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Recent Eskom Increases:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• 2024: 12.74% average increase</li>
                    <li>• 2023: 18.65% average increase</li>
                    <li>• 2022: 9.61% average increase</li>
                    <li>• 5-year average: ~15% annually</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  With Eskom's annual tariff increases consistently exceeding inflation, 
                  Cape Town households face mounting electricity costs. Solar provides 
                  price certainty and long-term savings.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Solar Benefits:</h4>
                  <p className="text-sm text-green-700">
                    Lock in your electricity rate for 25+ years and protect 
                    against future Eskom increases.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Load Shedding Impact */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-2xl">Load Shedding Impact</CardTitle>
                <CardDescription>The real cost of power outages in Cape Town</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Business Impact:</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Lost productivity during outages</li>
                    <li>• Equipment damage from power surges</li>
                    <li>• Spoiled refrigerated goods</li>
                    <li>• Customer dissatisfaction</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Household Challenges:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• No lighting or heating</li>
                    <li>• Internet and communication disruption</li>
                    <li>• Food spoilage and waste</li>
                    <li>• Security system failures</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Solar Solution:</h4>
                  <p className="text-sm text-green-700">
                    Battery backup systems provide uninterrupted power during 
                    load shedding, protecting your lifestyle and business.
                  </p>
                </div>
              </CardContent>
            </Card>
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
            Beat Load Shedding & Rising Costs
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote to protect your Cape Town property from Eskom's challenges
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Protected Today
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
