
export interface Project {
  id: number;
  title: string;
  location: string;
  type: "Residential" | "Commercial" | "Industrial" | "Agricultural";
  images: string[];
  systemSize: string;
  pvCapacity: string;
  batteryCapacity: string;
  description: string;
  features: string[];
  year: string;
}
