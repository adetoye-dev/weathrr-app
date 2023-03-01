import "./Hour.css";
import fetchIcon from "../../helpers/fetchIcon";

const Hour = ({ time, icon, temp }) => {
  const tempIcon = fetchIcon(icon);
  return (
    <div className="hour">
      <div className="hour-id">{time}</div>
      <div className="hour-data">
        <span className="hour-icon">
          <img src={`./icons/${tempIcon}.svg`} alt="temp-icon" />
        </span>
        <span className="hour-temp">{temp}</span>
      </div>
    </div>
  );
};

export default Hour;
