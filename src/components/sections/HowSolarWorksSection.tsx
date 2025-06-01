
import SolarFlowDiagram from "@/components/SolarFlowDiagram";

const HowSolarWorksSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Solar Energy Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the flow of energy in your solar power system
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">1. Solar Generation</h3>
              <p className="text-gray-600">
                Solar panels convert sunlight into DC electricity throughout the day, with peak production during midday hours.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-600 mb-2">2. Battery Storage</h3>
              <p className="text-gray-600">
                Excess energy is stored in batteries for use during load shedding, at night, or when solar production is low.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">3. Home Consumption</h3>
              <p className="text-gray-600">
                Your home uses solar energy first, then battery power, ensuring maximum utilization of clean energy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">4. Grid Interaction</h3>
              <p className="text-gray-600">
                The Eskom grid acts as backup when needed, and excess energy can be fed back where permitted.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <SolarFlowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSolarWorksSection;
