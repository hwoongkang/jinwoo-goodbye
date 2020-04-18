import React, { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form.js";
import Background from "./components/Background.js";
import Story from "./components/Story";
import Instructions from "./components/Instruction";
function App() {
  return (
    <div className="App">
      <Form count={1} />
      <Background />
      <Story />
      <Instructions />
    </div>
  );
}

export default App;
