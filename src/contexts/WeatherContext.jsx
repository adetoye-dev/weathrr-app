import React, { useContext, useState, useMemo, useEffect } from "react";
import fetchUserCity from "../apis/ipapi";
import openweathermap from "../apis/openweathermap";

const weatherContext = React.createContext();

export const useWeatherData = () => {
  return useContext(weatherContext);
};

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [weatherFetchError, setError] = useState(null);

  //function to load current all weather data
  const getWeatherData = async (city) => {
    setError(null);
    try {
      const response = await openweathermap.get("/weather", {
        params: {
          q: city,
        },
      });
      setWeatherData(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    //get user's city with ipapi and fetch weather data with city value
    const getCity = async () => {
      const cityData = await fetchUserCity();
      getWeatherData(cityData.city);
    };
    getCity();
  }, []);

  const contextValues = useMemo(
    () => ({ weatherData, getWeatherData, weatherFetchError }),
    [weatherData, weatherFetchError]
  );

  return (
    <weatherContext.Provider value={contextValues}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherContextProvider;
