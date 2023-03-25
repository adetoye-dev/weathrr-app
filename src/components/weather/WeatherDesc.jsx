import { useWeatherData } from "../../contexts/WeatherContext";
import "./WeatherDesc.css";

const WeatherDesc = () => {
  const { weatherData } = useWeatherData();
  return (
    <>
      {weatherData.main ? (
        <p className="homepage-weather-desc">
          {`Current weather in ${weatherData.name} is ${weatherData.main.temp}°, wind ${weatherData.wind.speed} m/s, feels like
      ${weatherData.main.feels_like}°. Have a nice day!`}
        </p>
      ) : (
        "Fetching weather data..."
      )}
    </>
  );
};

export default WeatherDesc;
