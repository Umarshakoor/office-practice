import React from "react";
import ReactDOM from "react-dom/client";
import * as mdb from "mdb-ui-kit"; // lib
window.mdb = mdb;
import "mdb-ui-kit/css/mdb.min.css";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
