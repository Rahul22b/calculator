import React, { useState } from "react";
import Display from "./Display.jsx";
import Heading from "./component/Heading.jsx";
import Keypad from "./Keypad.jsx";
import "./App.css";
export default function App() {

  const [val,setval]=useState('')

  return (
    <div className="calculator">
      <Heading></Heading>
      
      <Display value={val}></Display>
      
      <div className="keypad">
        <Keypad setval={setval} val={val}></Keypad>
      </div>

      <div className="footer">Made by ❤️ for Sana</div>
    </div>
  );
}
