import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Style from "./style/Style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Style />
    <App />
  </React.StrictMode>
);
