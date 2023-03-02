import PostCard from "../components/posts/PostCard";
import MasonryLayout from "./layouts/MasonryLayout";
import postData from "../../data.json";
import server from "../apis/server";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => server.get("/posts").then((res) => res.data),
  });

  console.log(data);

  return (
    <MasonryLayout>
      {isLoading
        ? "Fetching posts..."
        : data.map((item, index) => {
            return <PostCard key={index} postData={item} />;
          })}
    </MasonryLayout>
  );
};

export default HomePage;
