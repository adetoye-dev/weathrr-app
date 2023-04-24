import "./PostCard.css";
import { useNavigate } from "react-router-dom";
import server from "../../apis/server";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

const PostCard = ({ postData }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();
  const [postCreator, setPostCreator] = useState();

  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data } = await server.post("/posts/creator", {
          creatorId: postData.creatorId,
        });
        setPostCreator(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCreator();
  }, []);

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
    navigate(`/posts/${postData.id}`, {
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
            data && data.includes(currentUser.userId)
              ? "favorite-active.svg"
              : "favorite.svg"
          }`}
          alt="fav-icon"
        />
      </div>
      <div className="post-img" onClick={viewPost}>
        <img src={postData.imgUrl} alt="post-image" loading="lazy" />
      </div>
      <div className="user-info flex-center-y">
        <div
          className="user-img"
          onClick={() => viewProfile(postData.creatorId)}
        >
          <img src={postCreator?.profilePic} alt="user" />
        </div>
        <span
          className="user-name"
          onClick={() => viewProfile(postData.creatorId)}
        >
          {postCreator?.name}
        </span>
      </div>
      <div className="post-info flex-center-y">
        <div className="location-info flex-center-y">
          <span className="icon">
            <img src="/icons/location-icon.svg" alt="location-icon" />
          </span>
          <span className="location">{`${postData.city}, ${postData.country}`}</span>
        </div>
        <div className="weather-info flex-center-y">
          <span className="icon">
            <img src={`/icons/${postData.weather}.svg`} />
          </span>
          <span className="post-weather">{postData.weather}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
