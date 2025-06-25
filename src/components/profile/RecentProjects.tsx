
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecentProjects = () => {
  return (
    <Card className="mb-8 print:mb-6 print:shadow-none print:border-2">
      <CardHeader>
        <CardTitle className="text-2xl print:text-xl">Recent Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold">West Coast College Citrusdal</h4>
            <p className="text-sm text-gray-600">20kW Commercial Solar Array - 2024</p>
            <p className="text-sm">Large-scale solar installation reducing operational costs for educational facility</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold">Residential Solar - Constantia</h4>
            <p className="text-sm text-gray-600">24kW Residential System with Battery Backup - 2023</p>
            <p className="text-sm">Complete energy independence solution for family home</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold">Fire Station Projects</h4>
            <p className="text-sm text-gray-600">Multiple 30kW Commercial Installations - 2023</p>
            <p className="text-sm">Emergency services solar solutions in Clanwilliam and Vredendal</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentProjects;
