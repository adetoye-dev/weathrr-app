import "./PostCard.css";
import postImage from "../../assets/user-image.png";
import profileIcon from "../../assets/profile-icon.png";

const PostCard = ({ title }) => {
  return (
    <div className="post">
      <div className="post-img">
        <img src={postImage} alt="post-image" />
      </div>
      <div className="user-info flex-center-v">
        <div className="user-img">
          <img src={profileIcon} alt="user" />
        </div>
        <span className="user-name">Lorem Ipsum</span>
        <div className="weather-info flex-center-v">
          <span className="temp">15</span>
          <span className="icon">
            <img src="./icons/clear sky.svg" />
          </span>
        </div>
      </div>
      <div className="post-info flex-center-v">
        <h5 className="post-title">{title}</h5>
        <div className="location-info flex-center-v">
          <span className="icon">
            <img src="./icons/location-icon.svg" alt="location-icon" />
          </span>
          <span className="location">New York</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
