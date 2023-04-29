import React, { useContext, useState, useMemo } from "react";

const alertContext = React.createContext();

export const useAlertContext = () => {
  return useContext(alertContext);
};

const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const contextValues = useMemo(
    () => ({
      alert,
      setAlert,
    }),
    [alert]
  );

  return (
    <alertContext.Provider value={contextValues}>
      {children}
    </alertContext.Provider>
  );
};

export default AlertContextProvider;
