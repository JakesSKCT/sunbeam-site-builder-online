
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <Card className="mb-8 print:mb-6 print:shadow-none print:border-2">
      <CardHeader>
        <CardTitle className="text-2xl text-center print:text-xl">Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <Phone className="h-6 w-6 text-green-600 mb-2" />
            <span className="font-semibold">Phone</span>
            <span>+27 21 001 7720</span>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="h-6 w-6 text-blue-600 mb-2" />
            <span className="font-semibold">Email</span>
            <span className="break-all">enquiries@caelectrical.co.za</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-6 w-6 text-red-600 mb-2" />
            <span className="font-semibold">Address</span>
            <span className="text-sm text-center">
              Unit N7 Athlone Industrial Park<br />
              10 Mymoena Crescent<br />
              Athlone Industria 2, Cape Town, 7764
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
