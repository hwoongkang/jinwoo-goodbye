import React, { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form.js";
import Background from "./components/Background.js";
import Messages from "./components/Messages";

function App() {
  return (
    <div className="App">
      <Form count={1} />
      <Background />
      <Messages />
    </div>
  );
}

export default App;
