import React, { useContext, useState, useMemo } from "react";

const updateModal = React.createContext();

export const useUpdateProfile = () => {
  return useContext(updateModal);
};

const UpdateProfileContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const contextValues = useMemo(
    () => ({ open, handleClickOpen, handleClose }),
    [open]
  );

  return (
    <updateModal.Provider value={contextValues}>
      {children}
    </updateModal.Provider>
  );
};

export default UpdateProfileContextProvider;
