
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CertificationsSection = () => {
  return (
    <Card className="mb-8 print:mb-6 print:shadow-none print:border-2">
      <CardHeader>
        <CardTitle className="text-2xl print:text-xl">Certifications & Registrations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Professional Registrations:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Engineering Council of South Africa (ECSA)</li>
              <li>• Department of Labour Registered</li>
              <li>• ECA (Electrical Contractors Association)</li>
              <li>• ECB (Electrical Contracting Board)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Industry Certifications:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Construction Industry Development Board</li>
              <li>• 5EB Grading Certification</li>
              <li>• Licensed & Insured Electricians</li>
              <li>• Solar Installation Specialists</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationsSection;
