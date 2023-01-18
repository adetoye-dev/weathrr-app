import PostCard from "../posts/PostCard";
import MasonryLayout from "../layouts/MasonryLayout";
import data from "../../../data.json";

const HomePage = () => {
  return (
    <>
      <MasonryLayout>
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
      </MasonryLayout>
    </>
  );
};

export default HomePage;
