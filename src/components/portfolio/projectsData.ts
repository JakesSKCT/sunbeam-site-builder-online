
import { Project } from "./types";

export const projects: Project[] = [
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
    description: "Large-scale solar installation for school, significantly reducing operational costs and carbon footprint.",
    features: ["Commercial-grade panels", "Three-phase inverters", "Grid-tie system", "Remote monitoring"],
    year: "2024"
  },
  {
    id: 3,
    title: "Grid-Tied System - Valota Farm",
    location: "Philippi, Cape Town",
    type: "Agricultural",
    images: ["/lovable-uploads/16f3c88d-6ece-4a28-b50f-8d0858f0a6c6.png"],
    systemSize: "20kW",
    pvCapacity: "24kWp",
    batteryCapacity: "n/a",
    description: "Grid-Tied solution for remote farm property, powering irrigation systems and farm operations.",
    features: ["Grid-Tied inverters", "Generator backup", "Weather monitoring"],
    year: "2023"
  },
  {
    id: 4,
    title: "Rooftop Solar - Clanwilliam Fire Station",
    location: "Clanwilliam, Western Cape",
    type: "Commercial",
    images: [
      "/lovable-uploads/486b1c7c-5571-4bdc-a5db-e5726c8a9903.png",
      "/lovable-uploads/340af66c-d27d-4a01-8a47-b35be5c77703.png"
    ],
    systemSize: "30kW",
    pvCapacity: "15.4kWp",
    batteryCapacity: "20kWh",
    description: "Compact solar solution for Fire Station, maximizing limited roof space for optimal energy generation.",
    features: ["High-efficiency panels", "Hybrid Inverter", "HV Battery", "App monitoring"],
    year: "2023"
  },
  {
    id: 5,
    title: "Rooftop Solar - Vredendal Fire Station",
    location: "Vredendal, Western Cape",
    type: "Commercial",
    images: [
      "/lovable-uploads/17957879-e94e-46ed-8a6a-5b80ff8418ae.png",
      "/lovable-uploads/dea6f3c2-0054-4f42-bc0a-23a9fed93da2.png"
    ],
    systemSize: "30kW",
    pvCapacity: "15.4kWp",
    batteryCapacity: "20kWh",
    description: "Compact solar solution for Fire Station, maximizing limited roof space for optimal energy generation.",
    features: ["High-efficiency panels", "Hybrid Inverter", "HV Battery", "App monitoring"],
    year: "2023"
  },
  {
    id: 6,
    title: "Rooftop Solar - Revo Properties",
    location: "Versveld Avenue, Constantia Heights",
    type: "Commercial",
    images: ["https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"],
    systemSize: "30kW",
    pvCapacity: "14kWp",
    batteryCapacity: "20kWh",
    description: "Premium solar installation with stunning ocean views, combining aesthetics with high performance.",
    features: ["Premium panels", "Hybrid inverter", "LiFePO4 batteries", "Smart home integration"],
    year: "2022"
  }
];
