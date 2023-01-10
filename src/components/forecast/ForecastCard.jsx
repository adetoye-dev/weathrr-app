import "./ForecastCard.css";
import fetchDate from "../helpers/fetchDate";
import Day from "./Day";

const ForecastCard = ({ dailyForecast }) => {
  const currentDate = fetchDate(dailyForecast[0].dt).date;
  const renderDailyForecast = dailyForecast
    .filter((item) => {
      return fetchDate(item.dt).date < currentDate + 7;
    })
    .map((item) => {
      let weekday =
        currentDate === fetchDate(item.dt).date
          ? "Today"
          : fetchDate(item.dt).weekday;
      return (
        <Day
          key={fetchDate(item.dt).date}
          weekday={weekday}
          icon={item.weather[0].icon}
          low={item.temp.min}
          high={item.temp.max}
        />
      );
    });
  return (
    <div className="forecast-card">
      <h3>7-day forecast</h3>
      <div className="daily-forecasts">{renderDailyForecast}</div>
    </div>
  );
};

export default ForecastCard;
