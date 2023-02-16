import "./App.css";
import PageLayout from "./components/layouts/PageLayout";
import WeatherPage from "./components/weather/WeatherPage";
import HomePage from "./components/home/HomePage";
import ChatPage from "./components/chat/ChatPage";
import ProfilePage from "./components/profile/ProfilePage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useUserData } from "./contexts/AuthContext";
import SinglePostCard from "./components/posts/SinglePostCard";

const Protected = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

const App = () => {
  const { currentUser } = useUserData();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected currentUser={currentUser}>
            <PageLayout />
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
