import ProfileCard from "./ProfileCard";
import "./ProfilePage.css";
import MasonryLayout from "../layouts/MasonryLayout";
import PostCard from "../posts/PostCard";
import data from "../../../data.json";

const ProfilePage = () => {
  return (
    <>
      <ProfileCard />
      <div className="user-posts">
        <div className="posts-title">Posts</div>
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
      </div>
    </>
  );
};

export default ProfilePage;
