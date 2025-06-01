
import React from 'react';
import { Sun, Home, Battery, Zap, Activity } from 'lucide-react';

const SolarFlowDiagram = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto p-8 bg-gradient-to-b from-blue-100 to-green-50 rounded-xl">
      {/* House Structure */}
      <div className="relative">
        {/* House Image with Roof */}
        <div className="relative mx-auto w-80 h-60">
          {/* House Base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-b from-orange-200 to-orange-300 rounded-lg shadow-lg border-2 border-orange-400">
            {/* Windows */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-blue-200 border border-blue-400 rounded"></div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-blue-200 border border-blue-400 rounded"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-16 bg-yellow-600 border border-yellow-800 rounded-t-lg"></div>
          </div>
          
          {/* Roof */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[140px] border-r-[140px] border-b-[60px] border-l-transparent border-r-transparent border-b-red-600"></div>
          
          {/* Solar Panels on Roof */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            <div className="w-16 h-8 bg-gradient-to-r from-blue-800 to-blue-900 border border-blue-700 rounded-sm shadow-md flex items-center justify-center">
              <Sun className="h-4 w-4 text-yellow-400" />
            </div>
            <div className="w-16 h-8 bg-gradient-to-r from-blue-800 to-blue-900 border border-blue-700 rounded-sm shadow-md flex items-center justify-center">
              <Sun className="h-4 w-4 text-yellow-400" />
            </div>
            <div className="w-16 h-8 bg-gradient-to-r from-blue-800 to-blue-900 border border-blue-700 rounded-sm shadow-md flex items-center justify-center">
              <Sun className="h-4 w-4 text-yellow-400" />
            </div>
          </div>
          
          {/* Solar Panel Label */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Solar Panels
          </div>
        </div>

        {/* Wall-mounted Inverter (Left side) */}
        <div className="absolute top-32 left-8">
          <div className="bg-gray-700 p-3 rounded-lg shadow-lg border-2 border-gray-600 w-16 h-12 flex items-center justify-center">
            <Activity className="h-6 w-6 text-green-400" />
          </div>
          <div className="mt-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold text-center shadow-sm">
            Inverter
          </div>
        </div>

        {/* Wall-mounted Battery (Right side) */}
        <div className="absolute top-32 right-8">
          <div className="bg-green-700 p-3 rounded-lg shadow-lg border-2 border-green-600 w-16 h-16 flex items-center justify-center">
            <Battery className="h-8 w-8 text-white" />
          </div>
          <div className="mt-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold text-center shadow-sm">
            Battery
          </div>
        </div>

        {/* Grid Connection (Outside) */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-orange-600 p-3 rounded-lg shadow-lg border-2 border-orange-500 flex items-center gap-2">
            <Zap className="h-6 w-6 text-white" />
            <span className="text-white font-semibold text-sm">Eskom Grid</span>
          </div>
        </div>

        {/* Home Load Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home Load
          </div>
        </div>
      </div>

      {/* Animated Energy Flow Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400">
        {/* Solar to Inverter flow */}
        <path
          d="M 200 80 Q 150 120 80 140"
          stroke="#fbbf24"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          className="animate-pulse"
        />
        
        {/* Solar to Battery flow (via inverter) */}
        <path
          d="M 300 80 Q 350 120 420 140"
          stroke="#22c55e"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Inverter to Home flow */}
        <path
          d="M 120 160 Q 180 200 240 240"
          stroke="#8b5cf6"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Battery to Home flow */}
        <path
          d="M 380 160 Q 320 200 260 240"
          stroke="#3b82f6"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          className="animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        
        {/* Home to Grid connection */}
        <path
          d="M 250 270 Q 250 300 250 330"
          stroke="#ea580c"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Energy flow particles */}
        <circle r="4" fill="#fbbf24" className="opacity-80">
          <animateMotion dur="3s" repeatCount="indefinite">
            <path d="M 200 80 Q 150 120 80 140" />
          </animateMotion>
        </circle>
        
        <circle r="4" fill="#22c55e" className="opacity-80">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
            <path d="M 300 80 Q 350 120 420 140" />
          </animateMotion>
        </circle>
        
        <circle r="4" fill="#8b5cf6" className="opacity-80">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
            <path d="M 120 160 Q 180 200 240 240" />
          </animateMotion>
        </circle>
        
        <circle r="4" fill="#3b82f6" className="opacity-80">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
            <path d="M 380 160 Q 320 200 260 240" />
          </animateMotion>
        </circle>
      </svg>

      {/* Energy Flow Labels */}
      <div className="absolute top-24 left-20 text-xs text-yellow-700 font-medium animate-pulse bg-yellow-50 px-2 py-1 rounded shadow-sm border border-yellow-200">
        DC Power
      </div>
      <div className="absolute top-24 right-20 text-xs text-green-700 font-medium animate-pulse bg-green-50 px-2 py-1 rounded shadow-sm border border-green-200" style={{ animationDelay: '0.5s' }}>
        Charging
      </div>
      <div className="absolute bottom-32 left-16 text-xs text-purple-700 font-medium animate-pulse bg-purple-50 px-2 py-1 rounded shadow-sm border border-purple-200" style={{ animationDelay: '1s' }}>
        AC Power
      </div>
      <div className="absolute bottom-32 right-16 text-xs text-blue-700 font-medium animate-pulse bg-blue-50 px-2 py-1 rounded shadow-sm border border-blue-200" style={{ animationDelay: '1.5s' }}>
        Backup
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-orange-700 font-medium animate-pulse bg-orange-50 px-2 py-1 rounded shadow-sm border border-orange-200" style={{ animationDelay: '2s' }}>
        Grid Tie
      </div>

      {/* Power Generation Indicator */}
      <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg border">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-700 font-medium">Generating Power</span>
        </div>
      </div>
    </div>
  );
};

export default SolarFlowDiagram;
