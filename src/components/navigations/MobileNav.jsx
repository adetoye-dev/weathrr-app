import "./Nav.css";
import NavItem from "./NavItem";
import {
  faHome,
  faCloudSunRain,
  faMessage,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <NavItem icon={faHome} text="home" link="/" />
      <NavItem icon={faCloudSunRain} text="weather" link="/weather" />
      <div className="new-post-icon">
        <img src="/icons/plus-icon.png" alt="plus-icon" />
      </div>
      <NavItem icon={faMessage} text="chat" link="/chat" />
      <NavItem icon={faBookmark} text="Bookmarks" link="/bookmarks" />
    </div>
  );
};

export default MobileNav;
