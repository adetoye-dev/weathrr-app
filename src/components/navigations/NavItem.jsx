import { NavLink } from "react-router-dom";

const NavItem = ({ icon, activeIcon, text, link }) => {
  return (
    <li className="nav-list-item">
      <NavLink to={link} className="nav-link">
        {({ isActive }) => (
          <>
            <span className="nav-icon">
              <img
                src={`/icons/${isActive ? activeIcon : icon}`}
                alt="nav-icon"
              />
            </span>
            <span
              className={isActive ? "nav-link-active nav-text" : "nav-text"}
            >
              {text}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
