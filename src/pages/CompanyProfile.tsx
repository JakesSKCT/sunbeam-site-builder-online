
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Award, Users, Wrench, CheckCircle, Sun, Battery, Zap, Building, Home } from "lucide-react";

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Hide navigation when printing */}
      <div className="print:hidden">
        <Navigation />
      </div>
      
      {/* Print-optimized content */}
      <div className="max-w-4xl mx-auto px-4 py-8 print:px-0 print:py-4">
        
        {/* Header */}
        <div className="text-center mb-8 print:mb-6">
          <img 
            src="/lovable-uploads/d57bf45b-aa76-41d5-8edf-37e9ed13ae0c.png" 
            alt="C A Electrical Services" 
            className="h-24 w-auto mx-auto mb-4 print:h-16"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2 print:text-3xl">
            C A Electrical Services
          </h1>
          <p className="text-xl text-gray-600 print:text-lg">
            Cape Town Solar & Electrical Specialists
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Contact Information */}
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

        {/* Company Overview */}
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

        {/* Services */}
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

        {/* Market Specialization */}
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

        {/* Certifications & Registrations */}
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

        {/* Key Differentiators */}
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

        {/* Sample Projects */}
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

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t print:border-t-2">
          <p className="text-gray-600 text-sm">
            © 2024 C A Electrical Services. Powering Cape Town's sustainable future.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Generated on {new Date().toLocaleDateString('en-ZA')}
          </p>
        </div>
      </div>

      {/* Print instructions (hidden when printing) */}
      <div className="print:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <p className="text-sm mb-2">
          <strong>To save as PDF:</strong>
        </p>
        <ol className="text-xs space-y-1">
          <li>1. Press Ctrl+P (or Cmd+P on Mac)</li>
          <li>2. Select "Save as PDF" as destination</li>
          <li>3. Choose "More settings" and select "A4" paper size</li>
          <li>4. Click "Save"</li>
        </ol>
      </div>

      {/* Print-specific styles */}
      <style jsx>{`
        @media print {
          body { 
            font-size: 12pt; 
            line-height: 1.4;
          }
          .print\\:text-3xl { font-size: 24pt; }
          .print\\:text-xl { font-size: 18pt; }
          .print\\:text-lg { font-size: 16pt; }
          .print\\:h-16 { height: 4rem; }
          .print\\:mb-6 { margin-bottom: 1.5rem; }
          .print\\:py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .print\\:px-0 { padding-left: 0; padding-right: 0; }
          .print\\:shadow-none { box-shadow: none; }
          .print\\:border-2 { border-width: 2px; }
          .print\\:border-t-2 { border-top-width: 2px; }
          .print\\:bg-white { background-color: white; }
          .print\\:hidden { display: none; }
        }
      `}</style>
    </div>
  );
};

export default CompanyProfile;
