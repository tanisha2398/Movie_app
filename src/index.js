import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import reducer from "./store/reducers/reducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
let jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
