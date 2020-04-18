import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/CandyCrush.js";
    script.type = "paperscript";
    script.async = true;
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  });
  return (
    <div className="App">
      <canvas id="myCanvas"></canvas>
    </div>
  );
}

export default App;
