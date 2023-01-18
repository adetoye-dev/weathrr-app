import Masonry from "react-masonry-css";

const MasonryLayout = ({ children }) => {
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
      {children}
    </Masonry>
  );
};

export default MasonryLayout;
