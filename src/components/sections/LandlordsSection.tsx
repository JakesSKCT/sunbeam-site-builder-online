
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Home, Shield, Calculator } from "lucide-react";

const LandlordsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solar Investment for Landlords
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your rental properties with solar energy and unlock multiple revenue streams 
            while providing value to your tenants
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Increased Property Value */}
          <Card className="bg-gray-800/80 border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500">
            <CardHeader className="text-center pb-4">
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-3" />
              <CardTitle className="text-lg text-white">Increased Property Value</CardTitle>
              <CardDescription className="text-gray-400">Boost your investment returns</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-green-900/30 border border-green-600/30 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-green-400 mb-1">15-20%</p>
                <p className="text-sm text-green-300">Average property value increase</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Higher resale potential</li>
                <li>• Premium rental rates</li>
                <li>• Future-proof investment</li>
              </ul>
            </CardContent>
          </Card>

          {/* Attract Quality Tenants */}
          <Card className="bg-gray-800/80 border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500">
            <CardHeader className="text-center pb-4">
              <Home className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <CardTitle className="text-lg text-white">Attract Quality Tenants</CardTitle>
              <CardDescription className="text-gray-400">Stand out in the rental market</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-blue-900/30 border border-blue-600/30 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-blue-400 mb-1">85%</p>
                <p className="text-sm text-blue-300">Prefer eco-friendly homes</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Reduced vacancy periods</li>
                <li>• Environmentally conscious tenants</li>
                <li>• Lower electricity bills appeal</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tax Benefits & Incentives */}
          <Card className="bg-gray-800/80 border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500">
            <CardHeader className="text-center pb-4">
              <Calculator className="h-12 w-12 text-purple-400 mx-auto mb-3" />
              <CardTitle className="text-lg text-white">Tax Benefits</CardTitle>
              <CardDescription className="text-gray-400">Maximize your returns</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-purple-900/30 border border-purple-600/30 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-purple-400 mb-1">Section 12B</p>
                <p className="text-sm text-purple-300">Tax allowance available</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Accelerated depreciation</li>
                <li>• Immediate tax deductions</li>
                <li>• Improved cash flow</li>
              </ul>
            </CardContent>
          </Card>

          {/* Reliable Investment */}
          <Card className="bg-gray-800/80 border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500">
            <CardHeader className="text-center pb-4">
              <Shield className="h-12 w-12 text-orange-400 mx-auto mb-3" />
              <CardTitle className="text-lg text-white">Reliable Investment</CardTitle>
              <CardDescription className="text-gray-400">Long-term stability</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-orange-900/30 border border-orange-600/30 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-orange-400 mb-1">25 Years</p>
                <p className="text-sm text-orange-300">Warranty & performance</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Minimal maintenance required</li>
                <li>• Predictable energy savings</li>
                <li>• Hedge against electricity price increases</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Maximum ROI Section */}
        <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
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

          {/* Case Study */}
          <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-600/30 rounded-xl p-6 mb-8">
            <h4 className="text-xl font-bold text-white mb-4">Case Study:</h4>
            <p className="text-gray-300 mb-6">
              The tenant uses 12,440 kWh per year. Assuming a 12% increase in electricity per annum 
              (Eskom has averaged over 10 years), and assuming we have a meter to sell back, 
              your income generation potential is as follows:
            </p>
            
            {/* Monthly Data Table */}
            <div className="overflow-x-auto mb-8">
              <img 
                src="/lovable-uploads/e8a9a767-1231-4c48-a4e4-9ac718044950.png" 
                alt="Monthly Solar Generation and Savings Data" 
                className="w-full h-auto rounded-lg shadow-md border border-gray-600"
              />
            </div>

            {/* Annual and Cumulative Income Chart */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Annual and Cumulative Income Over 20 Years</h4>
              <img 
                src="/lovable-uploads/ff58b203-2ea0-476f-bfe1-b759b68c256b.png" 
                alt="Annual and Cumulative Income Over 20 Years" 
                className="w-full h-auto rounded-lg shadow-md border border-gray-600"
              />
            </div>

            {/* Net Income Calculation */}
            <div className="bg-gray-800/80 border border-green-600/50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4 text-center">Net Income Calculation</h4>
              <div className="text-center">
                <p className="text-lg text-gray-300 mb-2">Net Income = Utility Bill Savings - Net System Cost</p>
                <p className="text-2xl font-bold text-green-400 mb-2">R2,632,163 - R90,000 = R2,542,163</p>
                <p className="text-sm text-gray-400">Total net savings over system lifetime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits Section */}
        <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
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
