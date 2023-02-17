import "./PrimaryNav.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../contexts/AuthContext";

const PrimaryNav = () => {
  const [dataAttributes, setDataAttributes] = useState(false);

  const navigate = useNavigate();
  const { currentUser } = useUserData();

  const toggleNavView = () => {
    setDataAttributes((prevAttr) => !prevAttr);
  };

  const viewProfile = () => {
    navigate(`/profile/${currentUser.id}`, {
      state: { currentUser },
    });
  };

  return (
    <header className="header">
      <div className="container nav-container">
        <nav className="nav">
          <ul
            className="primary-navigation"
            data-visible={dataAttributes}
            id="primary-navigation"
          >
            <div onClick={toggleNavView} className="nav-icon cancel-btn">
              <img src="/icons/close-btn.svg" alt="close-btn" />
            </div>
            <NavItem link="/" icon="home.svg" text="Home" />
            <NavItem link="/weather" icon="weather.svg" text="Weather" />
            <NavItem link="/chat" icon="chat.svg" text="Chat" />
          </ul>
          <div
            aria-controls="primary-navigation"
            onClick={toggleNavView}
            className="nav-icon menu-btn"
          >
            <img src="/icons/menu-btn.svg" alt="menu-btn" />
          </div>
        </nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div onClick={viewProfile} className="profile-icon">
          <img src={currentUser.profilePic} alt="profile-pic" />
        </div>
      </div>
    </header>
  );
};

export default PrimaryNav;
