import React, { useState, useEffect } from "react";
import Display from "./Display.jsx";
import Heading from "./component/Heading.jsx";
import Keypad from "./Keypad.jsx";
import "./App.css";

export default function App() {
  const [val, setval] = useState('');
  const [theme, setTheme] = useState('light');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
    
    // Apply entrance animation
    setAnimation('fade-in');
    const timer = setTimeout(() => setAnimation(''), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleCalculation = (result) => {
    if (val && result) {
      const calculation = {
        expression: val,
        result: result,
        timestamp: new Date().toLocaleTimeString()
      };
      setHistory([calculation, ...history].slice(0, 10)); // Keep last 10 calculations
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const useHistoryItem = (item) => {
    setval(item.result.toString());
    setShowHistory(false);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className={`calculator ${theme} ${animation}`}>
      <div className="calculator-container">
        <div className="calculator-header">
          <Heading />
          <div className="header-controls">
            <button 
              className="history-toggle" 
              onClick={toggleHistory}
              aria-label="Toggle calculation history"
            >
              {showHistory ? '📋' : '📋'}
              <span className="tooltip">History</span>
            </button>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
              <span className="tooltip">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
            </button>
          </div>
        </div>
        
        {showHistory && (
          <div className="history-panel">
            <div className="history-header">
              <h3>Calculation History</h3>
              {history.length > 0 && (
                <button className="clear-history" onClick={clearHistory}>
                  Clear
                </button>
              )}
            </div>
            {history.length === 0 ? (
              <p className="no-history">No calculations yet</p>
            ) : (
              <ul className="history-list">
                {history.map((item, index) => (
                  <li key={index} onClick={() => useHistoryItem(item)} className="history-item">
                    <div className="history-expression">{item.expression}</div>
                    <div className="history-result">{item.result}</div>
                    <div className="history-timestamp">{item.timestamp}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        
        <Display value={val} />
        
        <div className="keypad-container">
          <Keypad 
            setval={setval} 
            val={val} 
            onCalculate={handleCalculation}
          />
        </div>
        
        <div className="footer">
          <span className="heart-animation">Made with ❤️</span>
        </div>
      </div>
    </div>
  );
}
