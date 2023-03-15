import { useState } from "react";
import "./PostSearch.css";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ findCountry }) => {
  const [location, setLocation] = useState("Lagos");
  const [value, setValue] = useState("");

  const handleChange = (input) => {
    setValue(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch posts from api with entered location
    setLocation(value);
    setValue("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-location">
        <FontAwesomeIcon icon={faLocationPin} />
        <span className="location-text">{location}</span>
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
