import axios from "axios";

const waqi = axios.create({
  baseURL: "https://api.waqi.info/feed",
  params: {
    token: import.meta.env.VITE_WAQI_API_KEY,
  },
});

//function to load air quality
const loadAirQuality = async (lat, lon) => {
  const response = await waqi.get(`/geo:${lat};${lon}`);
  return response.data.data;
};

export default loadAirQuality;
