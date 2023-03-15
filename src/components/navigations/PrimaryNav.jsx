import { useState, useEffect, useRef, useCallback } from "react";
import "./Nav.css";
import logo from "../../assets/logo.svg";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../contexts/AuthContext";
import { faPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrimaryNav = () => {
  const [profileOptionsOpen, setProfileOptionsOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useUserData();

  const navOptions = useRef();

  const showOptions = () => {
    setProfileOptionsOpen(true);
  };

  const viewProfile = () => {
    navigate(`/profile/${currentUser.id}`, {
      state: { currentUser },
    });
  };

  const closeOptions = useCallback(() => {
    setProfileOptionsOpen(false);
  }, [setProfileOptionsOpen]);

  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!navOptions.current || navOptions.current.contains(event.target)) {
        return;
      }
      closeOptions(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [navOptions, closeOptions]);

  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav">
          <ul className="primary-navigation" id="primary-navigation">
            <NavItem link="/" text="Lookbook" />
            <NavItem link="/weather" text="Weather" />
            <NavItem link="/bookmarks" text="Bookmarks" />
          </ul>
          <div className="view-profile"></div>
          <div onClick={showOptions} className="profile-icon">
            <img src={currentUser.profilePic} alt="profile-pic" />
          </div>
        </nav>
        {profileOptionsOpen && (
          <div ref={navOptions} className="profile-options">
            <div
              onClick={() => {
                viewProfile();
                closeOptions();
              }}
              className="profile-link"
            >
              <div className="profile-info">
                <span className="profile-icon">
                  <img src={currentUser.profilePic} alt="profile-pic" />
                </span>
                <span className="user-name">{currentUser.name}</span>
              </div>
              <button className="view-profile-btn">view Profile</button>
            </div>
            <div className="options">
              <span className="new-post option" onClick={closeOptions}>
                <FontAwesomeIcon icon={faPlus} /> New Post
              </span>
              <span className="logout option" onClick={closeOptions}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                <Link to="/logout"> Logout</Link>
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default PrimaryNav;
