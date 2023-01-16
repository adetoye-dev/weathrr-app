import PostCard from "../posts/PostCard";
import Masonry from "react-masonry-css";

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
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic4.png"
        />
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic2.png"
        />
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic1.png"
        />
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic5.png"
        />
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic3.png"
        />
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic5.png"
        />
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic6.png"
        />
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic7.png"
        />
        <PostCard
          title="Sit aliquam at dui leo."
          userName="Lorem Ipsum"
          temp="15°"
          location="New York"
          postImage="pic8.png"
        />
      </Masonry>
    </>
  );
};

export default HomePage;
