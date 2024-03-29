import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AlertContextProvider from "./contexts/AlertContext";
import AuthContextProvider from "./contexts/AuthContext";
import WeatherContextProvider from "./contexts/WeatherContext";
import AddPostContextProvider from "./contexts/AddPostContext";
import UpdateProfileContextProvider from "./contexts/UpdateProfileContext";
import "./interceptors/serverInterceptor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AlertContextProvider>
      <AuthContextProvider>
        <WeatherContextProvider>
          <UpdateProfileContextProvider>
            <AddPostContextProvider>
              <App />
            </AddPostContextProvider>
          </UpdateProfileContextProvider>
        </WeatherContextProvider>
      </AuthContextProvider>
    </AlertContextProvider>
  </BrowserRouter>
);
