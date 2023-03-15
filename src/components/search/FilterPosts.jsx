import "./FilterPosts.css";

const FilterBox = ({ handleChange }) => {
  return (
    <select
      name="filter"
      //   onChange={(e) => handleChange(e.target.value)}
      className="filter-box"
    >
      <option value="">Filter By</option>
      <option value="recent">Recent</option>
      <option value="nearby">Nearby</option>
      <option value="following">Following</option>
      <option value="popular">Popular</option>
    </select>
  );
};

export default FilterBox;
