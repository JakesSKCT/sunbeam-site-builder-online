
import React from 'react';

const PrintInstructions = () => {
  return (
    <div className="print:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <p className="text-sm mb-2">
        <strong>To save as PDF:</strong>
      </p>
      <ol className="text-xs space-y-1">
        <li>1. Press Ctrl+P (or Cmd+P on Mac)</li>
        <li>2. Select "Save as PDF" as destination</li>
        <li>3. Choose "More settings" and select "A4" paper size</li>
        <li>4. Click "Save"</li>
      </ol>
    </div>
  );
};

export default PrintInstructions;
