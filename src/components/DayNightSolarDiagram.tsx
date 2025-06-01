
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, Battery, Zap, Activity } from 'lucide-react';

const DayNightSolarDiagram = () => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDay(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-6xl mx-auto p-8 rounded-2xl transition-all duration-3000 overflow-hidden ${
      isDay 
        ? 'bg-gradient-to-br from-blue-400 via-sky-300 to-green-200' 
        : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-800'
    }`}>
      
      {/* Animated Clouds */}
      <div className="absolute top-4 left-0 w-full h-20 overflow-hidden">
        <div className={`absolute top-2 left-0 w-16 h-8 rounded-full transition-all duration-3000 ${
          isDay ? 'bg-white/60' : 'bg-gray-700/40'
        } animate-pulse`} style={{ animationDelay: '0s' }}></div>
        <div className={`absolute top-6 left-20 w-12 h-6 rounded-full transition-all duration-3000 ${
          isDay ? 'bg-white/40' : 'bg-gray-700/30'
        } animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1 right-16 w-20 h-10 rounded-full transition-all duration-3000 ${
          isDay ? 'bg-white/50' : 'bg-gray-700/35'
        } animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Stars for night time */}
      {!isDay && (
        <div className="absolute inset-0">
          <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-12 left-32 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-6 right-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-16 right-40 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-20 left-64 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      {/* Enhanced Sky and Time Indicator */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        {isDay ? (
          <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full shadow-xl border border-yellow-200">
            <Sun className="h-6 w-6 text-yellow-500 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-yellow-800 font-bold text-lg">Day Time</span>
          </div>
        ) : (
          <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full shadow-xl border border-indigo-200">
            <Moon className="h-6 w-6 text-indigo-600" />
            <span className="text-indigo-800 font-bold text-lg">Night Time</span>
          </div>
        )}
      </div>

      {/* Enhanced Sun/Moon Position with Glow Effect */}
      <div className={`absolute transition-all duration-3000 ${
        isDay ? 'top-12 right-20' : 'top-12 left-20'
      }`}>
        {isDay ? (
          <div className="relative">
            <div className="absolute inset-0 w-20 h-20 bg-yellow-300 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-full shadow-2xl flex items-center justify-center border-4 border-yellow-200">
              <Sun className="h-10 w-10 text-yellow-700 animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute inset-0 w-16 h-16 bg-blue-300 rounded-full blur-lg opacity-40"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-gray-100 via-gray-200 to-blue-100 rounded-full shadow-xl flex items-center justify-center border-2 border-gray-300">
              <Moon className="h-8 w-8 text-gray-600" />
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Photo-realistic House Structure */}
      <div className="relative mx-auto w-96 h-80">
        {/* House Foundation with Enhanced Textures */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-52 bg-gradient-to-b from-orange-50 via-orange-100 to-orange-200 rounded-lg shadow-2xl border-2 border-orange-300 overflow-hidden">
          
          {/* Enhanced Brick Texture */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-red-200 to-red-400" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(139, 69, 19, 0.4) 10px, rgba(139, 69, 19, 0.4) 11px),
                repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(139, 69, 19, 0.4) 20px, rgba(139, 69, 19, 0.4) 21px)
              `
            }}></div>
          </div>
          
          {/* Enhanced Windows with Better Lighting */}
          <div className={`absolute top-8 left-8 w-14 h-14 rounded-lg border-4 border-blue-500 transition-all duration-2000 shadow-lg ${
            isDay ? 'bg-gradient-to-br from-sky-100 to-blue-200' : 'bg-gradient-to-br from-yellow-200 to-orange-300 shadow-yellow-400/50'
          }`}>
            <div className="absolute inset-2 border-2 border-blue-400 rounded bg-white/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-blue-400"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-blue-400"></div>
          </div>
          
          <div className={`absolute top-8 right-8 w-14 h-14 rounded-lg border-4 border-blue-500 transition-all duration-2000 shadow-lg ${
            isDay ? 'bg-gradient-to-br from-sky-100 to-blue-200' : 'bg-gradient-to-br from-yellow-200 to-orange-300 shadow-yellow-400/50'
          }`}>
            <div className="absolute inset-2 border-2 border-blue-400 rounded bg-white/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-blue-400"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-blue-400"></div>
          </div>
          
          {/* Enhanced Front Door */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800 border-4 border-amber-900 rounded-t-xl shadow-xl">
            <div className="absolute top-4 right-3 w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
            <div className="absolute inset-2 border border-amber-600 rounded-t-lg bg-gradient-to-b from-amber-500/20 to-transparent"></div>
          </div>
          
          {/* Enhanced Garage */}
          <div className="absolute bottom-8 right-10 w-24 h-20 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 border-3 border-gray-500 rounded shadow-lg">
            <div className="absolute inset-2 border-2 border-gray-400 rounded bg-gradient-to-b from-gray-100 to-gray-200">
              <div className="absolute inset-x-2 top-2 h-1 bg-gray-500 rounded"></div>
              <div className="absolute inset-x-2 top-5 h-1 bg-gray-500 rounded"></div>
              <div className="absolute inset-x-2 top-8 h-1 bg-gray-500 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Realistic Roof with 3D Effect */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-[160px] border-r-[160px] border-b-[85px] border-l-transparent border-r-transparent border-b-red-700 shadow-2xl filter drop-shadow-lg">
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[150px] border-r-[150px] border-b-[75px] border-l-transparent border-r-transparent border-b-red-600"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[140px] border-r-[140px] border-b-[65px] border-l-transparent border-r-transparent border-b-red-500"></div>
          </div>
        </div>
        
        {/* Enhanced Solar Panels with Realistic Reflections */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[1, 2, 3, 4].map((panel) => (
            <div key={panel} className={`relative w-18 h-12 bg-gradient-to-br from-slate-800 via-blue-900 to-black border-2 border-gray-700 rounded-lg shadow-xl transition-all duration-2000 ${
              isDay ? 'shadow-blue-400/60 border-blue-600' : 'opacity-70'
            }`}>
              <div className="absolute inset-1 grid grid-cols-2 gap-1">
                {[1, 2, 3, 4].map((cell) => (
                  <div key={cell} className={`bg-gradient-to-br from-blue-800 to-slate-900 border border-blue-700 rounded-sm transition-all duration-2000 ${
                    isDay ? 'bg-gradient-to-br from-blue-600 to-blue-800 shadow-inner border-blue-500' : ''
                  }`}></div>
                ))}
              </div>
              {isDay && (
                <div className="absolute top-1 left-1 w-4 h-2 bg-white/30 rounded blur-sm"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Enhanced Solar Panel Label */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl border border-blue-500">
          ⚡ Solar Array
        </div>
      </div>

      {/* Enhanced Components with Better Styling */}
      
      {/* Inverter */}
      <div className="absolute top-44 left-16">
        <div className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-4 rounded-xl shadow-2xl border-3 border-gray-600 w-24 h-20 flex items-center justify-center">
          <Activity className="h-10 w-10 text-green-400" />
          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full transition-all duration-1000 border-2 border-white ${
            isDay ? 'bg-green-400 animate-pulse shadow-green-400/50' : 'bg-blue-400 animate-pulse shadow-blue-400/50'
          }`}></div>
          <div className="absolute inset-2 border border-gray-500 rounded-lg bg-gradient-to-br from-gray-600/20 to-transparent"></div>
        </div>
        <div className="mt-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-3 py-2 rounded-lg text-sm font-bold text-center shadow-lg border border-gray-600">
          🔄 Inverter
        </div>
      </div>

      {/* Battery System */}
      <div className="absolute top-44 right-16">
        <div className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 p-4 rounded-xl shadow-2xl border-3 border-green-600 w-24 h-24 flex items-center justify-center">
          <Battery className="h-12 w-12 text-white" />
          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full transition-all duration-1000 border-2 border-white ${
            isDay ? 'bg-yellow-400 animate-pulse shadow-yellow-400/50' : 'bg-green-400 animate-pulse shadow-green-400/50'
          }`}></div>
          <div className="absolute inset-2 border border-green-500 rounded-lg bg-gradient-to-br from-green-600/20 to-transparent"></div>
        </div>
        <div className={`mt-3 px-3 py-2 rounded-lg text-sm font-bold text-center shadow-lg border transition-all duration-1000 ${
          isDay 
            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-yellow-400' 
            : 'bg-gradient-to-r from-green-600 to-green-700 text-white border-green-500'
        }`}>
          🔋 {isDay ? 'Charging' : 'Discharging'}
        </div>
      </div>

      {/* Grid Connection */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-red-600 p-4 rounded-xl shadow-2xl border-3 border-orange-500 flex items-center gap-3">
          <Zap className="h-7 w-7 text-white animate-pulse" />
          <span className="text-white font-bold text-lg">⚡ Eskom Grid</span>
        </div>
      </div>

      {/* Home Load Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white px-5 py-3 rounded-full text-lg font-bold shadow-xl flex items-center gap-3 border-2 border-purple-500">
          <Home className="h-6 w-6" />
          🏠 Home Load
        </div>
      </div>

      {/* Enhanced Energy Flow Animation with Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400">
        {isDay ? (
          <>
            {/* Day Flow Paths with Enhanced Styling */}
            <path
              d="M 200 90 Q 150 130 100 160"
              stroke="url(#dayGradient1)"
              strokeWidth="6"
              fill="none"
              strokeDasharray="12,6"
              className="animate-pulse drop-shadow-lg"
            />
            <path
              d="M 300 90 Q 350 130 400 160"
              stroke="url(#dayGradient2)"
              strokeWidth="6"
              fill="none"
              strokeDasharray="12,6"
              className="animate-pulse drop-shadow-lg"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              d="M 250 110 Q 250 180 250 220"
              stroke="url(#dayGradient3)"
              strokeWidth="6"
              fill="none"
              strokeDasharray="12,6"
              className="animate-pulse drop-shadow-lg"
              style={{ animationDelay: '1s' }}
            />
          </>
        ) : (
          <>
            {/* Night Flow Paths */}
            <path
              d="M 380 180 Q 320 220 270 240"
              stroke="url(#nightGradient1)"
              strokeWidth="6"
              fill="none"
              strokeDasharray="12,6"
              className="animate-pulse drop-shadow-lg"
            />
            <path
              d="M 250 320 Q 250 280 250 240"
              stroke="url(#nightGradient2)"
              strokeWidth="6"
              fill="none"
              strokeDasharray="12,6"
              className="animate-pulse drop-shadow-lg"
              style={{ animationDelay: '0.8s' }}
            />
          </>
        )}
        
        {/* Enhanced Gradients for Energy Flow */}
        <defs>
          <linearGradient id="dayGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8"/>
          </linearGradient>
          <linearGradient id="dayGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="1"/>
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.8"/>
          </linearGradient>
          <linearGradient id="dayGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1"/>
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8"/>
          </linearGradient>
          <linearGradient id="nightGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1"/>
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8"/>
          </linearGradient>
          <linearGradient id="nightGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="1"/>
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        
        {/* Enhanced Energy Particles with Glow Effect */}
        {isDay ? (
          <>
            <circle r="8" fill="#fbbf24" className="opacity-90 drop-shadow-lg">
              <animateMotion dur="3s" repeatCount="indefinite">
                <path d="M 200 90 Q 150 130 100 160" />
              </animateMotion>
            </circle>
            <circle r="8" fill="#22c55e" className="opacity-90 drop-shadow-lg">
              <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
                <path d="M 300 90 Q 350 130 400 160" />
              </animateMotion>
            </circle>
            <circle r="8" fill="#8b5cf6" className="opacity-90 drop-shadow-lg">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                <path d="M 250 110 Q 250 180 250 220" />
              </animateMotion>
            </circle>
          </>
        ) : (
          <>
            <circle r="8" fill="#3b82f6" className="opacity-90 drop-shadow-lg">
              <animateMotion dur="3s" repeatCount="indefinite">
                <path d="M 380 180 Q 320 220 270 240" />
              </animateMotion>
            </circle>
            <circle r="8" fill="#ea580c" className="opacity-90 drop-shadow-lg">
              <animateMotion dur="3s" repeatCount="indefinite" begin="0.8s">
                <path d="M 250 320 Q 250 280 250 240" />
              </animateMotion>
            </circle>
          </>
        )}
      </svg>

      {/* Enhanced Energy Flow Labels with Better Styling */}
      {isDay ? (
        <>
          <div className="absolute top-32 left-28 text-sm text-yellow-800 font-bold animate-pulse bg-gradient-to-r from-yellow-100 to-yellow-200 px-3 py-2 rounded-full shadow-lg border-2 border-yellow-300">
            ☀️ Solar Generation
          </div>
          <div className="absolute top-32 right-28 text-sm text-green-800 font-bold animate-pulse bg-gradient-to-r from-green-100 to-green-200 px-3 py-2 rounded-full shadow-lg border-2 border-green-300" style={{ animationDelay: '0.5s' }}>
            🔋 Battery Charging
          </div>
          <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2 text-sm text-purple-800 font-bold animate-pulse bg-gradient-to-r from-purple-100 to-purple-200 px-3 py-2 rounded-full shadow-lg border-2 border-purple-300" style={{ animationDelay: '1s' }}>
            ⚡ Direct Solar Use
          </div>
        </>
      ) : (
        <>
          <div className="absolute bottom-36 right-24 text-sm text-blue-800 font-bold animate-pulse bg-gradient-to-r from-blue-100 to-blue-200 px-3 py-2 rounded-full shadow-lg border-2 border-blue-300">
            🔋 Battery Power
          </div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-sm text-orange-800 font-bold animate-pulse bg-gradient-to-r from-orange-100 to-orange-200 px-3 py-2 rounded-full shadow-lg border-2 border-orange-300" style={{ animationDelay: '0.8s' }}>
            ⚡ Grid Backup
          </div>
        </>
      )}

      {/* Enhanced Power Status Indicator */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-2xl border-2 border-gray-200">
        <div className="flex items-center gap-3 text-lg">
          <div className={`w-4 h-4 rounded-full animate-pulse transition-colors duration-2000 shadow-lg ${
            isDay ? 'bg-yellow-500 shadow-yellow-500/50' : 'bg-blue-500 shadow-blue-500/50'
          }`}></div>
          <span className="text-gray-800 font-bold">
            {isDay ? '☀️ Solar Generation Mode' : '🌙 Battery Backup Mode'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DayNightSolarDiagram;
