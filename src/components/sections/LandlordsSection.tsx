

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calculator, Clock, Info } from "lucide-react";

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
            <div className="mx-auto mb-8 p-4 bg-green-500/20 rounded-2xl border border-green-500/30 group-hover:bg-green-500/30 transition-colors w-fit">
              <TrendingUp className="h-12 w-12 text-green-400" />
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
            <div className="mx-auto mb-8 p-4 bg-blue-500/20 rounded-2xl border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors w-fit">
              <Users className="h-12 w-12 text-blue-400" />
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
            <div className="mx-auto mb-8 p-4 bg-purple-500/20 rounded-2xl border border-purple-500/30 group-hover:bg-purple-500/30 transition-colors w-fit">
              <Calculator className="h-12 w-12 text-purple-400" />
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
            <div className="mx-auto mb-8 p-4 bg-orange-500/20 rounded-2xl border border-orange-500/30 group-hover:bg-orange-500/30 transition-colors w-fit">
              <Clock className="h-12 w-12 text-orange-400" />
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
            A tenant consumes 12,440 kWh per year. By installing a hybrid solar system for R90 000 with a 6kW inverter, 6,6kWp of PV and 10kWh battery, your income generation potential is shown below.
            Assumptions:
            15% increase in electricity per annum (Eskom has averaged 15% over 10 years),
            AMI Meter to sell electricity back to the municipality.   
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
              <p className="text-sm text-gray-400 mb-4">Total net savings over system lifetime</p>
              <div className="bg-blue-900/50 border border-blue-600 rounded-lg p-4 inline-block">
                <p className="text-lg font-semibold text-blue-300 mb-1">Return on Investment (ROI)</p>
                <p className="text-2xl font-bold text-blue-400">2 Years 3 Months</p>
              </div>
            </div>
          </div>

          {/* System Performance Assumptions Button */}
          <div className="text-center mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-blue-600 hover:bg-blue-700 text-white border-blue-500 hover:border-blue-400"
                >
                  <Info className="w-4 h-4 mr-2" />
                  System Performance Assumptions
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl text-center">System Performance Assumptions</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-4 text-sm">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2"><strong>System Total losses:</strong> 14.9%</p>
                    <p className="mb-2"><strong>Inverter losses:</strong> 3.0%</p>
                    <p className="mb-2"><strong>Optimizer losses:</strong> 0%</p>
                    <p className="mb-2"><strong>Shading losses:</strong> 0.3%</p>
                    <p className="mb-2"><strong>Performance Adjustment:</strong> 0%</p>
                    <p className="mb-4"><strong>Output Calculator:</strong> System Advisor Model 2020.02.29.r2</p>
                    <p className="mb-4"><strong>Panel Orientations:</strong> 12 panels with Azimuth 355 and Slope 25.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="mb-2">The solar system(s) quoted in this proposal are not intended to be portable.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="mb-2">Estimates do not include replacement costs of equipment not covered by a warranty. Components may need replacement after their warranty period.</p>
                    <p className="mb-2"><strong>Financial discount rate assumed:</strong> 6.75%</p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="mb-2">Price excludes Retailer Smart Meter should you want us to install your Smart Meter it will be an additional cost.</p>
                    <p><strong>This proposal is valid until:</strong> None.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Annual and Cumulative Income Chart */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Annual and Cumulative Income Over 20 Years</h4>
            <img 
              src="/lovable-uploads/b47e89af-2cbe-43dd-b1a5-1029a8a5422e.png" 
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

