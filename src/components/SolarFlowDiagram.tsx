
import React from 'react';

const SolarFlowDiagram = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definitions for gradients and animations */}
        <defs>
          {/* Solar panel gradient */}
          <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          
          {/* House gradient */}
          <linearGradient id="houseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          
          {/* Battery gradient */}
          <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          
          {/* Energy flow animation */}
          <circle id="energyDot" r="4" fill="#fbbf24">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
        </defs>
        
        {/* Sky background with day/night cycle */}
        <rect width="800" height="200" fill="#3b82f6" opacity="0.1">
          <animate attributeName="fill" values="#3b82f6;#1e1b4b;#3b82f6" dur="8s" repeatCount="indefinite" />
        </rect>
        
        {/* Sun */}
        <circle cx="150" cy="80" r="30" fill="#fbbf24">
          <animate attributeName="cy" values="80;120;80" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="8s" repeatCount="indefinite" />
        </circle>
        
        {/* Sun rays */}
        <g stroke="#fbbf24" strokeWidth="3" opacity="0.7">
          <line x1="120" y1="50" x2="110" y2="40">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="8s" repeatCount="indefinite" />
          </line>
          <line x1="180" y1="50" x2="190" y2="40">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="8s" repeatCount="indefinite" />
          </line>
          <line x1="120" y1="110" x2="110" y2="120">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="8s" repeatCount="indefinite" />
          </line>
          <line x1="180" y1="110" x2="190" y2="120">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="8s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Solar Panels */}
        <rect x="50" y="150" width="200" height="80" fill="url(#solarGradient)" rx="5" />
        <g stroke="#1e40af" strokeWidth="1" opacity="0.5">
          <line x1="50" y1="170" x2="250" y2="170" />
          <line x1="50" y1="190" x2="250" y2="190" />
          <line x1="50" y1="210" x2="250" y2="210" />
          <line x1="100" y1="150" x2="100" y2="230" />
          <line x1="150" y1="150" x2="150" y2="230" />
          <line x1="200" y1="150" x2="200" y2="230" />
        </g>
        
        {/* House */}
        <rect x="350" y="200" width="150" height="100" fill="url(#houseGradient)" rx="5" />
        {/* Roof */}
        <polygon points="340,200 425,150 510,200" fill="#64748b" />
        {/* Door */}
        <rect x="380" y="250" width="30" height="50" fill="#374151" />
        {/* Windows */}
        <rect x="420" y="220" width="25" height="25" fill="#fbbf24" opacity="0.8">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="8s" repeatCount="indefinite" />
        </rect>
        <rect x="450" y="220" width="25" height="25" fill="#fbbf24" opacity="0.8">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="8s" repeatCount="indefinite" />
        </rect>
        
        {/* Battery */}
        <rect x="550" y="220" width="80" height="60" fill="url(#batteryGradient)" rx="5" />
        <rect x="630" y="235" width="8" height="30" fill="#10b981" rx="2" />
        {/* Battery charge indicator */}
        <rect x="560" y="235" width="50" height="20" fill="#34d399" opacity="0.8">
          <animate attributeName="width" values="10;50;10" dur="6s" repeatCount="indefinite" />
        </rect>
        
        {/* Grid Connection */}
        <rect x="650" y="150" width="100" height="80" fill="#6b7280" rx="5" />
        <g stroke="#374151" strokeWidth="2">
          <line x1="670" y1="170" x2="730" y2="170" />
          <line x1="670" y1="190" x2="730" y2="190" />
          <line x1="670" y1="210" x2="730" y2="210" />
        </g>
        
        {/* Energy Flow Lines */}
        <g stroke="#10b981" strokeWidth="3" fill="none" opacity="0.8">
          {/* Solar to House */}
          <path d="M 250 190 Q 300 190 350 220">
            <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="3s" repeatCount="indefinite" />
          </path>
          
          {/* Solar to Battery */}
          <path d="M 200 230 Q 400 280 550 250">
            <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </path>
          
          {/* House to Grid */}
          <path d="M 500 210 Q 575 180 650 190">
            <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="3s" repeatCount="indefinite" begin="1s" />
          </path>
          
          {/* Battery to House (night mode) */}
          <path d="M 550 240 Q 450 260 400 240" opacity="0.5">
            <animate attributeName="opacity" values="0.1;0.8;0.1" dur="8s" repeatCount="indefinite" begin="4s" />
            <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="3s" repeatCount="indefinite" begin="1.5s" />
          </path>
        </g>
        
        {/* Energy dots moving along paths */}
        <circle r="4" fill="#fbbf24">
          <animateMotion dur="3s" repeatCount="indefinite">
            <path d="M 250 190 Q 300 190 350 220" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle r="4" fill="#10b981">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
            <path d="M 200 230 Q 400 280 550 250" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        
        <circle r="4" fill="#3b82f6">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
            <path d="M 500 210 Q 575 180 650 190" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>
        
        {/* Labels */}
        <text x="150" y="250" textAnchor="middle" className="fill-white text-sm font-semibold">
          Solar Panels
        </text>
        <text x="425" y="320" textAnchor="middle" className="fill-white text-sm font-semibold">
          Home
        </text>
        <text x="590" y="300" textAnchor="middle" className="fill-white text-sm font-semibold">
          Battery
        </text>
        <text x="700" y="250" textAnchor="middle" className="fill-white text-sm font-semibold">
          Grid
        </text>
        
        {/* Day/Night indicator */}
        <text x="400" y="50" textAnchor="middle" className="fill-white text-lg font-bold">
          <animate attributeName="opacity" values="1;0;1" dur="8s" repeatCount="indefinite" />
          Day Mode
        </text>
        <text x="400" y="50" textAnchor="middle" className="fill-blue-300 text-lg font-bold" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="8s" repeatCount="indefinite" begin="4s" />
          Night Mode
        </text>
      </svg>
    </div>
  );
};

export default SolarFlowDiagram;
