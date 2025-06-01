
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, Battery, Zap, Activity } from escribe-react';

const DayNightSolarDiagram = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNight(prev => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-5xl mx-auto p-8 rounded-xl transition-all duration-1000 ${
      isNight 
        ? 'bg-gradient-to-b from-blue-900 to-purple-900' 
        : 'bg-gradient-to-b from-blue-100 to-green-50'
    }`}>
      {/* Sky and Time Indicator */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        {isNight ? (
          <div className="flex items-center gap-2 bg-blue-800 text-white px-3 py-1 rounded-full">
            <Moon className="h-4 w-4" />
            <span className="text-sm font-semibold">Night</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded-full">
            <Sun className="h-4 w-4" />
            <span className="text-sm font-semibold">Day</span>
          </div>
        )}
      </div>

      {/* Stars for night mode */}
      {isNight && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-8 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-32 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-16 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-6 right-16 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      )}

      {/* House Structure */}
      <div className="relative">
        <div className="relative mx-auto w-80 h-60">
          {/* House Base */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-40 rounded-lg shadow-lg border-2 transition-all duration-1000 ${
            isNight 
              ? 'bg-gradient-to-b from-gray-700 to-gray-800 border-gray-600' 
              : 'bg-gradient-to-b from-orange-200 to-orange-300 border-orange-400'
          }`}>
            {/* Windows */}
            <div className={`absolute top-4 left-4 w-8 h-8 border rounded transition-all duration-1000 ${
              isNight 
                ? 'bg-yellow-300 border-yellow-400' 
                : 'bg-blue-200 border-blue-400'
            }`}></div>
            <div className={`absolute top-4 right-4 w-8 h-8 border rounded transition-all duration-1000 ${
              isNight 
                ? 'bg-yellow-300 border-yellow-400' 
                : 'bg-blue-200 border-blue-400'
            }`}></div>
            <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-16 border rounded-t-lg transition-all duration-1000 ${
              isNight 
                ? 'bg-yellow-600 border-yellow-800' 
                : 'bg-yellow-600 border-yellow-800'
            }`}></div>
          </div>
          
          {/* Roof */}
          <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[140px] border-r-[140px] border-b-[60px] border-l-transparent border-r-transparent transition-all duration-1000 ${
            isNight ? 'border-b-gray-700' : 'border-b-red-600'
          }`}></div>
          
          {/* Solar Panels on Roof */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {[1, 2, 3].map((panel) => (
              <div 
                key={panel}
                className={`w-16 h-8 border rounded-sm shadow-md flex items-center justify-center transition-all duration-1000 ${
                  isNight 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700' 
                    : 'bg-gradient-to-r from-blue-800 to-blue-900 border-blue-700'
                }`}
              >
                {isNight ? (
                  <Moon className="h-4 w-4 text-gray-400" />
                ) : (
                  <Sun className="h-4 w-4 text-yellow-400" />
                )}
              </div>
            ))}
          </div>
          
          {/* Solar Panel Label */}
          <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-semibold shadow-lg transition-all duration-1000 ${
            isNight 
              ? 'bg-gray-700 text-gray-300' 
              : 'bg-blue-600 text-white'
          }`}>
            Solar Panels {isNight ? '(Inactive)' : '(Active)'}
          </div>
        </div>

        {/* Wall-mounted Inverter (Left side) */}
        <div className="absolute top-32 left-8">
          <div className={`p-3 rounded-lg shadow-lg border-2 w-16 h-12 flex items-center justify-center transition-all duration-1000 ${
            isNight 
              ? 'bg-gray-600 border-gray-500' 
              : 'bg-gray-700 border-gray-600'
          }`}>
            <Activity className={`h-6 w-6 ${isNight ? 'text-blue-400' : 'text-green-400'}`} />
          </div>
          <div className="mt-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold text-center shadow-sm">
            Inverter
          </div>
        </div>

        {/* Wall-mounted Battery (Right side) */}
        <div className="absolute top-32 right-8">
          <div className={`p-3 rounded-lg shadow-lg border-2 w-16 h-16 flex items-center justify-center transition-all duration-1000 ${
            isNight 
              ? 'bg-blue-600 border-blue-500 animate-pulse' 
              : 'bg-green-700 border-green-600'
          }`}>
            <Battery className="h-8 w-8 text-white" />
          </div>
          <div className={`mt-2 text-white px-2 py-1 rounded text-xs font-semibold text-center shadow-sm transition-all duration-1000 ${
            isNight ? 'bg-blue-600' : 'bg-green-600'
          }`}>
            Battery {isNight ? '(Discharging)' : '(Charging)'}
          </div>
        </div>

        {/* Grid Connection */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`p-3 rounded-lg shadow-lg border-2 flex items-center gap-2 transition-all duration-1000 ${
            isNight 
              ? 'bg-gray-600 border-gray-500' 
              : 'bg-orange-600 border-orange-500'
          }`}>
            <Zap className="h-6 w-6 text-white" />
            <span className="text-white font-semibold text-sm">Eskom Grid</span>
          </div>
        </div>

        {/* Home Load Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className={`text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 transition-all duration-1000 ${
            isNight ? 'bg-blue-600 animate-pulse' : 'bg-purple-600'
          }`}>
            <Home className="h-4 w-4" />
            Home Load
          </div>
        </div>
      </div>

      {/* Animated Energy Flow Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400">
        {/* Day Mode: Solar to Inverter flow */}
        {!isNight && (
          <path
            d="M 200 80 Q 150 120 80 140"
            stroke="#fbbf24"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8,4"
            className="animate-pulse"
          />
        )}
        
        {/* Day Mode: Solar to Battery flow (via inverter) */}
        {!isNight && (
          <path
            d="M 300 80 Q 350 120 420 140"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8,4"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        )}
        
        {/* Night Mode: Battery to Home flow */}
        {isNight && (
          <path
            d="M 380 160 Q 320 200 260 240"
            stroke="#3b82f6"
            strokeWidth="4"
            fill="none"
            strokeDasharray="8,4"
            className="animate-pulse"
          />
        )}
        
        {/* Night Mode: Battery to Inverter flow */}
        {isNight && (
          <path
            d="M 380 160 Q 200 180 120 160"
            stroke="#6366f1"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8,4"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        )}
        
        {/* Common: Inverter to Home flow */}
        <path
          d="M 120 160 Q 180 200 240 240"
          stroke={isNight ? "#3b82f6" : "#8b5cf6"}
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          className="animate-pulse"
          style={{ animationDelay: isNight ? '1s' : '1s' }}
        />
        
        {/* Grid connection (backup only) */}
        {isNight && (
          <path
            d="M 250 270 Q 250 300 250 330"
            stroke="#ea580c"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
            className="animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
        )}
        
        {/* Energy flow particles for day */}
        {!isNight && (
          <>
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
          </>
        )}
        
        {/* Energy flow particles for night */}
        {isNight && (
          <>
            <circle r="4" fill="#3b82f6" className="opacity-80">
              <animateMotion dur="3s" repeatCount="indefinite">
                <path d="M 380 160 Q 320 200 260 240" />
              </animateMotion>
            </circle>
            
            <circle r="4" fill="#6366f1" className="opacity-80">
              <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
                <path d="M 380 160 Q 200 180 120 160" />
              </animateMotion>
            </circle>
          </>
        )}
        
        <circle r="4" fill={isNight ? "#3b82f6" : "#8b5cf6"} className="opacity-80">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
            <path d="M 120 160 Q 180 200 240 240" />
          </animateMotion>
        </circle>
      </svg>

      {/* Energy Flow Labels */}
      {!isNight && (
        <>
          <div className="absolute top-24 left-20 text-xs text-yellow-700 font-medium animate-pulse bg-yellow-50 px-2 py-1 rounded shadow-sm border border-yellow-200">
            Solar Generation
          </div>
          <div className="absolute top-24 right-20 text-xs text-green-700 font-medium animate-pulse bg-green-50 px-2 py-1 rounded shadow-sm border border-green-200" style={{ animationDelay: '0.5s' }}>
            Battery Charging
          </div>
        </>
      )}
      
      {isNight && (
        <>
          <div className="absolute top-24 right-20 text-xs text-blue-700 font-medium animate-pulse bg-blue-50 px-2 py-1 rounded shadow-sm border border-blue-200">
            Battery Power
          </div>
          <div className="absolute bottom-32 left-16 text-xs text-blue-700 font-medium animate-pulse bg-blue-50 px-2 py-1 rounded shadow-sm border border-blue-200" style={{ animationDelay: '0.5s' }}>
            Home Backup
          </div>
        </>
      )}

      {/* Power Generation Indicator */}
      <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg border">
        <div className="flex items-center gap-2 text-sm">
          <div className={`w-3 h-3 rounded-full transition-all duration-1000 ${
            isNight 
              ? 'bg-blue-500 animate-pulse' 
              : 'bg-green-500 animate-pulse'
          }`}></div>
          <span className="text-gray-700 font-medium">
            {isNight ? 'Battery Power' : 'Solar Power'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DayNightSolarDiagram;
