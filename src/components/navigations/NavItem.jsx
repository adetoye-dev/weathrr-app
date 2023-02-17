import { Link } from "react-router-dom";

const NavItem = ({ icon, text, link, handleClick }) => {
  return (
    <li className="nav-list-item" onClick={handleClick}>
      <Link to={link} className="nav-link">
        <span className="nav-icon">
          <img src={`/icons/${icon}`} alt="nav-icon" />
        </span>
        <span className="nav-text">{text}</span>
      </Link>
    </li>
  );
};

export default NavItem;
