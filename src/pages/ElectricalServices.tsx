
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Zap, Shield, Clock, Users } from "lucide-react";

const ElectricalServices = () => {
  const teamMembers = [
    {
      name: "Chris Anderson",
      role: "Master Electrician & Founder",
      experience: "15+ years",
      specialization: "Commercial & Industrial Electrical Systems",
      certifications: ["Master Electrician License", "Solar Installation Certified", "Hazardous Area Specialist"],
      image: "/lovable-uploads/b47e89af-2cbe-43dd-b1a5-1029a8a5422e.png"
    },
    {
      name: "Michael Thompson",
      role: "Senior Electrical Technician",
      experience: "12+ years",
      specialization: "Residential & Solar Installations",
      certifications: ["Journeyman Electrician", "Solar PV Systems", "Energy Efficiency Expert"],
      image: "/lovable-uploads/33b96118-cff3-4bf0-8672-470463a987bb.png"
    },
    {
      name: "David Parker",
      role: "Electrical Engineer",
      experience: "10+ years",
      specialization: "System Design & Project Management",
      certifications: ["Professional Engineer", "Project Management Professional", "Smart Home Systems"],
      image: "/lovable-uploads/340af66c-d27d-4a01-8a47-b35be5c77703.png"
    },
    {
      name: "Sarah Wilson",
      role: "Electrical Technician",
      experience: "8+ years",
      specialization: "Maintenance & Troubleshooting",
      certifications: ["Licensed Electrician", "Safety Compliance Specialist", "Emergency Systems"],
      image: "/lovable-uploads/486b1c7c-5571-4bdc-a5db-e5726c8a9903.png"
    }
  ];

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Complete Electrical Installations",
      description: "Full electrical system design and installation for residential, commercial and industrial properties."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Safety Inspections & Maintenance",
      description: "Comprehensive electrical safety audits and preventive maintenance programs to ensure compliance."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-400" />,
      title: "24/7 Emergency Services",
      description: "Round-the-clock emergency electrical services for urgent repairs and power restoration."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Expert Consulting",
      description: "Professional electrical consulting services for complex projects and system upgrades."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="text-gradient">Electrical Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert team of certified electricians delivers reliable, safe, and efficient electrical solutions 
              for residential, commercial, and industrial clients across Cape Town.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our <span className="text-gradient">Electrical Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="glass-effect border-blue-900/50 hover-scale">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified electrical professionals bring decades of combined experience to every project, 
              ensuring the highest standards of safety, quality, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-effect border-blue-900/50 hover-scale">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500/30">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-400 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="border-blue-500 text-blue-400 mb-2">
                      {member.experience}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Specialization:</h4>
                    <p className="text-gray-300 text-sm">{member.specialization}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Certifications:</h4>
                    <div className="space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="secondary" className="text-xs mr-1 mb-1">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Electrical Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-gradient">C A Electrical</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-6 w-6 text-blue-400 mr-3" />
                  Certified & Licensed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  All our electricians are fully certified, licensed, and continuously trained on the latest electrical codes and safety standards.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="h-6 w-6 text-blue-400 mr-3" />
                  Reliable Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We pride ourselves on punctuality, transparency, and delivering projects on time and within budget.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-blue-900/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="h-6 w-6 text-blue-400 mr-3" />
                  Quality Workmanship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Every installation and repair is performed to the highest standards with quality materials and proven techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-effect border-blue-900/50 p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Need Professional Electrical Services?
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
