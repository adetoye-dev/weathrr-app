import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import WeatherContext from "./contexts/WeatherContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WeatherContext>
      <App />
    </WeatherContext>
  </BrowserRouter>
);
