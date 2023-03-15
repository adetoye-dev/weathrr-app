import "./Nav.css";
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
            <NavItem link="/" text="Home" />
            <NavItem link="/weather" text="Weather" />
            <NavItem link="/bookmarks" text="Bookmarks" />
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
