import PostCard from "../components/posts/PostCard";
import MasonryLayout from "./layouts/MasonryLayout";
import server from "../apis/server";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/search/PostSearch";
import FilterBox from "../components/search/FilterPosts";
import "./HomePage.css";

const HomePage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => server.get("/posts").then((res) => res.data),
  });

  console.log(data);

  return (
    <>
      <div className="search-container">
        <SearchBar />
        <FilterBox />
      </div>
      <MasonryLayout>
        {isLoading ? (
          "Fetching posts..."
        ) : error ? (
          <p>Unable to fetch posts, Kindly check your connection and retry!</p>
        ) : (
          data.map((item, index) => {
            return <PostCard key={index} postData={item} />;
          })
        )}
      </MasonryLayout>
    </>
  );
};

export default HomePage;
