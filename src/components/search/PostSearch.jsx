import { useState } from "react";
import { useWeatherData } from "../../contexts/WeatherContext";
import "./PostSearch.css";

const SearchBar = () => {
  const { weatherData, getWeatherData, weatherFetchError } = useWeatherData();
  const [value, setValue] = useState("");

  const handleChange = (input) => {
    setValue(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch posts from api with entered location
    getWeatherData(value);
    setValue("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-location">
        <i className="fa-solid fa-location-pin"></i>
        {weatherData.main && (
          <span className="location-text">{`${weatherData.name}, ${weatherData.sys.country}`}</span>
        )}
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Enter a city..."
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
