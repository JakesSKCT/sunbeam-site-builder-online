
const HowSolarWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Solar Energy Works
          </h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            Advanced energy management that adapts to your daily power needs
          </p>
        </div>
        
        {/* Diagram moved above the blocks */}
        <div className="mb-16 flex justify-center">
          <img 
            src="/lovable-uploads/53960088-bae0-4286-a1e0-3bb6149a6a1c.png" 
            alt="Modern house with solar panels showing energy flow diagram with labeled connections to solar, home, battery, and car"
            className="w-full max-w-4xl h-auto rounded-xl"
          />
        </div>
        
        {/* 2x2 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center">
              <span className="text-3xl mr-3">☀️</span>
              Day Time Operation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Solar panels generate clean electricity from sunlight. Energy flows to power your home directly, 
              charge batteries, and can feed excess back to the grid for credits.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
              <span className="text-3xl mr-3">🌙</span>
              Night Time Operation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              When the sun sets, your home is powered by stored battery energy. 
              The grid provides seamless backup power during extended usage periods.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
              <span className="text-3xl mr-3">🔋</span>
              Smart Battery Management
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Batteries automatically charge during peak solar production and discharge when solar is unavailable, 
              ensuring continuous power supply with intelligent load management.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
              <span className="text-3xl mr-3">⚡</span>
              Load Shedding Protection
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your solar system provides uninterrupted power during Eskom outages, 
              automatically switching between solar, battery, and grid power seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSolarWorksSection;
