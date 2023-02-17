import ProfileCard from "./ProfileCard";
import "./ProfilePage.css";
import MasonryLayout from "../layouts/MasonryLayout";
import PostCard from "../posts/PostCard";
import data from "../../../data.json";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { state } = useLocation();
  return (
    <>
      <ProfileCard />
      <div className="user-posts">
        <div className="posts-title">Posts</div>
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
              />
            );
          })}
        </MasonryLayout>
      </div>
    </>
  );
};

export default ProfilePage;
