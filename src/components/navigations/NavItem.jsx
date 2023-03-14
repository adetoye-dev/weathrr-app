import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ icon, text, link }) => {
  return (
    <li className="nav-list-item">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "nav-link nav-link-active" : "nav-link"
        }
      >
        <span className="nav-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="nav-text">{text}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
