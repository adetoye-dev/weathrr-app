import "./App.css";
import Layout from "./components/Layout";
import WeatherPage from "./components/weather/WeatherPage";
import HomePage from "./components/home/HomePage";
import ChatPage from "./components/chat/ChatPage";
import ProfilePage from "./components/profile/ProfilePage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import SinglePostCard from "./components/posts/SinglePostCard";

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
        <Route index element={<HomePage />} />
        <Route path="posts/:id" element={<SinglePostCard />} />
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
