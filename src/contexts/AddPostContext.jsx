import React, { useContext, useState, useMemo } from "react";

const postModal = React.createContext();

export const useAddPost = () => {
  return useContext(postModal);
};

const AddPostContextProvider = ({ children }) => {
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
    <postModal.Provider value={contextValues}>{children}</postModal.Provider>
  );
};

export default AddPostContextProvider;
