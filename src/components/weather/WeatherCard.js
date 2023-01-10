import CurrentWeather from "./CurrentWeather";
import WeatherProperty from "./WeatherProperty";
import Hour from "../forecast/Hour";
import "./WeatherCard.css";

import fetchDate from "../helpers/fetchDate";

const WeatherCard = ({ weatherData, airData, hourlyForecast }) => {
  const currentDate = fetchDate(weatherData.dt);

  const renderHourlyForecast = hourlyForecast
    .filter((item) => {
      let currentDate = fetchDate(hourlyForecast[0].dt);
      let itemDate = fetchDate(item.dt);
      return itemDate.date === currentDate.date;
    })
    .map((hour) => {
      let hourDate = fetchDate(hour.dt);
      return (
        <Hour
          key={hourDate.time.hours}
          time={
            hourDate.time.hours === currentDate.time.hours
              ? "Now"
              : `${hourDate.time.hours}:${hourDate.time.minutes}0`
          }
          temp={`${hour.temp}°`}
          icon={hour.weather[0].icon}
        />
      );
    });

  return (
    <>
      <div className="current-date">
        {currentDate.weekday}, {currentDate.date} {currentDate.month}
      </div>
      <div className="weather-card">
        <CurrentWeather
          city={weatherData.name}
          country={weatherData.sys.country}
          temp={weatherData.main.temp}
          desc={weatherData.weather[0].description}
          temp_max={weatherData.main.temp_max}
          temp_min={weatherData.main.temp_min}
          icon={weatherData.weather[0].icon}
        />
        <div className="hourly-forecast hourly-forecast-mobile">
          {renderHourlyForecast}
        </div>
        <div className="weather-properties">
          <WeatherProperty
            title="humidity"
            value={`${weatherData.main.humidity}%`}
            icon="humidity.svg"
          />
          <WeatherProperty
            title="wind"
            value={`${weatherData.wind.speed} m/s`}
            icon="wind.svg"
          />
          <WeatherProperty
            title="feels like"
            value={`${weatherData.main.feels_like}°`}
            icon="feels-like.svg"
          />
          <WeatherProperty
            title="air quality"
            value={`${airData.quality} ${airData.description}`}
            icon="air-quality.svg"
          />
        </div>
      </div>
      <div className="hourly-forecast hourly-forecast-desktop">
        {renderHourlyForecast}
      </div>
    </>
  );
};

export default WeatherCard;
