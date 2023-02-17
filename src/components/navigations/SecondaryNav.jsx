import "./SecondaryNav.css";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../contexts/AuthContext";

const SecondaryNav = () => {
  const navigate = useNavigate();
  const { currentUser } = useUserData();

  const viewProfile = () => {
    navigate(`/profile/${currentUser.id}`, {
      state: { ...currentUser },
    });
  };

  return (
    <div className="secondary-nav">
      <NavItem icon="home" text="home" link="/" />
      <NavItem icon="weather" text="weather" link="/weather" />
      <div className="new-post-icon">
        <img src="/icons/plus-icon.png" alt="plus-icon" />
      </div>
      <NavItem icon="chat" text="chat" link="/chat" />
      <div className="secondary-nav-item" onClick={viewProfile}>
        <div
          className="nav-icon"
          style={{
            background: "url(/icons/user.svg) center center no-repeat",
          }}
        ></div>
        <span className="nav-text">Profile</span>
      </div>
    </div>
  );
};

export default SecondaryNav;
