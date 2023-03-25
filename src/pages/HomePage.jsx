import Posts from "../components/posts/Posts";
import SearchBar from "../components/search/PostSearch";
import FilterBox from "../components/search/FilterPosts";
import WeatherDesc from "../components/weather/WeatherDesc";
import { useWeatherData } from "../contexts/WeatherContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import server from "../apis/server";
import "./HomePage.css";
import { useEffect } from "react";

const HomePage = () => {
  const { weatherData } = useWeatherData();

  const queryClient = useQueryClient();

  const city = weatherData?.name;

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return server
        .post("posts/recommend", {
          weather: "",
          location: weatherData.name,
          country: weatherData.sys.country,
        })
        .then((res) => res.data);
    },
    enabled: !!city,
  });

  const mutation = useMutation({
    mutationFn: async () => {
      return server
        .post("posts/recommend", {
          weather: "",
          location: weatherData.name,
          country: weatherData.sys.country,
        })
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["posts"], data);
    },
  });

  useEffect(() => {
    if (weatherData.name) {
      mutation.mutate();
    }
  }, [weatherData]);

  return (
    <>
      <WeatherDesc />
      <div className="search-container">
        <SearchBar />
        <FilterBox />
      </div>
      <Posts isLoading={isLoading} error={error} data={data} />
    </>
  );
};

export default HomePage;
