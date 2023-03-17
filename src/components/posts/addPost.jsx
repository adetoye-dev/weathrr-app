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
import server from "../../apis/server";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./addPost.css";

const AddPost = () => {
  const { open, handleClose } = useAddPost();
  const { currentUser } = useUserData();
  const [file, setFile] = useState();
  const [desc, setDesc] = useState();

  console.log(desc, file);

  const queryClient = useQueryClient();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const closeModal = () => {
    handleClose();
    setFile("");
  };

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return server.post("/posts/addPost", newPost, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const createPost = (e) => {
    e.preventDefault();
    mutation.mutate({ desc, img: file, city: "Amsterdam", temp: "6" });
  };

  return (
    <Dialog open={open} onClose={closeModal} fullScreen={fullScreen}>
      <DialogTitle>
        <div className="profile-info">
          <span className="profile-icon">
            <img src={currentUser.profilePic} alt="profile-pic" />
          </span>
          <span className="user-name">{currentUser.name}</span>
        </div>
      </DialogTitle>
      <DialogContent>
        <input
          autoFocus
          type="file"
          name="img-input"
          id="img-input"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="img-input" className="upload-img">
          {file ? (
            <img
              className="uploaded-img"
              alt="uploaded-img"
              src={URL.createObjectURL(file)}
            />
          ) : (
            <>
              <FontAwesomeIcon icon={faFileImage} />
              <span>Upload Image</span>{" "}
            </>
          )}
        </label>
        <span className="selected-file">
          {file ? file.name : "No file chosen"}
        </span>

        <TextField
          margin="dense"
          id="name"
          label="Add Caption"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setDesc(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={createPost}>Post</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPost;
