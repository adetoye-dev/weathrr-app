import "./WeatherProperty.css";

const WeatherProperty = (props) => {
  return (
    <div className="weather-property">
      <div className="property-data">
        <h4 className="property-title">{props.title}</h4>
        <span className="property-value">{props.value}</span>
      </div>
      <div className="property-icon">
        <img src={`./icons/${props.icon}`} alt="property-icon" />
      </div>
    </div>
  );
};

export default WeatherProperty;
