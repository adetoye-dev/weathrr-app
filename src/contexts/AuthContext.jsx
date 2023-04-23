import React, { useContext, useState, useMemo, useEffect } from "react";
import server from "../apis/server";
import { useNavigate } from "react-router-dom";

const serverBaseUrl = import.meta.env.VITE_SERVER_API_URL;

const authContext = React.createContext();

export const useAuthContext = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const googleSignIn = async () => {
    window.open(serverBaseUrl + "/auth/google", "_self");
  };

  const validateAuth = async () => {
    try {
      const { data } = await server.post("/auth/validate", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      setCurrentUser(data.user);
      console.log(data);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  const login = async (input) => {
    const { data } = await server.post("/auth/login", input);

    server.defaults.headers.common["Authorization"] = `Bearer ${data["token"]}`;
    setCurrentUser(data.user);
  };

  const contextValues = useMemo(
    () => ({
      currentUser,
      login,
      googleSignIn,
      validateAuth,
    }),
    [currentUser]
  );

  return (
    <authContext.Provider value={contextValues}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
