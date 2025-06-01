
import DayNightSolarDiagram from "@/components/DayNightSolarDiagram";

const HowSolarWorksSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Solar Energy Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how energy flows differently during day and night
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">☀️ Day Time Operation</h3>
              <p className="text-gray-600">
                Solar panels generate electricity from sunlight. Energy flows to power your home directly, charge batteries, and can feed excess back to the grid.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🌙 Night Time Operation</h3>
              <p className="text-gray-600">
                When the sun sets, your home is powered by stored battery energy. The grid provides backup power when needed during extended usage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-green-600 mb-2">🔋 Smart Battery Management</h3>
              <p className="text-gray-600">
                Batteries automatically charge during peak solar production and discharge when solar is unavailable, ensuring continuous power supply.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">⚡ Load Shedding Protection</h3>
              <p className="text-gray-600">
                Your solar system provides uninterrupted power during Eskom outages, automatically switching between solar, battery, and grid power.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <DayNightSolarDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSolarWorksSection;
