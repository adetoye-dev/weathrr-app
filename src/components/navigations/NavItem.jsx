import { NavLink } from "react-router-dom";

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
          <i className={`fa-solid ${icon}`}></i>
        </span>
        <span className="nav-text">{text}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
