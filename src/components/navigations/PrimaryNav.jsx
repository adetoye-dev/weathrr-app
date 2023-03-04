import "./PrimaryNav.css";
import logo from "../../assets/logo.svg";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../contexts/AuthContext";

const PrimaryNav = () => {
  const navigate = useNavigate();
  const { currentUser } = useUserData();

  const viewProfile = () => {
    navigate(`/profile/${currentUser.id}`, {
      state: { currentUser },
    });
  };

  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav">
          <ul className="primary-navigation" id="primary-navigation">
            <NavItem
              link="/"
              icon="home.svg"
              activeIcon="home-active.svg"
              text="Home"
            />
            <NavItem
              link="/weather"
              icon="weather.svg"
              activeIcon="weather-active.svg"
              text="Weather"
            />
            <NavItem
              link="/chat"
              icon="chat.svg"
              activeIcon="chat-active.svg"
              text="Chat"
            />
          </ul>
          <div onClick={viewProfile} className="profile-icon">
            <img src={currentUser.profilePic} alt="profile-pic" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default PrimaryNav;
