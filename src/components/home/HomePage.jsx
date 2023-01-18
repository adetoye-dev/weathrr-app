import PostCard from "../posts/PostCard";
import Masonry from "react-masonry-css";
import data from "../../../data.json";

const HomePage = () => {
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => {
          return (
            <PostCard
              title={item.title}
              userName={item.userName}
              temp={item.temp}
              location={item.location}
              postImage={item.postImage}
              postDesc={item.postDesc}
            />
          );
        })}
      </Masonry>
    </>
  );
};

export default HomePage;
