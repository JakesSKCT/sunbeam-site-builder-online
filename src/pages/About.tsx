
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Users, Wrench } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Mission Statement */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              At C A Electrical, we are committed to empowering Cape Town homes and businesses 
              with sustainable, reliable solar energy solutions. We believe that every property 
              deserves access to clean, affordable electricity that reduces environmental impact 
              while providing energy independence. Through our expertise in solar installations, 
              battery storage systems, and comprehensive energy audits, we help our clients 
              achieve their energy goals while contributing to a greener South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 text-justify">
                CA Electrical is a Cape Town based electrical company owned by 3 dynamic individuals with a collective experience of 75+ years in the construction, electrical and solar industries. Established in 2016, the company has grown exponentially, now servicing clients in various industries including retail, commercial, industrial, education and healthcare.
              </p>
              <p className="text-gray-600 mb-4 text-justify">
                At CA Electrical, we are dedicated to providing premium electrical services to all our clients. Our team of licensed and insured electricians is committed to delivering reliable, efficient, and safe electrical solutions. CA Electrical is registered with the Engineering Council of South Africa (ECSA) and the Department of Labour. Our members are ECA and ECB registered to ensure that your installation meets all the local regulatory requirements and safety standards. CA Electrical is registered with the Construction Industry Development Board with a 5EB grading.
              </p>
              <p className="text-gray-600 mb-4 text-justify">
                Our Solar divison was founded with a vision to make solar energy accessible and affordable for every home and business in Cape Town. As licensed electrical contractors, we recognized the growing need for reliable renewable energy solutions, especially in light of South Africa's energy challenges.
              </p>
              <p className="text-gray-600 mb-4 text-justify">
                Our team combines years of electrical expertise with specialized solar installation training, ensuring that every project meets the highest standards of safety and efficiency.
              </p>
              <p className="text-gray-600 text-justify">
                We pride ourselves on being more than just installers – we're your long-term energy partners, providing ongoing support and maintenance to maximize your solar investment.
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

      <Footer />
    </div>
  );
};

export default About;
