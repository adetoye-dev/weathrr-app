import PostCard from "../components/posts/PostCard";
import MasonryLayout from "./layouts/MasonryLayout";
import server from "../apis/server";
import { useQuery } from "@tanstack/react-query";

const BookmarkPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: () => server.get("/bookmarks/user").then((res) => res.data),
  });

  console.log(data);

  return (
    <>
      {isLoading ? (
        "Fetching saved posts..."
      ) : error ? (
        <p>
          Unable to fetch saved posts, Kindly check your connection and retry!
        </p>
      ) : data && data.length === 0 ? (
        <div className="bookmarks" style={{ textAlign: "center" }}>
          <h3>No saved posts.</h3>
        </div>
      ) : (
        <MasonryLayout>
          {data.map((item, index) => {
            return <PostCard key={index} postData={item} />;
          })}
        </MasonryLayout>
      )}
    </>
  );
};

export default BookmarkPage;
