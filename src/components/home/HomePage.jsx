import PostCard from "../posts/PostCard";
import Masonry from "react-masonry-css";

const HomePage = () => {
  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <PostCard title="Between flexbox, css columns, css grid we settled on plain ol' div's and a dab of flexbox that allows for fluid responsive layouts by default but most importantly is true to Reacts rendering lifecycle." />
        <PostCard />
        <PostCard title="react-masonry-css Is a React Component with a simple interface to order items into the desired columns at specified breakpoints. With minimal CSS this leads to a quick, reliable solution that also has great browser support along with rendering performance." />
        <PostCard />
        <PostCard title="also has great browser support along with rendering performance." />
        <PostCard />
        <PostCard title="react-masonry-css Is a React Component with a simple interface to order items into the desired columns at specified breakpoints. With minimal CSS this leads to a quick, reliable solution that also has great browser support along with rendering performance." />
        <PostCard />
        <PostCard />
      </Masonry>
    </>
  );
};

export default HomePage;
