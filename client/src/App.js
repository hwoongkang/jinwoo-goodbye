import React, { useEffect } from "react";
import "./App.css";

import Form from "./components/Form.js";
import Background from "./components/Background.js";
import Story from "./components/Story";
import Instructions from "./components/Instruction";
import Location from "./components/Location.js";

import { Provider } from "react-redux";
import store from "./redux/store.js";
import { loadMessages } from "./redux/actions.js";

function App() {
  useEffect(() => {
    console.log("app did mount");
    store.dispatch(loadMessages());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Form count={1} />
        <Background />
        <Story />
        <Instructions />
        <Location />
      </div>
    </Provider>
  );
}

export default App;
