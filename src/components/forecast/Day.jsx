import "./Day.css";
import fetchWeatherDesc from "../../helpers/fetchWeatherDesc";

const Day = ({ weekday, icon, low, high }) => {
  const tempIcon = fetchWeatherDesc(icon);
  return (
    <div className="day">
      <div className="weekday">{weekday}</div>
      <div className="day-icon">
        <img src={`./icons/${tempIcon}.svg`} alt="temp-icon" />
      </div>
      <div className="day-temp">
        <span className="day-temp-low">L: {low}°</span>
        <span className="day-temp-high">H: {high}°</span>
      </div>
    </div>
  );
};

export default Day;
