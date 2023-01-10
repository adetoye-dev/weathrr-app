import { useState, useEffect } from "react";
import weatherApi from "../../apis/openweathermap";
import fetchUserCity from "../../apis/ipapi";
import loadAirQuality from "../../apis/waqi";
import WeatherCard from "./WeatherCard";
import WeatherSearchBar from "../search/WeatherSearchBar";
import SearchError from "../errors/SearchError";
import Loader from "../loader/Loader";
import ForecastCard from "../forecast/ForecastCard";

const WeatherPage = () => {
  // Variable to hold/set data in state
  const [weatherData, setWeatherData] = useState({});
  const [airData, setAirData] = useState({ quality: 0, description: "Good" });
  const [forecast, setForecast] = useState({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Function so that weatherApi method can be called async because
  // useEffect callback can not be async
  const getData = async (city) => {
    const { response, error, errorMsg } = await weatherApi.loadWeather(city);
    setError(error);
    setErrorMsg(errorMsg);

    if (!error) {
      setWeatherData(response);
      getAirQuality(response.coord.lat, response.coord.lon);
      getForecast(response.coord.lat, response.coord.lon);
    }
  };

  const getForecast = async (lat, lon) => {
    const data = await weatherApi.loadForecast(lat, lon);
    // console.log(data);
    setForecast(data);
  };

  //get air quality from api with user location
  const getAirQuality = async (lat, lon) => {
    const airData = await loadAirQuality(lat, lon);
    setAirData(() => {
      let desc;
      if (airData.aqi >= 0 && airData.aqi <= 50) {
        desc = "Good";
      } else if (airData.aqi > 50 && airData.aqi <= 100) {
        desc = "Moderate";
      } else if (airData.aqi > 100 && airData.aqi <= 150) {
        desc = "Sensitive";
      } else if (airData.aqi > 150 && airData.aqi <= 200) {
        desc = "Unhealthy";
      } else if (airData.aqi > 200 && airData.aqi <= 300) {
        desc = "Very Unhealthy";
      } else if (airData.aqi > 300) {
        desc = "Hazardous";
      }
      return { quality: airData.aqi, description: desc };
    });
  };

  useEffect(() => {
    //get user's city with ipapi and fetch user data with city value
    const getCity = async () => {
      const cityData = await fetchUserCity();
      getData(cityData.city);
    };
    getCity();
  }, []);

  return (
    <>
      <WeatherSearchBar fetchWeatherData={getData} />
      {error && <SearchError errorMsg={errorMsg} />}
      {weatherData.main && forecast.hourly ? (
        <>
          <WeatherCard
            weatherData={weatherData}
            airData={airData}
            hourlyForecast={forecast.hourly}
          />
          <ForecastCard dailyForecast={forecast.daily} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default WeatherPage;
