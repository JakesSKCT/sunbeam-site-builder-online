
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Battery, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "./types";
import { getTypeIcon, getTypeBadgeColor } from "./utils";

interface ProjectCardProps {
  project: Project;
  currentImageIndex: number;
  onNextImage: () => void;
  onPrevImage: () => void;
}

const ProjectCard = ({ project, currentImageIndex, onNextImage, onPrevImage }: ProjectCardProps) => {
  console.log("ProjectCard rendering for:", project.title);
  
  const getCurrentImage = () => {
    return project.images[currentImageIndex];
  };

  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative">
        <img 
          src={getCurrentImage()} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        
        {project.images.length > 1 && (
          <>
            <button
              onClick={onPrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={onNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex 
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
  );
};

export default ProjectCard;
