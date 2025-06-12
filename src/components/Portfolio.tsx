
import { useState } from "react";
import ProjectCard from "./portfolio/ProjectCard";
import { projects } from "./portfolio/projectsData";

const Portfolio = () => {
  console.log("Portfolio component rendering");
  console.log("Projects data:", projects);
  
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

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
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our recent solar installations across Cape Town - from residential homes to large commercial projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            console.log("Rendering project:", project.id, project.title);
            return (
              <ProjectCard
                key={project.id}
                project={project}
                currentImageIndex={currentImageIndex[project.id] || 0}
                onNextImage={() => nextImage(project.id, project.images.length)}
                onPrevImage={() => prevImage(project.id, project.images.length)}
              />
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
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
