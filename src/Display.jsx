import React from "react";

const Display = ({ value }) => {
  // Function to format large numbers with commas
  const formatNumber = (num) => {
    if (num === '' || num === 'Error') return num;
    
    // For expressions with operators, don't format yet
    if (/[+\-×÷%]/.test(num)) return num;
    
    // Try to parse and format the number
    try {
      const parsed = parseFloat(num);
      if (isNaN(parsed)) return num;
      
      // Don't add commas for decimal parts
      if (num.includes('.')) {
        const parts = num.split('.');
        return parseFloat(parts[0]).toLocaleString() + '.' + parts[1];
      }
      
      return parsed.toLocaleString();
    } catch (e) {
      return num;
    }
  };

  return (
    <div className="display">
      <div className="display-value">
        {formatNumber(value) || '0'}
      </div>
    </div>
  );
};

export default Display;