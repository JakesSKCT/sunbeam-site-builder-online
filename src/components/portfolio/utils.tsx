
import { Home, Building2 } from "lucide-react";
import { Project } from "./types";

export const getTypeIcon = (type: Project["type"]) => {
  switch (type) {
    case "Residential": return <Home className="h-4 w-4" />;
    case "Commercial": return <Building2 className="h-4 w-4" />;
    case "Industrial": return <Building2 className="h-4 w-4" />;
    case "Agricultural": return <Home className="h-4 w-4" />;
    default: return <Home className="h-4 w-4" />;
  }
};

export const getTypeBadgeColor = (type: Project["type"]) => {
  switch (type) {
    case "Residential": return "bg-blue-100 text-blue-800";
    case "Commercial": return "bg-green-100 text-green-800";
    case "Industrial": return "bg-purple-100 text-purple-800";
    case "Agricultural": return "bg-orange-100 text-orange-800";
    default: return "bg-gray-100 text-gray-800";
  }
};
