import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const middleware = [thunk];

const store = createStore(
  combineReducers({ reducer }),
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
