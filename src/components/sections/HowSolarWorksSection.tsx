
import DayNightSolarDiagram from "@/components/DayNightSolarDiagram";

const HowSolarWorksSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Solar Energy Works - Day & Night
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how energy flows differently during day and night in your solar power system
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">☀️ During the Day</h3>
              <p className="text-gray-600">
                Solar panels convert sunlight into electricity, powering your home and charging batteries for later use.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🌙 During the Night</h3>
              <p className="text-gray-600">
                Stored battery energy powers your home through the night and during load shedding, with grid backup if needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-600 mb-2">🔋 Smart Battery Management</h3>
              <p className="text-gray-600">
                Your system automatically manages energy flow, ensuring maximum efficiency and uninterrupted power supply.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">⚡ Grid Integration</h3>
              <p className="text-gray-600">
                Seamless integration with Eskom grid provides backup power when needed and allows excess energy export where permitted.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <DayNightSolarDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSolarWorksSection;
