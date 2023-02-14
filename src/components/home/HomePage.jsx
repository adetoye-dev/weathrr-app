import PostCard from "../posts/PostCard";
import MasonryLayout from "../layouts/MasonryLayout";
import data from "../../../data.json";

const HomePage = () => {
  return (
    <>
      <MasonryLayout>
        {data.map((item, index) => {
          return (
            <PostCard
              key={index}
              title={item.title}
              userName={item.userName}
              temp={item.temp}
              location={item.location}
              postImage={item.postImage}
              postDesc={item.postDesc}
              favorite={item.favorite}
            />
          );
        })}
      </MasonryLayout>
    </>
  );
};

export default HomePage;
