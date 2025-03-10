import React, { useState } from "react";
import Display from "./Display.jsx";
import Heading from "./component/Heading.jsx";
import Keypad from "./Keypad.jsx";
import "./App.css";

export default function App() {
  const [val, setval] = useState('');
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`calculator ${theme}`}>
      <div className="calculator-container">
        <div className="calculator-header">
          <Heading />
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        
        <Display value={val} />
        
        <div className="keypad-container">
          <Keypad setval={setval} val={val} />
        </div>
        
        <div className="footer">
          <span className="heart-animation">Made with ❤️ for Sana</span>
        </div>
      </div>
    </div>
  );
}