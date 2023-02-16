import React, { useContext, useState, useMemo, useEffect } from "react";

const authContext = React.createContext();

export const useUserData = () => {
  return useContext(authContext);
};

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const Login = (user) => {
    setCurrentUser(user);
  };

  const contextValues = useMemo(() => ({ currentUser, Login }), [currentUser]);

  return (
    <authContext.Provider value={contextValues}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
