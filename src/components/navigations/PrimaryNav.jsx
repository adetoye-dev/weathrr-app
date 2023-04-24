import { useState, useEffect, useRef, useCallback } from "react";
import "./Nav.css";
import logo from "../../assets/logo.svg";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useAddPost } from "../../contexts/AddPostContext";

const PrimaryNav = () => {
  const [profileOptionsOpen, setProfileOptionsOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();
  const { handleClickOpen } = useAddPost();

  const navOptions = useRef();

  const showOptions = () => {
    setProfileOptionsOpen(true);
  };

  const viewProfile = () => {
    navigate(`/profile/${currentUser.name}`, {
      state: { userId: currentUser.userId },
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
              <span
                className="new-post option"
                onClick={() => {
                  handleClickOpen();
                  closeOptions();
                }}
              >
                <i className="fa-solid fa-plus"></i> New Post
              </span>
              <span className="logout option" onClick={closeOptions}>
                <i className="fa-solid fa-right-from-bracket"></i>
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
