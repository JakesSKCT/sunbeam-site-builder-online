import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Battery, Home, Building2, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  const projects = [
    {
      id: 1,
      title: "Residential Solar Installation - Constantia",
      location: "Constantia, Cape Town",
      type: "Residential",
      images: [
        "/lovable-uploads/9841e506-bd78-4495-9cbb-cf478380945c.png",
        "/lovable-uploads/28a6f8a2-c21b-4f95-a7a7-207fa47c04bb.png"
      ],
      systemSize: "24kW",
      pvCapacity: "28kWp",
      batteryCapacity: "20kWh",
      description: "Complete solar solution with battery backup for a family home. Provides full energy independence during load shedding.",
      features: ["Tier 1 solar panels", "Hybrid inverter", "Lithium battery storage", "Smart monitoring"],
      year: "2023"
    },
    {
      id: 2,
      title: "Commercial Solar Array - West Coast College Citrusdal",
      location: "Citrusdal, Western Cape",
      type: "Commercial",
      images: ["/lovable-uploads/81dbedb3-8626-438a-af0b-3b1e2b77819d.png"],
      systemSize: "20kW",
      pvCapacity: "25kWp",
      batteryCapacity: "20kWh",
      description: "Large-scale solar installation for office complex, significantly reducing operational costs and carbon footprint.",
      features: ["Commercial-grade panels", "Three-phase inverters", "Grid-tie system", "Remote monitoring"],
      year: "2024"
    },
    {
      id: 3,
      title: "Grid-Tied System - Valota Farm",
      location: "Philippi, Cape Town",
      type: "Agricultural",
      images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"],
      systemSize: "20kW",
      pvCapacity: "24kWp",
      batteryCapacity: "n/a",
      description: "Grid-Tied solution for remote farm property, powering irrigation systems and farm operations.",
      features: ["Grid-Tied inverters", "Generator backup", "Weather monitoring"],
      year: "2023"
    },
    {
      id: 4,
      title: "Rooftop Solar - Clanwilliam Firestation",
      location: "Clanwilliam, Western Cape",
      type: "Commercial",
      images: ["https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"],
      systemSize: "30kW",
      pvCapacity: "36kWp",
      batteryCapacity: "20kWh",
      description: "Compact solar solution for apartment complex, maximizing limited roof space for optimal energy generation.",
      features: ["High-efficiency panels", "Microinverters", "Compact battery", "App monitoring"],
      year: "2023"
    },
    {
      id: 5,
      title: "Rooftop Solar - Vredendal Firestation",
      location: "Vredendal, Western Cape",
      type: "Industrial",
      images: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"],
      systemSize: "30kW",
      pvCapacity: "35kWp",
      batteryCapacity: "20kWh",
      description: "Large industrial solar array for warehouse operations, providing significant cost savings and reliability.",
      features: ["Industrial panels", "Central inverters", "SCADA monitoring", "Grid integration"],
      year: "2023"
    },
    {
      id: 6,
      title: "Emcon - Lansdowne",
      location: "Lansdowne, Cape Town",
      type: "Commercial",
      images: ["https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"],
      systemSize: "30kW",
      pvCapacity: "36kWp",
      batteryCapacity: "20kWh",
      description: "Premium solar installation with stunning ocean views, combining aesthetics with high performance.",
      features: ["Premium panels", "Hybrid inverter", "LiFePO4 batteries", "Smart home integration"],
      year: "2022"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Residential": return <Home className="h-4 w-4" />;
      case "Commercial": return <Building2 className="h-4 w-4" />;
      case "Industrial": return <Building2 className="h-4 w-4" />;
      case "Agricultural": return <Home className="h-4 w-4" />;
      default: return <Home className="h-4 w-4" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Residential": return "bg-blue-100 text-blue-800";
      case "Commercial": return "bg-green-100 text-green-800";
      case "Industrial": return "bg-purple-100 text-purple-800";
      case "Agricultural": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCurrentImage = (project: typeof projects[0]) => {
    const index = currentImageIndex[project.id] || 0;
    return project.images[index];
  };

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent solar installations across Cape Town - from residential homes to large commercial projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img 
                  src={getCurrentImage(project)} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(project.id, project.images.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => nextImage(project.id, project.images.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {project.images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === (currentImageIndex[project.id] || 0) 
                              ? 'bg-white' 
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                
                <div className="absolute top-4 left-4">
                  <Badge className={`${getTypeBadgeColor(project.type)} flex items-center gap-1`}>
                    {getTypeIcon(project.type)}
                    {project.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="flex items-center gap-1 text-orange-600">
                    <Sun className="h-4 w-4" />
                    <span className="font-medium">{project.pvCapacity}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Zap className="h-4 w-4" />
                    <span className="font-medium">{project.systemSize}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Battery className="h-4 w-4" />
                    <span className="font-medium">{project.batteryCapacity}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to join our portfolio of satisfied customers?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Your Solar Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
