import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import PageLayout from "./pages/layouts/PageLayout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./contexts/AuthContext";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const WeatherPage = lazy(() => import("./pages/WeatherPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const BookmarkPage = lazy(() => import("./pages/BookmarkPage"));
const Logout = lazy(() => import("./pages/auth/Logout"));
const SinglePostPage = lazy(() => import("./pages/SinglePostPage"));

const Protected = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

const App = () => {
  const { currentUser, validateAuth } = useAuthContext();

  useEffect(() => {
    validateAuth();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected currentUser={currentUser}>
            <Suspense fallback={<Loader loaderText="Loading..." />}>
              <PageLayout />
            </Suspense>
          </Protected>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="posts/:id" element={<SinglePostPage />} />
        <Route path="weather" element={<WeatherPage />} />
        <Route path="logout" element={<Logout />} />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route path="bookmarks" element={<BookmarkPage />} />
      </Route>
      <Route
        path="login"
        element={currentUser ? <Navigate to="/" /> : <Login />}
      />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default App;
