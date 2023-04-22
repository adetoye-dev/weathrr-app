import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useUpdateProfile } from "../../contexts/UpdateProfileContext";
import { useAuthContext } from "../../contexts/AuthContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import server from "../../apis/server";
import Loader from "../loader/Loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  const { open, handleClose } = useUpdateProfile();
  const { currentUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [ariaControl, setAriaControl] = useState(false);

  const handleAriaChange = () => {
    setAriaControl(true);
  };

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
    setLoading(false);
  };

  const convertImageToBase64 = (e) => {
    const img = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result.toString());
    };

    reader.readAsDataURL(img);
  };

  const uploadImage = async (img) => {
    const data = await server
      .post("/uploads/profile-img", { img: img })
      .then((res) => res.data);
    return data;
  };

  const mutation = useMutation({
    mutationFn: (userInfo) => {
      return server.put("/users", userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      // Invalidate and refetch
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    let imgData = { url: currentUser.profilePic, id: currentUser.picId };
    if (file) {
      imgData = await uploadImage(file);
    }
    mutation.mutate({ img: imgData, ...formData });
  };

  return (
    <Dialog open={open} onClose={closeModal} fullScreen={fullScreen}>
      <DialogTitle>Update Profile</DialogTitle>
      <DialogContent>
        {loading ? (
          <Loader loaderText="Updating profile..." />
        ) : (
          <>
            <div className="edit-profile-pic">
              <div className="user-image">
                <img src={currentUser.profilePic} alt="profile-pic" />
              </div>
              <span className="edit-img-icon" onClick={handleAriaChange}>
                <i className="fa-solid fa-pen"></i>
              </span>
            </div>
            <form className="update-profile-form">
              <input
                className="update-form-inputs profile-pic-input"
                aria-visible={ariaControl}
                type="file"
                name="profilePic"
                id="profilePic"
                onChange={(e) => convertImageToBase64(e)}
              />
              <label htmlFor="name" className="update-form-label">
                Name:
              </label>
              <input
                className="update-form-inputs"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="about" className="update-form-label">
                About Me:
              </label>
              <textarea
                className="update-form-inputs"
                type="text"
                name="about"
                id="about"
                value={formData.about}
                onChange={handleChange}
              />
              <label htmlFor="city" className="update-form-label">
                Location:
              </label>
              <input
                className="update-form-inputs"
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
              />
            </form>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={updateProfile}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateProfile;
