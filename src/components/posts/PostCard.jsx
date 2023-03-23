import "./PostCard.css";
import { useNavigate } from "react-router-dom";
import server from "../../apis/server";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserData } from "../../contexts/AuthContext";

const PostCard = ({ postData }) => {
  const navigate = useNavigate();
  const { currentUser } = useUserData();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (bookmarked) => {
      if (bookmarked) return server.delete("/bookmarks?postId=" + postData.id);
      return server.post("/bookmarks", { postId: postData.id });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ["bookmarks", postData.id],
    queryFn: () =>
      server.get("/bookmarks?postId=" + postData.id).then((res) => res.data),
  });

  const viewPost = () => {
    navigate(`/posts/${postData.title}`, {
      state: { ...postData },
    });
  };

  const viewProfile = (id) => {
    navigate(`/profile/${id}`, {
      state: { userId: id },
    });
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    mutation.mutate(data.includes(currentUser.id));
  };

  return (
    <div className="post">
      <div className="favorite-icon" onClick={handleBookmark}>
        <img
          src={`/icons/${
            data && data.includes(currentUser.id)
              ? "favorite-active.svg"
              : "favorite.svg"
          }`}
          alt="fav-icon"
        />
      </div>
      <div className="post-img" onClick={viewPost}>
        <img src={postData.img} alt="post-image" loading="lazy" />
      </div>
      <div className="user-info flex-center-y">
        <div className="user-img" onClick={() => viewProfile(postData.userId)}>
          <img src={postData.profilePic} alt="user" />
        </div>
        <span
          className="user-name"
          onClick={() => viewProfile(postData.userId)}
        >
          {postData.userName}
        </span>
        <div className="weather-info flex-center-y">
          <span className="temp">{`${postData.temp}°`}</span>
          <span className="icon">
            <img src="/icons/clear sky.svg" />
          </span>
        </div>
      </div>
      <div className="post-info flex-center-y">
        <h5 className="post-desc">{postData.desc}</h5>
        <div className="location-info flex-center-y">
          <span className="icon">
            <img src="/icons/location-icon.svg" alt="location-icon" />
          </span>
          <span className="location">{postData.city}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
