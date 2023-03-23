import "./Nav.css";
import NavItem from "./NavItem";
import { useAddPost } from "../../contexts/AddPostContext";

const MobileNav = () => {
  const { handleClickOpen } = useAddPost();
  return (
    <div className="mobile-nav">
      <NavItem icon="fa-house" text="home" link="/" />
      <NavItem icon="fa-cloud-sun-rain" text="weather" link="/weather" />
      <div className="new-post-icon" onClick={handleClickOpen}>
        <img src="/icons/plus-icon.png" alt="plus-icon" />
      </div>
      <NavItem icon="fa-bookmark" text="Bookmarks" link="/bookmarks" />
      <NavItem icon="fa-right-from-bracket" text="Logout" link="/logout" />
    </div>
  );
};

export default MobileNav;
