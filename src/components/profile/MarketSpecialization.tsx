
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building } from "lucide-react";

const MarketSpecialization = () => {
  return (
    <Card className="mb-8 print:mb-6 print:shadow-none print:border-2">
      <CardHeader>
        <CardTitle className="text-2xl print:text-xl">Market Specialization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-600 flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Residential
            </h3>
            <p className="text-sm text-gray-700">
              Custom solar solutions for Cape Town homes, designed to reduce electricity bills and provide energy independence during load shedding.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-600 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Commercial & Industrial
            </h3>
            <p className="text-sm text-gray-700">
              Large-scale installations for businesses, schools, healthcare facilities, and industrial operations across the Western Cape.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketSpecialization;
