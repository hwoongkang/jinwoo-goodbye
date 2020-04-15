import React from "react";

import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Form from "./components/landing/Form.js";
import List from "./components/messages/List.js";

function App() {
  return (
    <div className="App">
      <img src="/images/cold-jinwoo.jpg" className="bg" />
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/list" component={List} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
