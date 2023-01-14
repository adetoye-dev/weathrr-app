import "./PostCard.css";
import postImage from "../../assets/user-image.png";
import profileIcon from "../../assets/profile-icon.png";

const PostCard = (props) => {
  return (
    <div className="post">
      <div className="post-img">
        <img src={postImage} alt="post-image" />
      </div>
      <div className="user-info flex-center-y">
        <div className="user-img">
          <img src={profileIcon} alt="user" />
        </div>
        <span className="user-name">{props.userName}</span>
        <div className="weather-info flex-center-y">
          <span className="temp">{props.temp}</span>
          <span className="icon">
            <img src="./icons/clear sky.svg" />
          </span>
        </div>
      </div>
      <div className="post-info flex-center-y">
        <h5 className="post-title">{props.title}</h5>
        <div className="location-info flex-center-y">
          <span className="icon">
            <img src="./icons/location-icon.svg" alt="location-icon" />
          </span>
          <span className="location">{props.location}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
