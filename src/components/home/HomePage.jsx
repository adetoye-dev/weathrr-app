import PostCard from "../posts/PostCard";
import MasonryLayout from "../layouts/MasonryLayout";
import data from "../../../data.json";

const HomePage = () => {
  return (
    <>
      <MasonryLayout>
        {data.map((item, index) => {
          return <PostCard key={index} postData={item} />;
        })}
      </MasonryLayout>
    </>
  );
};

export default HomePage;
