import Posts from "../components/posts/Posts";
import { useLocation } from "react-router-dom";

const BookmarkPage = () => {
  const { pathname } = useLocation();

  return <Posts pathName={pathname} />;
};

export default BookmarkPage;
