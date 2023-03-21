import { useEffect } from "react";
import ProfileCard from "../components/profile/ProfileCard";
import "./ProfilePage.css";
import MasonryLayout from "./layouts/MasonryLayout";
import server from "../apis/server";
import { useMutation } from "@tanstack/react-query";
import PostCard from "../components/posts/PostCard";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { state } = useLocation();

  const userMutation = useMutation({
    mutationFn: () =>
      server.get(`/users/${state.userId}`).then((res) => {
        return res.data[0];
      }),
  });

  const postMutation = useMutation({
    mutationFn: () =>
      server.get(`/posts/${state.userId}`).then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    userMutation.mutate();
    postMutation.mutate();
  }, [state.userId]);

  return (
    <>
      {userMutation.isLoading ? (
        "Loading profile"
      ) : userMutation.isError ? (
        <p>Unable to fetch user, Kindly check your connection and retry!</p>
      ) : (
        <>
          {userMutation.data && <ProfileCard user={userMutation.data} />}
          <div className="user-posts">
            <div className="posts-title">Posts</div>
            {postMutation.isLoading ? (
              "Loading posts"
            ) : postMutation.data && postMutation.data.length ? (
              <MasonryLayout>
                {postMutation.data.map((item, index) => {
                  return <PostCard key={index} postData={item} />;
                })}
              </MasonryLayout>
            ) : (
              "No posts yet"
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePage;
