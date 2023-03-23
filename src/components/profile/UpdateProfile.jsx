import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useUpdateProfile } from "../../contexts/UpdateProfileContext";
import { useUserData } from "../../contexts/AuthContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import server from "../../apis/server";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateProfile = () => {
  const { open, handleClose } = useUpdateProfile();
  const { currentUser } = useUserData();

  const [file, setFile] = useState();
  const [formData, setFormData] = useState({
    name: currentUser.name,
    about: currentUser.about,
    city: currentUser.city,
  });

  const queryClient = useQueryClient();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModal = () => {
    handleClose();
    setFile("");
  };

  const mutation = useMutation({
    mutationFn: (userInfo) => {
      return server.put("/users", userInfo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      // Invalidate and refetch
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const updateProfile = (e) => {
    e.preventDefault();
    mutation.mutate({ profilePic: file, ...formData });
  };

  return (
    <Dialog open={open} onClose={closeModal} fullScreen={fullScreen}>
      <DialogTitle>Update Profile</DialogTitle>
      <DialogContent>
        <form>
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="about"
            id="about"
            value={formData.about}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={updateProfile}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateProfile;
