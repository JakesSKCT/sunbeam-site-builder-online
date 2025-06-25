
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Wrench } from "lucide-react";

const KeyDifferentiators = () => {
  return (
    <Card className="mb-8 print:mb-6 print:shadow-none print:border-2">
      <CardHeader>
        <CardTitle className="text-2xl print:text-xl">What Sets Us Apart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold mb-2">75+ Years Experience</h4>
            <p className="text-sm text-gray-700">
              Collective expertise across construction, electrical, and solar industries
            </p>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold mb-2">Local Expertise</h4>
            <p className="text-sm text-gray-700">
              Deep understanding of Cape Town's unique energy challenges and regulations
            </p>
          </div>
          <div className="text-center">
            <Wrench className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold mb-2">Full Service</h4>
            <p className="text-sm text-gray-700">
              From consultation to maintenance, we provide comprehensive energy solutions
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyDifferentiators;
