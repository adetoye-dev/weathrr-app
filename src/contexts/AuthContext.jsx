import React, { useContext, useState, useMemo, useEffect } from "react";
import axios from "axios";

const authContext = React.createContext();

export const useUserData = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = async (input) => {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      input,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(response.data);
  };

  const contextValues = useMemo(() => ({ currentUser, login }), [currentUser]);

  return (
    <authContext.Provider value={contextValues}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
