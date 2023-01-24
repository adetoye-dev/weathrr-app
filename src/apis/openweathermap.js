import axios from "axios";

const openweathermap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    APPID: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
});

export default openweathermap;
