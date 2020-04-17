import React, { useEffect, useState } from "react";

import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Form from "./components/landing/Form.js";
import List from "./components/messages/List.js";
import Background from "./components/Background.js";
import Canvas from "./components/canvas/Canvas.js";

function App() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <div className="App">
      <Canvas />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Form count={1} />} />
          <Route exact path="/list" component={List} />
        </Switch>
      </Router>
      <Background />
    </div>
  );
}

export default App;
