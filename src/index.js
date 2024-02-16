import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App";
import { searchRobots } from "./reducers";

const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

reportWebVitals();
