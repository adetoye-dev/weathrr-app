import "./App.css";
import { lazy, Suspense } from "react";
import PageLayout from "./pages/layouts/PageLayout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useUserData } from "./contexts/AuthContext";
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
        <Route
          index
          element={
            <Suspense fallback={<Loader loaderText="Loading..." />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="posts/:id"
          element={
            <Suspense fallback={<Loader loaderText="Loading..." />}>
              <SinglePostPage />
            </Suspense>
          }
        />
        <Route
          path="weather"
          element={
            <Suspense fallback={<Loader loaderText="Loading..." />}>
              <WeatherPage />
            </Suspense>
          }
        />
        <Route
          path="logout"
          element={
            <Suspense fallback={<Loader loaderText="Loading..." />}>
              <Logout />
            </Suspense>
          }
        />
        <Route
          path="profile/:id"
          element={
            <Suspense fallback={<Loader loaderText="Loading..." />}>
              <ProfilePage />
            </Suspense>
          }
        />
        <Route
          path="bookmarks"
          element={
            <Suspense fallback={<Loader loaderText="Loading..." />}>
              <BookmarkPage />
            </Suspense>
          }
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default App;
