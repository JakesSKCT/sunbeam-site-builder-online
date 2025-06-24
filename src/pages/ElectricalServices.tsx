
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Zap, Shield, Clock, Users, Building, Factory, GraduationCap, Heart, Building2, ShoppingBag } from "lucide-react";

const ElectricalServices = () => {
  const industries = [
    { name: "Commercial", icon: <Building className="h-6 w-6" /> },
    { name: "Retail", icon: <ShoppingBag className="h-6 w-6" /> },
    { name: "Industrial", icon: <Factory className="h-6 w-6" /> },
    { name: "Education", icon: <GraduationCap className="h-6 w-6" /> },
    { name: "Healthcare", icon: <Heart className="h-6 w-6" /> },
    { name: "Government", icon: <Building2 className="h-6 w-6" /> }
  ];

  const commercialServices = [
    "Office and Retail Space Wiring",
    "Lighting and Energy Management Systems",
    "Emergency and Backup Power Solutions (Generators, UPS, Inverters, Solar)",
    "Electrical Maintenance and COC Repairs",
    "Data and Network Cabling",
    "Security System Installation",
    "Compliance Testing and Certificates"
  ];

  const residentialServices = [
    "New Installations",
    "Home Rewiring",
    "Lighting Design and Installation",
    "Electrical Panel Upgrades",
    "Outlet and Switch Installation",
    "Home Automation Systems",
    "Security System Installation",
    "Compliance Testing and Certificates"
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: "Registered Electricians",
      description: "CA Electrical is dedicated to ensure best practices. We are registered with ECSA and follow the relevant SANS recommendations at all times."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Expertise and Experience",
      description: "Our team of certified electricians has extensive knowledge and experience in handling a wide range of electrical projects, ensuring high-quality workmanship."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: "Safety First",
      description: "We prioritize safety in every project, adhering to all industry standards and regulations to protect our clients and their properties."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Customer Satisfaction",
      description: "We pride ourselves on our excellent customer service. We listen to our clients' needs and provide customized solutions that meet their specific requirements."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: "24/7 Emergency Services",
      description: "Electrical issues can arise at any time. That's why we offer round-the-clock emergency services to address urgent electrical problems promptly."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      title: "Competitive Pricing",
      description: "We offer fair and transparent pricing with no hidden fees, providing value for your investment."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Dark Background with New Electrical Image - Much Larger */}
      <section className="relative pt-20 pb-80 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 min-h-screen">
        {/* Background Image - Your uploaded electrical image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/d580108c-2212-41c0-b9b8-652f407937c7.png)',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
              Electrical subcontractors for high-end commercial, industrial and solar projects.
            </p>
          </div>
        </div>
      </section>

      {/* New Section with Moved Text - Light Background */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-blue-600 mb-6">
              We have over 70 years combined experience
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Partner with skilled, experienced professionals on your next project. You're in good company with us.
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Dark Background - No Container */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Welcome to <span className="text-gradient">CA Electrical</span>
              </h2>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p className="text-justify">
                  CA Electrical is a Cape Town based electrical company owned by 3 dynamic individuals with a collective experience of 75+ years in the construction, electrical and solar industries. Established in 2016, the company has grown exponentially, now servicing clients in various industries including retail, commercial, industrial, education and healthcare.
                </p>
                <p className="text-justify">
                  At CA Electrical, we are dedicated to providing premium electrical services to all our clients. Our team of licensed and insured electricians is committed to delivering reliable, efficient, and safe electrical solutions.
                </p>
                <p className="text-justify">
                  CA Electrical is registered with the Engineering Council of South Africa (ECSA) and the Department of Labour. Our members are ECA and ECB registered to ensure that your installation meets all the local regulatory requirements and safety standards. CA Electrical is registered with the Construction Industry Development Board with a 5EB grading.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/1247d8a8-2bf6-4850-b7a2-12580dfd048d.png" 
                alt="Electrical equipment and tools" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Light Background */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need an Electrical Team For Your Next <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Construction Project?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">Industries we work in:</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-white border-gray-200 hover-scale text-center p-6 shadow-lg">
                <div className="flex justify-center mb-4 text-blue-600">
                  {industry.icon}
                </div>
                <h3 className="text-gray-900 font-semibold">{industry.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Dark Background */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our <span className="text-gradient">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Commercial Services */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/e8d78561-2814-4d78-b4e9-9d1557a18d84.png"
                  alt="Commercial electrical work"
                  className="rounded-lg shadow-lg w-full max-w-md h-48 object-cover"
                />
              </div>
              <Card className="glass-effect border-blue-900/50">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Commercial Electrical Services</CardTitle>
                  <CardDescription className="text-gray-300">
                    We offer a complete design and implementation of commercial electrical installations, at all times adhering to current SANS regulations and safety practices.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {commercialServices.map((service, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Residential Services */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/2f30a0b5-216a-45c9-8c37-67cd3ea116d9.png"
                  alt="Electrical tools and equipment"
                  className="rounded-lg shadow-lg w-full max-w-md h-48 object-cover"
                />
              </div>
              <Card className="glass-effect border-blue-900/50">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Residential Electrical Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {residentialServices.map((service, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Solar Services */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/364c500f-223c-4841-83e7-0f4ec3752f57.png"
                  alt="Solar panel installation"
                  className="rounded-lg shadow-lg w-full max-w-md h-48 object-cover"
                />
              </div>
              <Card className="glass-effect border-blue-900/50">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Solar Installations</CardTitle>
                  <CardDescription className="text-gray-300">
                    Harness the Power of the sun with CA Electrical!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    As a leading provider of solar energy solutions, we are dedicated to delivering clean, sustainable, and cost-effective energy to homes and businesses.
                  </p>
                  <p className="text-gray-300">
                    We offer turnkey solutions from consultation, through design and finally installation and commissioning. CA Electrical uses City of Cape Town approved inverters and will complete your SSEG registration process with the City from start to finish.
                  </p>
                  <p className="text-gray-300">
                    We design solar energy systems tailored to your specific energy needs and property characteristics. Solar energy can significantly reduce your electricity bills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Light Background */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CA Electrical?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 hover-scale shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Dark Background */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-effect border-blue-900/50 p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Start Your Next Electrical Project?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Contact our expert team today for a free consultation and quote on your electrical project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-blue-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+27 21 123 4567</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@ca-electrical.co.za</span>
              </div>
              <div className="flex items-center text-blue-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Cape Town, South Africa</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectricalServices;
