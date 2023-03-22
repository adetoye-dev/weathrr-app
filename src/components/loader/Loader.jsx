import "./Loader.css";
const Loader = ({ loaderText }) => {
  return (
    <div className="loader">
      <div className="loader-animation"></div>
      <p className="loader-text">{loaderText}</p>
    </div>
  );
};

export default Loader;
