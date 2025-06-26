
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/sections/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Visit our location or get in touch for solar energy solutions
            </p>
          </div>
        </div>
      </section>

      {/* Map & Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Google Map */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-96 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8!2d18.4823!3d-33.9625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d1e6b8b8b8b%3A0x1e6b8b8b8b8b8b8b!2s10%20Mymoena%20Cres%2C%20Athlone%2C%20Cape%20Town%2C%207764%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="C A Electrical Services Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+27 21 001 7720</p>
                      <p className="text-sm text-gray-500">Call us to discuss your needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">enquiries@caelectrical.co.za</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">Unit N7 Athlone Industrial Park</p>
                        <p className="text-gray-600">10 Mymoena Crescent</p>
                        <p className="text-gray-600">Athlone Industria 2</p>
                        <p className="text-gray-600">Cape Town</p>
                       <p className="text-gray-600"> 7764</p>
                      <p className="text-sm text-gray-500">Serving the greater Cape Town area</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-sm text-gray-500">Emergency service available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What Happens Next */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <p className="text-sm">We'll contact you within 24 hours to schedule your free consultation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <p className="text-sm">Our team will conduct a site assessment and energy audit</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <p className="text-sm">We'll provide a detailed quote with system design and financing options</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <p className="text-sm">Professional installation and system commissioning</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about solar installations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does installation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most residential installations are completed in 1-3 days, depending on system size. 
                  Commercial projects may take longer based on complexity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What warranties do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer 25-year warranties on solar panels, 10-year warranties on inverters, 
                  and 10-year warranties on battery systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you handle permits and approvals?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we handle all necessary permits, municipal approvals, and utility 
                  interconnection applications on your behalf.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What financing options are available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer various financing options including cash purchases, solar loans, 
                  and lease agreements to make solar accessible for every budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
