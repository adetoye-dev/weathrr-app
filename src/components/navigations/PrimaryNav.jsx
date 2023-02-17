import "./PrimaryNav.css";
import profileIcon from "../../assets/profile-icon.png";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
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
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Lookbook</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/weather">Weather</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div onClick={viewProfile} className="profile-icon">
          <img src={currentUser.profilePic} />
        </div>
      </div>
    </header>
  );
};

export default PrimaryNav;
