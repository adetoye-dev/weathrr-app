import "./SearchError.css";

const SearchError = ({ errorMsg }) => {
  return <div className="search-error">{errorMsg}. Please try again!</div>;
};

export default SearchError;
