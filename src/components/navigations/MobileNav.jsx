import "./MobileNav.css";
import NavItem from "./NavItem";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <NavItem
        icon="home.svg"
        activeIcon="home-active.svg"
        text="home"
        link="/"
      />
      <NavItem
        icon="weather.svg"
        activeIcon="weather-active.svg"
        text="weather"
        link="/weather"
      />
      <div className="new-post-icon">
        <img src="/icons/plus-icon.png" alt="plus-icon" />
      </div>
      <NavItem
        icon="chat.svg"
        activeIcon="chat-active.svg"
        text="chat"
        link="/chat"
      />
      <NavItem
        icon="user.svg"
        activeIcon="user-active.svg"
        text="profile"
        link="/profile/1"
      />
    </div>
  );
};

export default MobileNav;
