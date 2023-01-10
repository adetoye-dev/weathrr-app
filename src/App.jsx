import "./App.css";
import Layout from "./Layout";
import WeatherPage from "./weather/WeatherPage";
import HomePage from "./home/HomePage";
import ChatPage from "./chat/ChatPage";
import ProfilePage from "./profile/ProfilePage";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Layout />
          </Protected>
        }
      >
        <Route index element={<Navigate to="/weather" />} />
        <Route path="weather" element={<WeatherPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default App;
