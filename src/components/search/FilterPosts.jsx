import "./FilterPosts.css";
import server from "../../apis/server";
import { useWeatherData } from "../../contexts/WeatherContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const FilterBox = () => {
  const { weatherData } = useWeatherData();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (filter) => {
      switch (filter) {
        case "all":
          return server.get(`/posts`).then((res) => res.data);
        case "recommend":
          return server
            .post("posts/recommend", {
              weather: "",
              location: weatherData.name,
              country: weatherData.sys.country,
            })
            .then((res) => res.data);
        case "nearby":
          return server
            .post("posts/region", {
              country: weatherData.sys.country,
            })
            .then((res) => res.data);
        case "following":
          return server.get(`/posts/following`).then((res) => res.data);
        default:
          throw new Error(`Invalid filter "${filter}"`);
      }
    },
    onSuccess: (data) => {
      // Update posts with mutation data
      queryClient.setQueryData(["posts"], data);
    },
  });

  const handleChange = (filter) => {
    mutation.mutate(filter);
  };

  return (
    <select
      name="filter"
      onChange={(e) => handleChange(e.target.value)}
      className="filter-box"
      defaultValue="recommend"
    >
      <option value="recommend">For You</option>
      <option value="nearby">Nearby</option>
      <option value="following">Following</option>
      <option value="all">All Posts</option>
    </select>
  );
};

export default FilterBox;
