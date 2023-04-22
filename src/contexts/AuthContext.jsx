import React, { useContext, useState, useMemo, useEffect } from "react";
import server from "../apis/server";

const serverBaseUrl = import.meta.env.VITE_SERVER_API_URL;

const authContext = React.createContext();

export const useUserData = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const googleSignIn = async () => {
    window.open(serverBaseUrl + "/auth/google", "_self");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = async (input) => {
    const response = await server.post("/auth/login", input);

    setCurrentUser(response.data);
  };

  const contextValues = useMemo(
    () => ({ currentUser, login, googleSignIn }),
    [currentUser]
  );

  return (
    <authContext.Provider value={contextValues}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
