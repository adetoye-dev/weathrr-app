import "./SecondaryNav.css";
import NavItem from "./NavItem";

const SecondaryNav = () => {
  return (
    <div className="secondary-nav">
      <NavItem icon="home" text="home" link="/" />
      <NavItem icon="weather" text="weather" link="/weather" />
      <div className="new-post-icon">
        <img src="/icons/plus-icon.png" alt="plus-icon" />
      </div>
      <NavItem icon="chat" text="chat" link="/chat" />
      <NavItem icon="user" text="profile" link="/profile" />
    </div>
  );
};

export default SecondaryNav;
