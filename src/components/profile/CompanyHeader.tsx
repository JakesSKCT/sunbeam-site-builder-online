
import React from 'react';

const CompanyHeader = () => {
  return (
    <div className="text-center mb-8 print:mb-6">
      <img 
        src="/lovable-uploads/d57bf45b-aa76-41d5-8edf-37e9ed13ae0c.png" 
        alt="C A Electrical Services" 
        className="h-24 w-auto mx-auto mb-4 print:h-16"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-2 print:text-3xl">
        C A Electrical Services
      </h1>
      <p className="text-xl text-gray-600 print:text-lg">
        Cape Town Solar & Electrical Specialists
      </p>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
    </div>
  );
};

export default CompanyHeader;
