
import React from 'react';

const OpenGraphImage = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-yellow-500 rounded-full blur-xl opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-16">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/9646ac87-2641-4661-82ae-a9af61a5184b.png" 
            alt="C A Electrical Services Logo" 
            className="w-24 h-24 mx-auto"
          />
        </div>

        {/* Company Name */}
        <h1 className="text-6xl font-bold text-white mb-4">
          C A Electrical Services
        </h1>

        {/* Tagline */}
        <h2 className="text-3xl font-light text-blue-300 mb-6">
          Premium Solar Solutions for Cape Town
        </h2>

        {/* Key Benefits */}
        <div className="flex justify-center space-x-8 text-lg text-gray-300">
          <span className="flex items-center">
            <span className="text-yellow-400 mr-2">⚡</span>
            Beat Load Shedding
          </span>
          <span className="flex items-center">
            <span className="text-green-400 mr-2">🔋</span>
            Battery Backup
          </span>
          <span className="flex items-center">
            <span className="text-blue-400 mr-2">☀️</span>
            Solar Installation
          </span>
        </div>
      </div>

      {/* Corner Elements */}
      <div className="absolute top-4 right-4 text-blue-400 text-sm">
        solar-rails.co.za
      </div>
    </div>
  );
};

export default OpenGraphImage;
