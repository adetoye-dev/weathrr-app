import "./SinglePostCard.css";

const SinglePostCard = () => {
  return (
    <>
      <div className="single-post-nav"></div>
      <div className="single-post-card">
        <div className="single-post-image">
          <img src="/images/pic1.png" alt="post-image" />
        </div>
        <div className="single-post-data">
          <div className="single-post-location-card">
            <div className="post-location-info">
              <span className="icon">
                <img src="./icons/location-icon.svg" alt="location-icon" />
              </span>
              <span className="post-location">location</span>
            </div>
            <div className="post-weather-info">
              <span className="temp">16</span>
              <span className="icon">
                <img src="./icons/clear sky.svg" />
              </span>
            </div>
          </div>
          <h2 className="single-post-title">Sit aliquam at dui leo.</h2>
          <p className="post-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et doloris nisi ut aliquip ex ea
            comm.
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePostCard;
