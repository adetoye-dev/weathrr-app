import Masonry from "react-masonry-css";
import PostCard from "./PostCard";

const Posts = ({ isLoading, error, data }) => {
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
  };

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
      ) : data && data.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No posts Yet</h3>
      ) : (
        data &&
        data.map((item, index) => {
          return <PostCard key={index} postData={item} />;
        })
      )}
    </Masonry>
  );
};

export default Posts;
