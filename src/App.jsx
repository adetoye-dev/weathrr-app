import "./App.css";
import PageLayout from "./pages/layouts/PageLayout";
import WeatherPage from "./pages/WeatherPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import BookmarkPage from "./pages/BookmarkPage";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUserData } from "./contexts/AuthContext";
import SinglePostPage from "./pages/SinglePostPage";

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
        <Route path="posts/:id" element={<SinglePostPage />} />
        <Route path="weather" element={<WeatherPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route path="bookmarks" element={<BookmarkPage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default App;
