import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const incTemp = () => {
    const newTemp = tempValue + 1;
    setTempValue(newTemp);
    if (newTemp >= 15) {
      setTempColor("hot");
    }
  };
  const decTemp = () => {
    const newTemp = tempValue - 1;
    setTempValue(newTemp);
    if (newTemp > 15) {
      setTempColor("cold");
    }
  };
  return (
    <div>
      <h1>Temperature Control App</h1>
      <div className={`App ${tempColor}`}>
        <h1 className="temperature">{tempValue}° C</h1>
        <button className="minus" onClick={decTemp}>
          -
        </button>
        <button className="plus" onClick={incTemp}>
          +
        </button>
      </div>
    </div>
  );
}
