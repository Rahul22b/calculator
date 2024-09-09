import React, { useState } from "react";
import Display from "./Display.jsx";
import Button from "./component/Button.jsx";
import Heading from "./component/Heading.jsx";
import Keypad from "./Keypad.jsx";
import "./App.css";
export default function App() {

  const [val,setval]=useState('')

  return (
    <div className="calculator">
      <Heading></Heading>
      {/* <input type="text" className="display" value={val}/> */}
      <Display value={val}></Display>
      
      <div className="keypad">
        <Keypad setval={setval} val={val}></Keypad>
      </div>
    </div>
  );
}
