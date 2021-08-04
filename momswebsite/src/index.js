import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const history = createBrowserHistory(); // Initialize the browser history stack to start tracking urls

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the entire application in a router, such that all navigation and dictated and tracked by our newly created browser history stack */}
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
