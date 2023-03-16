import "./ProfileCard.css";

const ProfileCard = ({ user }) => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-image">
          <img src={user.profilePic} alt="profile-img" />
        </div>
        <h1 className="profile-name">{user.name}</h1>
        <div className="profile-data">
          <div className="post-location-info">
            <span className="icon">
              <img src="/icons/location-icon.png" alt="location-icon" />
            </span>
            <span className="post-location">{user.city}</span>
          </div>
        </div>
        <div className="about-user">
          nsectetur adipiscing elit, sed do eiusmod tempor incididunt u
        </div>
        <div className="follow-metrics">
          <span className="follower-count">0 followers</span>
          <span className="following-count">0 following</span>
        </div>
        <button className="follow-user-btn">Follow</button>
      </div>
    </>
  );
};

export default ProfileCard;
