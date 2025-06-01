
import React from 'react';
import { Sun, Home, Battery, Zap } from 'lucide-react';

const SolarFlowDiagram = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-8">
      {/* Solar Panel */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-2">
          <Sun className="h-6 w-6" />
          <span className="font-semibold">Solar Panels</span>
        </div>
        {/* Animated energy flow from solar to battery/inverter */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-16 bg-gradient-to-b from-yellow-400 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-yellow-300 w-full animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-4 bg-yellow-400 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Battery Storage */}
      <div className="absolute top-24 left-8">
        <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-2">
          <Battery className="h-6 w-6" />
          <span className="font-semibold">Battery Storage</span>
        </div>
      </div>

      {/* Home Load */}
      <div className="absolute top-24 right-8">
        <div className="bg-purple-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-2">
          <Home className="h-6 w-6" />
          <span className="font-semibold">Home Load</span>
        </div>
      </div>

      {/* Grid Connection */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="bg-orange-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-2">
          <Zap className="h-6 w-6" />
          <span className="font-semibold">Grid Connection</span>
        </div>
      </div>

      {/* Energy Flow Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
        {/* Solar to Battery flow */}
        <path
          d="M 150 80 Q 100 120 80 140"
          stroke="#22c55e"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
        />
        
        {/* Solar to Home flow */}
        <path
          d="M 250 80 Q 300 120 320 140"
          stroke="#a855f7"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Battery to Home flow */}
        <path
          d="M 140 160 Q 200 180 260 160"
          stroke="#3b82f6"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Grid connection flow */}
        <path
          d="M 200 220 L 200 190"
          stroke="#ea580c"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </svg>

      {/* Flow indicators */}
      <div className="absolute top-32 left-32 text-sm text-green-600 font-medium animate-pulse">
        Charging
      </div>
      <div className="absolute top-32 right-32 text-sm text-purple-600 font-medium animate-pulse" style={{ animationDelay: '0.5s' }}>
        Powering
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-sm text-orange-600 font-medium animate-pulse" style={{ animationDelay: '1.5s' }}>
        Export/Import
      </div>
    </div>
  );
};

export default SolarFlowDiagram;
