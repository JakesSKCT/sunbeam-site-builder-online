
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Users, Wrench } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About C A Electrical</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted solar energy partner in Cape Town, South Africa
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-blue-600">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                At C A Electrical, we are committed to empowering Cape Town homes and businesses 
                with sustainable, reliable solar energy solutions. We believe that every property 
                deserves access to clean, affordable electricity that reduces environmental impact 
                while providing energy independence. Through our expertise in solar installations, 
                battery storage systems, and comprehensive energy audits, we help our clients 
                achieve their energy goals while contributing to a greener South Africa.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                C A Electrical was founded with a vision to make solar energy accessible and 
                affordable for every home and business in Cape Town. As licensed electrical 
                contractors, we recognized the growing need for reliable renewable energy 
                solutions, especially in light of South Africa's energy challenges.
              </p>
              <p className="text-gray-600 mb-4">
                Our team combines years of electrical expertise with specialized solar 
                installation training, ensuring that every project meets the highest 
                standards of safety and efficiency.
              </p>
              <p className="text-gray-600">
                We pride ourselves on being more than just installers – we're your 
                long-term energy partners, providing ongoing support and maintenance 
                to maximize your solar investment.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Values</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Quality workmanship and components</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Transparent pricing and honest advice</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Customer satisfaction and support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Environmental responsibility</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Local community investment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* What Sets Us Apart */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600">
              Experience the C A Electrical difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Licensed & Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fully licensed electrical contractors with specialized solar certifications 
                  and ongoing training in the latest technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cape Town-based team with deep understanding of local regulations, 
                  climate conditions, and energy requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Full Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From initial consultation and energy audit to installation, 
                  commissioning, and ongoing maintenance support.
                </p>
              </CardContent>
            </Card>
          </div>
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

export default About;
