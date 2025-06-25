
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyOverview = () => {
  return (
    <Card className="mb-8 print:mb-6 print:shadow-none print:border-2">
      <CardHeader>
        <CardTitle className="text-2xl print:text-xl">Company Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4 text-justify">
          CA Electrical is a Cape Town based electrical company owned by 3 dynamic individuals with a collective experience of 75+ years in the construction, electrical and solar industries. Established in 2016, the company has grown exponentially, now servicing clients in various industries including retail, commercial, industrial, education and healthcare.
        </p>
        <p className="text-gray-700 mb-4 text-justify">
          At CA Electrical, we are dedicated to providing premium electrical services to all our clients. Our team of licensed and insured electricians is committed to delivering reliable, efficient, and safe electrical solutions. CA Electrical is registered with the Engineering Council of South Africa (ECSA) and the Department of Labour.
        </p>
        <p className="text-gray-700 text-justify">
          Our Solar division specializes in making solar energy accessible and affordable for every home and business in Cape Town. We combine years of electrical expertise with specialized solar installation training, ensuring every project meets the highest standards of safety and efficiency.
        </p>
      </CardContent>
    </Card>
  );
};

export default CompanyOverview;
