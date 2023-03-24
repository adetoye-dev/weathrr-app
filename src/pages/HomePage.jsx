import Posts from "../components/posts/Posts";
import SearchBar from "../components/search/PostSearch";
import FilterBox from "../components/search/FilterPosts";
import WeatherDesc from "../components/weather/WeatherDesc";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <WeatherDesc />
      <div className="search-container">
        <SearchBar />
        <FilterBox />
      </div>
      <Posts />
    </>
  );
};

export default HomePage;
