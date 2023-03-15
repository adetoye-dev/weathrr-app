import "./ProfileCard.css";
import { useUserData } from "../../contexts/AuthContext";

const ProfileCard = () => {
  const { currentUser } = useUserData();
  return (
    <>
      <div className="profile-card">
        <div className="profile-image">
          <img src={currentUser.profilePic} alt="profile-img" />
        </div>
        <h1 className="profile-name">{currentUser.name}</h1>
        <div className="profile-data">
          <div className="post-location-info">
            <span className="icon">
              <img src="/icons/location-icon.png" alt="location-icon" />
            </span>
            <span className="post-location">location</span>
          </div>
        </div>
        <div className="about-user">
          nsectetur adipiscing elit, sed do eiusmod tempor incididunt u
        </div>
        <div className="follow-metrics">
          <span className="follower-count">1k followers</span>
          <span className="following-count">1.5k following</span>
        </div>
        <button className="follow-user-btn">Follow</button>
      </div>
    </>
  );
};

export default ProfileCard;
