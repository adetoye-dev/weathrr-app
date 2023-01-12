import axios from "axios";

const openweathermap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    APPID: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
});

//function to load current weather
const loadWeather = async (location) => {
  let error = false;
  let errorMsg = "";

  const response = await openweathermap
    .get("/weather", {
      params: {
        q: location,
      },
    })
    .catch((e) => {
      return (error = true), (errorMsg = e.response.data.message);
    });
  return { response: response.data, error: error, errorMsg: errorMsg };
};

//function to load weather forecast
const loadForecast = async (lat, lon) => {
  const response = await openweathermap.get("/onecall", {
    params: {
      lat: lat,
      lon: lon,
    },
  });
  return response.data;
};

const weatherApi = {
  loadWeather,
  loadForecast,
};

export default weatherApi;
