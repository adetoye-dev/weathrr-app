import { useState, useEffect } from "react";
import openweathermap from "../apis/openweathermap";
import fetchUserCity from "../apis/ipapi";
import loadAirQuality from "../apis/waqi";
import WeatherCard from "../components/weather/WeatherCard";
import WeatherSearchBar from "../components/search/WeatherSearchBar";
import SearchError from "../components/errors/SearchError";
import Loader from "../components/loader/Loader";
import ForecastCard from "../components/forecast/ForecastCard";

const WeatherPage = () => {
  // Variable to hold/set data in state
  const [weatherData, setWeatherData] = useState();
  const [airData, setAirData] = useState({ quality: 0, description: "Good" });
  const [forecast, setForecast] = useState({});
  const [error, setError] = useState(null);

  //function to load current all weather data
  const getData = async (city) => {
    setError(null);
    try {
      const response = await openweathermap.get("/weather", {
        params: {
          q: city,
        },
      });

      setWeatherData(response.data);
      getAirQuality(response.data.coord.lat, response.data.coord.lon);
      getForecast(response.data.coord.lat, response.data.coord.lon);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  //function to load weather forecast
  const getForecast = async (lat, lon) => {
    const response = await openweathermap.get("/onecall", {
      params: {
        lat: lat,
        lon: lon,
      },
    });
    setForecast(response.data);
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
      {error && <SearchError errorMsg={error} />}
      {weatherData && forecast.hourly ? (
        <>
          <WeatherCard
            weatherData={weatherData}
            airData={airData}
            hourlyForecast={forecast.hourly}
          />
          <ForecastCard dailyForecast={forecast.daily} />
        </>
      ) : (
        <Loader loaderText="Fetching Weather..." />
      )}
    </>
  );
};

export default WeatherPage;
