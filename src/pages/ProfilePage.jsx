import ProfileCard from "../components/profile/ProfileCard";
import "./ProfilePage.css";
import MasonryLayout from "./layouts/MasonryLayout";
import PostCard from "../components/posts/PostCard";
import data from "../../data.json";
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
            return <PostCard key={index} postData={item} />;
          })}
        </MasonryLayout>
      </div>
    </>
  );
};

export default ProfilePage;
