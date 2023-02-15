import "./SinglePostCard.css";
import { useLocation } from "react-router-dom";

const SinglePostCard = () => {
  const { state } = useLocation();
  return (
    <>
      <div className="single-post-nav"></div>
      <div className="single-post-card">
        <div className="single-post-image">
          <div className="favorite-icon">
            <img
              src={`/icons/${
                state.favorite ? "favorite-active.svg" : "favorite.svg"
              }`}
              alt="fav-icon"
            />
          </div>
          <img src={`/images/${state.postImage}`} alt="post-image" />
        </div>
        <div className="single-post-data">
          <div className="single-post-location-card">
            <div className="post-location-info">
              <span className="icon">
                <img src="/icons/location-icon.png" alt="location-icon" />
              </span>
              <span className="post-location">{state.location}</span>
            </div>
            <div className="post-weather-info">
              <span className="temp">{state.temp}</span>
              <span className="icon">
                <img src="/icons/clear sky.svg" />
              </span>
            </div>
          </div>
          <h2 className="single-post-title">{state.title}</h2>
          <p className="post-desc">{state.postDesc}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePostCard;
