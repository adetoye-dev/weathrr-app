import "./PrimaryNav.css";
import profileIcon from "../../assets/profile-icon.png";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const PrimaryNav = () => {
  return (
    <header className="header">
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
      <Link to="/profile" className="profile-icon">
        <img src={profileIcon} />
      </Link>
    </header>
  );
};

export default PrimaryNav;
