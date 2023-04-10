import "./SinglePostPage.css";
import { useLocation } from "react-router-dom";

const SinglePostPage = () => {
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
          <img src={state.imgUrl} alt="post-image" />
        </div>
        <div className="single-post-data">
          <div className="single-post-location-card">
            <div className="post-location-info">
              <span className="icon">
                <img src="/icons/location-icon.png" alt="location-icon" />
              </span>
              <span className="post-location">{`${state.city}, ${state.country}`}</span>
            </div>
            <div className="post-weather-info">
              <span className="temp">{state.weather}</span>
              <span className="icon">
                <img src={`/icons/${state.weather}.svg`} />
              </span>
            </div>
          </div>
          <p className="single-post-desc">{state.desc}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
