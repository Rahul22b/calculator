import React from "react";

const Keypad = ({ setval, val, onCalculate }) => {
  const handleButtonClick = (buttonValue) => {
    switch (buttonValue) {
      case 'C':
        setval('');
        break;
      case '=':
        try {
          // Replace × with * and ÷ with / for JavaScript eval
          const expression = val.replace(/×/g, '*').replace(/÷/g, '/');
          const result = eval(expression);
          
          // Handle calculation history
          if (onCalculate) {
            onCalculate(result);
          }
          
          setval(result.toString());
        } catch (error) {
          setval('Error');
          setTimeout(() => {
            setval(val);
          }, 1000);
        }
        break;
      case 'CE':
        setval(val.slice(0, -1));
        break;
      default:
        setval(val + buttonValue);
        break;
    }
  };

  const renderButton = (value, className = '') => {
    return (
      <button 
        key={value} 
        className={className} 
        onClick={() => handleButtonClick(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="keypad-grid">
      {renderButton('C', 'clear')}
      {renderButton('CE', 'clear')}
      {renderButton('%', 'operator')}
      {renderButton('÷', 'operator')}
      
      {renderButton('7')}
      {renderButton('8')}
      {renderButton('9')}
      {renderButton('×', 'operator')}
      
      {renderButton('4')}
      {renderButton('5')}
      {renderButton('6')}
      {renderButton('-', 'operator')}
      
      {renderButton('1')}
      {renderButton('2')}
      {renderButton('3')}
      {renderButton('+', 'operator')}
      
      {renderButton('00')}
      {renderButton('0')}
      {renderButton('.')}
      {renderButton('=', 'equal')}
    </div>
  );
};

export default Keypad;