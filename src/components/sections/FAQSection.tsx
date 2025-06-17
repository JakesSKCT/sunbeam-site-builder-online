import { useState } from "react";
import { ChevronDown, ChevronUp, Zap, Shield, Leaf, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Feeling frustrated by rising electricity bills?",
      answer: "With Eskom's annual tariff increases averaging 15% over the past 5 years, electricity costs are becoming unbearable. Solar energy locks in your electricity rate for 25+ years, protecting you from future price hikes.",
      icon: DollarSign,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      question: "Does the risk of load shedding give you anxiety?",
      answer: "Load shedding disrupts work, damages appliances, and affects your quality of life. Our solar systems with battery backup ensure uninterrupted power supply, giving you peace of mind during outages.",
      icon: Zap,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      question: "Tired of having to drive into the office or sleeping at night without security lights because of grid outages?",
      answer: "Never compromise your safety or productivity again. Solar battery systems keep your essential systems running - security lights, alarms, WiFi, and appliances - even during extended outages.",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      question: "Worried about the environmental impact of your energy consumption?",
      answer: "Coal-powered electricity contributes significantly to carbon emissions. Solar energy is 100% clean and renewable, helping you reduce your carbon footprint while saving money.",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Are You Facing These Energy Challenges?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If any of these questions resonate with you, you're not alone.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isExpanded = expandedIndex === index;
            
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${faq.bgColor}`}>
                        <IconComponent className={`h-6 w-6 ${faq.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <div className="pl-16">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Good News: There's a Clean and Abundant Alternative
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              <strong>Solar Energy</strong> solves all these problems while saving you money and protecting the environment.
            </p>
            <Link to="/services" onClick={scrollToTop}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Discover Solar Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
