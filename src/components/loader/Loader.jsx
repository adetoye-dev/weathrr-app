import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-animation"></div>
      <p className="loader-text">Fetching Weather...</p>
    </div>
  );
};

export default Loader;
