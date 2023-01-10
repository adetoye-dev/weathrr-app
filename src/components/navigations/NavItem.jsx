import { NavLink } from "react-router-dom";

const NavItem = ({ icon, text, link }) => {
  const style = {
    background: `url(./icons/${icon}.svg) center center no-repeat`,
  };
  const activeStyle = {
    background: `url(./icons/${icon}-active.svg) center center no-repeat`,
  };
  return (
    <div className="secondary-nav-item">
      <NavLink
        to={link}
        className="nav-icon"
        style={({ isActive }) => (isActive ? activeStyle : style)}
      ></NavLink>
      <NavLink to={link} className="nav-text">
        {text}
      </NavLink>
    </div>
  );
};

export default NavItem;
