import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Users, Calculator, Clock } from "lucide-react";

const LandlordsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solar Investment for Landlords
          </h2>
          <p className="text-xl text-blue-400 max-w-3xl mx-auto">
            Transform your rental properties with solar energy and unlock multiple revenue streams 
            while providing value to your tenants
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Increased Property Value */}
          <div className="text-center group">
            <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl border border-green-500 w-fit group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-16 w-16 text-green-100" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Increased Property Value</h3>
            <div className="bg-green-900/50 border border-green-600 p-4 rounded-lg mb-4">
              <p className="text-2xl font-bold text-green-400 mb-1">15-20%</p>
              <p className="text-sm text-green-300">Average property value increase</p>
            </div>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
              <li>• Higher resale potential</li>
              <li>• Premium rental rates</li>
              <li>• Future-proof investment</li>
            </ul>
          </div>

          {/* Attract Quality Tenants */}
          <div className="text-center group">
            <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl border border-blue-500 w-fit group-hover:scale-110 transition-transform duration-300">
              <Users className="h-16 w-16 text-blue-100" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Attract Quality Tenants</h3>
            <div className="bg-blue-900/50 border border-blue-600 p-4 rounded-lg mb-4">
              <p className="text-2xl font-bold text-blue-400 mb-1">85%</p>
              <p className="text-sm text-blue-300">Prefer eco-friendly homes</p>
            </div>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
              <li>• Reduced vacancy periods</li>
              <li>• Environmentally conscious tenants</li>
              <li>• Lower electricity bills appeal</li>
            </ul>
          </div>

          {/* Tax Benefits & Incentives */}
          <div className="text-center group">
            <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl border border-purple-500 w-fit group-hover:scale-110 transition-transform duration-300">
              <Calculator className="h-16 w-16 text-purple-100" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Tax Benefits</h3>
            <div className="bg-purple-900/50 border border-purple-600 p-4 rounded-lg mb-4">
              <p className="text-2xl font-bold text-purple-400 mb-1">Section 12B</p>
              <p className="text-sm text-purple-300">Tax allowance available</p>
            </div>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
              <li>• Accelerated depreciation</li>
              <li>• Immediate tax deductions</li>
              <li>• Improved cash flow</li>
            </ul>
          </div>

          {/* Reliable Investment */}
          <div className="text-center group">
            <div className="mx-auto mb-8 p-6 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl border border-orange-500 w-fit group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-16 w-16 text-orange-100" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Reliable Investment</h3>
            <div className="bg-orange-900/50 border border-orange-600 p-4 rounded-lg mb-4">
              <p className="text-2xl font-bold text-orange-400 mb-1">25 Years</p>
              <p className="text-sm text-orange-300">Warranty & performance</p>
            </div>
            <ul className="text-gray-300 text-lg leading-relaxed space-y-2">
              <li>• Minimal maintenance required</li>
              <li>• Predictable energy savings</li>
              <li>• Hedge against electricity price increases</li>
            </ul>
          </div>
        </div>

        {/* Maximum ROI Section */}
        <div className="bg-gray-800/50 border border-gray-600 rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-6">
            Maximum Return on Investment Strategy
          </h3>
          <div className="prose max-w-none text-gray-300 mb-8">
            <p className="text-lg mb-4">
              Investing in Solar on your rental property allows you the maximum return on investment. 
              A solar project which sells back electricity to the grid gives you a return of R1.06c per kWh 
              of electricity in Cape Town. This is far short of the cost of buying electricity at R3.91c kWh 
              (using the City's domestic electricity rate).
            </p>
            <p className="text-lg mb-4">
              By installing solar on your roof with a 3rd party prepaid meter you can sell back electricity 
              to your tenant at the full rate. This significantly increases your ROI and reduces your payback period.
            </p>
          </div>

          {/* Case Study - No container */}
          <h4 className="text-xl font-bold text-white mb-4">Case Study:</h4>
          <p className="text-gray-300 mb-6">
            The tenant uses 12,440 kWh per year. Assuming a 12% increase in electricity per annum 
            (Eskom has averaged over 10 years), and assuming we have a meter to sell back, 
            your income generation potential is as follows:
          </p>
          
          {/* Monthly Data Table with Modal */}
          <div className="overflow-x-auto mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer hover:opacity-90 transition-opacity">
                  <img 
                    src="/lovable-uploads/fc4fc721-ed64-4c16-9a96-5cb095021da5.png" 
                    alt="Monthly Solar Generation and Savings Data - Click to enlarge" 
                    className="w-full h-auto rounded-lg shadow-md border border-gray-600 hover:border-blue-400 transition-colors"
                  />
                  <p className="text-center text-sm text-blue-400 mt-2">Click to view larger image</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] w-full overflow-auto">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl">Monthly Solar Generation and Savings Data</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img 
                    src="/lovable-uploads/fc4fc721-ed64-4c16-9a96-5cb095021da5.png" 
                    alt="Monthly Solar Generation and Savings Data" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Net Income Calculation */}
          <div className="bg-gray-700/50 border border-green-600 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-bold text-white mb-4 text-center">Net Income Calculation</h4>
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-2">Net Income = Utility Bill Savings - Net System Cost</p>
              <p className="text-2xl font-bold text-green-400 mb-2">R2,632,163 - R90,000 = R2,542,163</p>
              <p className="text-sm text-gray-400">Total net savings over system lifetime</p>
            </div>
          </div>

          {/* Annual and Cumulative Income Chart */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Annual and Cumulative Income Over 20 Years</h4>
            <img 
              src="/lovable-uploads/99c87b52-00c8-4d8e-96ee-3d8e1c5c0053.png" 
              alt="Annual and Cumulative Income Over 20 Years" 
              className="w-full h-auto rounded-lg shadow-md border border-gray-600"
            />
          </div>
        </div>

        {/* Additional Benefits Section */}
        <div className="bg-gray-800/50 border border-gray-600 rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Why Solar Makes Sense for Rental Properties
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Rental Premium</h4>
              <p className="text-gray-300 text-sm">
                Charge 10-15% higher rent for solar-equipped properties while providing 
                real value through reduced electricity costs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">$</span>
              </div>
              <h4 className="font-semibold text-white mb-2">ROI in 2-3 Years</h4>
              <p className="text-gray-300 text-sm">
                With direct electricity sales to tenants, tax benefits, and property value increases, 
                solar installations can pay for themselves within 2-3 years.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Load Shedding Solution</h4>
              <p className="text-gray-300 text-sm">
                Offer tenants relief from load shedding with battery backup systems, 
                making your property highly desirable in the current market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandlordsSection;
