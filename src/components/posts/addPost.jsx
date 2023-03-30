import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddPost } from "../../contexts/AddPostContext";
import { useUserData } from "../../contexts/AuthContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import WeatherSelect from "../formControl/WeatherSelect";
import CountrySelect from "../formControl/CountrySelect";
import server from "../../apis/server";
import Loader from "../loader/Loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import "./addPost.css";

const AddPost = () => {
  const { open, handleClose } = useAddPost();
  const { currentUser } = useUserData();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    desc: "",
    weather: "",
    city: "",
    country: "",
  });

  const queryClient = useQueryClient();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
      .post("/uploads/post-img", { img: img })
      .then((res) => res.data);
    return data;
  };

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return server.post("/posts/addPost", newPost, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      // Invalidate and refetch
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const createPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    mutation.mutate({
      desc: postData.desc,
      img: await uploadImage(file),
      city: postData.city,
      weather: postData.weather,
      country: postData.country,
    });
  };

  const handleChange = (e) => {
    setPostData((prevPostData) => ({
      ...prevPostData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog
      theme={theme}
      open={open}
      onClose={closeModal}
      fullScreen={fullScreen}
    >
      <DialogTitle>
        <div className="profile-info">
          <span className="profile-icon">
            <img src={currentUser.profilePic} alt="profile-pic" />
          </span>
          <span className="user-name">{currentUser.name}</span>
        </div>
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <Loader loaderText="Creating post..." />
        ) : (
          <>
            <input
              autoFocus
              type="file"
              name="img-input"
              id="img-input"
              onChange={(e) => convertImageToBase64(e)}
            />
            <label htmlFor="img-input" className="upload-img">
              {file ? (
                <img className="uploaded-img" alt="uploaded-img" src={file} />
              ) : (
                <>
                  <i className="fa-solid fa-file-image"></i>
                  <span>Upload Image</span>{" "}
                </>
              )}
            </label>
            <span className="selected-file">
              {file ? file.name : "No file chosen"}
            </span>

            <TextField
              margin="dense"
              name="desc"
              label="Add Caption"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />

            <TextField
              margin="dense"
              name="city"
              label="Enter City"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
            <div className="select-fields">
              <WeatherSelect
                weather={postData.weather}
                handleChange={handleChange}
              />
              <CountrySelect
                country={postData.country}
                handleChange={handleChange}
              />
            </div>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={createPost}>Post</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPost;
