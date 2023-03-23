import Posts from "../components/posts/Posts";
import SearchBar from "../components/search/PostSearch";
import FilterBox from "../components/search/FilterPosts";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="search-container">
        <SearchBar />
        <FilterBox />
      </div>
      <Posts />
    </>
  );
};

export default HomePage;
