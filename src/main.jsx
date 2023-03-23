import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext";
import WeatherContextProvider from "./contexts/WeatherContext";
import AddPostContextProvider from "./contexts/AddPostContext";
import UpdateProfileContextProvider from "./contexts/UpdateProfileContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <WeatherContextProvider>
        <UpdateProfileContextProvider>
          <AddPostContextProvider>
            <App />
          </AddPostContextProvider>
        </UpdateProfileContextProvider>
      </WeatherContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
