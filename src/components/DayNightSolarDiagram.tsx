
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, Battery, Zap, Activity } from 'lucide-react';

const DayNightSolarDiagram = () => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDay(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-5xl mx-auto p-8 rounded-xl transition-all duration-2000 ${
      isDay 
        ? 'bg-gradient-to-b from-blue-300 via-blue-100 to-green-100' 
        : 'bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700'
    }`}>
      
      {/* Sky and Time Indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {isDay ? (
          <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full shadow-lg">
            <Sun className="h-5 w-5 text-yellow-500" />
            <span className="text-yellow-700 font-semibold">Day Time</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full shadow-lg">
            <Moon className="h-5 w-5 text-indigo-600" />
            <span className="text-indigo-700 font-semibold">Night Time</span>
          </div>
        )}
      </div>

      {/* Sun/Moon Position */}
      <div className={`absolute transition-all duration-2000 ${
        isDay ? 'top-8 right-16' : 'top-8 left-16'
      }`}>
        {isDay ? (
          <div className="w-16 h-16 bg-yellow-400 rounded-full shadow-lg animate-pulse flex items-center justify-center">
            <Sun className="h-8 w-8 text-yellow-600" />
          </div>
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center">
            <Moon className="h-6 w-6 text-gray-600" />
          </div>
        )}
      </div>

      {/* Photo-realistic House Structure */}
      <div className="relative mx-auto w-96 h-72">
        {/* House Foundation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-48 bg-gradient-to-b from-orange-100 to-orange-200 rounded-lg shadow-2xl border-2 border-orange-300">
          {/* Brick Texture Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-red-300 to-red-400" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(139, 69, 19, 0.3) 8px, rgba(139, 69, 19, 0.3) 9px),
                               repeating-linear-gradient(90deg, transparent, transparent 16px, rgba(139, 69, 19, 0.3) 16px, rgba(139, 69, 19, 0.3) 17px)`
            }}></div>
          </div>
          
          {/* Windows with realistic lighting */}
          <div className={`absolute top-6 left-6 w-12 h-12 rounded border-2 border-blue-400 transition-all duration-1000 ${
            isDay ? 'bg-blue-100' : 'bg-yellow-200 shadow-lg shadow-yellow-300'
          }`}>
            <div className="absolute inset-1 border border-blue-300 rounded"></div>
          </div>
          <div className={`absolute top-6 right-6 w-12 h-12 rounded border-2 border-blue-400 transition-all duration-1000 ${
            isDay ? 'bg-blue-100' : 'bg-yellow-200 shadow-lg shadow-yellow-300'
          }`}>
            <div className="absolute inset-1 border border-blue-300 rounded"></div>
          </div>
          
          {/* Front Door */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-20 bg-gradient-to-b from-amber-700 to-amber-800 border-2 border-amber-900 rounded-t-lg shadow-lg">
            <div className="absolute top-3 right-2 w-1 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          
          {/* Garage */}
          <div className="absolute bottom-6 right-8 w-20 h-16 bg-gray-300 border-2 border-gray-400 rounded">
            <div className="absolute inset-1 border border-gray-400 rounded bg-gradient-to-b from-gray-200 to-gray-300"></div>
          </div>
        </div>
        
        {/* Realistic Roof */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[160px] border-r-[160px] border-b-[80px] border-l-transparent border-r-transparent border-b-red-700 shadow-lg">
          {/* Roof Texture */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[150px] border-r-[150px] border-b-[72px] border-l-transparent border-r-transparent border-b-red-600"></div>
        </div>
        
        {/* Solar Panels on Roof */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-1">
          {[1, 2, 3, 4].map((panel) => (
            <div key={panel} className={`w-16 h-10 bg-gradient-to-br from-blue-900 to-black border border-gray-600 rounded shadow-lg flex items-center justify-center transition-all duration-1000 ${
              isDay ? 'shadow-blue-500/50' : 'opacity-80'
            }`}>
              <div className="grid grid-cols-2 gap-0.5 w-12 h-6">
                {[1, 2, 3, 4].map((cell) => (
                  <div key={cell} className={`bg-blue-800 border border-blue-700 transition-all duration-1000 ${
                    isDay ? 'bg-blue-600 shadow-inner' : 'bg-blue-900'
                  }`}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Solar Panel Label */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          Solar Array
        </div>
      </div>

      {/* Inverter (Left side) */}
      <div className="absolute top-40 left-12">
        <div className="bg-gray-800 p-4 rounded-lg shadow-xl border-2 border-gray-600 w-20 h-16 flex items-center justify-center">
          <Activity className="h-8 w-8 text-green-400" />
          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-500 ${
            isDay ? 'bg-green-400 animate-pulse' : 'bg-blue-400 animate-pulse'
          }`}></div>
        </div>
        <div className="mt-2 bg-gray-700 text-white px-2 py-1 rounded text-xs font-semibold text-center shadow-sm">
          Inverter
        </div>
      </div>

      {/* Battery System (Right side) */}
      <div className="absolute top-40 right-12">
        <div className="bg-green-800 p-4 rounded-lg shadow-xl border-2 border-green-600 w-20 h-20 flex items-center justify-center">
          <Battery className="h-10 w-10 text-white" />
          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-500 ${
            isDay ? 'bg-yellow-400 animate-pulse' : 'bg-green-400 animate-pulse'
          }`}></div>
        </div>
        <div className="mt-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold text-center shadow-sm">
          {isDay ? 'Charging' : 'Discharging'}
        </div>
      </div>

      {/* Grid Connection */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-orange-600 p-3 rounded-lg shadow-xl border-2 border-orange-500 flex items-center gap-2">
          <Zap className="h-6 w-6 text-white" />
          <span className="text-white font-semibold text-sm">Eskom Grid</span>
        </div>
      </div>

      {/* Home Load Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
          <Home className="h-4 w-4" />
          Home Load
        </div>
      </div>

      {/* Energy Flow Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400">
        {isDay ? (
          <>
            {/* Day: Solar to Inverter */}
            <path
              d="M 200 90 Q 150 130 100 160"
              stroke="#fbbf24"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
            {/* Day: Solar to Battery (charging) */}
            <path
              d="M 300 90 Q 350 130 400 160"
              stroke="#22c55e"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            {/* Day: Solar to Home */}
            <path
              d="M 250 110 Q 250 180 250 220"
              stroke="#8b5cf6"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </>
        ) : (
          <>
            {/* Night: Battery to Home */}
            <path
              d="M 380 180 Q 320 220 270 240"
              stroke="#3b82f6"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
            {/* Night: Grid to Home (backup) */}
            <path
              d="M 250 320 Q 250 280 250 240"
              stroke="#ea580c"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
              style={{ animationDelay: '0.8s' }}
            />
          </>
        )}
        
        {/* Energy Particles */}
        {isDay ? (
          <>
            <circle r="5" fill="#fbbf24" className="opacity-80">
              <animateMotion dur="2s" repeatCount="indefinite">
                <path d="M 200 90 Q 150 130 100 160" />
              </animateMotion>
            </circle>
            <circle r="5" fill="#22c55e" className="opacity-80">
              <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s">
                <path d="M 300 90 Q 350 130 400 160" />
              </animateMotion>
            </circle>
          </>
        ) : (
          <>
            <circle r="5" fill="#3b82f6" className="opacity-80">
              <animateMotion dur="2s" repeatCount="indefinite">
                <path d="M 380 180 Q 320 220 270 240" />
              </animateMotion>
            </circle>
            <circle r="5" fill="#ea580c" className="opacity-80">
              <animateMotion dur="2s" repeatCount="indefinite" begin="0.8s">
                <path d="M 250 320 Q 250 280 250 240" />
              </animateMotion>
            </circle>
          </>
        )}
      </svg>

      {/* Energy Flow Labels */}
      {isDay ? (
        <>
          <div className="absolute top-28 left-24 text-xs text-yellow-700 font-medium animate-pulse bg-yellow-50 px-2 py-1 rounded shadow-sm border border-yellow-200">
            Solar Generation
          </div>
          <div className="absolute top-28 right-24 text-xs text-green-700 font-medium animate-pulse bg-green-50 px-2 py-1 rounded shadow-sm border border-green-200" style={{ animationDelay: '0.5s' }}>
            Battery Charging
          </div>
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-xs text-purple-700 font-medium animate-pulse bg-purple-50 px-2 py-1 rounded shadow-sm border border-purple-200" style={{ animationDelay: '1s' }}>
            Direct Solar Use
          </div>
        </>
      ) : (
        <>
          <div className="absolute bottom-32 right-20 text-xs text-blue-700 font-medium animate-pulse bg-blue-50 px-2 py-1 rounded shadow-sm border border-blue-200">
            Battery Power
          </div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-orange-700 font-medium animate-pulse bg-orange-50 px-2 py-1 rounded shadow-sm border border-orange-200" style={{ animationDelay: '0.8s' }}>
            Grid Backup
          </div>
        </>
      )}

      {/* Power Status Indicator */}
      <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg border">
        <div className="flex items-center gap-2 text-sm">
          <div className={`w-3 h-3 rounded-full animate-pulse transition-colors duration-1000 ${
            isDay ? 'bg-yellow-500' : 'bg-blue-500'
          }`}></div>
          <span className="text-gray-700 font-medium">
            {isDay ? 'Solar Generation Mode' : 'Battery Backup Mode'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DayNightSolarDiagram;
