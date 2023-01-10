import axios from "axios";

//function to get user's city
const fetchUserCity = async () => {
  const response = await axios.get("https://ipapi.co/json");
  return response.data;
};

export default fetchUserCity;
