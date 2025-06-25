
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Zap, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  return (
    <Card className="mb-8 print:mb-6 print:shadow-none print:border-2">
      <CardHeader>
        <CardTitle className="text-2xl print:text-xl">Our Services</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Solar Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-600 flex items-center">
              <Sun className="h-5 w-5 mr-2" />
              Solar Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Residential Solar Installations
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Commercial Solar Arrays
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Battery Storage Systems
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Grid-Tied Solutions
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Energy Management Systems
              </li>
            </ul>
          </div>

          {/* Electrical Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-600 flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Electrical Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Electrical Installations
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Maintenance & Repairs
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                System Monitoring
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Safety Inspections
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Technical Support
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesSection;
