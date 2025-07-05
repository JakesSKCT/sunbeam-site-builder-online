
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Home, Shield, Calculator } from "lucide-react";

const LandlordsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solar Investment for Landlords
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your rental properties with solar energy and unlock multiple revenue streams 
            while providing value to your tenants
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Increased Property Value */}
          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
            <CardHeader className="text-center pb-4">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <CardTitle className="text-lg">Increased Property Value</CardTitle>
              <CardDescription>Boost your investment returns</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-green-700 mb-1">15-20%</p>
                <p className="text-sm text-green-600">Average property value increase</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Higher resale potential</li>
                <li>• Premium rental rates</li>
                <li>• Future-proof investment</li>
              </ul>
            </CardContent>
          </Card>

          {/* Attract Quality Tenants */}
          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
            <CardHeader className="text-center pb-4">
              <Home className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <CardTitle className="text-lg">Attract Quality Tenants</CardTitle>
              <CardDescription>Stand out in the rental market</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-blue-700 mb-1">85%</p>
                <p className="text-sm text-blue-600">Prefer eco-friendly homes</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Reduced vacancy periods</li>
                <li>• Environmentally conscious tenants</li>
                <li>• Lower electricity bills appeal</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tax Benefits & Incentives */}
          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
            <CardHeader className="text-center pb-4">
              <Calculator className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <CardTitle className="text-lg">Tax Benefits</CardTitle>
              <CardDescription>Maximize your returns</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-purple-700 mb-1">Section 12B</p>
                <p className="text-sm text-purple-600">Tax allowance available</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Accelerated depreciation</li>
                <li>• Immediate tax deductions</li>
                <li>• Improved cash flow</li>
              </ul>
            </CardContent>
          </Card>

          {/* Reliable Investment */}
          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
            <CardHeader className="text-center pb-4">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <CardTitle className="text-lg">Reliable Investment</CardTitle>
              <CardDescription>Long-term stability</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-orange-700 mb-1">25 Years</p>
                <p className="text-sm text-orange-600">Warranty & performance</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Minimal maintenance required</li>
                <li>• Predictable energy savings</li>
                <li>• Hedge against electricity price increases</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Solar Makes Sense for Rental Properties
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rental Premium</h4>
              <p className="text-gray-600 text-sm">
                Charge 10-15% higher rent for solar-equipped properties while providing 
                real value through reduced electricity costs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">$</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ROI in 4-6 Years</h4>
              <p className="text-gray-600 text-sm">
                With rental premiums, tax benefits, and property value increases, 
                solar installations typically pay for themselves within 4-6 years.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Load Shedding Solution</h4>
              <p className="text-gray-600 text-sm">
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
