import Masonry from "react-masonry-css";
import PostCard from "./PostCard";
import server from "../../apis/server";
import { useQuery } from "@tanstack/react-query";

const Posts = ({ userId, pathName }) => {
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      if (pathName && pathName === "/bookmarks")
        return server.get("/bookmarks/user").then((res) => res.data);
      if (userId) return server.get(`/posts/${userId}`).then((res) => res.data);
      return server.get("/posts").then((res) => res.data);
    },
  });

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {isLoading ? (
        "Fetching posts..."
      ) : error ? (
        <p>Unable to fetch posts, Kindly check your connection and retry!</p>
      ) : data.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No posts Yet</h3>
      ) : (
        data.map((item, index) => {
          return <PostCard key={index} postData={item} />;
        })
      )}
    </Masonry>
  );
};

export default Posts;
