import React, { useContext, useState, useMemo } from "react";

const weatherContext = React.createContext();

export const useWeatherData = () => {
  return useContext(weatherContext);
};

const WeatherContext = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  const contextValues = useMemo(
    () => [weatherData, setWeatherData],
    [weatherData]
  );

  return (
    <weatherContext.Provider value={contextValues}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherContext;
