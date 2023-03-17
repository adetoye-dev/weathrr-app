import "./PostCard.css";
import profileIcon from "../../assets/profile-icon.png";
import { useNavigate } from "react-router-dom";

const PostCard = ({ postData }) => {
  const navigate = useNavigate();

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

  return (
    <div className="post">
      <div className="favorite-icon">
        <img
          src={`/icons/${
            postData.favorite ? "favorite-active.svg" : "favorite.svg"
          }`}
          alt="fav-icon"
        />
      </div>
      <div className="post-img" onClick={viewPost}>
        <img src={postData.img} alt="post-image" />
      </div>
      <div className="user-info flex-center-y">
        <div className="user-img" onClick={() => viewProfile(postData.userId)}>
          <img src={postData.profilePic} alt="user" />
        </div>
        <span className="user-name">{postData.userName}</span>
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
