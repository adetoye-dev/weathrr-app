import "./Nav.css";
import NavItem from "./NavItem";
import {
  faHome,
  faCloudSunRain,
  faBookmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAddPost } from "../../contexts/AddPostContext";

const MobileNav = () => {
  const { handleClickOpen } = useAddPost();
  return (
    <div className="mobile-nav">
      <NavItem icon={faHome} text="home" link="/" />
      <NavItem icon={faCloudSunRain} text="weather" link="/weather" />
      <div className="new-post-icon" onClick={handleClickOpen}>
        <img src="/icons/plus-icon.png" alt="plus-icon" />
      </div>
      <NavItem icon={faBookmark} text="Bookmarks" link="/bookmarks" />
      <NavItem icon={faRightFromBracket} text="Logout" link="/logout" />
    </div>
  );
};

export default MobileNav;
