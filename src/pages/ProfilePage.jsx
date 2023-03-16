import { useState, useEffect } from "react";
import ProfileCard from "../components/profile/ProfileCard";
import "./ProfilePage.css";
import MasonryLayout from "./layouts/MasonryLayout";
import server from "../apis/server";
import { useQuery } from "@tanstack/react-query";
import PostCard from "../components/posts/PostCard";
import data from "../../data.json";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { state } = useLocation();
  console.log({ state: state });
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState();
  console.log(state);
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      server.get(`/users/${state.userId}`).then((res) => {
        setUser(res.data[0]);
        return res.data;
      }),
  });

  useEffect(() => {
    const fetchUserPosts = async () => {
      const posts = await server
        .get(`/posts/${user.id}`)
        .then((res) => res.data);
      setPosts(posts);
    };
    if (user) {
      fetchUserPosts();
    }
  }, [user]);

  console.log(data, user);
  return (
    <>
      {user && <ProfileCard user={user} />}
      <div className="user-posts">
        <div className="posts-title">Posts</div>
        {posts && posts.length ? (
          <MasonryLayout>
            {posts.map((item, index) => {
              return <PostCard key={index} postData={item} />;
            })}
          </MasonryLayout>
        ) : (
          "No posts yet"
        )}
      </div>
    </>
  );
};

export default ProfilePage;
