import "./ProfileCard.css";
import { useUserData } from "../../contexts/AuthContext";

const ProfileCard = () => {
  const { currentUser } = useUserData();
  return (
    <>
      <h1 className="user-name">{currentUser.name}</h1>
      <div className="profile-card">
        <div className="profile-image">
          <img src={currentUser.profilePic} alt="profile-img" />
        </div>
        <div className="profile-data">
          <div className="single-post-location-card">
            <div className="post-location-info">
              <span className="icon">
                <img src="/icons/location-icon.png" alt="location-icon" />
              </span>
              <span className="post-location">location</span>
            </div>
            <div className="post-weather-info">
              <span className="temp">15</span>
              <span className="icon">
                <img src="/icons/clear sky.svg" />
              </span>
            </div>
          </div>
          <div className="about-user">
            nsectetur adipiscing elit, sed do eiusmod tempor incididunt u
          </div>
          <button className="send-message-btn">Message</button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
