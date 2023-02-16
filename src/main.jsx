import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import WeatherContext from "./contexts/WeatherContext";
import AuthContextProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <WeatherContext>
        <App />
      </WeatherContext>
    </AuthContextProvider>
  </BrowserRouter>
);
